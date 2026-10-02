import type { FaqItem } from '@/data/faq'
import { priceAnchors } from '@/data/pricing'
import { serviceAreas, site } from '@/data/site'

/** Builders for the schema.org JSON-LD blocks rendered into each page's head. */

export const businessId = `${site.url}/#business`

export const pageUrl = (path: string) =>
  path === '/' ? `${site.url}/` : `${site.url}${path.replace(/\/+$/, '')}`

const geoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: site.geo.latitude,
  longitude: site.geo.longitude,
}

const areaServed = [
  ...serviceAreas,
  {
    '@type': 'GeoCircle',
    geoMidpoint: geoCoordinates,
    geoRadius: site.serviceRadiusKm * 1000,
  },
]

export const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: 'hr',
      publisher: { '@id': businessId },
    },
    {
      '@type': 'MovingCompany',
      '@id': businessId,
      name: site.name,
      description: site.description,
      url: `${site.url}/`,
      logo: `${site.url}/favicon.png`,
      image: `${site.url}/og-image.png`,
      telephone: site.phoneE164,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.street,
        postalCode: site.postalCode,
        addressLocality: site.locality,
        addressCountry: 'HR',
      },
      geo: geoCoordinates,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      areaServed,
      paymentAccepted: 'Cash, Bank transfer',
      currenciesAccepted: 'EUR',
      priceRange: '€€',
      makesOffer: priceAnchors.map((anchor) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: anchor.title,
          description: anchor.description,
          url: pageUrl(anchor.path),
        },
        priceSpecification: {
          '@type': anchor.unitCode ? 'UnitPriceSpecification' : 'PriceSpecification',
          minPrice: anchor.from,
          priceCurrency: 'EUR',
          ...(anchor.unitCode && { unitCode: anchor.unitCode }),
        },
      })),
    },
  ],
}

export const serviceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(path)}#service`,
  name,
  description,
  url: pageUrl(path),
  provider: { '@id': businessId },
  areaServed,
})

export const breadcrumbSchema = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: `${site.url}/` },
    { '@type': 'ListItem', position: 2, name, item: pageUrl(path) },
  ],
})

export const faqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
})

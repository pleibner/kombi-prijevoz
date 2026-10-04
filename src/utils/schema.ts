import type { FaqItem } from '@/data/faq'
import { crewRates, priceAnchors } from '@/data/pricing'
import type { ServicePage } from '@/data/services'
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

const everyDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

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
      description: `${site.description} Imamo ${site.fleet} s ${site.cargoVolume} tovarnog prostora.`,
      url: `${site.url}/`,
      logo: `${site.url}/favicon.png`,
      image: `${site.url}/og-image.png`,
      telephone: site.phoneE164,
      email: site.email,
      foundingDate: site.foundingDate,
      sameAs: [site.facebookHref, site.googleEntityUrl],
      hasMap: site.googleProfileHref,
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
        dayOfWeek: everyDay,
        ...site.openingHours,
      },
      // Urgent jobs are taken around the clock, holidays included.
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'hitni prijevoz i selidbe',
        telephone: site.phoneE164,
        availableLanguage: 'hr',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: everyDay,
          opens: '00:00',
          closes: '23:59',
        },
      },
      areaServed,
      paymentAccepted: 'Cash, Bank transfer',
      currenciesAccepted: 'EUR',
      priceRange: '€€',
      makesOffer: [
        ...priceAnchors.map((anchor) => ({
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
            valueAddedTaxIncluded: false,
            ...(anchor.unitCode && { unitCode: anchor.unitCode }),
          },
        })),
        ...crewRates.map((crew) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Selidba: kombi i ${crew.workers} radnika`,
            url: pageUrl('/kombi-selidbe'),
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: crew.perHour,
            priceCurrency: 'EUR',
            valueAddedTaxIncluded: false,
            unitCode: 'HUR',
          },
        })),
      ],
    },
  ],
}

export const serviceSchema = ({ name, summary, path, price }: ServicePage) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(path)}#service`,
  name,
  description: summary,
  url: pageUrl(path),
  provider: { '@id': businessId },
  areaServed,
  ...(price && {
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': price.unitCode ? 'UnitPriceSpecification' : 'PriceSpecification',
        [price.isMinimum ? 'minPrice' : 'price']: price.amount,
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
        ...(price.unitCode && { unitCode: price.unitCode }),
      },
    },
  }),
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

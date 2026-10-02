// Imported by vite.config.ts at build time, so only relative imports (no "@/" alias).
import { faqItems } from '../data/faq'
import { extraPrices, formatAnchorPrice, priceAnchors } from '../data/pricing'
import { servicePages } from '../data/services'
import { serviceAreas, site } from '../data/site'

const absolute = (path: string) => `${site.url}${path}`

/** llms.txt (https://llmstxt.org): a plain-markdown summary of the business for AI assistants. */
export function buildLlmsTxt() {
  return [
    `# ${site.name}`,
    '',
    `> ${site.description} Radimo ${site.hoursShort}, uključujući praznike. Više od ${site.yearsExperience} godina iskustva.`,
    '',
    `- Telefon: ${site.phoneDisplay} (${site.phoneE164})`,
    `- Adresa: ${site.street}, ${site.city}`,
    `- Radno vrijeme: ${site.hours}`,
    `- Područje rada: ${serviceAreas.join(', ')}; najčešće do ${site.serviceRadiusKm} km od Zagreba, po dogovoru cijela Hrvatska`,
    `- Upit i besplatna procjena: ${absolute('/kontakt')}`,
    `- Lokacija i karta: ${absolute('/kako-do-nas')}`,
    '',
    '## Cijene',
    '',
    ...priceAnchors.map(
      (anchor) => `- ${anchor.title}: ${formatAnchorPrice(anchor)}. ${anchor.description}`,
    ),
    ...extraPrices.map((item) => `- ${item.title}: ${item.price}. ${item.description}`),
    `- Cijeli cjenik: ${absolute('/cjenik')}`,
    '',
    '## Usluge',
    '',
    ...servicePages.map((page) => `- [${page.name}](${absolute(page.path)}): ${page.description}`),
    '',
    '## Česta pitanja',
    '',
    ...faqItems.flatMap((item) => [`### ${item.question}`, '', item.answer, '']),
  ].join('\n')
}

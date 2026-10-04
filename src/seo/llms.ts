// Imported by vite.config.ts at build time, so only relative imports (no "@/" alias).
import { faqItems } from '../data/faq'
import { priceList } from '../data/pricing'
import { servicePages } from '../data/services'
import { serviceAreas, site } from '../data/site'

const absolute = (path: string) => `${site.url}${path}`
const [foundedYear, foundedMonth, foundedDay] = site.foundingDate.split('-').map(Number)

/** llms.txt (https://llmstxt.org): a plain-markdown summary of the business for AI assistants. */
export function buildLlmsTxt() {
  return [
    `# ${site.name}`,
    '',
    `> ${site.description} Radimo ${site.hoursShort}, a hitne prijevoze i selidbe 0–24, i praznicima, bez nadoplate. Više od ${site.yearsExperience} godina iskustva.`,
    '',
    `- Telefon: ${site.phoneDisplay} (${site.phoneE164})`,
    `- E-mail: ${site.email}`,
    `- Adresa: ${site.street}, ${site.city}`,
    `- Radno vrijeme: ${site.hours}`,
    '- Hitno: u Zagrebu stižemo u roku od sat vremena ako imamo slobodan kombi',
    `- Vozila: ${site.fleet}, ${site.cargoVolume} tovarnog prostora`,
    '- Centar grada: imamo dozvolu za ulaz u pješačku zonu',
    `- Područje rada: ${serviceAreas.join(', ')}; najčešće do ${site.serviceRadiusKm} km od Zagreba, po dogovoru cijela Hrvatska`,
    `- Upit i besplatna procjena: ${absolute('/kontakt')}`,
    `- Lokacija i karta: ${absolute('/kako-do-nas')}`,
    `- Osnovano: ${foundedDay}. ${foundedMonth}. ${foundedYear}.`,
    `- Facebook: ${site.facebookHref}`,
    `- Google profil: ${site.googleProfileHref}`,
    '',
    '## Cijene',
    '',
    '- Sve cijene su bez PDV-a (25 %); PDV se dodaje na račun.',
    ...priceList.map(
      (item) =>
        `- ${item.title}: ${item.price}${item.priceWithVat ? ` (${item.priceWithVat})` : ''}. ${item.description}`,
    ),
    `- Cijeli cjenik: ${absolute('/cjenik')}`,
    '',
    '## Usluge',
    '',
    ...servicePages.map((page) => `- [${page.name}](${absolute(page.path)}): ${page.summary}`),
    '',
    '## Česta pitanja',
    '',
    ...faqItems.flatMap((item) => [`### ${item.question}`, '', item.answer, '']),
  ].join('\n')
}

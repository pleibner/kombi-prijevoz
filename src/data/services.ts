import type { FaqItem } from './faq'
import {
  bedOrWardrobeRemoval,
  bulkyWastePerExtraM3,
  crewRates,
  crewRatesText,
  extraWorkerText,
  formatAnchorPrice,
  formatNetPrice,
  formatPriceRange,
  pricePerKmOutsideZagreb,
  prices,
  rubblePerBag,
  storeDeliveryFrom,
} from './pricing'
import { site } from './site'

/**
 * Service pages rendered with ServiceLayout. The layout looks the current route up here to set
 * the heading, head tags and structured data, and to render the opening summary, the key facts
 * and the FAQ, so each view only holds its longer copy. Every fact here is owner-confirmed.
 */
export interface ServiceFact {
  label: string
  value: string
}

export interface ServicePrice {
  amount: number
  /** UN/CEFACT unit code used in structured data: HUR (hour) or BG (bag). */
  unitCode?: string
  /** True for "od …" (starting from) prices. */
  isMinimum: boolean
}

export interface ServicePage {
  path: string
  /** Page heading and the service name used in structured data. */
  name: string
  /** Document title; the brand name is appended automatically. */
  title: string
  description: string
  /** Opening paragraph: what, where, how much and how fast. */
  summary: string
  /** Shown in the "Ukratko" box. */
  facts: ServiceFact[]
  faq: FaqItem[]
  price?: ServicePrice
}

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

const vanRate = formatAnchorPrice(prices.vanWithDriver)
const moveRate = formatAnchorPrice(prices.move)
const storeDelivery = `od ${formatNetPrice(storeDeliveryFrom)}`
const bulkyWaste = formatAnchorPrice(prices.bulkyWaste)
const extraM3 = formatNetPrice(bulkyWastePerExtraM3)
const bedOrWardrobe = formatPriceRange(bedOrWardrobeRemoval)
const rubble = `od ${formatNetPrice(rubblePerBag, 'po vreći')}`
const perKm = formatNetPrice(pricePerKmOutsideZagreb, 'po km')

const hourlyPrice: ServicePrice = {
  amount: prices.vanWithDriver.from,
  unitCode: prices.vanWithDriver.unitCode,
  isMinimum: true,
}
const movePrice: ServicePrice = {
  amount: prices.move.from,
  unitCode: prices.move.unitCode,
  isMinimum: true,
}
const storeDeliveryPrice: ServicePrice = { amount: storeDeliveryFrom, isMinimum: true }
const bulkyWastePrice: ServicePrice = { amount: prices.bulkyWaste.from, isMinimum: true }

const facts = {
  vanRate: {
    label: 'Cijena',
    value: `Kombi s vozačem ${vanRate}, minimalno 1 sat, bez naplate dolaska`,
  },
  extraWorker: { label: 'Dodatni radnik', value: extraWorkerText },
  crews: { label: 'Ekipa po satu', value: capitalize(crewRatesText) },
  storeDelivery: { label: 'Cijena', value: `Dostava iz trgovine ${storeDelivery}` },
  bedOrWardrobe: { label: 'Krevet ili ormar', value: `${bedOrWardrobe}, ovisno o težini i katu` },
  hours: { label: 'Radno vrijeme', value: site.hours },
  urgent: {
    label: 'Hitno',
    value: 'U Zagrebu stižemo u roku od sat vremena ako imamo slobodan kombi, 0–24 i bez nadoplate',
  },
  fleet: { label: 'Vozila', value: `${site.fleet}, ${site.cargoVolume} tovarnog prostora` },
  area: {
    label: 'Područje',
    value: `Zagreb i do ${site.serviceRadiusKm} km od grada; izvan Zagreba ${perKm}`,
  },
  permit: { label: 'Centar grada', value: 'Imamo dozvolu za ulaz u pješačku zonu' },
  recycling: { label: 'Zbrinjavanje', value: 'Sve odvozimo u reciklažno dvorište' },
  payment: { label: 'Plaćanje', value: 'Gotovina ili internet bankarstvo, R1 račun na zahtjev' },
  quote: { label: 'Procjena', value: 'Besplatna i neobvezujuća' },
  businesses: { label: 'Tvrtke', value: 'Pojedinačne dostave ili mjesečni dogovor' },
} satisfies Record<string, ServiceFact>

export const servicePages: ServicePage[] = [
  {
    path: '/kombi-prijevoz',
    name: 'Kombi prijevoz',
    title: 'Kombi prijevoz - Brzi i siguran transport Zagreb',
    description: `Kombi prijevoz robe u Zagrebu i okolici: kombi s vozačem ${vanRate}, minimalno 1 sat, bez naplate dolaska. Svaki dan 08–20 h, hitno 0–24 h.`,
    summary: `Kombi prijevoz robe po Zagrebu i okolici stoji ${vanRate} za kombi s vozačem koji pomaže pri utovaru i istovaru, uz minimalno 1 sat i bez naplate dolaska. Imamo ${site.fleet} s ${site.cargoVolume} tovarnog prostora. Radimo svaki dan od 8 do 20 h, a hitne prijevoze obavljamo 0–24.`,
    facts: [facts.vanRate, facts.extraWorker, facts.fleet, facts.area, facts.hours],
    faq: [
      {
        question: 'Koliko košta kombi prijevoz u Zagrebu?',
        answer: `Kombi s vozačem stoji ${vanRate}, uz minimalno 1 sat. Dolazak ne naplaćujemo, a gorivo po Zagrebu je uključeno. Dodatni radnik stoji ${extraWorkerText}.`,
      },
      {
        question: 'Koliko stane u vaš kombi?',
        answer: `Naši kombiji imaju ${site.cargoVolume} tovarnog prostora. To je obično dovoljno za garsonijeru ili jednosobni stan u jednoj vožnji.`,
      },
      {
        question: 'Kako naplaćujete prijevoz izvan Zagreba?',
        answer: `Vožnju izvan Zagreba naplaćujemo ${perKm}, a utovar i istovar po satnoj cijeni. Najčešće vozimo do ${site.serviceRadiusKm} km od Zagreba, a po dogovoru po cijeloj Hrvatskoj.`,
      },
    ],
    price: hourlyPrice,
  },
  {
    path: '/kombi-prijevoz-zagreb',
    name: 'Kombi prijevoz Zagreb',
    title: 'Kombi prijevoz Zagreb - Lokalni transport',
    description: `Kombi prijevoz unutar Zagreba ${vanRate}, bez naplate dolaska. Imamo dozvolu za ulaz u pješačku zonu, a hitno stižemo u roku od sat vremena.`,
    summary: `Kombi prijevoz unutar Zagreba stoji ${vanRate}, uz minimalno 1 sat i bez naplate dolaska. Imamo dozvolu za ulaz u pješačku zonu, pa dolazimo i do adresa u samom centru grada, a za hitne prijevoze stižemo u roku od sat vremena ako imamo slobodan kombi.`,
    facts: [facts.vanRate, facts.permit, facts.urgent, facts.hours, facts.fleet],
    faq: [
      {
        question: 'Možete li doći do adrese u pješačkoj zoni?',
        answer:
          'Da. Imamo dozvolu za ulaz u pješačku zonu, pa kombijem dolazimo i do adresa u samom centru Zagreba.',
      },
      {
        question: 'Koliko brzo stižete na adresu u Zagrebu?',
        answer:
          'Za hitne prijevoze stižemo u roku od sat vremena ako imamo slobodan kombi. Hitne prijevoze obavljamo 0–24, i praznicima, bez nadoplate.',
      },
      {
        question: 'Naplaćujete li dolazak?',
        answer: `Ne. Plaćate samo vrijeme rada: kombi s vozačem ${vanRate}, uz minimalno 1 sat.`,
      },
    ],
    price: hourlyPrice,
  },
  {
    path: '/kombi-selidbe',
    name: 'Kombi selidbe',
    title: 'Kombi selidbe - Profesionalne usluge selidbe Zagreb',
    description: `Kombi selidbe u Zagrebu po satu: ${crewRatesText}. Rastavljanje i sastavljanje namještaja i pakiranje.`,
    summary: `Selidbe u Zagrebu naplaćujemo po satu, prema veličini ekipe: ${crewRatesText}. U cijenu ulaze kombi, radnici, nošenje i prijevoz, a po želji rastavljamo i sastavljamo namještaj te pakiramo stvari.`,
    facts: [
      facts.crews,
      { label: 'Usluge', value: 'Rastavljanje i sastavljanje namještaja, pakiranje' },
      facts.quote,
      facts.hours,
    ],
    faq: [
      {
        question: 'Koliko košta selidba u Zagrebu?',
        answer: `Selidbe naplaćujemo po satu, prema veličini ekipe: ${crewRatesText}. Konačnu cijenu potvrđujemo prije termina, prema količini stvari, katu i liftu.`,
      },
      {
        question: 'Rastavljate li i sastavljate namještaj?',
        answer:
          'Da. Namještaj rastavimo prije utovara i sastavimo na novoj adresi, a po želji zapakiramo i vaše stvari.',
      },
      {
        question: 'Selite li vikendom i praznicima?',
        answer:
          'Da. Radimo svaki dan od 8 do 20 h, uključujući vikende i praznike, a hitne selidbe obavljamo 0–24, bez nadoplate.',
      },
    ],
    price: movePrice,
  },
  {
    path: '/kombi-dostava',
    name: 'Kombi dostava',
    title: 'Kombi dostava - Brza dostava paketa Zagreb',
    description: `Kombi dostava po Zagrebu ${vanRate}, bez naplate dolaska. Dozvola za ulaz u pješačku zonu, dostave svaki dan 08–20 h i hitno 0–24 h.`,
    summary: `Kombi dostavu po Zagrebu naplaćujemo ${vanRate}, uz minimalno 1 sat i bez naplate dolaska. Imamo dozvolu za ulaz u pješačku zonu, pa dostavljamo i u sam centar grada, a hitne dostave obavljamo 0–24.`,
    facts: [facts.vanRate, facts.permit, facts.businesses, facts.hours, facts.urgent],
    faq: [
      {
        question: 'Koliko košta dostava kombijem po Zagrebu?',
        answer: `Dostavu naplaćujemo po satu: kombi s vozačem stoji ${vanRate}, uz minimalno 1 sat i bez naplate dolaska.`,
      },
      {
        question: 'Možete li dostaviti još danas?',
        answer:
          'Za hitne dostave u Zagrebu stižemo u roku od sat vremena ako imamo slobodan kombi, 0–24 i bez nadoplate.',
      },
      {
        question: 'Nudite li redovne dostave za tvrtke?',
        answer:
          'Da. Tvrtkama nudimo pojedinačne dostave ili mjesečni dogovor s rasporedom dostava i mjesečnim obračunom.',
      },
    ],
    price: hourlyPrice,
  },
  {
    path: '/povoljan-kombi-prijevoz',
    name: 'Povoljan kombi prijevoz',
    title: 'Povoljan kombi prijevoz - Jeftini transport Zagreb',
    description: `Povoljan kombi prijevoz u Zagrebu: ${vanRate}, minimalno 1 sat, bez naplate dolaska i bez noćne ili blagdanske nadoplate. Procjena je besplatna.`,
    summary: `Kombi s vozačem stoji ${vanRate}, a plaćate samo vrijeme rada: minimalno 1 sat, bez naplate dolaska i bez nadoplate za hitne, noćne i blagdanske termine. Dodatni radnik stoji ${extraWorkerText}, izvan Zagreba naplaćujemo ${perKm}, a procjena je besplatna.`,
    facts: [
      facts.vanRate,
      { label: 'Noću i praznicima', value: 'Bez nadoplate' },
      facts.extraWorker,
      facts.area,
      facts.quote,
    ],
    faq: [
      {
        question: 'Zašto je vaš kombi prijevoz povoljan?',
        answer: `Ne naplaćujemo dolazak ni noćne i blagdanske termine, a minimalno naplaćujemo samo 1 sat. Cijenu znate unaprijed: kombi s vozačem ${vanRate}.`,
      },
      {
        question: 'Ima li skrivenih troškova?',
        answer:
          'Nema. Konačnu cijenu potvrđujemo prije termina, prema udaljenosti, količini stvari, katu i liftu te hitnosti.',
      },
    ],
    price: hourlyPrice,
  },
  {
    path: '/specijalni-prijevoz',
    name: 'Specijalni prijevoz',
    title: 'Specijalni prijevoz - Transport posebnih tereta',
    description:
      'Specijalni prijevoz u Zagrebu: klaviri i glomazni predmeti koji ne prolaze stubištem, uz podizanje dizalicom kroz prozor. Cijena po ponudi, procjena je besplatna.',
    summary:
      'Prevozimo klavire i glomazne predmete koji ne prolaze stubištem ili kroz vrata, a po potrebi ih podižemo i spuštamo dizalicom kroz prozor. Prevozili smo i klavire poznatih hrvatskih glazbenika. Cijenu dajemo po ponudi, nakon besplatne procjene.',
    facts: [
      {
        label: 'Klaviri',
        value: 'Prevozimo klavire, među ostalima i za poznate hrvatske glazbenike',
      },
      { label: 'Dizalica', value: 'Podizanje i spuštanje predmeta kroz prozor' },
      { label: 'Cijena', value: 'Po ponudi, procjena je besplatna' },
      facts.fleet,
      facts.hours,
    ],
    faq: [
      {
        question: 'Prevozite li klavire?',
        answer:
          'Da. Prevozimo klavire, među ostalima i za poznate hrvatske glazbenike. Cijenu dajemo po ponudi, ovisno o klaviru, katu i pristupu.',
      },
      {
        question: 'Možete li unijeti namještaj kroz prozor?',
        answer:
          'Da. Kada predmet ne prolazi stubištem ili kroz vrata, podižemo ga dizalicom kroz prozor.',
      },
      {
        question: 'Koliko košta specijalni prijevoz?',
        answer:
          'Cijena ovisi o predmetu, katu i potrebi za dizalicom, pa je dajemo po ponudi. Procjena je besplatna.',
      },
    ],
  },
  {
    path: '/selidbe-stanova-i-kuca',
    name: 'Selidbe stanova i kuća',
    title: 'Selidbe stanova i kuća u Zagrebu',
    description: `Selidba stana ili kuće u Zagrebu po satu: ${crewRatesText}. Po želji pakiramo stvari te rastavljamo i sastavljamo namještaj.`,
    summary: `Selidbu stana ili kuće u Zagrebu naplaćujemo po satu, prema veličini ekipe: ${crewRatesText}. Po želji zapakiramo stvari te rastavimo i sastavimo namještaj, a selimo svaki dan od 8 do 20 h.`,
    facts: [
      facts.crews,
      { label: 'Pakiranje', value: 'Po želji pakiramo vaše stvari' },
      { label: 'Namještaj', value: 'Rastavljanje i sastavljanje' },
      facts.quote,
      facts.hours,
    ],
    faq: [
      {
        question: 'Pakirate li stvari za selidbu?',
        answer:
          'Da. Po želji zapakiramo vaše stvari, a namještaj rastavimo prije utovara i sastavimo na novoj adresi.',
      },
      {
        question: 'Koliko košta selidba stana ili kuće?',
        answer: `Selidbu stana ili kuće naplaćujemo po satu, prema veličini ekipe: ${crewRatesText}. Točnu cijenu potvrđujemo prije termina, prema količini stvari, katu i pristupu.`,
      },
    ],
    price: movePrice,
  },
  {
    path: '/selidbe-ureda',
    name: 'Selidbe ureda',
    title: 'Selidbe ureda - Poslovne selidbe Zagreb',
    description:
      'Selidbe ureda u Zagrebu: rastavljanje i sastavljanje radnih mjesta, prijevoz opreme i ponovno spajanje računala i mreže. Cijena po ponudi, R1 račun.',
    summary:
      'Selidbu ureda radimo od rastavljanja radnih mjesta i pakiranja opreme do prijevoza, sastavljanja i ponovnog spajanja računala i mreže na novoj adresi. Cijenu dajemo po ponudi nakon besplatne procjene, izdajemo R1 račun, a radimo svaki dan od 8 do 20 h, i vikendom.',
    facts: [
      {
        label: 'Uključeno',
        value: 'Rastavljanje, pakiranje, prijevoz i sastavljanje radnih mjesta',
      },
      { label: 'Računala i mreža', value: 'Ponovno spajanje na novoj adresi' },
      { label: 'Cijena', value: 'Po satu prema veličini ekipe ili po ponudi' },
      facts.crews,
      facts.payment,
      facts.hours,
    ],
    faq: [
      {
        question: 'Spajate li računala i mrežu nakon selidbe?',
        answer:
          'Da. Nakon prijevoza ponovno spajamo računala, kablove i mrežnu opremu, kako bi se vaš tim vratio u funkcionalan ured.',
      },
      {
        question: 'Možete li seliti ured vikendom?',
        answer:
          'Da. Radimo svaki dan od 8 do 20 h, uključujući vikende, pa selidbu možemo obaviti bez prekida radnog tjedna.',
      },
      {
        question: 'Izdajete li R1 račun?',
        answer: 'Da. Za selidbe ureda izdajemo R1 račun na podatke vaše tvrtke.',
      },
    ],
  },
  {
    path: '/hitne-selidbe',
    name: 'Hitne selidbe',
    title: 'Hitne selidbe - Urgentni transport Zagreb',
    description:
      'Hitne selidbe u Zagrebu 0–24, i praznicima, bez nadoplate. Ako imamo slobodan kombi, stižemo u roku od sat vremena.',
    summary: `Hitne selidbe i prijevoze obavljamo 0–24, uključujući noći i praznike, bez nadoplate. Ako imamo slobodan kombi, u Zagrebu stižemo u roku od sat vremena, a cijene su iste kao za redovne selidbe: ${moveRate} za ${crewRates[0].crew}.`,
    facts: [
      { label: 'Dostupnost', value: '0–24, svaki dan, i praznicima' },
      { label: 'Dolazak', value: 'U Zagrebu u roku od sat vremena ako imamo slobodan kombi' },
      { label: 'Nadoplata', value: 'Nema nadoplate za hitne, noćne i blagdanske termine' },
      {
        label: 'Cijena',
        value: `Selidba ${moveRate}, kombi s vozačem ${vanRate}`,
      },
      {
        label: 'Ekipa po satu',
        value: capitalize(crewRatesText),
      },
    ],
    faq: [
      {
        question: 'Možete li doći odmah?',
        answer:
          'Ako imamo slobodan kombi, u Zagrebu stižemo u roku od sat vremena, u bilo koje doba dana ili noći.',
      },
      {
        question: 'Je li hitna selidba skuplja?',
        answer:
          'Ne. Hitne, noćne i blagdanske selidbe ne naplaćujemo dodatno. Vrijede iste cijene kao za redovne selidbe.',
      },
    ],
    price: movePrice,
  },
  {
    path: '/dostava-namjestaja',
    name: 'Dostava namještaja',
    title: 'Dostava namještaja - Transport pokućstva Zagreb',
    description: `Dostava namještaja iz IKEA-e, Lesnine i drugih trgovina po Zagrebu ${storeDelivery}, s unosom u stan, montažom i odvozom starog namještaja.`,
    summary: `Namještaj iz IKEA-e, Lesnine, Harvey Normana i drugih trgovina dostavljamo po Zagrebu ${storeDelivery}. Namještaj unosimo u stan i sastavljamo, a po želji odvozimo stari u reciklažno dvorište.`,
    facts: [
      facts.storeDelivery,
      { label: 'Uključeno', value: 'Unos u stan, montaža namještaja, odvoz starog' },
      { label: 'Trgovine', value: 'IKEA, Lesnina, Harvey Norman i druge' },
      facts.hours,
    ],
    faq: [
      {
        question: 'Koliko košta dostava namještaja iz trgovine?',
        answer: `Dostava iz trgovine po Zagrebu stoji ${storeDelivery}, s unosom u stan. Konačnu cijenu potvrđujemo prije termina, prema količini stvari, katu i liftu te montaži.`,
      },
      {
        question: 'Sastavljate li namještaj?',
        answer:
          'Da. Namještaj unesemo u stan i sastavimo. Cijenu dostave s montažom potvrđujemo prije termina.',
      },
      {
        question: 'Možete li odvesti stari namještaj?',
        answer: 'Da. Uz dostavu novog odvezemo i stari namještaj u reciklažno dvorište.',
      },
    ],
    price: storeDeliveryPrice,
  },
  {
    path: '/dostava-bijele-tehnike',
    name: 'Dostava bijele tehnike',
    title: 'Dostava bijele tehnike - Transport uređaja',
    description: `Dostava bijele tehnike po Zagrebu ${storeDelivery}: unos u stan, spajanje uređaja i odvoz starog. Pevex, Big Bang, Elipso i druge trgovine.`,
    summary: `Bijelu tehniku iz Pevexa, Big Banga, Elipsa i drugih trgovina dostavljamo po Zagrebu ${storeDelivery}. Uređaj unesemo u stan i spojimo, a stari po želji odvezemo u reciklažno dvorište.`,
    facts: [
      facts.storeDelivery,
      { label: 'Uključeno', value: 'Unos u stan, spajanje uređaja, odvoz starog' },
      { label: 'Trgovine', value: 'Pevex, Big Bang, Elipso i druge' },
      facts.hours,
    ],
    faq: [
      {
        question: 'Koliko košta dostava bijele tehnike?',
        answer: `Dostava iz trgovine po Zagrebu stoji ${storeDelivery}, s unosom u stan. Konačnu cijenu potvrđujemo prije termina, prema katu i liftu te spajanju uređaja.`,
      },
      {
        question: 'Spajate li perilicu rublja ili posuđa?',
        answer:
          'Da. Uređaj unesemo u stan i spojimo. Cijenu dostave sa spajanjem potvrđujemo prije termina.',
      },
      {
        question: 'Odvozite li stari uređaj?',
        answer: 'Da. Stari hladnjak, perilicu ili štednjak odvezemo u reciklažno dvorište.',
      },
    ],
    price: storeDeliveryPrice,
  },
  {
    path: '/redovne-dostave',
    name: 'Redovne dostave',
    title: 'Redovne dostave - Redoviti transport Zagreb',
    description:
      'Redovne dostave za tvrtke u Zagrebu: pojedinačne dostave ili mjesečni dogovor s mjesečnim obračunom, R1 račun i dozvola za ulaz u pješačku zonu.',
    summary:
      'Tvrtkama nudimo redovne dostave po Zagrebu i okolici, kao pojedinačne dostave ili kroz mjesečni dogovor s rasporedom i mjesečnim obračunom. Imamo dozvolu za ulaz u pješačku zonu, izdajemo R1 račun, a radimo svaki dan od 8 do 20 h.',
    facts: [facts.businesses, facts.payment, facts.permit, facts.hours, facts.fleet],
    faq: [
      {
        question: 'Možemo li dogovoriti mjesečnu suradnju?',
        answer:
          'Da. S tvrtkama dogovaramo raspored dostava i mjesečni obračun, a moguće su i pojedinačne dostave.',
      },
      {
        question: 'Dostavljate li trgovinama u pješačkoj zoni?',
        answer: 'Da. Imamo dozvolu za ulaz u pješačku zonu, pa robu dovozimo do samih vrata.',
      },
    ],
  },
  {
    path: '/odvoz-otpada',
    name: 'Odvoz otpada',
    title: 'Odvoz otpada - Profesionalne usluge odvoza Zagreb',
    description: `Odvoz otpada u Zagrebu: glomazni otpad ${bulkyWaste} do 1 m³ i ${extraM3} za svaki dodatni m³, šuta ${rubble}. Odvoz u reciklažno dvorište.`,
    summary: `Odvoz glomaznog otpada u Zagrebu stoji ${bulkyWaste} za do 1 m³, a svaki dodatni m³ ${extraM3}. Odvoz šute stoji ${rubble}. Otpad sami utovarimo i odvezemo u reciklažno dvorište, a hitne odvoze obavljamo 0–24.`,
    facts: [
      {
        label: 'Glomazni otpad',
        value: `${capitalize(bulkyWaste)} do 1 m³, svaki dodatni m³ ${extraM3}`,
      },
      facts.bedOrWardrobe,
      { label: 'Šuta', value: capitalize(rubble) },
      { label: 'Uključeno', value: 'Utovar i odvoz' },
      facts.recycling,
      facts.hours,
    ],
    faq: [
      {
        question: 'Koliko košta odvoz otpada?',
        answer: `Glomazni otpad odvozimo ${bulkyWaste} za do 1 m³, a svaki dodatni m³ stoji ${extraM3}. Odvoz šute stoji ${rubble}, s utovarom i odvozom.`,
      },
      {
        question: 'Gdje završava otpad koji odvezete?',
        answer: 'Sve što odvezemo predajemo u reciklažno dvorište.',
      },
    ],
    price: bulkyWastePrice,
  },
  {
    path: '/odvoz-glomaznog-otpada',
    name: 'Odvoz glomaznog otpada',
    title: 'Odvoz glomaznog otpada - Brzo i pouzdano Zagreb',
    description: `Odvoz glomaznog otpada u Zagrebu ${bulkyWaste} za do 1 m³, svaki dodatni m³ ${extraM3}. Iznošenje, utovar i odvoz u reciklažno dvorište, hitno 0–24.`,
    summary: `Odvoz glomaznog otpada u Zagrebu stoji ${bulkyWaste} za do 1 m³, otprilike jedan kauč ili ormar, a svaki dodatni m³ ${extraM3}. Krevet ili ormar odvozimo za ${bedOrWardrobe}, ovisno o težini i katu. Otpad sami iznesemo i utovarimo, s bilo kojeg kata, i odvezemo u reciklažno dvorište.`,
    facts: [
      { label: 'Cijena', value: `${capitalize(bulkyWaste)} do 1 m³ (npr. kauč ili ormar)` },
      { label: 'Dodatni m³', value: extraM3 },
      facts.bedOrWardrobe,
      { label: 'Uključeno', value: 'Iznošenje, utovar i odvoz' },
      facts.recycling,
      facts.urgent,
    ],
    faq: [
      {
        question: 'Koliko je 1 m³ glomaznog otpada?',
        answer: `Otprilike jedan kauč ili ormar. Odvoz do 1 m³ stoji ${bulkyWaste}, a svaki dodatni m³ ${extraM3}.`,
      },
      {
        question: 'Moram li sam iznijeti otpad?',
        answer: 'Ne. Otpad iznosimo i utovarujemo sami, i s viših katova.',
      },
    ],
    price: bulkyWastePrice,
  },
  {
    path: '/odvoz-starog-namjestaja',
    name: 'Odvoz starog namještaja',
    title: 'Odvoz starog namještaja - Profesionalna usluga Zagreb',
    description: `Odvoz starog namještaja u Zagrebu: krevet ili ormar ${bedOrWardrobe} ovisno o težini i katu, ostali namještaj ${bulkyWaste} za do 1 m³. Iznošenje i odvoz u reciklažno dvorište.`,
    summary: `Krevet ili ormar odvozimo za ${bedOrWardrobe}, ovisno o težini i katu, a ostali stari namještaj ${bulkyWaste} za do 1 m³ i ${extraM3} za svaki dodatni m³. Namještaj iznosimo iz stana, kuće ili ureda bez obzira na kat i uske prolaze i odvozimo ga u reciklažno dvorište.`,
    facts: [
      facts.bedOrWardrobe,
      { label: 'Ostali namještaj', value: `${capitalize(bulkyWaste)} do 1 m³` },
      { label: 'Dodatni m³', value: extraM3 },
      { label: 'Uključeno', value: 'Iznošenje s bilo kojeg kata, utovar i odvoz' },
      facts.recycling,
      facts.hours,
    ],
    faq: [
      {
        question: 'Koliko košta odvoz kreveta ili ormara?',
        answer: `Odvoz kreveta ili ormara stoji ${bedOrWardrobe}, ovisno o težini i katu. Cijena uključuje iznošenje, utovar i odvoz u reciklažno dvorište.`,
      },
      {
        question: 'Možete li odvesti stari namještaj kad dostavljate novi?',
        answer: 'Da. Uz dostavu novog namještaja odvezemo i stari, u reciklažno dvorište.',
      },
      {
        question: 'Iznosite li namještaj s kata bez lifta?',
        answer:
          'Da. Namještaj iznosimo s bilo kojeg kata. U upitu samo navedite kat i ima li lift.',
      },
    ],
    price: bulkyWastePrice,
  },
  {
    path: '/odvoz-sute',
    name: 'Odvoz šute',
    title: 'Odvoz šute - Odvoz građevinskog otpada Zagreb',
    description: `Odvoz šute u Zagrebu: ${rubble}, s utovarom i odvozom u reciklažno dvorište. Beton, cigla, keramika i drugi građevinski otpad.`,
    summary: `Odvoz šute i građevinskog otpada u Zagrebu stoji ${rubble}, s utovarom i odvozom u reciklažno dvorište. Odvozimo beton, ciglu, keramiku i drugi otpad od renovacije, svaki dan od 8 do 20 h.`,
    facts: [
      { label: 'Cijena', value: capitalize(rubble) },
      { label: 'Uključeno', value: 'Utovar i odvoz' },
      facts.recycling,
      { label: 'Vrste otpada', value: 'Beton, cigla, keramika i drugi građevinski otpad' },
      facts.hours,
    ],
    faq: [
      {
        question: 'Koliko košta odvoz šute?',
        answer: `Odvoz šute stoji ${rubble}, s utovarom i odvozom u reciklažno dvorište.`,
      },
      {
        question: 'Odvozite li šutu nakon renovacije kupaonice?',
        answer:
          'Da. Odvozimo šutu od manjih renovacija, poput kupaonice, ali i veće količine građevinskog otpada.',
      },
    ],
    price: { amount: rubblePerBag, unitCode: 'BG', isMinimum: true },
  },
]

export const findServicePage = (path: string) => servicePages.find((page) => page.path === path)

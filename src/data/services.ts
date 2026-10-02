/**
 * Service pages rendered with ServiceLayout. The layout looks the current route up here
 * to set the page heading, head tags and structured data, so each view only holds its copy.
 */
export interface ServicePage {
  path: string
  /** Page heading and the service name used in structured data. */
  name: string
  /** Document title; the brand name is appended automatically. */
  title: string
  description: string
}

export const servicePages: ServicePage[] = [
  {
    path: '/kombi-prijevoz',
    name: 'Kombi prijevoz',
    title: 'Kombi prijevoz - Brzi i siguran transport Zagreb',
    description:
      'Profesionalni kombi prijevoz u Zagrebu. Siguran transport robe, paketa i materijala po povoljnim cijenama.',
  },
  {
    path: '/kombi-prijevoz-zagreb',
    name: 'Kombi prijevoz Zagreb',
    title: 'Kombi prijevoz Zagreb - Lokalni transport',
    description:
      'Specijalizirani kombi prijevoz unutar Zagreba. Brza dostava i transport za sve vaše potrebe.',
  },
  {
    path: '/kombi-selidbe',
    name: 'Kombi selidbe',
    title: 'Kombi selidbe - Profesionalne usluge selidbe Zagreb',
    description:
      'Kompletne usluge selidbe s kombijem u Zagrebu. Sigurno i efikasno premještanje vašeg namještaja i stvari.',
  },
  {
    path: '/kombi-dostava',
    name: 'Kombi dostava',
    title: 'Kombi dostava - Brza dostava paketa Zagreb',
    description:
      'Profesionalna kombi dostava u Zagrebu. Pouzdana dostava paketa, robe i materijala na vrijeme.',
  },
  {
    path: '/povoljan-kombi-prijevoz',
    name: 'Povoljan kombi prijevoz',
    title: 'Povoljan kombi prijevoz - Jeftini transport Zagreb',
    description:
      'Najpovoljniji kombi prijevoz u Zagrebu. Kvalitetne usluge transporta po najnižim cijenama.',
  },
  {
    path: '/specijalni-prijevoz',
    name: 'Specijalni prijevoz',
    title: 'Specijalni prijevoz - Transport posebnih tereta',
    description:
      'Specijalizirani prijevoz posebnih tereta i robe. Profesionalne usluge transporta u Zagrebu.',
  },
  {
    path: '/selidbe-stanova-i-kuca',
    name: 'Selidbe stanova i kuća',
    title: 'Selidbe stanova i kuća u Zagrebu',
    description:
      'Profesionalne selidbe stanova i kuća s kombijem. Potpuna usluga selidbe u Zagrebu.',
  },
  {
    path: '/selidbe-ureda',
    name: 'Selidbe ureda',
    title: 'Selidbe ureda - Poslovne selidbe Zagreb',
    description:
      'Selidbe ureda i poslovnih prostora s kombijem. Efikasne poslovne selidbe u Zagrebu.',
  },
  {
    path: '/hitne-selidbe',
    name: 'Hitne selidbe',
    title: 'Hitne selidbe - Urgentni transport Zagreb',
    description:
      'Hitne selidbe i urgentni prijevoz u Zagrebu. Brza reakcija i profesionalna usluga.',
  },
  {
    path: '/dostava-namjestaja',
    name: 'Dostava namještaja',
    title: 'Dostava namještaja - Transport pokućstva Zagreb',
    description:
      'Dostava namještaja i pokućstva s kombijem. Siguran transport vašeg namještaja u Zagrebu.',
  },
  {
    path: '/dostava-bijele-tehnike',
    name: 'Dostava bijele tehnike',
    title: 'Dostava bijele tehnike - Transport uređaja',
    description:
      'Profesionalna dostava bijele tehnike u Zagrebu. Siguran transport kućanskih aparata.',
  },
  {
    path: '/redovne-dostave',
    name: 'Redovne dostave',
    title: 'Redovne dostave - Redoviti transport Zagreb',
    description:
      'Redovne dostave i transport usluge u Zagrebu. Pouzdane usluge za redovite potrebe.',
  },
  {
    path: '/odvoz-otpada',
    name: 'Odvoz otpada',
    title: 'Odvoz otpada - Profesionalne usluge odvoza Zagreb',
    description:
      'Profesionalni odvoz otpada u Zagrebu. Brzo i pouzdano odvozimo glomazni otpad, stari namještaj i šutu.',
  },
  {
    path: '/odvoz-glomaznog-otpada',
    name: 'Odvoz glomaznog otpada',
    title: 'Odvoz glomaznog otpada - Brzo i pouzdano Zagreb',
    description:
      'Profesionalni odvoz glomaznog otpada u Zagrebu. Brzo odvozimo stari namještaj, aparate i druge velike predmete.',
  },
  {
    path: '/odvoz-starog-namjestaja',
    name: 'Odvoz starog namještaja',
    title: 'Odvoz starog namještaja - Profesionalna usluga Zagreb',
    description:
      'Odvoz starog namještaja u Zagrebu. Brzo i sigurno odvozimo stari namještaj iz stana, kuće ili ureda.',
  },
  {
    path: '/odvoz-sute',
    name: 'Odvoz šute',
    title: 'Odvoz šute - Odvoz građevinskog otpada Zagreb',
    description:
      'Profesionalni odvoz šute i građevinskog otpada u Zagrebu. Brzo i efikasno odvozimo beton, cigle i drugi građevinski materijal.',
  },
]

export const findServicePage = (path: string) => servicePages.find((page) => page.path === path)

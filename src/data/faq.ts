import { site } from './site'

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Koliko unaprijed trebam rezervirati termin?',
    answer:
      'Što prije, to bolje, posebno za vikende. Za hitne situacije nazovite nas u bilo koje doba dana: ako imamo slobodan kombi, u Zagrebu stižemo u roku od sat vremena.',
  },
  {
    question: 'Što ako zgrada nema lift?',
    answer:
      'Nije problem. U upitu napišite kat i ima li lift, pa nošenje odmah uključimo u ponudu.',
  },
  {
    question: 'Kako se plaća?',
    answer:
      'Gotovinom ili internet bankarstvom (bankovnom uplatom). Kartice ne primamo. Ako trebate R1 račun, u obrazac upišite podatke firme.',
  },
  {
    question: 'Radite li vikendom i praznicima?',
    answer:
      'Da. Radimo svaki dan od 8 do 20 h, uključujući vikende i praznike, a hitne prijevoze i selidbe obavljamo 0–24, bez nadoplate. Vikend termini se brzo popune, pa ih dogovorite ranije.',
  },
  {
    question: 'Vozite li i izvan Zagreba?',
    answer: `Da. Najčešće radimo unutar ${site.serviceRadiusKm} km od Zagreba, ali po dogovoru vozimo po cijeloj Hrvatskoj.`,
  },
  {
    question: 'Što trebam pripremiti za ponudu?',
    answer:
      'Adrese preuzimanja i isporuke, popis većih stvari s okvirnim dimenzijama i željeni datum. Sve to stane u naš obrazac.',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Koliko unaprijed trebam rezervirati termin?',
    answer:
      'Što prije, to bolje, posebno za vikende. Za hitne situacije nazovite nas: ako smo slobodni, dolazimo isti dan.',
  },
  {
    question: 'Što ako zgrada nema lift?',
    answer:
      'Nije problem. U upitu napišite kat i ima li lift, pa nošenje odmah uključimo u ponudu.',
  },
  {
    question: 'Kako se plaća?',
    answer:
      'Gotovinom ili internet bankarstvom. Ako trebate R1 račun, u obrazac upišite podatke firme.',
  },
  {
    question: 'Radite li vikendom?',
    answer:
      'Radimo svaki dan u tjednu, od 08 do 20 sati. Vikend termini se brzo popune, pa ih dogovorite ranije.',
  },
  {
    question: 'Vozite li i izvan Zagreba?',
    answer:
      'Da. Najčešće radimo unutar 50 km od Zagreba, ali po dogovoru vozimo po cijeloj Hrvatskoj.',
  },
  {
    question: 'Što trebam pripremiti za ponudu?',
    answer:
      'Adrese preuzimanja i isporuke, popis većih stvari s okvirnim dimenzijama i željeni datum. Sve to stane u naš obrazac.',
  },
]

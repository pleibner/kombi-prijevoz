# Google indexing after releases 1.2.0–1.3.4

**Date:** 4 October 2026
**Covers:** every commit from 28 September to 4 October 2026 (they all landed 2–4 October), releases 1.2.0 to 1.3.4
**Live build:** 1.3.4 (`23c2d64`), deployed 4 October at 10:16 CEST. All six deploys this week succeeded.
**Method:** I fetched all 20 live URLs and compared them with a local build of 1.1.0 (`31abd2e`, 22 December 2025). 1.1.0 was the last release before this week, so it's the version Google most likely has indexed.

> **Short version:** `/cjenik` is a new URL. `/kako-do-nas` is effectively new too, because until this week it declared the homepage as its canonical. The other 18 URLs need a recrawl: their copy, prices, meta descriptions and structured data changed, and most titles did too. No URL was removed or renamed. Resubmit the sitemap, then request indexing in the order in section 4.

## 1. What changed this week

| Release | Live from (CEST) | What changed for search |
|---|---|---|
| 1.2.0 | 2 Oct, 22:22 | Redesign. First release to publish prices (in the homepage pricing section) and an FAQ. |
| 1.3.0 | 3 Oct, 00:17 | GEO audit fixes. New `/cjenik` page and `lang="hr"`. Per-page canonical, Open Graph and Twitter tags, plus `og-image.png`. `MovingCompany`, `Service`, `BreadcrumbList` and `FAQPage` markup. Sitemap and `llms.txt` generated at build time. Owner-confirmed facts and FAQs on every service page. Email, founding date, Facebook and Google profile links. |
| 1.3.1–1.3.4 | 4 Oct, 08:20–10:16 | New prices, quoted without VAT. |

### Prices Google may have stored

| Item | 1.1.0 (indexed until now) | 1.2.0–1.3.0 (2–4 Oct) | Live now, without VAT |
|---|---|---|---|
| Kombi s vozačem | not shown | od 25 €/h | od 50 €/h |
| Dodatni radnik | not shown | 10 €/h | 25 € first hour, then 10 €/h |
| Selidba | not shown | fixed prices, od 150 € | per hour: 100 € (2 workers), 150 € (3), 200 € (4) |
| Glomazni otpad | not shown | od 60 €; 1.3.0 added 40 € per extra m³ | od 60 € up to 1 m³, each extra item od 50 € |
| Šuta | not shown | 40 €/m³ (1.3.0 only) | od 10 € per bag |
| Outside Zagreb | not shown | 0,90 €/km | 1 €/km |
| New items | — | — | dostava iz trgovine od 50 €, krevet ili ormar 60–100 € |

The experience claim changed as well. 1.1.0 said "20+ godina iskustva" on the homepage but "preko 30" on `/kombi-prijevoz`. Every page now says more than 30 years, founded 15 November 1995.

## 2. URLs that are new to Google

| URL | Why |
|---|---|
| `/cjenik` | New page: a price table, how the final price is calculated, and 7 price questions (about 780 words). It targets price searches such as "kombi prijevoz cijena" and "koliko košta selidba Zagreb", where competitors' price pages win today. It's in the sitemap and linked from the header and footer of every page. |
| `/kako-do-nas` | From launch on 22 December 2025 until 2 October, its canonical pointed at the homepage: `index.html` hard-coded `https://kombi-transport.com/` and the view never overrode it. Google treats canonicals as hints, but it has probably folded this page into `/`. Since 1.2.0 the page has its own canonical. |

## 3. URLs to recrawl

Google's stored copy of the other 18 URLs is from 1.1.0, or from an interim release if Googlebot came by during the week. Compared with 1.1.0, they now have:

- **New body copy.** The 16 service pages went from 118–197 words of generic text to 393–545 words: an opening summary with prices, a "Ukratko" fact box and 2–3 page-specific questions.
- **New meta descriptions** on the homepage and all 16 service pages, and most of them lead with a price. `/kontakt` keeps its old description.
- **New titles** on the 16 service pages: 15 gained the "| Kombi Transport" suffix, and `/selidbe-stanova-i-kuca` was reworded. The homepage and `/kontakt` titles are unchanged.
- **New structured data** (section 5), and `lang="hr"` replaces `lang="en"`.

## 4. Order of indexing requests

Search Console accepts roughly 10 manual indexing requests a day (Google doesn't publish the exact cap), so split them over two days. Day 1 covers `/cjenik`, the homepage, the four services in the main menu, and the four pages closest to the core searches (kombi prijevoz, selidbe, glomazni otpad).

**Day 1**

1. `/cjenik`
2. `/`
3. `/kombi-prijevoz`
4. `/kombi-selidbe`
5. `/kombi-dostava`
6. `/odvoz-otpada`
7. `/odvoz-glomaznog-otpada`
8. `/selidbe-stanova-i-kuca`
9. `/kombi-prijevoz-zagreb`
10. `/povoljan-kombi-prijevoz`

**Day 2**

11. `/kako-do-nas`
12. `/dostava-namjestaja`
13. `/dostava-bijele-tehnike`
14. `/odvoz-starog-namjestaja`
15. `/odvoz-sute`
16. `/hitne-selidbe`
17. `/redovne-dostave`
18. `/selidbe-ureda`
19. `/specijalni-prijevoz`

**Sitemap only:** `/kontakt`. Its title, description and canonical are unchanged.

## 5. Structured data

1.1.0 had one generic `LocalBusiness` block on every page. It had no prices, its `areaServed` listed only Zagreb, and its `paymentAccepted` included "Credit Card", although the contact form offered only cash or internet banking. Now:

| Pages | Markup |
|---|---|
| All 20 | `WebSite` and `MovingCompany`. Includes logo, image, email and founding date; Facebook and the Google Business Profile in `sameAs`; 8 towns plus a 50 km radius; a 0–24 urgent contact point; and offers with prices. |
| 16 service pages | adds `Service` (with a price where there is one), `BreadcrumbList` and `FAQPage` |
| `/cjenik` | adds `BreadcrumbList` and `FAQPage` |
| `/` | adds `FAQPage` |
| `/kontakt`, `/kako-do-nas` | add `BreadcrumbList` |

The JSON-LD on all 20 live pages parses without errors. What to expect in results:

- **Breadcrumbs** are the only rich result this markup can earn. Google shows them on desktop only; it dropped them from mobile results in January 2025.
- **No FAQ dropdowns.** Since August 2023, Google shows FAQ rich results only for well-known government and health sites. The markup still helps Google and AI answers read the questions.
- **`MovingCompany` and `Service`** have no rich result of their own. The business panel and map listings come from the Google Business Profile. The `sameAs` link to the profile's knowledge-graph ID helps Google connect it to the site.

## 6. Search Console checklist

1. **Property.** If there isn't one yet, add a **Domain** property for `kombi-transport.com`, verified with a DNS TXT record. It covers http, https and www.
2. **Sitemaps.** Submit `https://kombi-transport.com/sitemap.xml` again.
   - It now lists 20 URLs, with `/cjenik` added, all with `lastmod` 2026-10-04. Before, 14 of the 19 URLs said 2024-11-09.
   - Google retired its sitemap ping URL in 2023, so resubmitting in Search Console is the only way to nudge it.
3. **URL Inspection.** For each Day 1 URL, check *Last crawl*, then click *Request indexing*.
   - Any crawl before 4 Oct 10:16 CEST is outdated.
   - A crawl between 2 Oct 22:22 and 4 Oct 10:16 stored prices that have since changed (for example, 25 €/h for the van). Request those URLs first.
4. **Day 2.** Request the remaining nine URLs. For `/kako-do-nas`, URL Inspection will probably report "Alternate page with proper canonical tag"; after the request it should switch to indexed.
5. **After about a week:**
   - *Indexing → Pages* should show 20 indexed URLs, and each Google-selected canonical should match the declared one.
   - *Enhancements → Breadcrumbs* should list 19 pages.
   - Search results should show the new descriptions.
6. **Optional: Bing Webmaster Tools.** It can import the site from Search Console, and ChatGPT search and Copilot draw on Bing's index.

## 7. No action needed

- **Removed or renamed URLs:** none. All 19 URLs from 1.1.0 still return 200, so there are no redirects or removals to request.
- **Host variants:** `http://` and `www.` both 301 to `https://kombi-transport.com/…`.
- **Duplicate paths:** `/cjenik.html` and `/index.html` return 200 but declare the clean URL as canonical, and `/cjenik/` returns 404. Nothing links to them.
- **404 handling:** `/404` and unknown paths are `noindex` with no canonical, and `/404` stays out of the sitemap. In 1.1.0, the 404 page pointed its canonical at the homepage.
- **`/og-image.png`** (new, 1200×630) is for link previews on Facebook, WhatsApp and similar apps. Nothing to submit.
- **`/llms.txt`** (new) is for AI assistants. Google Search doesn't use it.

## 8. Current visibility (directional)

On 4 October, a `site:kombi-transport.com` web search returned only the homepage and `/kombi-dostava`. That's a US index, not Google. Both results showed 1.1.0 descriptions and the old "20+ years" claim. If Google looks similar, most pages aren't indexed yet, so the sitemap resubmission matters more than usual. Search Console has Google's real numbers.

## 9. Worth fixing later (not blocking)

- **Long titles.** Google cuts titles at about 600 px, roughly 60 characters. Eight titles are 65–71 characters, so the new "| Kombi Transport" suffix will often be cut off. The longest are `/odvoz-starog-namjestaja` (71), `/kombi-selidbe` (69) and `/povoljan-kombi-prijevoz` (68). Shortening the middle part keeps the brand visible, for example "Odvoz starog namještaja Zagreb | Kombi Transport".
- **Thin pages.** `/kako-do-nas` has about 70 words of main content, mostly the map iframe, and `/kontakt` about 170. The audit's suggestion to describe landmarks, parking and the nearest tram stop on `/kako-do-nas` is still open.
- **Sitemap `lastmod`.** It's the date of the commit being built. That's always the version-bump commit, so every release marks all 20 URLs as changed. This week that was true, but Google stops trusting `lastmod` if it moves when the content doesn't.
- **Google Business Profile.** It should list the same prices, hours (svaki dan 08–20 h, hitno 0–24 h) and services as the site, because Google cross-checks the two.
- **Future pages.** The GEO audit's `/o-nama`, privacy policy, English `/en/` pages and guides don't exist yet. The sitemap will pick each one up automatically, but each still needs its own indexing request.

## Appendix: what each URL should show in Google

`WebSite` and `MovingCompany` are on every page, so the last column leaves them out.

| URL | Title | Meta description | Extra markup |
|---|---|---|---|
| `/cjenik` | Cjenik kombi prijevoza i selidbi u Zagrebu \| Kombi Transport | Cjenik kombi prijevoza u Zagrebu: kombi s vozačem od 50 €/h, kombi i 2 radnika 100 €/h, glomazni otpad od 60 €, šuta od 10 € po vreći. Cijene su bez PDV-a. | Breadcrumb, FAQ |
| `/` | Kombi Transport - Profesionalne usluge prijevoza Zagreb | Kombi prijevoz, selidbe, dostava i odvoz otpada u Zagrebu i okolici. Radimo svaki dan 08–20 h, hitno 0–24 h. Kombi s vozačem od 50 € po satu, selidba od 100 € po satu. | FAQ |
| `/kombi-prijevoz` | Kombi prijevoz - Brzi i siguran transport Zagreb \| Kombi Transport | Kombi prijevoz robe u Zagrebu i okolici: kombi s vozačem od 50 € po satu, minimalno 1 sat, bez naplate dolaska. Svaki dan 08–20 h, hitno 0–24 h. | Service, Breadcrumb, FAQ |
| `/kombi-selidbe` | Kombi selidbe - Profesionalne usluge selidbe Zagreb \| Kombi Transport | Kombi selidbe u Zagrebu po satu: kombi i 2 radnika 100 €, kombi i 3 radnika 150 €, kombi i 4 radnika 200 €. Rastavljanje i sastavljanje namještaja i pakiranje. | Service, Breadcrumb, FAQ |
| `/kombi-dostava` | Kombi dostava - Brza dostava paketa Zagreb \| Kombi Transport | Kombi dostava po Zagrebu od 50 € po satu, bez naplate dolaska. Dozvola za ulaz u pješačku zonu, dostave svaki dan 08–20 h i hitno 0–24 h. | Service, Breadcrumb, FAQ |
| `/odvoz-otpada` | Odvoz otpada - Profesionalne usluge odvoza Zagreb \| Kombi Transport | Odvoz otpada u Zagrebu: glomazni otpad od 60 € do 1 m³ i od 50 € za svaki dodatni komad, šuta od 10 € po vreći. Odvoz u reciklažno dvorište. | Service, Breadcrumb, FAQ |
| `/odvoz-glomaznog-otpada` | Odvoz glomaznog otpada - Brzo i pouzdano Zagreb \| Kombi Transport | Odvoz glomaznog otpada u Zagrebu od 60 € za do 1 m³, svaki dodatni komad od 50 €. Iznošenje, utovar i odvoz u reciklažno dvorište, hitno 0–24. | Service, Breadcrumb, FAQ |
| `/selidbe-stanova-i-kuca` | Selidbe stanova i kuća u Zagrebu \| Kombi Transport | Selidba stana ili kuće u Zagrebu po satu: kombi i 2 radnika 100 €, kombi i 3 radnika 150 €, kombi i 4 radnika 200 €. Po želji pakiramo stvari te rastavljamo i sastavljamo namještaj. | Service, Breadcrumb, FAQ |
| `/kombi-prijevoz-zagreb` | Kombi prijevoz Zagreb - Lokalni transport \| Kombi Transport | Kombi prijevoz unutar Zagreba od 50 € po satu, bez naplate dolaska. Imamo dozvolu za ulaz u pješačku zonu, a hitno stižemo u roku od sat vremena. | Service, Breadcrumb, FAQ |
| `/povoljan-kombi-prijevoz` | Povoljan kombi prijevoz - Jeftini transport Zagreb \| Kombi Transport | Povoljan kombi prijevoz u Zagrebu: od 50 € po satu, minimalno 1 sat, bez naplate dolaska i bez noćne ili blagdanske nadoplate. Procjena je besplatna. | Service, Breadcrumb, FAQ |
| `/dostava-namjestaja` | Dostava namještaja - Transport pokućstva Zagreb \| Kombi Transport | Dostava namještaja iz IKEA-e, Lesnine i drugih trgovina po Zagrebu od 50 €, s unosom u stan, montažom i odvozom starog namještaja. | Service, Breadcrumb, FAQ |
| `/dostava-bijele-tehnike` | Dostava bijele tehnike - Transport uređaja \| Kombi Transport | Dostava bijele tehnike po Zagrebu od 50 €: unos u stan, spajanje uređaja i odvoz starog. Pevex, Big Bang, Elipso i druge trgovine. | Service, Breadcrumb, FAQ |
| `/odvoz-starog-namjestaja` | Odvoz starog namještaja - Profesionalna usluga Zagreb \| Kombi Transport | Odvoz starog namještaja u Zagrebu: krevet ili ormar 60–100 € ovisno o težini i katu, ostali namještaj od 60 € za do 1 m³. Iznošenje i odvoz u reciklažno dvorište. | Service, Breadcrumb, FAQ |
| `/odvoz-sute` | Odvoz šute - Odvoz građevinskog otpada Zagreb \| Kombi Transport | Odvoz šute u Zagrebu: od 10 € po vreći, s utovarom i odvozom u reciklažno dvorište. Beton, cigla, keramika i drugi građevinski otpad. | Service, Breadcrumb, FAQ |
| `/hitne-selidbe` | Hitne selidbe - Urgentni transport Zagreb \| Kombi Transport | Hitne selidbe u Zagrebu 0–24, i praznicima, bez nadoplate. Ako imamo slobodan kombi, stižemo u roku od sat vremena. | Service, Breadcrumb, FAQ |
| `/redovne-dostave` | Redovne dostave - Redoviti transport Zagreb \| Kombi Transport | Redovne dostave za tvrtke u Zagrebu: pojedinačne dostave ili mjesečni dogovor s mjesečnim obračunom, R1 račun i dozvola za ulaz u pješačku zonu. | Service, Breadcrumb, FAQ |
| `/selidbe-ureda` | Selidbe ureda - Poslovne selidbe Zagreb \| Kombi Transport | Selidbe ureda u Zagrebu: rastavljanje i sastavljanje radnih mjesta, prijevoz opreme i ponovno spajanje računala i mreže. Cijena po ponudi, R1 račun. | Service, Breadcrumb, FAQ |
| `/specijalni-prijevoz` | Specijalni prijevoz - Transport posebnih tereta \| Kombi Transport | Specijalni prijevoz u Zagrebu: klaviri i glomazni predmeti koji ne prolaze stubištem, uz podizanje dizalicom kroz prozor. Cijena po ponudi, procjena je besplatna. | Service, Breadcrumb, FAQ |
| `/kako-do-nas` | Kako do nas? - Kombi Transport Zagreb | Pronađite nas na adresi Trg Ivana Kukuljevića 5, Zagreb. Pogledajte kartu i upute kako doći do nas. | Breadcrumb |
| `/kontakt` | Kontakt - Kombi Transport Zagreb | Kontaktirajte Kombi Transport za besplatnu procjenu prijevoza, selidbi i dostave. Zagreb i okolno područje. | Breadcrumb |

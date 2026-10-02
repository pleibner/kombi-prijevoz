<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import emailjs from '@emailjs/browser'
import AppIcon from '@/components/AppIcon.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import { trackingService } from '@/utils/tracking'

useHead({
  title: 'Kontakt - Kombi Transport Zagreb',
  meta: [
    {
      name: 'description',
      content:
        'Kontaktirajte Kombi Transport za besplatnu procjenu prijevoza, selidbi i dostave. Zagreb i okolno područje.',
    },
    {
      property: 'og:title',
      content: 'Kontakt - Kombi Transport Zagreb',
    },
    {
      property: 'og:description',
      content:
        'Kontaktirajte Kombi Transport za besplatnu procjenu prijevoza, selidbi i dostave. Zagreb i okolno područje.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/kontakt',
    },
  ],
})

const route = useRoute()

const form = reactive({
  ime: '',
  email: '',
  telefon: '',
  datum: '',
  vrijeme: '',
  lokacijaPreuzimanja: '',
  liftPreuzimanja: '',
  lokacijaIsporuke: '',
  liftIsporuke: '',
  popisStvari: '',
  placanje: '',
  komentar: '',
  trebamR1Racun: false,
  nazivFirme: '',
  oibFirme: '',
  adresaFirme: '',
})

const errors = reactive({
  ime: '',
  email: '',
  telefon: '',
  placanje: '',
  nazivFirme: '',
  oibFirme: '',
})

const isSubmitting = ref(false)
const submitError = ref('')
const isFormSubmitted = ref(false)

const helpItems = [
  'Adrese preuzimanja i isporuke',
  'Kat i ima li lift',
  'Popis većih stvari s okvirnim dimenzijama',
  'Željeni datum i vrijeme',
]

const queryString = (value: unknown) => (typeof value === 'string' ? value : '')

onMounted(async () => {
  await nextTick()
  window.scrollTo(0, 0)

  // Prefill from the homepage quick-quote card
  const from = queryString(route.query.od)
  const to = queryString(route.query.do)
  const what = queryString(route.query.sto)
  const when = queryString(route.query.kad)

  if (from) form.lokacijaPreuzimanja = from
  if (to) form.lokacijaIsporuke = to
  if (when) form.datum = when
  if (what) form.komentar = `Vrsta prijevoza: ${what}`
})

const validateName = () => {
  errors.ime = ''
  if (form.ime.trim().length === 0) {
    errors.ime = 'Upišite ime.'
    return false
  }
  return true
}

const validateEmail = () => {
  errors.email = ''
  if (!form.email.trim()) {
    errors.email = 'Upišite e-mail adresu.'
    return false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Unesite valjanu e-mail adresu.'
    return false
  }
  return true
}

const validatePhone = () => {
  errors.telefon = ''
  if (form.telefon.trim().length > 0) {
    const cleaned = form.telefon.trim().replace(/[\s-/]/g, '')

    if (!/^(\+\d{1,4})?\d{6,14}$/.test(cleaned)) {
      errors.telefon = 'Upišite valjani broj telefona.'
      return false
    }
  } else {
    errors.telefon = 'Upišite broj telefona.'
    return false
  }
  return true
}

const validatePayment = () => {
  errors.placanje = ''
  if (!form.placanje) {
    errors.placanje = 'Odaberite način plaćanja.'
    return false
  }
  return true
}

const validateCompanyName = () => {
  errors.nazivFirme = ''
  if (form.trebamR1Racun && !form.nazivFirme.trim()) {
    errors.nazivFirme = 'Upišite naziv firme.'
    return false
  }
  return true
}

const validateCompanyOIB = () => {
  errors.oibFirme = ''
  if (form.trebamR1Racun && !form.oibFirme.trim()) {
    errors.oibFirme = 'Upišite OIB firme.'
    return false
  } else if (form.trebamR1Racun && form.oibFirme.trim() && !/^\d{11}$/.test(form.oibFirme.trim())) {
    errors.oibFirme = 'OIB mora imati 11 znamenki.'
    return false
  }
  return true
}

const validateForm = () => {
  let isValid = true

  if (!validateName()) isValid = false
  if (!validateEmail()) isValid = false
  if (!validatePhone()) isValid = false
  if (!validatePayment()) isValid = false

  if (form.trebamR1Racun) {
    if (!validateCompanyName()) isValid = false
    if (!validateCompanyOIB()) isValid = false
  }

  return isValid
}

emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    const templateParams = {
      ime: form.ime,
      email: form.email,
      telefon: form.telefon,
      datum_vrijeme: [form.datum, form.vrijeme].filter(Boolean).join(' '),
      lokacija_preuzimanja: form.lokacijaPreuzimanja,
      lift_preuzimanja: form.liftPreuzimanja,
      lokacija_isporuke: form.lokacijaIsporuke,
      lift_isporuke: form.liftIsporuke,
      popis_stvari: form.popisStvari,
      placanje: form.placanje === 'gotovina' ? 'Gotovina' : 'Internet bankarstvo',
      komentar: form.komentar,
      r1_racun: form.trebamR1Racun ? 'Da' : 'Ne',
      naziv_firme: form.nazivFirme,
      oib_firme: form.oibFirme,
      adresa_firme: form.adresaFirme,
      send_to: import.meta.env.VITE_AUTOMATIC_EMAIL_RECEIVER,
      reply_to: form.email,
    }

    trackingService.trackFormSubmit('contact_form_submit', {
      has_company_info: form.trebamR1Racun,
      has_company_address: !!form.adresaFirme.trim(),
      has_pickup_location: !!form.lokacijaPreuzimanja.trim(),
      has_pickup_lift: !!form.liftPreuzimanja,
      has_delivery_location: !!form.lokacijaIsporuke.trim(),
      has_delivery_lift: !!form.liftIsporuke,
      has_items_list: !!form.popisStvari.trim(),
      payment_method: form.placanje,
      has_date_time: !!form.datum,
      has_comments: !!form.komentar.trim(),
    })

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
    )

    isFormSubmitted.value = true
    window.scrollTo(0, 0)
  } catch (error: unknown) {
    console.error('Form submission error:', error)
    trackingService.trackError('contact_form_submit_error', error)
    submitError.value =
      'Došlo je do greške prilikom slanja upita. Molimo pokušajte ponovno ili nas kontaktirajte direktno.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-view">
    <div class="container contact-view__inner">
      <nav class="breadcrumb" aria-label="Putanja">
        <RouterLink to="/">Početna</RouterLink>
        <span aria-hidden="true">/</span>
        <strong>Zatraži ponudu</strong>
      </nav>

      <div v-if="isFormSubmitted" class="card thank-you">
        <span class="thank-you__icon"><AppIcon name="check" :size="28" :stroke-width="2.5" /></span>
        <h1>Hvala Vam što ste nas kontaktirali!</h1>
        <p>Uskoro ćemo Vam se javiti s ponudom.</p>
        <RouterLink to="/" class="btn btn-secondary">Natrag na početnu</RouterLink>
      </div>

      <template v-else>
        <div class="contact-view__heading">
          <p class="eyebrow">Zatraži ponudu</p>
          <h1>Recite nam što prevozimo. Mi javimo cijenu i termin.</h1>
          <p class="lead">
            Obvezna su samo tri polja. Sve ostalo nam pomaže da ponuda bude točna već u prvom
            javljanju.
          </p>
        </div>

        <div class="contact-grid">
          <aside class="contact-aside">
            <div class="card contact-aside__card">
              <h2>Radije razgovor?</h2>
              <ContactInfo show-facebook />
            </div>
            <div class="contact-aside__help">
              <h2>Što nam pomaže za točnu ponudu</h2>
              <ul>
                <li v-for="item in helpItems" :key="item">
                  <AppIcon name="check" :size="18" :stroke-width="2.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </aside>

          <form class="card contact-form" novalidate @submit.prevent="submitForm">
            <fieldset class="form-section">
              <legend>
                <span class="form-section__number">1</span>
                <span class="form-section__title">Vaši podaci</span>
              </legend>
              <div class="form-section__fields">
                <div class="form-row">
                  <div class="form-group">
                    <label for="ime">Ime i prezime <span class="required">*</span></label>
                    <input
                      id="ime"
                      v-model="form.ime"
                      type="text"
                      autocomplete="name"
                      :class="{ error: errors.ime }"
                      @blur="validateName"
                    />
                    <span v-if="errors.ime" class="error-message">{{ errors.ime }}</span>
                  </div>
                  <div class="form-group">
                    <label for="telefon">Broj telefona <span class="required">*</span></label>
                    <input
                      id="telefon"
                      v-model="form.telefon"
                      type="tel"
                      autocomplete="tel"
                      :class="{ error: errors.telefon }"
                      placeholder="+385 XX XXX XXXX"
                      @blur="validatePhone"
                    />
                    <span v-if="errors.telefon" class="error-message">{{ errors.telefon }}</span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">E-mail adresa <span class="required">*</span></label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    :class="{ error: errors.email }"
                    placeholder="vas.email@primjer.com"
                    @blur="validateEmail"
                  />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>

                <label class="pill pill--check">
                  <input id="trebamR1Racun" v-model="form.trebamR1Racun" type="checkbox" />
                  Trebam R1 račun (na firmu)
                </label>

                <div v-if="form.trebamR1Racun" class="company-fields">
                  <div class="form-row">
                    <div class="form-group">
                      <label for="nazivFirme">Naziv firme <span class="required">*</span></label>
                      <input
                        id="nazivFirme"
                        v-model="form.nazivFirme"
                        type="text"
                        :class="{ error: errors.nazivFirme }"
                        @blur="validateCompanyName"
                      />
                      <span v-if="errors.nazivFirme" class="error-message">{{
                        errors.nazivFirme
                      }}</span>
                    </div>
                    <div class="form-group">
                      <label for="oibFirme">OIB firme <span class="required">*</span></label>
                      <input
                        id="oibFirme"
                        v-model="form.oibFirme"
                        type="text"
                        inputmode="numeric"
                        :class="{ error: errors.oibFirme }"
                        placeholder="11 znamenki"
                        maxlength="11"
                        @blur="validateCompanyOIB"
                      />
                      <span v-if="errors.oibFirme" class="error-message">{{
                        errors.oibFirme
                      }}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="adresaFirme">Adresa firme</label>
                    <input id="adresaFirme" v-model="form.adresaFirme" type="text" />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset class="form-section">
              <legend>
                <span class="form-section__number">2</span>
                <span class="form-section__title">Detalji prijevoza</span>
              </legend>
              <div class="form-section__fields">
                <div class="form-row">
                  <div class="form-group">
                    <label for="datum">Željeni datum</label>
                    <input id="datum" v-model="form.datum" type="date" />
                  </div>
                  <div class="form-group">
                    <label for="vrijeme">Vrijeme</label>
                    <input id="vrijeme" v-model="form.vrijeme" type="time" />
                  </div>
                </div>

                <div class="form-row form-row--address">
                  <div class="form-group">
                    <label for="lokacijaPreuzimanja">Adresa preuzimanja</label>
                    <input
                      id="lokacijaPreuzimanja"
                      v-model="form.lokacijaPreuzimanja"
                      type="text"
                      placeholder="Ulica i broj, grad"
                    />
                  </div>
                  <div class="form-group">
                    <span class="form-label">Ima lift?</span>
                    <div class="pill-group">
                      <label class="pill">
                        <input
                          v-model="form.liftPreuzimanja"
                          type="radio"
                          value="da"
                          name="liftPreuzimanja"
                        />
                        Da
                      </label>
                      <label class="pill">
                        <input
                          v-model="form.liftPreuzimanja"
                          type="radio"
                          value="ne"
                          name="liftPreuzimanja"
                        />
                        Ne
                      </label>
                    </div>
                  </div>
                </div>

                <div class="form-row form-row--address">
                  <div class="form-group">
                    <label for="lokacijaIsporuke">Adresa isporuke</label>
                    <input
                      id="lokacijaIsporuke"
                      v-model="form.lokacijaIsporuke"
                      type="text"
                      placeholder="Ulica i broj, grad"
                    />
                  </div>
                  <div class="form-group">
                    <span class="form-label">Ima lift?</span>
                    <div class="pill-group">
                      <label class="pill">
                        <input
                          v-model="form.liftIsporuke"
                          type="radio"
                          value="da"
                          name="liftIsporuke"
                        />
                        Da
                      </label>
                      <label class="pill">
                        <input
                          v-model="form.liftIsporuke"
                          type="radio"
                          value="ne"
                          name="liftIsporuke"
                        />
                        Ne
                      </label>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="popisStvari">Popis stvari s dimenzijama</label>
                  <textarea
                    id="popisStvari"
                    v-model="form.popisStvari"
                    rows="4"
                    placeholder="npr. kauč 200×90×80 cm, ormar 200×60×50 cm, 10 kutija"
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <fieldset class="form-section">
              <legend>
                <span class="form-section__number">3</span>
                <span class="form-section__title">Plaćanje i napomene</span>
              </legend>
              <div class="form-section__fields">
                <div class="form-group">
                  <span class="form-label">Način plaćanja <span class="required">*</span></span>
                  <div class="pill-group">
                    <label class="pill">
                      <input
                        v-model="form.placanje"
                        type="radio"
                        value="gotovina"
                        name="placanje"
                        @change="validatePayment"
                      />
                      Gotovina
                    </label>
                    <label class="pill">
                      <input
                        v-model="form.placanje"
                        type="radio"
                        value="internet-bankarstvo"
                        name="placanje"
                        @change="validatePayment"
                      />
                      Internet bankarstvo
                    </label>
                  </div>
                  <span v-if="errors.placanje" class="error-message">{{ errors.placanje }}</span>
                </div>

                <div class="form-group">
                  <label for="komentar">Dodatne informacije</label>
                  <textarea
                    id="komentar"
                    v-model="form.komentar"
                    rows="3"
                    placeholder="Posebni zahtjevi, pitanja, napomene o pristupu zgradi"
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <div class="form-actions">
              <ButtonPrimary type="submit" button-class="submit-btn" :disabled="isSubmitting">
                <span v-if="isSubmitting">Šalje se...</span>
                <span v-else>Pošalji upit</span>
              </ButtonPrimary>
              <p class="form-actions__note">
                Odgovaramo u najkraćem roku. Podatke koristimo samo za izradu ponude. Polja označena
                sa <span class="required">*</span> su obvezna.
              </p>
              <div v-if="submitError" class="submit-error" role="alert">{{ submitError }}</div>
            </div>
          </form>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.contact-view__inner {
  padding-top: 32px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-view__heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 820px;
}

.contact-view__heading h1 {
  font-size: clamp(40px, 4.6vw, 68px);
  line-height: 0.98;
}

.contact-view__heading .lead {
  font-size: 18px;
  max-width: 640px;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 32px;
  align-items: start;
}

.contact-aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: calc(var(--header-height) + 24px);
}

.contact-aside__card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-aside__card h2 {
  font-size: 28px;
}

.contact-aside__help {
  background: var(--tint);
  border-radius: var(--radius-md);
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-aside__help h2 {
  font-size: 22px;
}

.contact-aside__help ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 15px;
}

.contact-aside__help li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-aside__help svg {
  color: var(--accent);
}

.contact-form {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.form-section {
  border: 0;
  min-width: 0;
}

.form-section legend {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.form-section__number {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.form-section__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 28px;
  line-height: 1;
}

.form-section__fields {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: 18px;
}

.form-row--address {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label,
.form-label {
  font-size: 14px;
  font-weight: 600;
}

.required {
  color: var(--accent);
}

.pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 16px;
  border: 1.5px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
}

.pill:hover {
  border-color: var(--ink);
}

.pill:has(input:checked) {
  border-color: var(--ink);
  background: var(--tint-2);
}

.pill--check {
  align-self: flex-start;
}

.company-fields {
  border: 1.5px dashed var(--line-strong);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #f9fafc;
}

input.error,
textarea.error {
  border-color: var(--accent);
}

.error-message {
  color: var(--accent);
  font-size: 0.875rem;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-actions :deep(.submit-btn) {
  width: 100%;
  height: 56px;
  font-size: 17px;
}

.form-actions__note {
  font-size: 14px;
  color: var(--muted);
  text-align: center;
}

.submit-error {
  background: #fbe9eb;
  color: var(--accent-dark);
  padding: 1rem;
  border-radius: var(--radius-sm);
  text-align: center;
  font-weight: 500;
}

.thank-you {
  padding: 56px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 640px;
  margin: 0 auto;
}

.thank-you__icon {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: var(--tint);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.thank-you h1 {
  font-size: 40px;
}

.thank-you p {
  color: var(--muted);
  font-size: 18px;
}

@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-aside {
    position: static;
  }
}

@media (max-width: 760px) {
  .contact-view__inner {
    padding-bottom: 64px;
  }

  .contact-form {
    padding: 24px 16px;
    gap: 32px;
  }

  .form-row--address {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

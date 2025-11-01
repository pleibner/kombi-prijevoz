<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import emailjs from '@emailjs/browser'

const router = useRouter()

// Scroll to top when component is mounted
onMounted(async () => {
  await nextTick()
  window.scrollTo(0, 0)
})

// Form data
const form = reactive({
  ime: '',
  email: '',
  telefon: '',
  datumVrijeme: '',
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
  adresaFirme: ''
})

// Form validation
const errors = reactive({
  ime: '',
  email: '',
  telefon: '',
  datumVrijeme: '',
  lokacijaPreuzimanja: '',
  liftPreuzimanja: '',
  lokacijaIsporuke: '',
  liftIsporuke: '',
  popisStvari: '',
  placanje: '',
  komentar: '',
  nazivFirme: '',
  oibFirme: '',
  adresaFirme: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitError = ref('')
const isFormSubmitted = ref(false)

// Field validation functions
const validateName = () => {
  errors.ime = '';
  if (!form.ime.trim()) {
    errors.ime = 'Upišite ime.';
    return false;
  }
  return true;
};

const validateEmail = () => {
  errors.email = '';
  if (!form.email.trim()) {
    errors.email = 'Upišite e-mail adresu.';
    return false;
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Unesite valjanu e-mail adresu.';
    return false;
  }
  return true;
};

const validatePhone = () => {
  errors.telefon = '';
  if (!form.telefon.trim()) {
    errors.telefon = 'Upišite broj telefona.';
    return false;
  } else {
    // Allow spaces and dashes anywhere in the phone number
    const cleaned = form.telefon.trim().replace(/[\s-/]/g, '');
    // After removing spaces/dashes, validate the core number
    if (!/^(\+\d{1,4})?\d{6,14}$/.test(cleaned)) {
      errors.telefon = 'Upišite valjani broj telefona.';
      return false;
    }
  }
  return true;
};


const validatePayment = () => {
  errors.placanje = '';
  if (!form.placanje) {
    errors.placanje = 'Odaberite način plaćanja.';
    return false;
  }
  return true;
};

const validateCompanyName = () => {
  errors.nazivFirme = '';
  if (form.trebamR1Racun && !form.nazivFirme.trim()) {
    errors.nazivFirme = 'Upišite naziv firme.';
    return false;
  }
  return true;
};

const validateCompanyOIB = () => {
  errors.oibFirme = '';
  if (form.trebamR1Racun && !form.oibFirme.trim()) {
    errors.oibFirme = 'Upišite OIB firme.';
    return false;
  } else if (form.trebamR1Racun && form.oibFirme.trim() && !/^\d{11}$/.test(form.oibFirme.trim())) {
    errors.oibFirme = 'OIB mora imati 11 znamenki.';
    return false;
  }
  return true;
};

// Validation function
const validateForm = () => {
  let isValid = true

  // Validate required fields
  if (!validateName()) isValid = false
  if (!validateEmail()) isValid = false
  if (!validatePhone()) isValid = false
  if (!validatePayment()) isValid = false

  // Validate company fields if R1 invoice is requested
  if (form.trebamR1Racun) {
    if (!validateCompanyName()) isValid = false
    if (!validateCompanyOIB()) isValid = false
  }

  return isValid
}

// Initialize EmailJS
emailjs.init({publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY});

// Submit form
const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitError.value = ''
  submitMessage.value = ''

  try {
    // Prepare email template parameters
    const templateParams = {
      ime: form.ime,
      email: form.email,
      telefon: form.telefon,
      datum_vrijeme: form.datumVrijeme,
      lokacija_preuzimanja: form.lokacijaPreuzimanja,
      lift_preuzimanja: form.liftPreuzimanja === 'da' ? 'Da' : 'Ne',
      lokacija_isporuke: form.lokacijaIsporuke,
      lift_isporuke: form.liftIsporuke === 'da' ? 'Da' : 'Ne',
      popis_stvari: form.popisStvari,
      placanje: form.placanje === 'gotovina' ? 'Gotovina' : 'Internet bankarstvo',
      komentar: form.komentar || 'Nema dodatnih komentara',
      r1_racun: form.trebamR1Racun ? 'Da' : 'Ne',
      naziv_firme: form.nazivFirme,
      oib_firme: form.oibFirme,
      adresa_firme: form.adresaFirme,
      send_to: import.meta.env.VITE_AUTOMATIC_EMAIL_RECEIVER,
      reply_to: form.email
    }

    // Send email using EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    )

    isFormSubmitted.value = true
  } catch (error: unknown) {
    console.error('Form submission error:', error)
    submitError.value = 'Došlo je do greške prilikom slanja upita. Molimo pokušajte ponovno ili nas kontaktirajte direktno.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-view">
    <div class="container">
      <button @click="router.back()" class="back-button" aria-label="Go back">
        ← Natrag
      </button>
      <!-- Thank you message after successful submission -->
      <div v-if="isFormSubmitted" class="thank-you-message">
        <div class="thank-you-content">
          <h2>Hvala Vam što ste nas kontaktirali!</h2>
          <p>Uskoro ćemo Vam se javiti s ponudom.</p>
        </div>
      </div>

      <!-- Contact form (only show if not submitted) -->
      <template v-else>
        <h1>Kontaktirajte nas</h1>
        <p class="subtitle">Ispunite obrazac za besplatnu procjenu i ugovaranje Vašeg prijevoza</p>
        <form @submit.prevent="submitForm" class="contact-form">
  
          <!-- Personal Information -->
          <div class="form-section">
            <h2>Osobni podaci</h2>
  
            <div class="form-group">
              <label for="ime">Ime *</label>
              <input
                id="ime"
                v-model="form.ime"
                type="text"
                :class="{ 'error': errors.ime }"
                @blur="validateName"
              />
              <span v-if="errors.ime" class="error-message">{{ errors.ime }}</span>
            </div>
  
            <div class="form-row">
              <div class="form-group">
                <label for="email">E-mail adresa *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  :class="{ 'error': errors.email }"
                  placeholder="vas.email@primjer.com"
                  @blur="validateEmail"
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>
  
              <div class="form-group">
                <label for="telefon">Broj telefona *</label>
                <input
                  id="telefon"
                  v-model="form.telefon"
                  type="tel"
                  :class="{ 'error': errors.telefon }"
                  placeholder="+385 XX XXX XXXX"
                  @blur="validatePhone"
                />
                <span v-if="errors.telefon" class="error-message">{{ errors.telefon }}</span>
            </div>
          </div>

          <!-- R1 Invoice Checkbox -->
          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input
                id="trebamR1Racun"
                v-model="form.trebamR1Racun"
                type="checkbox"
              />
              <span class="checkmark"></span>
              Trebam R1 račun
            </label>
          </div>

          <!-- Company Information (shown when checkbox is checked) -->
          <div v-if="form.trebamR1Racun" class="company-fields">
            <div class="form-row">
              <div class="form-group">
                <label for="nazivFirme">Naziv firme *</label>
                <input
                  id="nazivFirme"
                  v-model="form.nazivFirme"
                  type="text"
                  :class="{ 'error': errors.nazivFirme }"
                  @blur="validateCompanyName"
                />
                <span v-if="errors.nazivFirme" class="error-message">{{ errors.nazivFirme }}</span>
              </div>

              <div class="form-group">
                <label for="oibFirme">OIB firme *</label>
                <input
                  id="oibFirme"
                  v-model="form.oibFirme"
                  type="text"
                  :class="{ 'error': errors.oibFirme }"
                  placeholder="11 znamenki"
                  maxlength="11"
                  @blur="validateCompanyOIB"
                />
                <span v-if="errors.oibFirme" class="error-message">{{ errors.oibFirme }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="adresaFirme">Adresa firme</label>
              <input
                id="adresaFirme"
                v-model="form.adresaFirme"
                type="text"
                :class="{ 'error': errors.adresaFirme }"
              />
              <span v-if="errors.adresaFirme" class="error-message">{{ errors.adresaFirme }}</span>
            </div>
          </div>
        </div>
  
          <!-- Transport Details -->
          <div class="form-section">
            <h2>Detalji prijevoza</h2>
  
            <div class="form-group">
              <label for="datumVrijeme">Datum i vrijeme</label>
              <input
                id="datumVrijeme"
                v-model="form.datumVrijeme"
                type="datetime-local"
                :class="{ 'error': errors.datumVrijeme }"
              />
              <span v-if="errors.datumVrijeme" class="error-message">{{ errors.datumVrijeme }}</span>
            </div>
  
            <div class="form-row">
              <div class="form-group">
                <label for="lokacijaPreuzimanja">Lokacija preuzimanja</label>
                <input
                  id="lokacijaPreuzimanja"
                  v-model="form.lokacijaPreuzimanja"
                  type="text"
                  :class="{ 'error': errors.lokacijaPreuzimanja }"
                />
                <span v-if="errors.lokacijaPreuzimanja" class="error-message">{{ errors.lokacijaPreuzimanja }}</span>
              </div>
  
              <div class="form-group">
                <label for="lokacijaIsporuke">Lokacija isporuke</label>
                <input
                  id="lokacijaIsporuke"
                  v-model="form.lokacijaIsporuke"
                  type="text"
                  :class="{ 'error': errors.lokacijaIsporuke }"
                />
                <span v-if="errors.lokacijaIsporuke" class="error-message">{{ errors.lokacijaIsporuke }}</span>
              </div>
            </div>
  
            <div class="form-row">
              <div class="form-group">
                <label for="liftPreuzimanja-da">Ima lift?</label>
                <div class="radio-group">
                  <div class="radio-option">
                    <input
                      id="liftPreuzimanja-da"
                      v-model="form.liftPreuzimanja"
                      type="radio"
                      value="da"
                      name="liftPreuzimanja"
                    />
                    <label for="liftPreuzimanja-da" class="radio-text">Da</label>
                  </div>
                  <div class="radio-option">
                    <input
                      id="liftPreuzimanja-ne"
                      v-model="form.liftPreuzimanja"
                      type="radio"
                      value="ne"
                      name="liftPreuzimanja"
                    />
                    <label for="liftPreuzimanja-ne" class="radio-text">Ne</label>
                  </div>
                </div>
                <span v-if="errors.liftPreuzimanja" class="error-message">{{ errors.liftPreuzimanja }}</span>
              </div>
  
              <div class="form-group">
                <label for="liftIsporuke-da">Ima lift?</label>
                <div class="radio-group">
                  <div class="radio-option">
                    <input
                      id="liftIsporuke-da"
                      v-model="form.liftIsporuke"
                      type="radio"
                      value="da"
                      name="liftIsporuke"
                    />
                    <label for="liftIsporuke-da" class="radio-text">Da</label>
                  </div>
                  <div class="radio-option">
                    <input
                      id="liftIsporuke-ne"
                      v-model="form.liftIsporuke"
                      type="radio"
                      value="ne"
                      name="liftIsporuke"
                    />
                    <label for="liftIsporuke-ne" class="radio-text">Ne</label>
                  </div>
                </div>
                <span v-if="errors.liftIsporuke" class="error-message">{{ errors.liftIsporuke }}</span>
              </div>
            </div>
  
            <div class="form-group">
              <label for="popisStvari">Popis stvari s dimenzijama</label>
              <textarea
                id="popisStvari"
                v-model="form.popisStvari"
                :class="{ 'error': errors.popisStvari }"
                placeholder="Npr: Sofa 200x90x80cm, stol 120x80x75cm, 3 stolice..."
                rows="4"
              ></textarea>
              <span v-if="errors.popisStvari" class="error-message">{{ errors.popisStvari }}</span>
            </div>
  
            <div class="form-group">
              <label for="placanje-gotovina">Plaćanje *</label>
              <div class="radio-group">
                <div class="radio-option">
                  <input
                    id="placanje-gotovina"
                    v-model="form.placanje"
                    type="radio"
                    value="gotovina"
                    name="placanje"
                    @change="validatePayment"
                  />
                  <label for="placanje-gotovina" class="radio-text">Gotovina</label>
                </div>
                <div class="radio-option">
                  <input
                    id="placanje-internet"
                    v-model="form.placanje"
                    type="radio"
                    value="internet-bankarstvo"
                    name="placanje"
                    @change="validatePayment"
                  />
                  <label for="placanje-internet" class="radio-text">Internet bankarstvo</label>
                </div>
              </div>
              <span v-if="errors.placanje" class="error-message">{{ errors.placanje }}</span>
            </div>
  
            <div class="form-group">
              <label for="komentar">Dodatne informacije</label>
              <textarea
                id="komentar"
                v-model="form.komentar"
                placeholder="Dodatne informacije, posebni zahtjevi ili pitanja..."
                rows="3"
              ></textarea>
            </div>
          </div>
  
  
          <!-- Submit Button -->
          <div class="form-actions">
            <ButtonPrimary
              button-class="submit-btn"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Šalje se...</span>
              <span v-else>Pošaljite upit</span>
            </ButtonPrimary>
          </div>
  
          <!-- Messages -->
          <div v-if="submitMessage" class="success-message">
            {{ submitMessage }}
          </div>
          <div v-if="submitError" class="error-message">
            {{ submitError }}
          </div>
        </form>
      </template>
    </div>
  </div>
</template>

<style scoped>
.contact-view {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: var(--light-bg, #f9f9f9);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}

.back-button {
  background: transparent;
  border: none;
  color: var(--primary-color, #ef4444);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.back-button:hover {
  color: var(--text-color, #333);
}

h1 {
  text-align: center;
  color: var(--text-color, #333);
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-section {
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h2 {
  color: var(--primary-color, #ef4444);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 600;
  color: var(--text-color, #333);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color, #ef4444);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ef4444;
}

.radio-group {
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
}

.radio-option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-option input[type="radio"] {
  margin-right: 0.5rem;
  width: 18px;
  height: 18px;
  accent-color: var(--primary-color, #ef4444);
}

label.radio-text {
  font-size: 1rem;
  color: var(--text-color, #333);
  cursor: pointer;
  margin: 0;
}

/* Checkbox styling */
.checkbox-group {
  margin-bottom: 1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color, #333);
  margin-bottom: 0;
}

.checkbox-label input[type="checkbox"] {
  margin-right: 0.75rem;
  width: 18px;
  height: 18px;
  accent-color: var(--primary-color, #ef4444);
  cursor: pointer;
}

.company-fields {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e1e5e9;
  margin-top: 1rem;
}

.company-fields .form-group {
  margin-bottom: 1.5rem;
}

.company-fields .form-group:last-child {
  margin-bottom: 0;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.success-message {
  background: #d1fae5;
  color: #065f46;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #a7f3d0;
  text-align: center;
  font-weight: 500;
}

.thank-you-message {
  background: #d1fae5;
  color: #065f46;
  padding: 3rem;
  border-radius: 12px;
  border: 2px solid #a7f3d0;
  text-align: center;
  margin: 2rem 0;
}

.thank-you-content h2 {
  color: #065f46;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.thank-you-content p {
  color: #065f46;
  font-size: 1.2rem;
  margin: 0;
  font-weight: 500;
}

.form-actions {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.submit-btn {
  min-width: 200px;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-view {
    padding: 2rem 1rem;
  }

  .container {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .radio-group {
    flex-direction: column;
    gap: 1rem;
  }

  .form-section h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.5rem;
  }

  .contact-form {
    gap: 1.5rem;
  }

  .form-section {
    padding-bottom: 1.5rem;
  }
}
</style>

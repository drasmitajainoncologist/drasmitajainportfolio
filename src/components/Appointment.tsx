import { useState } from 'react'

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
]

const reasons = [
  'Medical Oncology Consultation',
  'Chemotherapy & Systemic Therapy Evaluation',
  'Clinical Hematology Assessment',
  'Radiation Oncology Review',
  'Cancer Survivorship & Follow-up',
  'Second Opinion',
  'Other',
]

type FieldState = 'default' | 'error'

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  reason: string
  message: string
}

const emptyForm: FormData = { name: '', phone: '', email: '', date: '', time: '', reason: '', message: '' }

function inputClass(state: FieldState = 'default') {
  const base =
    'w-full border rounded-lg px-4 py-3 text-sm text-navy placeholder:text-muted-fg focus:outline-none focus:ring-2 transition-colors duration-150 bg-white'
  return state === 'error'
    ? `${base} border-red-400 focus:border-red-400 focus:ring-red-100`
    : `${base} border-border-col focus:border-primary focus:ring-primary/10`
}

export default function Appointment() {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const validate = () => {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.email.trim()) e.email = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.date) e.date = 'Please select a preferred date'
    if (!form.time) e.time = 'Please select a preferred time'
    if (!form.reason) e.reason = 'Please select a reason for consultation'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    setServerError(null)

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true)
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: '98edd0a6-a0f6-4f9c-8861-2f2316d90e7f',
            subject: `New Appointment Booking Request from ${form.name}`,
            from_name: 'Doctor Portfolio Booking System',
            name: form.name,
            phone: form.phone,
            email: form.email,
            date: form.date,
            time: form.time,
            reason: form.reason,
            message: form.message || 'No additional message provided.',
          }),
        })

        const data = await response.json()
        if (data.success) {
          setSubmitted(true)
        } else {
          setServerError(data.message || 'Failed to send appointment request. Please try again.')
        }
      } catch (err) {
        setServerError('Network error. Please check your connection and try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Book a Visit</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-5 leading-tight">
              Schedule Your Consultation
            </h2>
            <p className="text-muted-fg text-[15px] leading-relaxed mb-8">
              Schedule a consultation with Dr. Asmita Jain for personalized oncology care. Complete the form and our clinical team will confirm your appointment.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {/* Call now */}
              <a
                href="tel:+919717289800"
                className="flex items-center gap-4 p-4 border border-border-col rounded-xl hover:border-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="group-hover:[&_path]:stroke-white transition-colors">
                    <path d="M3 3h4l1.5 3.5-2 1.5c1 2 3 4 5 5l1.5-2L16.5 12.5 16.5 16h-3c-5.5 0-10-6-10-11V3z" stroke="#1A5FAB" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Call Direct</p>
                  <p className="text-muted-fg text-xs">+91 9717289800 / +91 9911581342</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:drasmitajainoncologist@gmail.com"
                className="flex items-center gap-4 p-4 border border-border-col rounded-xl hover:border-teal transition-colors group"
              >
                <div className="w-10 h-10 bg-teal-light rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="#0FADA0" strokeWidth="1.5" />
                    <path d="M2 7l7 4 7-4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Email Consultation</p>
                  <p className="text-muted-fg text-xs break-all">drasmitajainoncologist@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Assurance note */}
            <div className="flex gap-2 items-start text-xs text-muted-fg bg-slate-bg rounded-lg p-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M8 1L2 4v4c0 3.5 2.5 6.75 6 7.5C11.5 14.75 14 11.5 14 8V4L8 1z" stroke="#1A5FAB" strokeWidth="1.25" strokeLinejoin="round" />
                <path d="M5.5 8l2 2 3.5-3" stroke="#0FADA0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Your information is kept strictly confidential and is used only to confirm your appointment.
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-teal-light border border-teal rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M6 14l5.5 5.5L22 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-2">Appointment Request Received</h3>
                <p className="text-muted-fg text-sm mb-6">
                  Thank you, {form.name.split(' ')[0]}. Our clinical team will contact you to
                  confirm your consultation with Dr. Asmita Jain.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(emptyForm) }}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-bg rounded-2xl border border-border-col p-7 lg:p-8"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apt-name"
                      type="text"
                      placeholder="Rajesh Sharma"
                      value={form.name}
                      onChange={set('name')}
                      className={inputClass(errors.name ? 'error' : 'default')}
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-phone">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apt-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={set('phone')}
                      className={inputClass(errors.phone ? 'error' : 'default')}
                      autoComplete="tel"
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apt-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set('email')}
                      className={inputClass(errors.email ? 'error' : 'default')}
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>

                  {/* Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-date">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apt-date"
                      type="date"
                      value={form.date}
                      onChange={set('date')}
                      min={new Date().toISOString().split('T')[0]}
                      className={inputClass(errors.date ? 'error' : 'default')}
                    />
                    {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                  </div>

                  {/* Time */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-time">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="apt-time"
                      value={form.time}
                      onChange={set('time')}
                      className={inputClass(errors.time ? 'error' : 'default')}
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
                  </div>

                  {/* Reason */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-reason">
                      Reason for Consultation <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="apt-reason"
                      value={form.reason}
                      onChange={set('reason')}
                      className={inputClass(errors.reason ? 'error' : 'default')}
                    >
                      <option value="">Select a reason</option>
                      {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    {errors.reason && <p className="text-xs text-red-500">{errors.reason}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 mb-6">
                  <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-message">
                    Additional Information
                  </label>
                  <textarea
                    id="apt-message"
                    rows={4}
                    placeholder="Briefly describe your symptoms, current medications, or any other information that may help us prepare for your consultation..."
                    value={form.message}
                    onChange={set('message')}
                    className={`${inputClass('default')} resize-none`}
                  />
                </div>

                {serverError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs font-medium">
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold text-sm py-3.5 rounded-lg hover:bg-primary-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Request...
                    </>
                  ) : (
                    'Request Appointment'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

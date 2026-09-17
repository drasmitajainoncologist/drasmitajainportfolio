import { useState } from 'react'

const faqs = [
  {
    question: 'How can I book a consultation with Dr. Asmita Jain?',
    answer:
      'You can request a consultation using the online booking form on this website or by contacting +91-9717289800 / +91-9911581342. Appointments are held at Action Cancer Hospital, Paschim Vihar, New Delhi.',
  },
  {
    question: 'What reports should I bring for an initial oncology evaluation?',
    answer:
      'Please bring all available medical records including biopsy/histopathology reports, PET-CT/CT scan imaging and reports, recent blood investigations, previous treatment summaries, and a complete list of your current medications.',
  },
  {
    question: 'What core specialities does Dr. Asmita Jain cover?',
    answer:
      'Dr. Asmita Jain specializes in Medical Oncology, Hematology, and Radiation Oncology. Her academic credentials include DrNB in Medical Oncology, MD in Radiation Oncology, MBA in Healthcare Management, ESMO certification, and Harvard Medical School Executive Education.',
  },
  {
    question: 'Are follow-up consultations and survivorship care provided?',
    answer:
      'Yes. Comprehensive follow-up evaluations, regular monitoring, and post-treatment survivorship care are integral to Dr. Jain’s medical oncology care philosophy.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Common Questions</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-5 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-fg text-[15px] leading-relaxed mb-8">
              Have a question before booking? We have answered the most common queries below. If
              you need more information, please do not hesitate to call or message us.
            </p>
            <div className="rounded-xl overflow-hidden bg-slate-bg aspect-[4/3] max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?w=480&h=360&fit=crop&auto=format"
                alt="Dr. Asmita Jain speaking with a patient in consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                    isOpen ? 'border-primary' : 'border-border-col'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-semibold text-[15px] leading-snug ${isOpen ? 'text-primary' : 'text-navy'}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors duration-200 ${
                        isOpen ? 'bg-primary border-primary' : 'border-border-col'
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path
                          d="M2 4l4 4 4-4"
                          stroke={isOpen ? 'white' : '#4A5D7A'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-muted-fg text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

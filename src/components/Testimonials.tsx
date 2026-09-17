const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Discuss concerns, medical history, current symptoms, and available diagnostic reports.',
  },
  {
    number: '02',
    title: 'Evaluation',
    description: 'Review relevant diagnostic information, pathology findings, and understand the condition thoroughly.',
  },
  {
    number: '03',
    title: 'Treatment Planning',
    description: 'Discuss appropriate treatment options and develop an individualized treatment approach tailored to the patient.',
  },
  {
    number: '04',
    title: 'Follow-up',
    description: 'Continue regular monitoring, treatment response assessments, and supportive care as appropriate.',
  },
]

export default function Testimonials() {
  return (
    <section id="journey" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Patient Guidance</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">Your Cancer Care Journey</h2>
          <p className="text-muted-fg text-[15px] max-w-xl mx-auto">
            A structured, step-by-step approach to initial consultation, comprehensive evaluation, and ongoing management.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-bg rounded-2xl border border-border-col p-7 flex flex-col justify-between hover:border-primary transition-all duration-200"
            >
              <div>
                <span className="font-serif text-4xl text-primary font-bold block mb-4">{step.number}</span>
                <h3 className="font-serif text-xl text-navy mb-3">{step.title}</h3>
                <p className="text-muted-fg text-sm leading-relaxed mb-6">{step.description}</p>
              </div>
              <div className="w-8 h-0.5 bg-teal" />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 bg-primary-light rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-navy mb-2">Ready to Schedule a Consultation?</h3>
            <p className="text-muted-fg text-sm">Our medical oncology care team is here to assist you through every step.</p>
          </div>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-primary-dark transition-colors duration-200 shrink-0"
          >
            Book Your Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

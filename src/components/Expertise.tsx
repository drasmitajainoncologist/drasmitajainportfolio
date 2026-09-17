const areas = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M14 9v5l3 3" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14c0-2.21 1.79-4 4-4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Medical Oncology',
    description:
      'Expertise in Medical Oncology and the management of cancer through systemic treatment approaches.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 6c-1.5 0-4 1.5-4 5 0 5 4 8 4 8s4-3 4-8c0-3.5-2.5-5-4-5z" stroke="#1A5FAB" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 18h16" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 22h12" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Hematology',
    description:
      'Clinical expertise in Hematology as part of comprehensive oncology care.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M8 15l3-3 3 4 2-2 3 3" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12h20" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Radiation Oncology',
    description:
      'Specialised training and clinical experience in Radiation Oncology, supported by an MD in Radiation Oncology and Fellowship in Advanced Radiation Techniques.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M14 10v4l3 2" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 6L8 4M18 6l2-2" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Hospital Management',
    description:
      'Healthcare management knowledge supported by an MBA in Healthcare Management.',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Specialist Knowledge</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">Areas of Expertise</h2>
          <p className="text-muted-fg text-[15px] max-w-xl mx-auto">
            Comprehensive Cancer Care Across Multiple Specialities
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {areas.map((area) => (
            <article
              key={area.title}
              className="bg-white rounded-xl p-6 border border-border-col hover:border-primary hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-200">
                  <div className="group-hover:[&_path]:stroke-white transition-all duration-200">
                    {area.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{area.title}</h3>
                <p className="text-muted-fg text-sm leading-relaxed mb-4">{area.description}</p>
              </div>
              <a
                href="#experience"
                className="text-primary text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
              >
                Explore Details
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

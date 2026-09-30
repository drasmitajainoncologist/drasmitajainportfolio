const timeline = [
  {
    year: 'May 2025 – Present',
    role: 'Consultant – Medical Oncology',
    institution: 'Action Cancer Hospital, Paschim Vihar, New Delhi',
    description:
      'Providing specialized outpatient and inpatient medical oncology care, systemic cancer therapy planning, and clinical consultations.',
    type: 'current',
  },
  {
    year: 'Apr 2022 – Apr 2025',
    role: 'DrNB Registrar – Medical Oncology',
    institution: 'Action Cancer Hospital, Paschim Vihar, New Delhi',
    description:
      'Supervised clinical management of solid organ malignancies and hematological cancers under the DrNB Medical Oncology residency program.',
    type: 'fellowship',
  },
  {
    year: '2019 – 2022',
    role: 'Senior Consultant – Department of Medical Oncology',
    institution: 'Primus Superspeciality Hospital, New Delhi',
    description:
      'Led medical oncology patient care, systemic chemotherapy administration, and multi-disciplinary tumor board evaluations.',
    type: 'work',
  },
  {
    year: '2007 – 2019',
    role: 'Senior Resident → Clinical Oncology In-charge',
    institution: 'Delhi State Cancer Institute (DSCI), West Branch',
    description:
      'Over 12 years of dedicated service managing outpatient clinics, radiation planning, chemotherapy units, and clinical administration.',
    type: 'work',
  },
  {
    year: '2006 – 2007',
    role: 'Consultant – Radiation Oncology',
    institution: 'Adesh Charitable Cancer Hospital, Muktsar',
    description:
      'Clinical consultation and radiation therapy administration for cancer patients in regional cancer care settings.',
    type: 'work',
  },
]

const typeColors: Record<string, string> = {
  current: 'bg-teal text-white',
  work: 'bg-primary text-white',
  fellowship: 'bg-navy text-white',
  education: 'bg-muted-bg text-muted-fg',
}

const typeLabels: Record<string, string> = {
  current: 'Current Role',
  work: 'Clinical Role',
  fellowship: 'Specialist Registrar',
  education: 'Academic Degree',
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Career Path</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">Professional Experience</h2>
          <p className="text-muted-fg text-[15px] max-w-xl mx-auto">
            23+ Years of Clinical Experience in Oncology across premier cancer institutes and superspeciality hospitals.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border-col hidden sm:block" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative sm:pl-20">
                {/* Dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-16 items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-primary bg-white z-10" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl border border-border-col p-6 hover:border-primary transition-colors duration-200">
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <span className="font-serif text-lg lg:text-xl font-bold text-primary shrink-0">{item.year}</span>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider self-center ${typeColors[item.type]}`}>
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-navy text-base mb-1">{item.role}</h3>
                  <p className="text-teal text-sm font-medium mb-3">{item.institution}</p>
                  <p className="text-muted-fg text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

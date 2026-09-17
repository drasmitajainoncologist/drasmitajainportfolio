const education = [
  {
    year: '1996 – 2002',
    degree: 'MBBS',
    institution: 'S.N. Medical College, Agra',
  },
  {
    year: '2003 – 2006',
    degree: 'MD – Radiotherapy / Radiation Oncology',
    institution: 'GSVM Medical College, Kanpur',
  },
  {
    year: '2019',
    degree: 'Fellowship in Advanced Radiation Techniques',
    institution: 'Manipal Hospital',
  },
  {
    year: '2019 – 2021',
    degree: 'MBA – Healthcare Management',
    institution: 'SGV University, Jaipur',
  },
  {
    year: 'Sept 2021',
    degree: 'ESMO Examination Certificate',
    institution: 'European Society for Medical Oncology',
  },
  {
    year: '2022 – 2025',
    degree: 'DrNB – Medical Oncology',
    institution: 'Action Cancer Hospital, Delhi',
  },
  {
    year: 'Sept – Dec 2024',
    degree: 'Executive Education — Advanced Management of Oncological Disease',
    institution: 'Harvard Medical School',
  },
  {
    year: 'Sept – Dec 2025',
    degree: 'Executive Education Program',
    institution: 'Harvard Medical School',
  },
]

const publications = [
  {
    title: 'Geriatric Care for Cancer Patients with Oral Health Problem',
    journal: 'Scholars Journal of Dental Sciences (SJDS) · Vol. 5, Issue 6, June 2018',
  },
  {
    title: 'Role and Recognition of Dentist as a Preventive Oncologist',
    journal: 'Saudi Journal of Oral and Dental Research (SJODR) · Vol. 3, Issue 6, June 2018',
  },
  {
    title: 'Intensity Modulated Radiation Therapy: Review and Preview',
    journal: 'International Journal of Medical Science and Innovative Research (IJMSIR) · Vol. 2, Issue 3, May–June 2017',
  },
  {
    title: 'Phytochemicals as Radio-Protective Agents: Review and Update',
    journal: 'International Journal of Development Research · Vol. 07, Issue 04, April 2017',
  },
  {
    title: 'Metformin in Cancer Prevention and Therapy: New Application of an Old Drug',
    journal: 'JMSCR · Vol. 05, Issue 4, April 2017',
  },
  {
    title: 'Human Papilloma Virus and Related Diseases in Human Beings: A Comprehensive Review',
    journal: 'International Journal of Current Research · Vol. 9, Issue 03, March 2017',
  },
  {
    title: 'Radiotherapy: An Update and Review',
    journal: 'International Journal of Current Research · Vol. 9, Issue 03, March 2017',
  },
  {
    title: 'Survivorship Issues as Determinants of Quality of Life After Breast Cancer Treatment',
    journal: 'The Breast · 2018',
  },
  {
    title: 'Post Mastectomy Chronic Pain in Breast Cancer Survivors: An Update on Definition, Pathogenesis, Risk Factors, Treatment and Prevention',
    journal: 'Clinics in Oncology – Nuclear Medicine · 2017',
  },
  {
    title: 'Delivering Survivorship Care to Women in Low-Resource Setting',
    journal: 'ASCO Publications · DOI: 10.1200/JGO.18.10240',
  },
]

const theses = [
  {
    title: 'A Retrospective Analysis of CDK 4/6 Inhibitors in Locally Advanced and Metastatic Breast Cancer',
    type: 'DrNB Medical Oncology Thesis',
  },
  {
    title: 'Optimization of Radiation Therapy in Cervical Carcinoma',
    type: 'MD Radiation Oncology Dissertation',
  },
]

const memberships = [
  'European Society of Medical Oncology (ESMO) — Membership No. 509214',
  'American Society of Clinical Oncology (ASCO)',
  'Indian Society of Medical & Paediatric Oncology (ISMPO) — Membership No. 341',
  'Association of Radiation Oncologists of India (AROI) — Life Membership No. 2853',
]

export default function Achievements() {
  return (
    <section id="research" className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Academic Excellence &amp; Research</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">Education, Research &amp; Publications</h2>
          <p className="text-muted-fg text-[15px] max-w-xl mx-auto">
            Contributing to oncology clinical research, medical literature, and continuous academic advancement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div className="bg-white rounded-2xl border border-border-col p-7 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-navy mb-6 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2L2 7l8 5 8-5-8-5zM2 13l8 5 8-5M2 10l8 5 8-5" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Education &amp; Qualifications
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((e, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="font-serif text-xs font-semibold text-primary shrink-0 w-24 pt-0.5">{e.year}</span>
                    <div className="flex-1 border-l border-border-col pl-4">
                      <p className="font-semibold text-navy text-sm">{e.degree}</p>
                      <p className="text-xs text-muted-fg mt-0.5">{e.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="bg-white rounded-2xl border border-border-col p-7 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-navy mb-6 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 2h8l4 4v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="#1A5FAB" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M12 2v4h4M6 9h8M6 13h5" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Research &amp; Publications
              </h3>
              <div className="flex flex-col gap-4 max-h-[480px] overflow-y-auto pr-2">
                {publications.map((p) => (
                  <div key={p.title} className="border-l-2 border-primary pl-4">
                    <p className="text-navy text-sm font-medium leading-snug mb-1">{p.title}</p>
                    <p className="text-xs text-teal font-medium">{p.journal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Academic Research (Thesis) */}
          <div className="bg-white rounded-2xl border border-border-col p-7">
            <h3 className="font-serif text-2xl text-navy mb-6 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M9 3H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="9" y="1" width="6" height="4" rx="1" stroke="#1A5FAB" strokeWidth="1.5" />
                <path d="M7 10h6M7 14h4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Academic Research &amp; Dissertation
            </h3>
            <div className="flex flex-col gap-4">
              {theses.map((t) => (
                <div key={t.title} className="border-l-2 border-teal pl-4">
                  <p className="font-semibold text-navy text-sm leading-snug">{t.title}</p>
                  <p className="text-xs text-primary font-medium mt-1">{t.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="bg-white rounded-2xl border border-border-col p-7">
            <h3 className="font-serif text-2xl text-navy mb-6 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8" stroke="#1A5FAB" strokeWidth="1.5" />
                <path d="M7 10l2 2 4-4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Professional Memberships
            </h3>
            <ul className="flex flex-col gap-3.5">
              {memberships.map((m) => (
                <li key={m} className="flex gap-3 text-sm text-navy font-medium">
                  <span className="w-1.5 h-1.5 bg-teal rounded-full shrink-0 mt-2" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

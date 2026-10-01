const treatments = [
  {
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=480&h=280&fit=crop&auto=format',
    alt: 'Chemotherapy, Targeted Therapy & Immunotherapy',
    name: 'Chemotherapy, Targeted Therapy & Immunotherapy',
    description:
      'Systemic cancer management using chemotherapy, targeted therapy, immunotherapy and evidence-based treatment regimens.',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=480&h=280&fit=crop&auto=format',
    alt: 'Clinical Hematology Care',
    name: 'Clinical Hematology Care',
    description:
      'Specialised evaluation and management of blood cancers, hematological conditions and blood disorders in adults.',
  },
  {
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=480&h=280&fit=crop&auto=format',
    alt: 'Radiation Oncology',
    name: 'Radiation Oncology & Advanced Techniques',
    description:
      'Advanced radiation therapy planning supported by an MD in Radiation Oncology and Fellowship in Advanced Radiation Techniques.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=480&h=280&fit=crop&auto=format',
    alt: 'Breast & Gynecological Oncology',
    name: 'Breast & Gynecological Oncology Care',
    description:
      'Comprehensive evaluation and treatment planning informed by International guidelines.',
  },
  {
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=480&h=280&fit=crop&auto=format',
    alt: 'Cancer Survivorship & Quality of Life',
    name: 'Cancer Survivorship & Quality of Life',
    description:
      'Long-term monitoring, post-treatment care, and addressing survivorship issues to improve overall quality of life.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=480&h=280&fit=crop&auto=format',
    alt: 'Supportive & Palliative Oncology',
    name: 'Supportive & Palliative Oncology',
    description:
      'Compassionate symptom management, patient education, and supportive care throughout the patient’s treatment journey.',
  },
   {
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=480&h=280&fit=crop&auto=format',
    alt: 'Cancer Screening & Early Detection',
    name: 'Cancer Screening & Early Detection',
    description:
      'Regular, risk-based screening helps detect cancer early. Get personalised screening guidance for Breast, Cervical, Lung, and Head & Neck cancers based on your individual risk factors.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=480&h=280&fit=crop&auto=format',
    alt: 'Cancer Prevention Vaccines',
    name: 'Cancer Prevention Vaccines',
    description:
      'Vaccination is a powerful tool for cancer prevention. We provide personalised guidance on HPV and Hepatitis B vaccines to help reduce the risk of HPV-related cancers and liver cancer.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=480&h=280&fit=crop&auto=format',
    alt: 'Oral Metronomic Therapy',
    name: 'Oral Metronomic Therapy',
    description:
      'Oral metronomic therapy uses low-dose oral medicines given regularly to help control cancer while reducing treatment burden. Treatment is personalised based on your cancer type, treatment goals, and individual needs.',
  },
]

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Clinical Services</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy">Cancer Care &amp; Clinical Focus</h2>
          </div>
          <p className="text-muted-fg text-[15px] max-w-xs sm:text-right">
            Evidence-based oncology care delivered with clinical precision and compassion.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <article
              key={t.name}
              className="rounded-xl border border-border-col overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/9] overflow-hidden bg-slate-bg">
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy text-[15px] mb-2">{t.name}</h3>
                  <p className="text-muted-fg text-sm leading-relaxed mb-4">{t.description}</p>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="#appointment"
                  className="text-primary text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
                >
                  Consultation Info
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

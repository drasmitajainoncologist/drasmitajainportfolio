import { useState } from 'react'

const institutions = [
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&auto=format',
    name: 'Action Cancer Hospital',
    location: 'Paschim Vihar, New Delhi',
    role: 'Consultant & DrNB Registrar — Medical Oncology',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=400&fit=crop&auto=format',
    name: 'Primus Superspeciality Hospital',
    location: 'New Delhi',
    role: 'Senior Consultant — Medical Oncology',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=280&fit=crop&auto=format',
    name: 'Delhi State Cancer Institute (DSCI)',
    location: 'West Branch, Delhi',
    role: 'Senior Resident → Clinical Oncology In-charge',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=280&fit=crop&auto=format',
    name: 'Manipal Hospital',
    location: 'India',
    role: 'Fellowship in Advanced Radiation Techniques',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=320&fit=crop&auto=format',
    name: 'Harvard Medical School',
    location: 'Boston, MA (Executive Education)',
    role: 'Advanced Management of Oncological Disease',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=280&fit=crop&auto=format',
    name: 'Adesh Charitable Cancer Hospital',
    location: 'Muktsar',
    role: 'Consultant — Radiation Oncology',
    span: '',
  },
]

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Institutional Journey</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">Premier Healthcare Institutions</h2>
          <p className="text-muted-fg text-[15px] max-w-xl mx-auto">
            Clinical practice, residency, and advanced academic training across leading cancer centres.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-3 gap-4">
          {institutions.map((inst, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl bg-muted-bg cursor-pointer group ${inst.span}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="aspect-video">
                <img
                  src={inst.src}
                  alt={inst.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-navy/80 flex flex-col justify-end p-5 transition-opacity duration-300 ${
                  hovered === i ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-[11px] font-semibold text-teal uppercase tracking-widest mb-1">
                  {inst.location}
                </span>
                <p className="text-white text-base font-serif font-semibold mb-0.5">{inst.name}</p>
                <p className="text-xs text-slate-200">{inst.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: simple scroll grid */}
        <div className="sm:hidden flex gap-4 overflow-x-auto snap-x-scroll snap-x snap-mandatory pb-3">
          {institutions.map((inst, i) => (
            <div key={i} className="snap-start shrink-0 w-[78vw] rounded-xl overflow-hidden bg-white border border-border-col">
              <div className="aspect-video">
                <img src={inst.src} alt={inst.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-semibold text-teal uppercase tracking-wider">{inst.location}</p>
                <p className="text-sm text-navy font-semibold mt-0.5">{inst.name}</p>
                <p className="text-xs text-muted-fg mt-1">{inst.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

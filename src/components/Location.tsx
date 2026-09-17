export default function Location() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Get in Touch</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy">Clinical Consultation &amp; Location</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact info */}
          <div className="bg-white rounded-2xl border border-border-col p-8 flex flex-col gap-7">
            <div>
              <h3 className="font-serif text-2xl text-navy mb-1">Action Cancer Hospital</h3>
              <p className="text-teal text-sm font-medium">Department of Medical Oncology</p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M9 1C6.24 1 4 3.24 4 6c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z"
                      stroke="#1A5FAB"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <circle cx="9" cy="6" r="2" stroke="#0FADA0" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-fg uppercase tracking-wider mb-0.5">Hospital Location</p>
                  <p className="text-navy text-sm font-medium">A-4, Paschim Vihar</p>
                  <p className="text-muted-fg text-sm">New Delhi — 110063, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M3 3h4l1.5 3.5-2 1.5c1 2 3 4 5 5l1.5-2L16.5 12.5 16.5 16h-3c-5.5 0-10-6-10-11V3z"
                      stroke="#1A5FAB"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-fg uppercase tracking-wider mb-0.5">Phone Numbers</p>
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:+919717289800" className="text-navy text-sm font-medium hover:text-primary transition-colors">
                      +91 9717289800
                    </a>
                    <a href="tel:+919911581342" className="text-navy text-sm font-medium hover:text-primary transition-colors">
                      +91 9911581342
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="#1A5FAB" strokeWidth="1.5" />
                    <path d="M2 7l7 4 7-4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-fg uppercase tracking-wider mb-0.5">Email Address</p>
                  <a href="mailto:drasmitajainoncologist@gmail.com" className="text-navy text-sm font-medium hover:text-primary transition-colors break-all">
                    drasmitajainoncologist@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="7" stroke="#1A5FAB" strokeWidth="1.5" />
                    <path d="M9 5v4l3 2" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-fg uppercase tracking-wider mb-1">Consultation Schedule</p>
                  <div className="flex flex-col gap-0.5 text-sm">
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-fg">Mon – Sat</span>
                      <span className="text-navy font-medium">By Prior Appointment</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-fg">Location</span>
                      <span className="text-navy font-medium">Action Cancer Hospital</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://maps.app.goo.gl/A5Dxu71qaJ1cTddE7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200 self-start mt-auto"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2L14 8 8 14M14 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map container with direct link */}
          <div className="rounded-2xl overflow-hidden border border-border-col bg-muted-bg min-h-[380px] lg:min-h-0 relative group">
            {/* Top-right badge */}
            <a
              href="https://maps.app.goo.gl/A5Dxu71qaJ1cTddE7"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 bg-primary text-white shadow-md rounded-lg px-3.5 py-2 flex items-center gap-2 text-xs font-semibold hover:bg-primary-dark transition-all duration-200 border border-primary-dark"
            >
              Open in Maps
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M11 7.5V11a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h3.5M8 2h4v4M6 8l5.5-5.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Clickable map wrapper */}
            <a
              href="https://maps.app.goo.gl/A5Dxu71qaJ1cTddE7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Action Cancer Hospital location in Google Maps"
              className="block w-full h-full min-h-[380px] relative cursor-pointer"
            >
              <iframe
                title="Action Cancer Hospital Paschim Vihar location"
                src="https://maps.google.com/maps?q=Action+Cancer+Hospital+Paschim+Vihar+New+Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] pointer-events-none"
                style={{ border: 0 }}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

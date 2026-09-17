const quickLinks = ['About', 'Expertise', 'Experience', 'Research & Publications', 'Contact']
const quickHrefs = ['#about', '#expertise', '#experience', '#research', '#contact']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-light">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Doctor info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-white font-serif text-sm">AJ</span>
              </div>
              <div>
                <div className="font-serif text-white text-[15px]">Dr. Asmita Jain</div>
                <div className="text-[11px] tracking-wider uppercase" style={{ color: '#8AABD4' }}>Medical Oncologist &amp; Hematologist</div>
              </div>
            </div>
            <p className="text-xs text-teal font-medium mb-2">
              DrNB (Medical Oncology) | MD (Radiation Oncology) | MBA (Healthcare) | MBBS
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#8AABD4' }}>
              Experienced oncology specialist with more than 23 years of experience in Medical Oncology, Hematology and Radiation Oncology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href={quickHrefs[i]}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#8AABD4' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Info</h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="tel:+919717289800" className="text-sm transition-colors hover:text-white block" style={{ color: '#8AABD4' }}>
                  +91 9717289800
                </a>
                <a href="tel:+919911581342" className="text-sm transition-colors hover:text-white block" style={{ color: '#8AABD4' }}>
                  +91 9911581342
                </a>
              </li>
              <li>
                <a href="mailto:drasmitajainoncologist@gmail.com" className="text-sm transition-colors hover:text-white block break-all" style={{ color: '#8AABD4' }}>
                  drasmitajainoncologist@gmail.com
                </a>
              </li>
              <li className="text-sm leading-relaxed" style={{ color: '#8AABD4' }}>
                Action Cancer Hospital<br />
                A-4, Paschim Vihar, New Delhi — 110063
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Consultation</h3>
            <ul className="flex flex-col gap-2.5 text-sm" style={{ color: '#8AABD4' }}>
              <li className="flex justify-between gap-4">
                <span>Hospital</span>
                <span className="text-white font-medium">Action Cancer Hospital</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Speciality</span>
                <span className="text-white font-medium">Medical Oncology</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Appointments</span>
                <span className="text-white font-medium">By Booking</span>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs font-medium text-white mb-0.5">Book Appointment</p>
              <a href="#appointment" className="text-xs text-teal hover:underline">
                Request an Appointment Online
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: '#8AABD4' }}>
            © {year} Dr. Asmita Jain. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {['Privacy Policy', 'Terms of Use', 'Medical Disclaimer'].map((link) => (
              <a key={link} href="#" className="text-xs transition-colors hover:text-white" style={{ color: '#8AABD4' }}>
                {link}
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: 'rgba(138,171,212,0.5)' }}>
          The information on this website is for general informational purposes only and does not constitute
          medical advice. Please consult your physician before making any medical decisions.
        </p>
      </div>
    </footer>
  )
}

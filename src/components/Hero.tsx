import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-shape" aria-hidden="true"></div>
      <svg
        className="hero-line-art"
        viewBox="0 0 1365 690"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M760 82L912 232L1188 232L1365 58" />
        <path d="M846 690L1035 502L1365 502" />
        <path d="M1365 650L1205 490L1365 330" />
        <path d="M1015 690C1008 602 1040 520 1110 462C1178 406 1275 386 1365 414" />
        <path d="M315 690C345 640 425 648 456 690" />
      </svg>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Kruti Jasani</h1>
          <p className="hero-role">&mdash; Full Stack Developer</p>
          <p className="hero-desc">
            I build and ship production-ready web applications with scalable
            backend architectures, REST APIs, real-time systems, and clean
            end-to-end ownership across the MERN stack and Next.js.
          </p>
          <div className="hero-buttons">
            <a href="/Kruti_Jasani_FullStack_resume.jpg" className="btn-primary" download>Download Resume</a>
            <a href="#projects" className="btn-secondary">View Portfolio</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-pillar" aria-hidden="true"></div>
          <div className="hero-avatar-ring">
            <div className="hero-avatar-inner">
              <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="140" cy="140" r="140" fill="#f3f4f4" />
                <path d="M4 180C38 136 78 110 124 103C181 94 224 119 276 66V280H4V180Z" fill="#ffffff" opacity="0.64" />
                <path d="M185 0C185 74 220 117 280 130V0H185Z" fill="#ffffff" opacity="0.7" />
                <path d="M201 196C230 156 251 143 280 144V280H201V196Z" fill="#ffffff" opacity="0.78" />
                <path d="M76 132C52 120 52 83 76 74C78 48 109 37 133 47C151 29 189 39 194 68C216 77 212 115 187 124C171 131 143 124 128 113C111 128 92 137 76 132Z" fill="#25339e" />
                <path d="M82 103C83 81 103 63 128 61C164 58 187 78 187 111C187 158 164 188 136 188C108 188 83 152 82 103Z" fill="#ffb1a2" />
                <path d="M142 126C147 143 162 152 181 151C174 177 158 190 136 190C117 190 99 174 90 149C111 156 128 149 142 126Z" fill="#ef807b" opacity="0.38" />
                <path d="M84 110C95 77 124 72 143 84C159 95 176 91 189 80C181 58 151 50 124 58C94 66 78 86 76 116L84 110Z" fill="#2636a4" />
                <path d="M97 101C94 72 63 73 60 99C57 121 77 133 91 121L97 101Z" fill="#25339e" />
                <path d="M119 123C117 134 111 139 101 139C89 139 82 130 83 117C84 103 92 93 104 93C116 94 121 107 119 123Z" fill="#0b0b0d" />
                <path d="M163 123C161 134 155 139 145 139C133 139 126 130 127 117C128 103 136 93 148 93C160 94 165 107 163 123Z" fill="#0b0b0d" />
                <path d="M118 114C122 111 126 111 130 114" stroke="#0b0b0d" strokeWidth="5" strokeLinecap="round" />
                <path d="M161 111L181 103" stroke="#0b0b0d" strokeWidth="5" strokeLinecap="round" />
                <path d="M144 125C151 136 156 146 152 152C149 157 141 156 136 153" stroke="#d86f6d" strokeWidth="3" strokeLinecap="round" />
                <path d="M124 166C134 173 149 173 159 165" stroke="#fff4ee" strokeWidth="5" strokeLinecap="round" />
                <path d="M46 280C49 215 90 187 138 187C187 187 231 217 234 280H46Z" fill="#d89b21" />
                <path d="M91 229C91 249 91 265 88 280" stroke="#a86e13" strokeWidth="4" strokeLinecap="round" opacity="0.58" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

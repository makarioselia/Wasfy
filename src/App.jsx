const projects = [
  { title: 'Modern Villa', category: 'Residential', location: 'Dubai, UAE', image: 'https://picsum.photos/seed/villa/800/600' },
  { title: 'Luxury Apartment', category: 'Residential', location: 'London, UK', image: 'https://picsum.photos/seed/apartment/800/600' },
  { title: 'Contemporary Office', category: 'Commercial', location: 'New York, USA', image: 'https://picsum.photos/seed/office/800/600' },
]

const services = [
  { title: 'Residential Design', desc: 'Tailored homes that reflect your lifestyle and vision.' },
  { title: 'Commercial Design', desc: 'Spaces that elevate brand identity and function.' },
  { title: 'Space Planning', desc: 'Optimised layouts for flow, light, and purpose.' },
  { title: '3D Visualization', desc: 'Realistic previews before a single wall is built.' },
]

const navLinks = ['Home', 'Projects', 'About', 'Services', 'Contact']

export default function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <nav className="nav">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>STUDIO</a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(link.toLowerCase()) }}>{link}</a>
            </li>
          ))}
        </ul>
        <button className="btn btn-gold nav-cta" onClick={() => scrollTo('contact')}>Start a Project</button>
        <button className="nav-toggle" aria-label="Menu" onClick={() => document.querySelector('.nav-links')?.classList.toggle('open')}>
          <span /><span /><span />
        </button>
      </nav>

      <header id="home" className="hero">
        <img src="https://picsum.photos/seed/hero/1600/900" alt="Interior design showcase" className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="label">INTERIOR DESIGN STUDIO</p>
          <h1>Spaces Designed to Be Lived In.</h1>
          <p className="hero-desc">Thoughtful interiors shaped by light, material, and detail.</p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => scrollTo('projects')}>View Projects</button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      </header>

      <section id="projects" className="section">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.category} · {p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-image">
          <img src="https://picsum.photos/seed/about/700/800" alt="Studio interior" loading="lazy" />
        </div>
        <div className="about-text">
          <h2>About the Studio</h2>
          <p>Add your introduction here.</p>
          <button className="btn btn-outline" onClick={() => scrollTo('services')}>Discover More</button>
        </div>
      </section>

      <section id="services" className="section">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2 className="section-title">Let's Create Something Beautiful.</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows={5} required />
          <button type="submit" className="btn btn-gold">Send Inquiry</button>
        </form>
        <div className="social-links">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:hello@studio.com">Email</a>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-logo">STUDIO</p>
        <p className="footer-tagline">Creating timeless spaces through thoughtful design.</p>
        <p className="copyright">&copy; {new Date().getFullYear()} STUDIO. All rights reserved.</p>
      </footer>
    </>
  )
}

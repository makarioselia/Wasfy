import { useRef, useState } from 'react'

const imagePath = (folder, fileName) => `/ProjectsImg/${folder}/${fileName}`

const projects = [
  {
    title: 'Residential Apartment',
    category: 'Residential',
    location: 'Hurghada, Egypt',
    image: imagePath('p1', '2.jpeg'),
    images: [
      imagePath('p1', '2.jpeg'),
      imagePath('p1', '1.jpeg'),
      imagePath('p1', '3.jpeg'),
      imagePath('p1', '4.jpeg'),
      imagePath('p1', '5.jpeg'),
      imagePath('p1', '6.jpeg'),
      imagePath('p1', '7.jpeg'),
      imagePath('p1', '8.jpeg'),
    ],
    scope: ['Living Room', 'Bedrooms', 'Kitchen', 'Dining Area'],
  },
  {
    title: 'Law Firm Office',
    category: 'Commercial',
    location: 'Sohag, Egypt',
    image: imagePath('p2', '1.jpeg'),
    images: [
      imagePath('p2', '1.jpeg'),
      imagePath('p2', '2.jpeg'),
      imagePath('p2', '3.jpeg'),
      imagePath('p2', '4.jpeg'),
      imagePath('p2', '5.jpeg'),
      imagePath('p2', '6.jpeg'),
      imagePath('p2', '7.jpeg'),
      imagePath('p2', '8.jpeg'),
      imagePath('p2', '9.jpeg'),
      imagePath('p2', '10.jpeg'),
      imagePath('p2', '11.jpeg'),
      imagePath('p2', '12.jpeg'),
    ],
    scope: ['Reception', 'Lawyer Offices', 'Meeting Room'],
  },
  {
    title: 'Wedding Hall',
    category: 'Hospitality',
    location: 'Sohag, Egypt',
    image: imagePath('p3', '1.jpeg'),
    images: [
      imagePath('p3', '1.jpeg'),
      imagePath('p3', '2.jpeg'),
      imagePath('p3', '3.jpeg'),
      imagePath('p3', '4.jpeg'),
      imagePath('p3', '5.jpeg'),
      imagePath('p3', '6.jpeg'),
    ],
    scope: ['Wedding Hall Facade'],
  },
  {
    title: 'Modern Villa',
    category: 'Residential',
    location: 'Cairo, Egypt',
    image: imagePath('p4', '1.jpeg'),
    images: [
      imagePath('p4', '1.jpeg'),
      imagePath('p4', '2.jpeg'),
      imagePath('p4', '3.jpeg'),
      imagePath('p4', '4.jpeg'),
      imagePath('p4', '5.jpeg'),
      imagePath('p4', '6.jpeg'),
      imagePath('p4', '7.jpeg'),
      imagePath('p4', '8.jpeg'),
    ],
    scope: ['Villa Facade', 'Floor Plans'],
  },
  {
    title: 'Luxury Residential Apartment',
    category: 'Residential',
    location: 'Sohag, Egypt',
    image: imagePath('p5', '1.jpeg'),
    images: [
      imagePath('p5', '1.jpeg'),
      imagePath('p5', '2.jpeg'),
      imagePath('p5', '3.jpeg'),
      imagePath('p5', '4.jpeg'),
      imagePath('p5', '5.jpeg'),
      imagePath('p5', '6.jpeg'),
      imagePath('p5', '7.jpeg'),
      imagePath('p5', '8.jpeg'),
      imagePath('p5', '9.jpeg'),
      imagePath('p5', '10.jpeg'),
      imagePath('p5', '11.jpeg'),
      imagePath('p5', '12.jpeg'),
      imagePath('p5', '13.jpeg'),
      imagePath('p5', '14.jpeg'),
      imagePath('p5', '15.jpeg'),
      imagePath('p5', '16.jpeg'),
    ],
    scope: ['Living Room', 'Bedrooms', 'Kitchen', 'Dining Area'],
  },
    {
    title: 'Audi Corporate Office',
    category: 'Commercial / Corporate',
    image: imagePath('p5', '1.jpeg'),
    images: [
      imagePath('p6', '3.jpeg'),
      imagePath('p6', '1.jpeg'),
      imagePath('p6', '2.jpeg'),
      imagePath('p6', '4.jpeg'),
      imagePath('p6', '5.jpeg'),
    ],
    scope: ['Living Room', 'Bedrooms', 'Kitchen', 'Dining Area'],
  },
]


const services = [
  { title: 'Residential Design', desc: 'Tailored homes that reflect your lifestyle and vision.' },
  { title: 'Commercial Design', desc: 'Spaces that elevate brand identity and function.' },
  { title: 'Space Planning', desc: 'Optimised layouts for flow, light, and purpose.' },
  { title: '3D Visualization', desc: 'Realistic previews before a single wall is built.' },
]

const navLinks = ['Home', 'Projects', 'About', 'Services', 'Contact']

function ProjectCarousel({ project }) {
  const images = project.images?.length ? project.images : project.image ? [project.image] : []
  const [currentImage, setCurrentImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const touchStartX = useRef(null)
  const suppressClick = useRef(false)

  if (!images.length) {
    return <div className="project-image-placeholder">Image coming soon</div>
  }

  const showPrevious = () => setCurrentImage((index) => (index - 1 + images.length) % images.length)
  const showNext = () => setCurrentImage((index) => (index + 1) % images.length)
  const closeLightbox = () => setIsLightboxOpen(false)
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }
  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || images.length < 2) return

    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < 40) return
    suppressClick.current = true
    if (distance < 0) showNext()
    else showPrevious()
  }
  const openLightbox = () => {
    if (suppressClick.current) {
      suppressClick.current = false
      return
    }
    setIsLightboxOpen(true)
  }

  return (
    <div className="project-carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <button
        type="button"
        className="project-image-button"
        onClick={openLightbox}
        aria-label={`Open ${project.title} image ${currentImage + 1} larger`}
      >
        <img src={images[currentImage]} alt={`${project.title} - image ${currentImage + 1}`} loading="lazy" />
      </button>
      {images.length > 1 && (
        <>
          <button type="button" className="carousel-arrow carousel-previous" onClick={showPrevious} aria-label="Previous image">&#8592;</button>
          <button type="button" className="carousel-arrow carousel-next" onClick={showNext} aria-label="Next image">&#8594;</button>
          <div className="carousel-counter" aria-live="polite">{currentImage + 1} / {images.length}</div>
        </>
      )}
      {isLightboxOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} gallery`} onClick={closeLightbox}>
          <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close image">&times;</button>
          <button type="button" className="lightbox-arrow lightbox-previous" onClick={(event) => { event.stopPropagation(); showPrevious() }} aria-label="Previous image">&#8592;</button>
          <img src={images[currentImage]} alt={`${project.title} - image ${currentImage + 1}`} onClick={(event) => event.stopPropagation()} />
          <button type="button" className="lightbox-arrow lightbox-next" onClick={(event) => { event.stopPropagation(); showNext() }} aria-label="Next image">&#8594;</button>
          <div className="lightbox-counter">{currentImage + 1} / {images.length}</div>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [isSending, setIsSending] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setIsSending(true)
    const formData = new FormData(event.currentTarget)
    const message = formData.get('message')

    window.open(`https://wa.me/201211293181?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
    setFormStatus('WhatsApp opened with your message ready to send.')
    setIsSending(false)
  }

  return (
    <>
      <nav className="nav">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>Kerolos Wasfy Abdalla</a>
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
        <img src="/ProjectsImg/BackGround.jpeg" alt="Interior design showcase" className="hero-img" />
        <div className="hero-overlay" />
        {/* <div className="hero-content">
          <p className="label">INTERIOR DESIGN STUDIO</p>
          <h1>Spaces Designed to Be Lived In.</h1>
          <p className="hero-desc">Thoughtful interiors shaped by light, material, and detail.</p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => scrollTo('projects')}>View Projects</button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div> */}
      </header>

      <section id="projects" className="section">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <ProjectCarousel project={p} />
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
          <img src="/ProjectsImg/Logo.jpeg" alt="Studio interior" loading="lazy" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>An interior and exterior design engineer specialized in finishes and familiar with all implementation items, in addition to the ability to work on 3D and 2D programs.</p>
          <p>A talented site engineer with over two years of specialized experience in interior and exterior finishes works, adept at implementing best practices in the construction and design industry.</p>
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
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <textarea name="message" placeholder="Message" rows={5} required />
          <button type="submit" className="btn btn-gold" disabled={isSending}>
            {isSending ? 'Opening WhatsApp...' : 'Send on WhatsApp'}
          </button>
          {formStatus && <p className="form-status" role="status">{formStatus}</p>}
        </form>
<div className="social-links">
  <a
    href="https://wa.me/201211293181"
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61573211145930"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>

  <a href="mailto:hkerowasfy05@gmail.com">
    Email
  </a>
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

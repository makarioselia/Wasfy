import { useState } from 'react'

const projects = [
{
  title: 'Residential Apartment',
  category: 'Residential',
  location: 'Sohag, Egypt',
  image: '/ProjectsImg/p1/2.jpeg',
  images: [
                '/ProjectsImg/p1/2.jpeg',
'/ProjectsImg/p1/1.jpeg',
            '/ProjectsImg/p1/3.jpeg',
            '/ProjectsImg/p1/4.jpeg',
            '/ProjectsImg/p1/5.jpeg',
            '/ProjectsImg/p1/6.jpeg',
            '/ProjectsImg/p1/7.jpeg',
            '/ProjectsImg/p1/8.jpeg'
  ],
  scope: [
    'Living Room',
    'Bedrooms',
    'Kitchen',
    'Dining Area',
  ],
},

{
  title: 'Law Firm Office',
  category: 'Commercial',
  location: 'Sohag, Egypt',
  image: '/ProjectsImg/p2/1.jpeg',
  images: ['/ProjectsImg/p2/1.jpeg',
            '/ProjectsImg/p2/2.jpeg',
            '/ProjectsImg/p2/3.jpeg',
            '/ProjectsImg/p2/4.jpeg',
            '/ProjectsImg/p2/5.jpeg',
            '/ProjectsImg/p2/6.jpeg',
            '/ProjectsImg/p2/7.jpeg',
            '/ProjectsImg/p2/8.jpeg',
            '/ProjectsImg/p2/9.jpeg',
            '/ProjectsImg/p2/10.jpeg',
            '/ProjectsImg/p2/11.jpeg',
            '/ProjectsImg/p2/12.jpeg'
  ],
  scope: [
    'Reception',
    'Lawyer Offices',
    'Meeting Room',
  ],
},
{
  title: 'Wedding Hall',
  category: 'Hospitality',
  location: 'Sohag, Egypt',
image: '/ProjectsImg/p3/1.jpeg',
  images: ['/ProjectsImg/p3/1.jpeg',
            '/ProjectsImg/p3/2.jpeg',
            '/ProjectsImg/p3/3.jpeg',
            '/ProjectsImg/p3/4.jpeg',
            '/ProjectsImg/p3/5.jpeg',
            '/ProjectsImg/p3/6.jpeg',
  ],
  scope: [
    'Wedding Hall Facade',
  ],
},
{
  title: 'Modern Villa',
  category: 'Residential',
  location: 'Sohag, Egypt',
  image: '/ProjectsImg/p4/1.jpeg',
  images: ['/ProjectsImg/p4/1.jpeg',
            '/ProjectsImg/p4/2.jpeg',
            '/ProjectsImg/p4/3.jpeg',
            '/ProjectsImg/p4/4.jpeg',
            '/ProjectsImg/p4/5.jpeg',
            '/ProjectsImg/p4/6.jpeg',
            '/ProjectsImg/p4/7.jpeg',
            '/ProjectsImg/p4/8.jpeg',
  ],
  scope: [
    'Villa Facade',
    'Floor Plans',
  ],
},
{
  title: 'Luxury Residential Apartment',
  category: 'Residential',
  location: 'Sohag, Egypt',
  image: '/ProjectsImg/p5/1.jpeg',
  images: ['/ProjectsImg/p5/1.jpeg',
            '/ProjectsImg/p5/2.jpeg',
            '/ProjectsImg/p5/3.jpeg',
            '/ProjectsImg/p5/4.jpeg',
            '/ProjectsImg/p5/5.jpeg',
            '/ProjectsImg/p5/6.jpeg',
            '/ProjectsImg/p5/7.jpeg',
            '/ProjectsImg/p5/8.jpeg',
            '/ProjectsImg/p5/9.jpeg',
            '/ProjectsImg/p5/10.jpeg',
            '/ProjectsImg/p5/11.jpeg',
            '/ProjectsImg/p5/12.jpeg',
            '/ProjectsImg/p5/13.jpeg',
            '/ProjectsImg/p5/14.jpeg',
            '/ProjectsImg/p5/15.jpeg',
            '/ProjectsImg/p5/16.jpeg',
  ],
  scope: [
    'Living Room',
    'Bedrooms',
    'Kitchen',
    'Dining Area',
  ],},

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

  if (!images.length) {
    return <div className="project-image-placeholder">Image coming soon</div>
  }

  const showPrevious = () => setCurrentImage((index) => (index - 1 + images.length) % images.length)
  const showNext = () => setCurrentImage((index) => (index + 1) % images.length)
  const closeLightbox = () => setIsLightboxOpen(false)

  return (
    <div className="project-carousel">
      <button
        type="button"
        className="project-image-button"
        onClick={() => setIsLightboxOpen(true)}
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
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <nav className="nav">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>Kerolos Wasfy</a>
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
        <img src="/ProjectsImg/Background.jpg" alt="Interior design showcase" className="hero-img" />
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

  <a href="mailto:makaiouseliaa@gmail.com">
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

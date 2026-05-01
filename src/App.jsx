import { useState } from 'react';
import logoTransparent from './components/logo_transparent.png';
import businessPoster from './components/media/freshroute-business-poster.png';
import marketingOne from './components/media/marketing 1.jpg';
import marketingTwo from './components/media/marketing 2.png';

const FACEBOOK_URL = 'https://www.facebook.com/share/1SoecsTGwY/';

const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Media', href: '#media' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Impact', href: '#impact' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

const featureCards = [
  {
    icon: 'route',
    title: 'Farm-to-shop routing',
    text: 'Plan direct produce movement from farms to shops without positioning FreshRoute as a storage hub or middle inventory point.'
  },
  {
    icon: 'leaf',
    title: 'Zero-inventory freshness',
    text: 'Match confirmed shop demand with available farm supply so products move quickly instead of sitting in warehouse stock.'
  },
  {
    icon: 'dashboard',
    title: 'Live order visibility',
    text: 'Bring farm supply, shop orders, delivery progress, and route status into one clear interface for faster operational decisions.'
  },
  {
    icon: 'partners',
    title: 'Direct partner workflows',
    text: 'Support farmers, shop owners, transport teams, and service partners with a digital-first workflow built around direct movement.'
  },
  {
    icon: 'chart',
    title: 'Demand and price forecasting',
    text: 'Use demand signals and market price trends to guide harvest planning, shop ordering, and smarter delivery preparation.'
  },
  {
    icon: 'shield',
    title: 'Scalable operating system',
    text: 'Designed to grow into dashboards, partner portals, API integrations, and customer-facing services for fresh produce commerce.'
  }
];

const workflowSteps = [
  {
    step: '01',
    title: 'Capture shop demand',
    text: 'Bring shop orders, farm supply, pickup points, delivery locations, time windows, and priority needs into one structured planning flow.'
  },
  {
    step: '02',
    title: 'Forecast demand and prices',
    text: 'Use demand forecasting and price forecasting to help teams prepare the right produce movement before waste or shortages happen.'
  },
  {
    step: '03',
    title: 'Route farm-to-shop delivery',
    text: 'Use route logic to reduce backtracking, protect freshness, and move produce directly from farms to shops.'
  },
  {
    step: '04',
    title: 'Close the zero-inventory loop',
    text: 'Use order, delivery, demand, and price data to improve planning rules while keeping inventory lean and movement fast.'
  }
];

const solutionCards = [
  {
    title: 'For farmers and suppliers',
    text: 'Connect available harvests to real shop demand, reduce waiting time, and improve visibility before produce leaves the farm.'
  },
  {
    title: 'For shops and retailers',
    text: 'Order fresh produce with better availability, clearer pricing signals, and direct farm-to-shop delivery coordination.'
  },
  {
    title: 'For logistics teams',
    text: 'Organize fresh deliveries with clearer route plans, better dispatch visibility, and repeatable daily workflows.'
  },
  {
    title: 'For partnerships and pilots',
    text: 'Present FreshRoute as a professional platform for marketing, demonstrations, research communication, and growth discussions.'
  }
];

const impactItems = [
  'Move fresh produce directly from farms to shops',
  'Keep inventory lean by matching supply with confirmed demand',
  'Use demand forecasting and price forecasting for smarter planning',
  'Strengthen communication between farmers, shops, and delivery teams'
];

const mediaPosts = [
  {
    title: 'FreshRoute business poster',
    tag: 'Sinhala campaign',
    image: businessPoster,
    alt: 'FreshRoute Sinhala business poster with delivery truck and farm produce',
    variant: 'portrait'
  },
  {
    title: 'From harvest to market',
    tag: 'Social post',
    image: marketingOne,
    alt: 'FreshRoute social post showing produce moving from harvest to market',
    variant: 'square'
  },
  {
    title: 'Direct farm to buyer',
    tag: 'Feature banner',
    image: marketingTwo,
    alt: 'FreshRoute banner showing direct farm to buyer delivery, demand forecasting, and smart logistics',
    variant: 'wide'
  }
];

const faqs = [
  {
    question: 'What is the FreshRoute?',
    answer: 'FreshRoute is a technology platform designed to streamline the flow of fresh produce from farms to shops, reducing waste and improving efficiency through demand and price forecasting.'
  },
  {
    question: 'Who can get benefits from FreshRoute?',
    answer: 'Farmers, shops, and logistics teams can all benefit from FreshRoute.'
  },
  {
    question: 'Can FreshRoute be used for other purposes?',
    answer: 'FreshRoute is specifically designed for streamlining the flow of fresh produce from farms to shops, but its underlying technology could potentially be adapted for other supply chain applications.'
  },
  {
    question: 'Can we do the transactions through the platform?',
    answer: 'Yes, the platform supports transaction processing.'
  },
  {
    question: 'Can we trust the data on the platform?',
    answer: 'Yes, we validate the data and have a good security system to protect it. Our vision is to create a transparent and trustworthy platform for all stakeholders in the fresh produce supply chain.'
  }
];

function Icon({ name }) {
  const icons = {
    route: (
      <path d="M7 17.5c2.1 0 2.1-3 4.2-3s2.1 3 4.2 3 2.1-3 4.1-3M7.5 7h.01M16.5 7h.01M8 7c0 1.5-3 3.3-3 5.8 0 1.9 1.4 3.7 3 3.7s3-1.8 3-3.7C11 10.3 8 8.5 8 7Zm9 0c0 1.5-3 3.3-3 5.8 0 1.9 1.4 3.7 3 3.7s3-1.8 3-3.7C20 10.3 17 8.5 17 7Z" />
    ),
    leaf: (
      <path d="M5 19c7.5-.4 12.7-5.8 14-14-8.2 1.2-13.6 6.5-14 14Zm0 0c2.2-4.7 5.4-7.8 10-10" />
    ),
    dashboard: (
      <path d="M4 5h16v14H4V5Zm3 4h4v7H7V9Zm7 0h3v3h-3V9Zm0 5h3v2h-3v-2Z" />
    ),
    partners: (
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19c.7-3.3 2.5-5 4.5-5s3.8 1.7 4.5 5m-1.5 0c.7-3.3 2.5-5 4.5-5s3.8 1.7 4.5 5" />
    ),
    chart: (
      <path d="M4 19V5m0 14h16M8 15v-4m4 4V7m4 8v-6" />
    ),
    shield: (
      <path d="M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6l-7-3Zm-3 9 2 2 4-4" />
    ),
    check: (
      <path d="m5 12 4 4L19 6" />
    ),
    arrow: (
      <path d="M5 12h14m-6-6 6 6-6 6" />
    ),
    menu: (
      <path d="M4 7h16M4 12h16M4 17h16" />
    ),
    close: (
      <path d="m6 6 12 12M18 6 6 18" />
    )
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || icons.leaf}
    </svg>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="FreshRoute home">
      <img className="logo-image" src={logoTransparent} alt="FreshRoute logo" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Logo />
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-pad" id="top">
      <div className="hero-content">
        <div className="hero-text-section">
          <span className="eyebrow">Next-Generation Fresh Produce Technology</span>
          <h1 className="hero-title">
            Smart Fruit Supply Chain <span className="highlight">with Freshness</span>
          </h1>
          <p className="hero-description">
            Revolutionize your fresh produce logistics with AI-powered routing, predictive analytics, and direct farm-to-consumer connections. Deliver maximum freshness while minimizing waste and optimizing costs.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <strong>95%</strong>
              <span>Fresher Produce</span>
            </div>
            <div className="stat-item">
              <strong>40%</strong>
              <span>Cost Reduction</span>
            </div>
            <div className="stat-item">
              <strong>24/7</strong>
              <span>Real-time Tracking</span>
            </div>
          </div>
          <div className="hero-actions">
            <a className="btn primary cta-main" href="#contact">
              <span>Get Started Today</span>
              <Icon name="arrow" />
            </a>
            <a className="btn secondary cta-secondary" href="#platform">
              <span>Explore Platform</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="FreshRoute value highlights">
      <div className="container trust-grid">
        <div>
          <strong>🚀 Faster Delivery</strong>
          <span>Direct farm-to-shop routes</span>
        </div>
        <div>
          <strong>💰 Cost Reduction</strong>
          <span>Zero inventory management</span>
        </div>
        <div>
          <strong>📊 Data-Driven</strong>
          <span>AI-powered forecasting</span>
        </div>
        <div>
          <strong>🤝 Trusted Partners</strong>
          <span>Proven supply chain solutions</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Platform() {
  return (
    <section className="section-pad" id="platform">
      <div className="container">
        <SectionHeading
          eyebrow="The Platform"
          title="Smart Logistics for Fresh Produce"
          text="Experience the future of fresh produce supply chain management with our comprehensive platform designed to maximize freshness, minimize waste, and optimize delivery routes."
          align="center"
        />
        <div className="features-grid">
          {featureCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <div className="feature-icon"><Icon name={card.icon} /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (post) => {
    setSelectedImage(post);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="media-section section-pad" id="media">
      <div className="container">
        <SectionHeading
          eyebrow="Media"
          title="FreshRoute Always for Freshness and Transparency"
          text="Explore our latest updates and insights on fresh produce logistics and services provided by FreshRoute. We share news, success stories, and industry trends to keep you informed and connected to the future of fresh supply chains."
          align="center"
        />
        <div className="media-grid">
          {mediaPosts.map((post) => (
            <article className={`media-card ${post.variant}`} key={post.title} onClick={() => openModal(post)}>
              <div className="media-image-container">
                <img src={post.image} alt={post.alt} loading="lazy" />
                <div className="media-overlay">
                  <div className="media-actions">
                    <button className="media-btn view-btn" aria-label="View image">
                      <Icon name="arrow" />
                      <span>View</span>
                    </button>
                    <button className="media-btn share-btn" aria-label="Share post">
                      <Icon name="partners" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="media-caption">
                <span>{post.tag}</span>
                <h3>{post.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {selectedImage && (
          <div className="media-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                <Icon name="close" />
              </button>
              <div className="modal-image">
                <img src={selectedImage.image} alt={selectedImage.alt} />
              </div>
              <div className="modal-info">
                <span className="modal-tag">{selectedImage.tag}</span>
                <h3 className="modal-title">{selectedImage.title}</h3>
                <div className="modal-actions">
                  <button className="modal-btn download-btn">
                    <Icon name="arrow" />
                    <span>Download</span>
                  </button>
                  <button className="modal-btn share-btn">
                    <Icon name="partners" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="workflow section-pad">
      <div className="container workflow-grid">
        <div>
          <SectionHeading
            eyebrow="How It Works"
            title="Four Steps to Fresh Excellence"
            text="Our streamlined process transforms traditional supply chains into efficient, data-driven operations that deliver maximum freshness with minimum waste."
          />
        </div>
        <div className="steps-list">
          {workflowSteps.map((step) => (
            <article className="step-card" key={step.step}>
              <span>{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="section-pad" id="solutions">
      <div className="container">
        <SectionHeading
          eyebrow="Solutions"
          title="Tailored for Every Stakeholder"
          text="FreshRoute's flexible platform adapts to the unique needs of farmers, retailers, and logistics teams, creating a seamless ecosystem that benefits everyone in the fresh produce supply chain."
          align="center"
        />
        <div className="solutions-grid">
          {solutionCards.map((card) => (
            <article className="solution-card" key={card.title}>
              <div className="check-icon"><Icon name="check" /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="impact section-pad" id="impact">
      <div className="container impact-grid">
        <div className="impact-panel">
          <span className="eyebrow">Impact</span>
          <h2>Transforming Fresh Produce Logistics</h2>
          <p>
            FreshRoute revolutionizes the way fresh produce moves from farm to consumer. By eliminating unnecessary inventory and optimizing delivery routes, we ensure maximum freshness, reduced waste, and improved profitability for all stakeholders.
          </p>
        </div>
        <div className="impact-list">
          {impactItems.map((item) => (
            <div className="impact-item" key={item}>
              <Icon name="check" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-pad" id="faq">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything You Need to Know"
          text="Get answers to the most common questions about FreshRoute and how it can transform your fresh produce supply chain operations."
        />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('Thanks for your interest! Our team will contact you within 24 hours.');
    event.currentTarget.reset();
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Get Started</span>
          <h2>Ready to Revolutionize Your Supply Chain?</h2>
          <p>
            Join the growing network of farmers, retailers, and logistics professionals who are transforming fresh produce logistics with FreshRoute. Let&apos;s discuss how we can optimize your operations.
          </p>
          <div className="contact-links">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Follow us on Facebook</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name or Organization
            <input type="text" name="name" placeholder="Your name or company" required />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="your@email.com" required />
          </label>
          <label>
            Area of Interest
            <select name="interest" defaultValue="">
              <option value="" disabled>Select your interest</option>
              <option>Shop Onboarding</option>
              <option>Farm Supplier Integration</option>
              <option>Smart Forecasting Demo</option>
              <option>Pilot Program</option>
              <option>Marketing Partnership</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Tell us about your needs
            <textarea name="message" rows="5" placeholder="Describe your requirements and how FreshRoute can help..." required />
          </label>
          <button className="btn primary form-button" type="submit">Send Message</button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Transforming fresh produce supply chains with intelligent logistics, zero-waste solutions, and direct farm-to-consumer connections.</p>
        </div>
        <div className="footer-links">
          <a href="#platform">Platform</a>
          <a href="#media">Media</a>
          <a href="#solutions">Solutions</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-links">
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} FreshRoute. All rights reserved.</span>
        <span>Revolutionizing Fresh Produce Logistics</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Platform />
        <MediaGallery />
        <Workflow />
        <Solutions />
        <Impact />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FACEBOOK_URL = "https://www.facebook.com/share/1SoecsTGwY/";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Categories", href: "#media" },
  { label: "Process", href: "#process" },
  { label: "Solutions", href: "#solutions" },
  { label: "Quality", href: "#impact" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const featureCards = [
  {
    title: "Verified fruit sourcing",
    text: "Connect trusted farmers, exporters, distributors, and buyers around available harvests and confirmed demand.",
    image: "/media/Image_1.png",
    alt: "",
  },
  {
    title: "Technology routing",
    text: "Plan direct farm-to-shop movement with clearer pickup windows, delivery needs, and route coordination.",
    image: "/media/Image_2.png",
    alt: "",
  },
  {
    title: "Quality monitoring",
    text: "Track batch notes, timing, partner updates, and freshness signals before fruit reaches the buyer.",
    image: "/media/Image_3.png",
    alt: "",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Capture demand",
    text: "Bring shop orders, farm supply, pickup points, delivery locations, time windows, and priority needs into one structured planning flow.",
  },
  {
    step: "02",
    title: "Match supply",
    text: "Use demand forecasting and price forecasting to help teams prepare the right fruit movement before waste or shortages happen.",
  },
  {
    step: "03",
    title: "Protect freshness",
    text: "Use route logic to reduce backtracking, protect quality windows, and move produce directly from farms to shops.",
  },
];

const categoryCards = [
  {
    title: "Tropical fruit",
    text: "Banana, mango, papaya, pineapple, passion fruit, and seasonal specialty harvests.",
  },
  {
    title: "Citrus and orchard",
    text: "Oranges, limes, lemons, guava, avocado, and higher-frequency retail replenishment lines.",
  },
  {
    title: "Export-ready lots",
    text: "Quality-checked, packed, and documented produce for exporters and distributor programs.",
  },
];

const solutionCards = [
  {
    title: "Farmer visibility",
    text: "Connect available harvests to real buyer demand and reduce waiting time before produce leaves the farm.",
    image: "/media/Image_4.png",
  },
  {
    title: "Exporter coordination",
    text: "Coordinate lots, quality notes, documentation needs, and pickup schedules before fruit reaches the packing floor.",
    image: "/media/Image_5.png",
  },
  {
    title: "Buyer confidence",
    text: "Order fresh produce with better availability, clearer pricing signals, and direct delivery coordination.",
    image: "/media/Image_6.png",
  },
];

const qualityItems = [
  "Move fresh produce directly from farms to shops",
  "Keep inventory lean by matching supply with confirmed demand",
  "Use demand forecasting and price forecasting for smarter planning",
  "Strengthen communication between farmers, exporters, distributors, and buyers",
];

const communityVisuals = [
  {
    title: "Farm network view",
    tag: "Sourcing",
    className: "community-wide",
  },
  {
    title: "Quality handling",
    tag: "Traceability",
    className: "community-side",
  },
];

const faqs = [
  {
    question: "What is the FreshRoute?",
    answer:
      "FreshRoute is a technology platform designed to streamline the flow of fresh produce from farms to shops, reducing waste and improving efficiency through demand and price forecasting.",
  },
  {
    question: "Who can get benefits from FreshRoute?",
    answer:
      "Farmers, shops, and logistics teams can all benefit from FreshRoute.",
  },
  {
    question: "Can FreshRoute be used for other purposes?",
    answer:
      "FreshRoute is specifically designed for streamlining the flow of fresh produce from farms to shops, but its underlying technology could potentially be adapted for other supply chain applications.",
  },
  {
    question: "Can we do the transactions through the platform?",
    answer: "Yes, the platform supports transaction processing.",
  },
  {
    question: "Can we trust the data on the platform?",
    answer:
      "Yes, we validate the data and have a good security system to protect it. Our vision is to create a transparent and trustworthy platform for all stakeholders in the fresh produce supply chain.",
  },
];

function Icon({ name }) {
  const icons = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    check: <path d="m5 12 4 4L19 6" />,
    leaf: (
      <path d="M5 19c7.5-.4 12.7-5.8 14-14-8.2 1.2-13.6 6.5-14 14Zm0 0c2.2-4.7 5.4-7.8 10-10" />
    ),
    route: (
      <path d="M4 16c3 0 3-4 6-4s3 4 6 4 3-4 4-4M7 6h.01M17 6h.01M8 6c0 1.5-3 3.3-3 5.8 0 1.9 1.4 3.7 3 3.7s3-1.8 3-3.7C11 9.3 8 7.5 8 6Zm9 0c0 1.5-3 3.3-3 5.8 0 1.9 1.4 3.7 3 3.7s3-1.8 3-3.7C20 9.3 17 7.5 17 6Z" />
    ),
    scan: (
      <path d="M7 4H5a1 1 0 0 0-1 1v2m13-3h2a1 1 0 0 1 1 1v2M7 20H5a1 1 0 0 1-1-1v-2m13 3h2a1 1 0 0 0 1-1v-2M7 12h10m-8-3h6m-5 6h4" />
    ),
  };

  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || icons.leaf}
    </svg>
  );
}

function ImageSlot({ image, alt = "", className = "" }) {
  return (
    <div
      className={`image-slot ${image ? "has-image" : "is-empty"} ${className}`}
    >
      {image && <img src={image} alt={alt} loading="lazy" />}
    </div>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="FreshRoute home">
      <img
        className="logo-image"
        src="/FreshrouteLogo.png"
        alt=""
        aria-hidden="true"
      />
      <span>
        <span className="logo-fresh">Fresh</span>
        <span className="logo-route">Route</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    let frame = 0;

    function updateHeaderState() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const hero = document.querySelector(".hero");
        const heroBottom = hero
          ? hero.offsetTop + hero.offsetHeight
          : window.innerHeight;
        setOverHero(window.scrollY < heroBottom - 96);
      });
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  return (
    <header
      className={`site-header ${overHero ? "is-over-hero" : "is-scrolled"} ${open ? "is-menu-open" : ""}`}
    >
      <nav className="nav-shell" aria-label="Main navigation">
        <Logo />
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-pill" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero image-cover" id="top">
      <div className="hero-overlay">
        <p className="section-kicker">FreshRoute / Fruit Supply Chain</p>
        <h1>FreshRoute.</h1>
        <p className="hero-copy">
          Pioneering a cleaner way to connect farmers, exporters, distributors,
          and buyers through responsive sourcing, routing, and quality
          workflows.
        </p>
      </div>
      <a className="hero-scroll" href="#platform" aria-label="Explore platform">
        <span>Explore more</span>
        <span className="scroll-dot">
          <Icon name="arrow" />
        </span>
      </a>
    </section>
  );
}

function Platform() {
  return (
    <section className="white-section" id="platform">
      <div className="section-grid intro-grid">
        <p className="section-kicker">Our sustainable methods</p>
        <div>
          <h2>
            Explore FreshRoute technology, which is reshaping fresh fruit
            logistics.
          </h2>
          <p>
            FreshRoute connects harvest availability, buyer demand, delivery
            routes, and quality checks in one clean operating flow.
          </p>
        </div>
      </div>

      <div className="feature-image-grid">
        {featureCards.map((card) => (
          <article className="feature-image-card" key={card.title}>
            <ImageSlot image={card.image} alt={card.alt} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="white-section compact-section" id="process">
      <div className="center-copy">
        <p className="section-kicker">Supply-chain benefits</p>
        <h2>
          Check out FreshRoute modern sourcing solutions and see the core
          benefits.
        </h2>
      </div>
      <div className="process-list">
        {workflowSteps.map((step) => (
          <article className="process-row" key={step.step}>
            <span>{step.step}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
            <Icon name="arrow" />
          </article>
        ))}
      </div>
    </section>
  );
}

function ImageBand() {
  return (
    <section className="image-band image-cover">
      <div>
        <h2>
          Collaborate and learn from industry experts and produce partners.
        </h2>
        <a
          className="round-arrow"
          href="#solutions"
          aria-label="Explore partner solutions"
        >
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}

function ProductCategories() {
  return (
    <section className="white-section media-section" id="media">
      <div className="section-grid">
        <p className="section-kicker">Produce network</p>
        <div>
          <h2>
            Be part of a dynamic community focused on advancing fresh produce
            logistics.
          </h2>
          <p>
            FreshRoute supports grower networks, pack houses, logistics teams,
            and buyers with a clear operating layer for daily fruit movement.
          </p>
        </div>
      </div>

      <div className="category-list">
        {categoryCards.map((card) => (
          <article key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <div className="community-mosaic">
        {communityVisuals.map((visual) => (
          <article
            className={`community-card ${visual.className}`}
            key={visual.title}
          >
            <ImageSlot />
            <span>{visual.tag}</span>
            <h3>{visual.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="dark-section" id="solutions">
      <div className="dark-intro">
        <p className="section-kicker">Smart supply-chain tools</p>
        <h2>
          Innovative fruit sourcing solutions for achieving optimal growth and
          yield.
        </h2>
        <p>
          From partner onboarding to batch visibility, FreshRoute is designed
          for high-turnover produce movement.
        </p>
      </div>

      <div className="dark-card-grid">
        {solutionCards.map((card) => (
          <article className="dark-card" key={card.title}>
            <ImageSlot image={card.image} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="white-section impact-section" id="impact">
      <div className="impact-copy">
        <p className="section-kicker">Reliable quality</p>
        <h2>Improving sourcing with new ideas for the future.</h2>
        <p>
          Batch notes, pickup visibility, and buyer-ready quality checks help
          every partner move with more confidence.
        </p>
        <div className="quality-grid">
          {qualityItems.map((item) => (
            <div key={item}>
              <Icon name="check" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <ImageSlot className="impact-image" />
    </section>
  );
}

function FAQ() {
  return (
    <section className="white-section faq-section" id="faq">
      <div className="section-grid">
        <p className="section-kicker">FAQ</p>
        <h2>Everything new supply partners ask first.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(
      "Thanks for your interest! Our team will contact you within 24 hours.",
    );
    event.currentTarget.reset();
  }

  return (
    <section className="contact-section" id="contact">
      <div className="newsletter-panel">
        <h2>
          Get the latest FreshRoute updates by starting a supply conversation.
        </h2>
        <a
          className="action-pill"
          href={FACEBOOK_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span>Facebook</span>
          <Icon name="arrow" />
        </a>
      </div>

      <div className="contact-layout">
        <div>
          <p className="section-kicker">Contact FreshRoute</p>
          <h2>Build a fresher route from farm to buyer.</h2>
          <p>
            Share your sourcing, export, retail, or logistics goals and we will
            help map the right FreshRoute workflow for your team.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name or Organization
            <input
              type="text"
              name="name"
              placeholder="Your name or company"
              required
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </label>
          <label>
            Area of Interest
            <select name="interest" defaultValue="">
              <option value="" disabled>
                Select your interest
              </option>
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
            <textarea
              name="message"
              rows="5"
              placeholder="Describe your requirements and how FreshRoute can help..."
              required
            />
          </label>
          <button className="action-pill dark form-button" type="submit">
            <span>Send Message</span>
            <Icon name="arrow" />
          </button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Logo />
          <p>Fresh produce logistics for trusted supply-chain partners.</p>
        </div>
        <div className="footer-links">
          <a href="#platform">Platform</a>
          <a href="#media">Categories</a>
          <a href="#solutions">Solutions</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-links">
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <span>&copy; {new Date().getFullYear()} FreshRoute</span>
        </div>
      </div>
      <strong className="footer-brand">FreshRoute</strong>
    </footer>
  );
}

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(".site-header", {
        y: -24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero .section-kicker", { y: 18, opacity: 0, duration: 0.7 })
        .from(".hero h1", { y: 52, opacity: 0, duration: 1 }, "-=0.3")
        .from(".hero-copy", { y: 24, opacity: 0, duration: 0.8 }, "-=0.55")
        .from(".hero-scroll", { y: 18, opacity: 0, duration: 0.65 }, "-=0.35");

      gsap.to(".scroll-dot", {
        y: 8,
        duration: 1.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero", {
        backgroundPosition: "center 58%",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils
        .toArray(".white-section, .dark-section, .contact-section")
        .forEach((section) => {
          const headingTargets = section.querySelectorAll(
            ".section-kicker, h2, p",
          );

          gsap.from(headingTargets, {
            y: 30,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          });
        });

      gsap.utils
        .toArray(
          ".feature-image-card, .category-list article, .dark-card, .community-card, .quality-grid div, details",
        )
        .forEach((item) => {
          gsap.from(item, {
            y: 34,
            opacity: 0,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          });
        });

      gsap.utils.toArray(".image-slot").forEach((slot, index) => {
        gsap.from(slot, {
          clipPath: "inset(14% 0% 14% 0%)",
          y: 28,
          opacity: 0,
          duration: 0.85,
          delay: (index % 3) * 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slot,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray(".process-row").forEach((row) => {
        gsap.from(row, {
          x: -34,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.from(".image-band h2, .image-band .round-arrow", {
        y: 34,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-band",
          start: "top 74%",
          once: true,
        },
      });

      gsap.to(".image-band", {
        backgroundPosition: "center 62%",
        ease: "none",
        scrollTrigger: {
          trigger: ".image-band",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".footer-brand", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 82%",
          once: true,
        },
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef}>
      <Header />
      <main className="page-shell">
        <Hero />
        <Platform />
        <Process />
        <ImageBand />
        <ProductCategories />
        <Solutions />
        <Impact />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

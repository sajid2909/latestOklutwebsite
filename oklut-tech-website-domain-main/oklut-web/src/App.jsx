import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from './i18n/TranslationContext'
import { supabase } from './lib/supabase.js'
import { useAuth } from './lib/auth.jsx'
import AuthModal from './components/AuthModal.jsx'
import { CookieConsentBanner } from './components/cookie/CookieConsentBanner.tsx'
import { CookiePreferenceModal } from './components/cookie/CookiePreferenceModal.tsx'
import { useCookieConsent } from './components/cookie/CookieConsentProvider.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx'
import { Chatbot } from './components/Chatbot/Chatbot.tsx'
import { Icon } from './components/Icon.jsx'
import './App.css'

function RedirectToStatic({ file }) {
  useEffect(() => {
    window.location.assign(file)
  }, [file])
  return null
}

const CareersPage = lazy(() => import('./pages/CareersPage.jsx'))
const BookConsultationPage = lazy(() => import('./pages/BookConsultationPage.jsx'))
const TechnologyDetailPage = lazy(() => import('./pages/technologies/TechnologyDetailPage.jsx'))
import { TECHNOLOGIES_DATA } from './data/technologiesData.js'
import { PERSPECTIVES_DATA } from './data/perspectivesData.js'




const SharedServicesPage = lazy(() => import('./pages/SharedServicesPage.jsx'))
// Premium pages merged with unified dark theme and design language
const CustomDevelopmentPage = lazy(() => import('./pages/CustomDevelopmentPage.jsx'))
const ProcessAutomationPage = lazy(() => import('./pages/ProcessAutomationPage.jsx'))
const PilotPrototypingPagePremium = lazy(() => import('./pages/PilotPrototypingPage.jsx'))
const SolutionEngineeringPagePremium = lazy(() => import('./pages/SolutionEngineeringPage.jsx'))
const CentreOfExcellencePage = lazy(() => import('./pages/CentreOfExcellencePage.jsx'))
const DigitalTransformationPagePremium = lazy(() => import('./pages/DigitalTransformationPage.jsx'))
const MigrationServicesPagePremium = lazy(() => import('./pages/MigrationServicesPage.jsx'))
const EndToEndSolutionsPagePremium = lazy(() => import('./pages/EndToEndSolutionsPage.jsx'))
const AIRoboticsPage = lazy(() => import('./pages/services/AIRobotics.jsx'))
const InformationReportingSystemsPage = lazy(() => import('./pages/services/InformationReportingSystems.jsx'))
const CenterOfExcellencePage = lazy(() => import('./pages/services/CenterOfExcellencePage.jsx'))
const SolutionEngineeringPage = lazy(() => import('./pages/services/SolutionEngineeringPage.jsx'))
const DigitalTransformationPage = lazy(() => import('./pages/services/DigitalTransformationPage.jsx'))
const MigrationServicesPage = lazy(() => import('./pages/services/MigrationServicesPage.jsx'))
const EndToEndSolutionsPage = lazy(() => import('./pages/services/EndToEndSolutionsPage.jsx'))
const OneStopSolutionsPage = lazy(() => import('./pages/services/OneStopSolutionsPage.jsx'))
const PilotPrototypingPage = lazy(() => import('./pages/services/PilotPrototypingPage.jsx'))
const ManagedServicesPage = lazy(() => import('./pages/services/ManagedServicesPage.jsx'))
const ProductsPage = lazy(() => import('./pages/ProductsPage.jsx'))

const GMAIL_COMPOSE_URL =
  'https://mail.google.com/mail/u/0/?pli=1#inbox?compose=DmwnWrRvwttmtqXdlSPmhJcnwgNknRpNQrlZKjhdBnMLfqKHsMdvkLDjxhLPHVPjvZwdpnvFWzZg'

const CONTACT = {
  phone: '18004103299',
  phoneHref: 'tel:18004103299',
  phoneDisplay: '1800 410 3299',
  email: 'info@oklut.com',
  emailHref: 'mailto:info@oklut.com',
  addressLine: 'SBR Towers, Axis bank building, Madhapur, Hyderabad',
  address:
    'SBR Towers, Axis bank building, Second Floor, D No 1/98/93/23, HUDA Tecno Encalve Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081',
  mapsHref:
    'https://www.google.com/maps/dir/?api=1&destination=Second+Floor,+Samridhi+Vasyam,+D+No+1%2F98%2F9%2F3%2F23,+Capital+Pk+Rd,+beside+Narayana+High+School,+Cyber+Hills+Colony,+VIP+Hills,+Jaihind+Enclave,+Madhapur,+Hyderabad,+Telangana+500081',
  vijayawadaAddress:
    'D.No. 24-29-210A, Durgapuram, Gulabithota Road, Vijayawada, NTR District, Andhra Pradesh – 520003',
  vijayawadaMapsHref:
    'https://www.google.com/maps/search/D.No.+24-29-210A,+Durgapuram,+Gulabithota+Road,+Vijayawada,+NTR+District,+Andhra+Pradesh+520003',
  southAfricaCompany: 'OKLUT TECHNOLOGIES (PTY) LTD',
  southAfricaAddress: 'Unit 11, Sunset View, 10 Hazy Street, Newcastle, Kwa-Zulu Natal, 2930, South Africa',
  southAfricaMapsHref:
    'https://www.google.com/maps/search/Unit+11+Sunset+View+10+Hazy+Street+Newcastle+Kwa-Zulu+Natal+2930+South+Africa',
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services', hasDropdown: true },
  { id: 'products', label: 'Products' },
  { id: 'news', label: 'Perspectives' },
  { id: 'gallery', label: 'Technologies', hasDropdown: true },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
]



const FEATURED_PRODUCTS = [
  { title: 'Oklut AI Suite', description: 'Intelligent autonomous agents and tools that automate complex workflows and customer operations.' },
  { title: 'CloudNexus', description: 'Multi-cloud management platform optimizing performance, security, compliance, and costs.' },
  { title: 'WorkSync', description: 'Hybrid collaboration and productivity hub with integrated task, chat, and document management.' },
  { title: 'DataStream', description: 'Real-time analytics engine transforming streams of business events into actionable insights.' }
]

const ERP_SOLUTIONS = [
  { title: 'Oklut ERP Core', description: 'Unified enterprise architecture connecting finance, assets, HR, procurement, and inventory.' },
  { title: 'HRMS Pro', description: 'Employee experience platform covering payroll, benefits, performance reviews, and self-service.' },
  { title: 'SupplyChain IQ', description: 'Real-time logistics tracking, automated warehouse operations, and demand forecasting.' },
  { title: 'Finance Hub', description: 'Advanced ledger management, billing workflows, automated compliance, and real-time cashflow reports.' }
]

const IT_SOLUTIONS = [
  { title: 'Cloud Infrastructure', description: 'Scalable cloud architecture, migration, and management across AWS, Azure, and GCP.' },
  { title: 'Cybersecurity Suite', description: 'End-to-end security monitoring, threat detection, and compliance management.' },
  { title: 'DevOps Pipeline', description: 'CI/CD automation, containerization, and infrastructure-as-code for faster delivery.' },
  { title: 'Managed IT Services', description: '24/7 infrastructure monitoring, incident response, and proactive maintenance.' }
]

const CRM_SOLUTIONS = [
  { title: 'Sales CRM', description: 'Pipeline management, lead scoring, deal tracking, and sales forecasting in one platform.' },
  { title: 'Customer Support Hub', description: 'Ticketing, knowledge base, live chat, and omnichannel support management.' },
  { title: 'Marketing Automation', description: 'Campaign orchestration, email automation, lead nurturing, and analytics.' },
  { title: 'Customer 360 View', description: 'Unified customer profiles combining sales, support, and interaction data.' }
]

const HRMS_SOLUTIONS = [
  { title: 'Core HR', description: 'Employee records, org hierarchy, leave management, and attendance tracking.' },
  { title: 'Payroll & Compliance', description: 'Automated payroll processing, tax calculations, and statutory compliance.' },
  { title: 'Performance Management', description: 'OKR tracking, 360° reviews, goal setting, and employee development plans.' },
  { title: 'Recruitment Portal', description: 'Job postings, applicant tracking, interview scheduling, and onboarding workflows.' }
]

const TECH_NAV_ITEMS = TECHNOLOGIES_DATA.map((t) => ({
  label: t.title,
  to: `/technologies/${t.slug}`,
}))

const SERVICES = [
  {
    label: 'Inception To Deployment',
    slug: 'inception-to-deployment',
    icon: 'code',
    description: 'End-to-end development of new digital solutions from business requirements and solution architecture through development, integration, testing, deployment, and ongoing support.',
    translationKey: 'buildFromScratch',
  },
  {
    label: 'Business Process Automation',
    slug: 'business-process-automation',
    icon: 'gears',
    description: 'Design and implementation of intelligent automation solutions that streamline business processes, eliminate repetitive manual activities, improve operational efficiency, and accelerate business outcomes.',
    translationKey: 'businessProcessAutomation',
  },
  {
    label: 'Center of Excellence',
    slug: 'center-of-excellence',
    icon: 'award',
    description: 'Establishment of specialized technology and business capability centers that provide governance, standards, expertise, frameworks, reusable assets, and continuous improvement across the organization.',
    translationKey: 'centerOfExcellence',
  },
  {
    label: 'Custom Development & Customization',
    slug: 'custom-development-customization',
    icon: 'layers',
    description: 'Development and enhancement of applications, platforms, workflows, and enterprise solutions to address unique business requirements and deliver tailored functionality.',
    translationKey: 'customDevelopmentCustomization',
  },
  {
    label: 'Digital Transformation',
    slug: 'digital-transformation',
    icon: 'trendingUp',
    description: 'Modernization of business operations, technology ecosystems, and customer experiences through cloud, AI, automation, data, and modern application technologies.',
    translationKey: 'digitalTransformation',
  },
  {
    label: 'End-to-End Solution Framework',
    slug: 'end-to-end-solution-framework',
    icon: 'package',
    description: 'A comprehensive delivery approach covering the complete technology lifecycle—from strategy, requirements, and architecture to development, integration, deployment, governance, monitoring, and support.',
    translationKey: 'endToEndSolutionFramework',
  },
  {
    label: 'Migration & Modernization',
    slug: 'migration-modernization',
    icon: 'cloud',
    description: 'Secure and structured migration of applications, data, platforms, infrastructure, and workloads from legacy or existing environments to modern, scalable, and optimized technology platforms.',
    translationKey: 'migrationModernization',
  },
  {
    label: 'Proof of Concept (PoC) & Pilot Implementation',
    slug: 'poc-pilot-implementation',
    icon: 'rocket',
    description: 'Rapid development and validation of technology solutions to assess technical feasibility, business value, integration requirements, performance, and scalability before full-scale implementation.',
    translationKey: 'pocPilotImplementation',
  },
  {
    label: 'Shared Services & Managed Operations',
    slug: 'shared-services-managed-operations',
    icon: 'server',
    description: 'Centralized delivery of technology and operational capabilities across business units through standardized processes, skilled resources, governance frameworks, service management, and measurable service levels.',
    translationKey: 'sharedServicesManagedOperations',
  },
]

const SECTION_IDS = ['top', 'about', 'gallery', 'news', 'services', 'contact']

const NAV_OFFSET = 78

function scrollToSection(id) {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior })
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior, block: 'start' })
}

function SectionLink({ id, children, className = '', isActive = false, onNavigate }) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    onNavigate?.()
    if (location.pathname === '/') {
      scrollToSection(id)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <a
      href={`#${id}`}
      className={`${className}${isActive ? ' active' : ''}`.trim()}
      onClick={handleClick}
      aria-current={isActive ? 'true' : undefined}
    >
      {children}
    </a>
  )
}


function Navbar({ onSignIn, onSignUp }) {
  const { user, signOut } = useAuth()
  const { t } = useTranslation()
  const location = useLocation()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [techOpen, setTechOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef(null)
  const techRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setMobileOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  useEffect(() => {
    const onOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
      if (techRef.current && !techRef.current.contains(e.target)) {
        setTechOpen(false)
      }
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }
    let ticking = false
    let cancelled = false
    const update = () => {
      ticking = false
      let current = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= NAV_OFFSET) current = id
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = SECTION_IDS[SECTION_IDS.length - 1]
      if (!cancelled) setActiveSection(current)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelled = true
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [location.pathname])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container flex flex-between">
        <SectionLink
          id="top"
          className="brand"
          isActive={location.pathname === '/' && activeSection === 'top'}
          onNavigate={closeMobile}
        >
          <img
            src={`${import.meta.env.BASE_URL}img/logo.jpg`}
            alt="Oklut Technologies logo"
            className="brand-logo"
          />
        </SectionLink>
        <nav className={`nav-links ${mobileOpen ? 'nav-links-open' : ''}`} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            if (item.hasDropdown && item.id === 'services') {
              return (
                <div
                  key={item.id}
                  className="services-dropdown-wrap"
                  ref={servicesRef}
                >
                  <button
                    type="button"
                    className="services-toggle"
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    onClick={() => {
                      setServicesOpen((o) => !o)
                      setTechOpen(false)
                    }}
                  >
                    <span>{t('nav.services')}</span>
                    <span
                      className={`services-chevron ${servicesOpen ? 'is-open' : ''}`}
                      aria-hidden="true"
                    >
                      <Icon name="chevron" />
                    </span>
                  </button>
                  <div
                    className={`services-dropdown ${servicesOpen ? 'is-open' : ''}`}
                    role="menu"
                    aria-label="Services"
                  >
                    {SERVICES.map((s) => (
                      s.externalUrl ? (
                        <a
                          key={s.slug}
                          href={s.externalUrl}
                          className="services-dropdown-item"
                          onClick={() => { closeMobile(); setServicesOpen(false) }}
                        >
                          {s.label}
                        </a>
                      ) : (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="services-dropdown-item"
                          onClick={() => { closeMobile(); setServicesOpen(false) }}
                        >
                          {s.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )
            }
            if (item.hasDropdown && item.id === 'gallery') {
              return (
                <div
                  key={item.id}
                  className="services-dropdown-wrap"
                  ref={techRef}
                >
                  <button
                    type="button"
                    className="services-toggle"
                    aria-haspopup="menu"
                    aria-expanded={techOpen}
                    onClick={() => {
                      setTechOpen((o) => !o)
                      setServicesOpen(false)
                    }}
                  >
                    <span>{t('nav.technologies')}</span>
                    <span
                      className={`services-chevron ${techOpen ? 'is-open' : ''}`}
                      aria-hidden="true"
                    >
                      <Icon name="chevron" />
                    </span>
                  </button>
                  <div
                    className={`services-dropdown ${techOpen ? 'is-open' : ''}`}
                    role="menu"
                    aria-label="Technologies"
                  >
                    {TECH_NAV_ITEMS.map((t, i) => (
                      t.to ? (
                        <Link
                          key={i}
                          to={t.to}
                          className="services-dropdown-item"
                          onClick={() => { closeMobile(); setTechOpen(false) }}
                        >
                          {t.label}
                        </Link>
                      ) : (
                        <a
                          key={i}
                          href={t.href}
                          className="services-dropdown-item"
                          onClick={() => { closeMobile(); setTechOpen(false) }}
                        >
                          {t.label}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )
            }
            if (item.id === 'products') {
              return (
                <Link
                  key={item.id}
                  to="/products"
                  className={location.pathname === '/products' ? 'active' : ''}
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              )
            }
            if (item.id === 'news') {
              return (
                <Link
                  key={item.id}
                  to="/perspectives"
                  className={location.pathname === '/perspectives' ? 'active' : ''}
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              )
            }
            if (item.id === 'careers') {
              return (
                <a
                  key={item.id}
                  href="https://hrm.oklut.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                >
                  {item.label}
                </a>
              )
            }
            return (
              <SectionLink
                key={item.id}
                id={item.id}
                isActive={location.pathname === '/' && activeSection === item.id}
                onNavigate={closeMobile}
              >
                {item.label}
              </SectionLink>
            )
          })}
          <div className="auth-area">
            {user ? (
              <div className="user-menu">
                <button
                  type="button"
                  className="user-chip"
                  onClick={() => setUserMenuOpen((o) => !o)}
                  aria-expanded={userMenuOpen}
                >
                  <span className="user-avatar" aria-hidden="true">
                    {(user.user_metadata?.full_name || user.email).trim()[0]?.toUpperCase()}
                  </span>
                  <span className="user-name">{(user.user_metadata?.full_name || user.email || '').split('@')[0]}</span>
                </button>
                {userMenuOpen && (
                  <div className="user-dropdown">
                    <div className="user-dropdown-info">
                      <strong>{user.user_metadata?.full_name || 'User'}</strong>
                      <span>{user.email}</span>
                    </div>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={async () => {
                        setUserMenuOpen(false)
                        try {
                          await signOut()
                        } catch (err) {
                          console.error(err)
                        }
                      }}
                    >
                      {t('nav.signOut')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button type="button" className="btn btn-ghost btn-sm nav-signin" onClick={onSignIn}>
                  {t('nav.signIn')}
                </button>
                <button type="button" className="btn btn-primary btn-sm nav-cta" onClick={onSignUp}>
                  {t('nav.signUp')}
                </button>
              </>
            )}
          </div>
        </nav>
        <button
          type="button"
          className="nav-burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  const { t } = useTranslation()
  return (
    <section id="top" className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={`${import.meta.env.BASE_URL}img/hero-poster.jpg`}
      >
        <source src={`${import.meta.env.BASE_URL}video/hero-bg.mp4`} type="video/mp4" />
        <source src={`${import.meta.env.BASE_URL}video/hero-bg.webm`} type="video/webm" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge-wrap reveal">
            <span className="glow-pill">
              <span className="glow-dot" />
              {t('hero.eyebrow')}
            </span>
          </div>
          <h1 className="reveal">
            <span dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
          </h1>
          <p className="hero-sub reveal">
            {t('hero.description')}
          </p>
          <div className="hero-actions reveal">
            <Link to="/book-consultation" className="btn btn-primary btn-lg">
              {t('hero.bookConsultation')}
              <Icon name="arrow" />
            </Link>
            <a
              href="#our-services"
              className="btn btn-glass btn-lg"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('our-services')
              }}
            >
              {t('hero.exploreServices')}
            </a>
          </div>
          <ul className="hero-facts reveal">
            <li className="hero-fact-card glass-card">
              <strong>12+</strong>
              <span>{t('hero.years')}</span>
            </li>
            <li className="hero-fact-card glass-card">
              <strong>320+</strong>
              <span>{t('hero.projects')}</span>
            </li>
            <li className="hero-fact-card glass-card">
              <strong>98%</strong>
              <span>{t('hero.retention')}</span>
            </li>
          </ul>
          <div className="hero-location reveal">
            <span>
              <Icon name="pin" /> {t('hero.location')}
            </span>
            <span>{t('hero.since')}</span>
          </div>
        </div>
      </div>
      <div className="hero-meta" aria-hidden="true">
        <span>{t('hero.metaStudio')}</span>
        <span>{t('hero.metaTech')}</span>
      </div>
    </section>
  )
}

function SectionHead({ index, eyebrow, title, sub, center = false }) {
  return (
    <div className={`section-head${center ? ' section-head-center' : ''} reveal`}>
      <span className="eyebrow">
        <span className="eyebrow-bar" aria-hidden="true" />
        {index && <span className="eyebrow-index">{index}</span>}
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {sub && <p className="section-head-sub">{sub}</p>}
    </div>
  )
}

function About() {
  const { t } = useTranslation()
  const features = [
    { icon: 'award', title: t('about.awardWinning'), text: t('about.awardText'), color: '#2dd4bf' },
    { icon: 'users', title: t('about.professionalStaff'), text: t('about.staffText'), color: '#38bdf8' },
    { icon: 'clock', title: t('about.support247'), text: t('about.supportText'), color: '#34d399' },
    { icon: 'star', title: t('about.fairPrices'), text: t('about.pricesText'), color: '#818cf8' },
  ]
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-statement reveal">
          <span className="eyebrow">
            <span className="eyebrow-bar" aria-hidden="true" />
            {t('about.eyebrow')}
          </span>
          <h2>
            <span dangerouslySetInnerHTML={{ __html: t('about.title') }} />
          </h2>
          <p className="about-lede" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
          <div className="about-features-grid">
            {features.map((f) => (
              <div key={f.title} className="about-feature-card glass-card reveal">
                <div className="about-feature-card-icon" style={{ '--card-accent': f.color }}>
                  <Icon name={f.icon} />
                </div>
                <h3 className="about-feature-card-title">{f.title}</h3>
                <p className="about-feature-card-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-visual reveal">
          <figure className="about-frame glass-card">
            <img src={`${import.meta.env.BASE_URL}img/about.jpg`} alt="The Oklut Technologies team at work" loading="lazy" />
            <div className="about-frame-badge">
              <strong>12+</strong>
              <span>Years of Enterprise Excellence</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}



function CountUp({ end, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const started = useRef(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setValue(end)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const step = (now) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(Math.round(end * eased))
              if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration])

  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  return (
    <strong ref={ref}>
      {reduced ? end : `${value.toLocaleString('en-IN')}${suffix}`}
    </strong>
  )
}

function Stats() {
  const { t } = useTranslation()
  const stats = [
    { value: 1056, suffix: '+', label: t('stats.happyClients'), icon: 'users', color: '#2dd4bf' },
    { value: 328, suffix: '+', label: t('stats.projectsDone'), icon: 'package', color: '#38bdf8' },
    { value: 23, suffix: '+', label: t('stats.winAwards'), icon: 'award', color: '#f59e0b' },
  ]
  return (
    <section className="statsband" aria-label="Company statistics">
      <div className="container statsband-grid">
        {stats.map((s, i) => (
          <div className="stat-card glass-card reveal" key={s.label} style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="stat-icon" style={{ color: s.color, backgroundColor: `${s.color}18` }}>
              <Icon name={s.icon} />
            </div>
            <div className="stat-info">
              <div className="stat-num text-gradient-cyan">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <span className="stat-label">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function PerspectiveModal({ perspective, onClose }) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!perspective) return null

  const handleServiceClick = (path) => {
    onClose()
    navigate(path)
  }

  const title = t(perspective.titleKey, perspective.title)
  const tag = perspective.tag

  return (
    <div
      className="perspective-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="perspective-modal-title"
    >
      <div className="perspective-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="perspective-modal-close"
          onClick={onClose}
          aria-label={t('insights.close', 'Close')}
        >
          &times;
        </button>

        <div className="perspective-modal-hero">
          <img
            src={`${import.meta.env.BASE_URL}${(perspective.imageOptimized || perspective.image).replace(/^\//, '')}`}
            alt={perspective.imageAlt || title}
            className="perspective-modal-img"
          />
          <div className="perspective-modal-hero-overlay">
            <div className="perspective-modal-meta">
              <span className="perspective-modal-tag">{tag}</span>
              <span className="perspective-modal-date">{perspective.date}</span>
              <span className="perspective-modal-readtime">{perspective.readTime}</span>
            </div>
            <h2 id="perspective-modal-title" className="perspective-modal-title">
              {title}
            </h2>
          </div>
        </div>

        <div className="perspective-modal-content">
          <p className="perspective-modal-lead">{perspective.content.lead}</p>

          <div className="perspective-modal-sections">
            {perspective.content.sections.map((sec, idx) => (
              <div key={idx} className="perspective-article-section">
                <h3>{sec.heading}</h3>
                <p>{sec.text}</p>
                {sec.points && (
                  <ul className="perspective-points-list">
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <span className="perspective-point-bullet" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {perspective.content.takeaways && (
            <div className="perspective-takeaways-box">
              <div className="perspective-takeaways-header">
                <Icon name="check" />
                <h4>{t('insights.keyTakeaways', 'Key Architectural Takeaways')}</h4>
              </div>
              <ul>
                {perspective.content.takeaways.map((tk, tIdx) => (
                  <li key={tIdx}>{tk}</li>
                ))}
              </ul>
            </div>
          )}

          {perspective.content.relatedServices && perspective.content.relatedServices.length > 0 && (
            <div className="perspective-related-box">
              <h4>{t('insights.relatedServices', 'Related Capabilities & Services')}</h4>
              <div className="perspective-related-links">
                {perspective.content.relatedServices.map((srv, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className="perspective-service-chip"
                    onClick={() => handleServiceClick(srv.path)}
                  >
                    <span>{srv.title}</span>
                    <Icon name="arrow" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="perspective-modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              {t('insights.close', 'Close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Insights() {
  const { t } = useTranslation()
  const [selectedPerspective, setSelectedPerspective] = useState(null)

  // Match every other dedicated page (Careers, Products, services…): start the
  // Perspectives page at the top when navigated to, so arriving from the
  // footer isn't left anchored at the bottom of the previous page.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Reveal-on-scroll observer: on the Home page this section relied on
  // HomePage's global observer; standalone (at /perspectives) it needs its
  // own, same as every other standalone page. Runs once on mount — every
  // perspective is always visible, so there are no filter re-renders.
  useEffect(() => {
    const revealEl = (el) => el.classList.add('revealed')
    const reveals = () => Array.from(document.querySelectorAll('.reveal'))
    if (!('IntersectionObserver' in window)) {
      reveals().forEach(revealEl)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealEl(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    reveals().forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="news" className="section insights-section">
      <div className="container">
        {/* Single primary page heading: large green "Perspectives" + elegant subtitle */}
        <div className="insights-hero reveal">
          <h1 className="insights-hero-title">{t('insights.eyebrow', 'Perspectives')}</h1>
          <p className="insights-hero-sub">{t('insights.sub', 'Exploring ideas, trends, and technology shaping the future.')}</p>
        </div>

        <div className="insights-list">
          {PERSPECTIVES_DATA.map((p, i) => {
            const title = t(p.titleKey, p.title)
            const excerpt = t(p.excerptKey, p.excerpt)
            const tag = p.tag
            // Perf: the first two rows are on screen when the page opens, so
            // load them eagerly with high priority; everything below the fold
            // lazy-loads. Intrinsic width/height let the browser reserve the
            // image space before the file arrives, so rows never shift.
            const eager = i < 2
            const image = (
              <div className="insight-row-media">
                <img
                  src={`${import.meta.env.BASE_URL}${(p.imageOptimized || p.image).replace(/^\//, '')}`}
                  alt={p.imageAlt || title}
                  className="insight-row-img"
                  width="960"
                  height="540"
                  loading={eager ? 'eager' : 'lazy'}
                  fetchPriority={eager ? 'high' : 'auto'}
                  decoding="async"
                />
              </div>
            )
            const body = (
              <div className="insight-row-body">
                <p className="insight-row-category">{tag}</p>
                <h3 className="insight-row-title">{title}</h3>
                <p className="insight-row-excerpt">{excerpt}</p>
                <div className="insight-row-footer">
                  <span className="insight-row-meta">{p.date}</span>
                  <span className="insight-row-meta">{p.readTime}</span>
                  <span className="insight-row-action">
                    {t('insights.readMore', 'Read More')}
                    <span className="insight-row-arrow" aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            )
            return (
              <article
                className="insight-row reveal"
                key={p.id}
                onClick={() => setSelectedPerspective(p)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedPerspective(p)
                  }
                }}
              >
                {image}
                {body}
              </article>
            )
          })}
        </div>
      </div>

      {selectedPerspective && (
        <PerspectiveModal
          perspective={selectedPerspective}
          onClose={() => setSelectedPerspective(null)}
        />
      )}
    </section>
  )
}

function Technologies() {
  const { t } = useTranslation()

  return (
    <section id="gallery" className="section tech-section">
      <div className="container">
        <SectionHead
          eyebrow="TECHNOLOGIES & ARCHITECTURE"
          title="Enterprise Technology Solutions"
          sub="Intelligent Technology. Automated Operations. Smarter Business."
          center
        />
        <div className="tech-grid">
          {TECHNOLOGIES_DATA.map((t, i) => (
            <Link
              to={`/technologies/${t.slug}`}
              key={t.id}
              className="tech-card glass-card reveal"
              style={{ transitionDelay: `${(i % 4) * 80}ms`, textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
            >
              <div className="tech-card-icon">
                <Icon name={t.icon || 'cpu'} />
              </div>
              <h3 className="tech-card-title">{t.title}</h3>
              <div className="tech-card-tagline">
                {t.tagline}
              </div>
              <p className="tech-card-text" style={{ flexGrow: 1 }}>
                {t.overview[0]}
              </p>
              <div className="tech-card-action">
                <span>Explore Technology</span>
                <Icon name="arrow" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 5000)
    return () => clearTimeout(t)
  }, [toast])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t('contact.validation.nameRequired') || 'Name is required.'
    if (!form.email.trim()) next.email = t('contact.validation.emailRequired') || 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('contact.validation.emailInvalid') || 'Enter a valid email.'
    if (!form.message.trim()) next.message = t('contact.validation.messageRequired') || 'Message is required.'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    const { error } = await supabase.from('contact_messages').insert([{ ...form }])

    if (error) {
      setStatus('idle')
      setToast({ type: 'error', text: t('contact.errorMsg') })
    } else {
      setStatus('success')
      setForm({ name: '', email: '', company: '', subject: '', message: '' })
      setToast({ type: 'success', text: t('contact.successMsg') })
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-message', {
          body: {
            to: form.email.trim(),
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company.trim(),
            subject: form.subject.trim(),
            message: form.message.trim(),
          },
        })
        if (emailError) console.error('Contact confirmation email failed:', emailError)
      } catch (emailErr) {
        console.error('Contact confirmation email failed:', emailErr)
      }
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHead
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          sub={t('contact.sub')}
        />
        <div className="contact-layout">
          <div className="contact-info reveal">
            <div className="contact-panel">
              <span className="eyebrow">
                <span className="eyebrow-bar" aria-hidden="true" />
                {t('contact.reachUs')}
              </span>
              <h3 className="contact-panel-title">
                {t('contact.preferConversation')}
              </h3>
              <p className="contact-lede">
                {t('contact.contactLede')}
              </p>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">
                    <a href={CONTACT.phoneHref} aria-label={`Call ${CONTACT.phone}`}>
                      <Icon name="phone" />
                    </a>
                  </span>
                  <span className="contact-channel">
                    <small>{t('contact.phone')}</small>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </span>
                </li>
                <li>
                  <span className="contact-icon">
                    <a
                      href={GMAIL_COMPOSE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Email ${CONTACT.email}`}
                    >
                      <Icon name="mail" />
                    </a>
                  </span>
                  <span className="contact-channel">
                    <small>{t('contact.email')}</small>
                    <a
                      href={GMAIL_COMPOSE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {CONTACT.email}
                    </a>
                  </span>
                </li>
                <li>
                  <span className="contact-icon">
                    <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" aria-label="Open office location on Google Maps">
                      <Icon name="pin" />
                    </a>
                  </span>
                  <span className="contact-channel">
                    <small>{t('contact.office')}</small>
                    <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer">
                      {CONTACT.address}
                    </a>
                  </span>
                </li>
                <li>
                  <span className="contact-icon">
                    <a href={CONTACT.vijayawadaMapsHref} target="_blank" rel="noopener noreferrer" aria-label="Open Vijayawada office location on Google Maps">
                      <Icon name="pin" />
                    </a>
                  </span>
                  <span className="contact-channel">
                    <small>Vijayawada Office</small>
                    <a href={CONTACT.vijayawadaMapsHref} target="_blank" rel="noopener noreferrer">
                      {CONTACT.vijayawadaAddress}
                    </a>
                  </span>
                </li>
                <li>
                  <span className="contact-icon">
                    <a href={CONTACT.southAfricaMapsHref} target="_blank" rel="noopener noreferrer" aria-label="Open South Africa office location on Google Maps">
                      <Icon name="pin" />
                    </a>
                  </span>
                  <span className="contact-channel">
                    <small>South Africa Office</small>
                    <a href={CONTACT.southAfricaMapsHref} target="_blank" rel="noopener noreferrer">
                      <strong>{CONTACT.southAfricaCompany}</strong><br />
                      Unit 11, Sunset View, 10 Hazy Street, Newcastle, Kwa-Zulu Natal, 2930, South Africa
                    </a>
                  </span>
                </li>
                <li>
                  <span className="contact-icon"><Icon name="clock" /></span>
                  <span className="contact-channel">
                    <small>{t('contact.hours')}</small>
                    <strong>{t('contact.hoursValue')}</strong>
                  </span>
                </li>
              </ul>
              <Link to="/book-consultation" className="btn btn-primary">
                {t('contact.bookSlot')}
                <Icon name="arrow" />
              </Link>
            </div>
          </div>

          <form className="card contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-head">
              <h3>{t('contact.sendMessage')}</h3>
              <p>{t('contact.fieldsRequired')}</p>
            </div>
            <div className="grid grid-2">
              <div className="input-group">
                <label htmlFor="name">{t('contact.fullName')}</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-message" id="name-error">{errors.name}</span>}
              </div>
              <div className="input-group">
                <label htmlFor="email">{t('contact.emailLabel')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  autoComplete="email"
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-message" id="email-error">{errors.email}</span>}
              </div>
            </div>
            <div className="grid grid-2">
              <div className="input-group">
                <label htmlFor="company">{t('contact.company')}</label>
                <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Company Inc." autoComplete="organization" />
              </div>
              <div className="input-group">
                <label htmlFor="subject">{t('contact.subject')}</label>
                <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project…"
                aria-invalid={errors.message ? 'true' : undefined}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <span className="error-message" id="message-error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'submitting'}>
              {status === 'submitting' ? t('contact.sending') : t('contact.sendBtn')}
              {status !== 'submitting' && <Icon name="arrow" />}
            </button>
          </form>
        </div>
      </div>
      {toast && (
        <div className={`toast toast-${toast.type}`} role="status">
          <span>{toast.type === 'success' ? '✓' : '!'}</span>
          <span>{toast.text}</span>
        </div>
      )}
    </section>
  )
}

function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      el.style.width = `${(p * 100).toFixed(2)}%`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return <div className="scroll-progress" ref={ref} aria-hidden="true" />
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setVisible(!reduced && window.scrollY > 480)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  )
}

function FooterWorldMap() {
  return (
    <svg
      viewBox="0 0 280 110"
      className="footer-world-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Oklut Global Presence Map"
      role="img"
    >
      {/* Continental Matrix Dots */}
      <g fill="#1e3a8a" opacity="0.65">
        {/* North America */}
        <circle cx="26" cy="22" r="1.2" /><circle cx="34" cy="20" r="1.2" /><circle cx="42" cy="18" r="1.2" />
        <circle cx="28" cy="28" r="1.2" /><circle cx="36" cy="26" r="1.2" /><circle cx="44" cy="24" r="1.2" /><circle cx="52" cy="22" r="1.2" /><circle cx="60" cy="20" r="1.2" />
        <circle cx="30" cy="34" r="1.2" /><circle cx="38" cy="32" r="1.2" /><circle cx="46" cy="30" r="1.2" /><circle cx="54" cy="28" r="1.2" /><circle cx="62" cy="26" r="1.2" /><circle cx="70" cy="24" r="1.2" />
        <circle cx="34" cy="40" r="1.2" /><circle cx="42" cy="38" r="1.2" /><circle cx="50" cy="36" r="1.2" /><circle cx="58" cy="34" r="1.2" /><circle cx="66" cy="32" r="1.2" /><circle cx="74" cy="30" r="1.2" /><circle cx="82" cy="28" r="1.2" />
        <circle cx="40" cy="46" r="1.2" /><circle cx="48" cy="44" r="1.2" /><circle cx="56" cy="42" r="1.2" /><circle cx="64" cy="40" r="1.2" /><circle cx="72" cy="38" r="1.2" /><circle cx="80" cy="36" r="1.2" />
        <circle cx="46" cy="52" r="1.2" /><circle cx="54" cy="50" r="1.2" /><circle cx="62" cy="48" r="1.2" /><circle cx="70" cy="46" r="1.2" /><circle cx="76" cy="44" r="1.2" />
        <circle cx="52" cy="58" r="1.2" /><circle cx="60" cy="56" r="1.2" /><circle cx="68" cy="54" r="1.2" />
        <circle cx="58" cy="64" r="1.2" /><circle cx="64" cy="62" r="1.2" />
        <circle cx="64" cy="70" r="1.2" />

        {/* South America */}
        <circle cx="72" cy="68" r="1.2" /><circle cx="78" cy="66" r="1.2" /><circle cx="84" cy="64" r="1.2" />
        <circle cx="74" cy="74" r="1.2" /><circle cx="80" cy="72" r="1.2" /><circle cx="86" cy="70" r="1.2" /><circle cx="92" cy="68" r="1.2" />
        <circle cx="76" cy="80" r="1.2" /><circle cx="82" cy="78" r="1.2" /><circle cx="88" cy="76" r="1.2" /><circle cx="94" cy="74" r="1.2" /><circle cx="100" cy="72" r="1.2" />
        <circle cx="78" cy="86" r="1.2" /><circle cx="84" cy="84" r="1.2" /><circle cx="90" cy="82" r="1.2" /><circle cx="96" cy="80" r="1.2" />
        <circle cx="80" cy="92" r="1.2" /><circle cx="86" cy="90" r="1.2" /><circle cx="92" cy="88" r="1.2" />
        <circle cx="82" cy="98" r="1.2" /><circle cx="88" cy="96" r="1.2" />
        <circle cx="84" cy="104" r="1.2" />

        {/* Europe & Middle East */}
        <circle cx="132" cy="22" r="1.2" /><circle cx="140" cy="20" r="1.2" /><circle cx="148" cy="18" r="1.2" />
        <circle cx="130" cy="28" r="1.2" /><circle cx="136" cy="26" r="1.2" /><circle cx="144" cy="24" r="1.2" /><circle cx="152" cy="22" r="1.2" /><circle cx="160" cy="20" r="1.2" />
        <circle cx="134" cy="34" r="1.2" /><circle cx="142" cy="32" r="1.2" /><circle cx="150" cy="30" r="1.2" /><circle cx="158" cy="28" r="1.2" /><circle cx="166" cy="26" r="1.2" />
        <circle cx="138" cy="40" r="1.2" /><circle cx="146" cy="38" r="1.2" /><circle cx="154" cy="36" r="1.2" /><circle cx="162" cy="34" r="1.2" /><circle cx="170" cy="32" r="1.2" />
        <circle cx="144" cy="46" r="1.2" /><circle cx="152" cy="44" r="1.2" /><circle cx="160" cy="42" r="1.2" /><circle cx="168" cy="40" r="1.2" /><circle cx="176" cy="42" r="1.2" /><circle cx="184" cy="44" r="1.2" />

        {/* Africa */}
        <circle cx="134" cy="52" r="1.2" /><circle cx="142" cy="50" r="1.2" /><circle cx="150" cy="48" r="1.2" /><circle cx="158" cy="48" r="1.2" /><circle cx="166" cy="48" r="1.2" />
        <circle cx="132" cy="58" r="1.2" /><circle cx="140" cy="56" r="1.2" /><circle cx="148" cy="54" r="1.2" /><circle cx="156" cy="54" r="1.2" /><circle cx="164" cy="54" r="1.2" /><circle cx="172" cy="54" r="1.2" />
        <circle cx="136" cy="64" r="1.2" /><circle cx="144" cy="62" r="1.2" /><circle cx="152" cy="60" r="1.2" /><circle cx="160" cy="60" r="1.2" /><circle cx="168" cy="60" r="1.2" />
        <circle cx="146" cy="70" r="1.2" /><circle cx="154" cy="68" r="1.2" /><circle cx="162" cy="66" r="1.2" /><circle cx="170" cy="66" r="1.2" />
        <circle cx="150" cy="76" r="1.2" /><circle cx="158" cy="74" r="1.2" /><circle cx="166" cy="72" r="1.2" />
        <circle cx="154" cy="82" r="1.2" /><circle cx="160" cy="80" r="1.2" /><circle cx="168" cy="78" r="1.2" />
        <circle cx="158" cy="88" r="1.2" /><circle cx="164" cy="88" r="1.2" />
        <circle cx="162" cy="94" r="1.2" />

        {/* Asia */}
        <circle cx="174" cy="20" r="1.2" /><circle cx="182" cy="18" r="1.2" /><circle cx="190" cy="16" r="1.2" /><circle cx="198" cy="16" r="1.2" /><circle cx="206" cy="18" r="1.2" /><circle cx="214" cy="18" r="1.2" /><circle cx="222" cy="20" r="1.2" /><circle cx="230" cy="22" r="1.2" />
        <circle cx="176" cy="26" r="1.2" /><circle cx="184" cy="24" r="1.2" /><circle cx="192" cy="22" r="1.2" /><circle cx="200" cy="22" r="1.2" /><circle cx="208" cy="24" r="1.2" /><circle cx="216" cy="24" r="1.2" /><circle cx="224" cy="26" r="1.2" /><circle cx="232" cy="28" r="1.2" /><circle cx="240" cy="30" r="1.2" />
        <circle cx="180" cy="32" r="1.2" /><circle cx="188" cy="30" r="1.2" /><circle cx="196" cy="28" r="1.2" /><circle cx="204" cy="28" r="1.2" /><circle cx="212" cy="30" r="1.2" /><circle cx="220" cy="32" r="1.2" /><circle cx="228" cy="34" r="1.2" /><circle cx="236" cy="36" r="1.2" />
        <circle cx="186" cy="38" r="1.2" /><circle cx="194" cy="36" r="1.2" /><circle cx="202" cy="34" r="1.2" /><circle cx="210" cy="36" r="1.2" /><circle cx="218" cy="38" r="1.2" /><circle cx="226" cy="40" r="1.2" /><circle cx="234" cy="42" r="1.2" />
        <circle cx="192" cy="44" r="1.2" /><circle cx="200" cy="42" r="1.2" /><circle cx="208" cy="42" r="1.2" /><circle cx="216" cy="44" r="1.2" /><circle cx="224" cy="46" r="1.2" /><circle cx="232" cy="48" r="1.2" />
        {/* India Region Dots */}
        <circle cx="196" cy="48" r="1.2" /><circle cx="206" cy="48" r="1.2" /><circle cx="212" cy="50" r="1.2" />
        <circle cx="198" cy="54" r="1.2" /><circle cx="208" cy="54" r="1.2" /><circle cx="218" cy="54" r="1.2" /><circle cx="224" cy="56" r="1.2" />
        <circle cx="202" cy="60" r="1.2" /><circle cx="220" cy="62" r="1.2" /><circle cx="228" cy="64" r="1.2" />

        {/* Australia & Oceania */}
        <circle cx="232" cy="74" r="1.2" /><circle cx="240" cy="72" r="1.2" /><circle cx="248" cy="72" r="1.2" /><circle cx="256" cy="74" r="1.2" />
        <circle cx="230" cy="80" r="1.2" /><circle cx="238" cy="78" r="1.2" /><circle cx="246" cy="78" r="1.2" /><circle cx="254" cy="80" r="1.2" /><circle cx="262" cy="82" r="1.2" />
        <circle cx="234" cy="86" r="1.2" /><circle cx="242" cy="84" r="1.2" /><circle cx="250" cy="84" r="1.2" /><circle cx="258" cy="86" r="1.2" />
        <circle cx="238" cy="92" r="1.2" /><circle cx="246" cy="90" r="1.2" /><circle cx="254" cy="90" r="1.2" />
        <circle cx="264" cy="96" r="1.2" /><circle cx="270" cy="98" r="1.2" />
      </g>

      {/* Office Marker 1: Hyderabad, India (Approx lon 78.5E, lat 17.4N) */}
      <g className="footer-map-pin-group">
        <circle
          cx="201"
          cy="49"
          r="8"
          className="footer-map-pulse-ring"
          fill="none"
          stroke="#2998ff"
          strokeWidth="1.2"
        />
        <circle cx="201" cy="49" r="4.5" fill="#2998ff" opacity="0.35" />
        <circle cx="201" cy="49" r="2.5" fill="#38bdf8" />
        <title>Hyderabad, India</title>
      </g>

      {/* Office Marker 2: South Africa (Newcastle, KZN approx lon 30E, lat 28S) */}
      <g className="footer-map-pin-group">
        <circle
          cx="163"
          cy="85"
          r="8"
          className="footer-map-pulse-ring"
          fill="none"
          stroke="#2998ff"
          strokeWidth="1.2"
        />
        <circle cx="163" cy="85" r="4.5" fill="#2998ff" opacity="0.35" />
        <circle cx="163" cy="85" r="2.5" fill="#38bdf8" />
        <title>South Africa</title>
      </g>
    </svg>
  )
}

function Footer() {
  const { openPreferences } = useCookieConsent()

  const SERVICES_LIST = [
    { label: 'Inception To Deployment', to: '/services/inception-to-deployment' },
    { label: 'Business Process Automation', to: '/services/business-process-automation' },
    { label: 'Center of Excellence', to: '/services/center-of-excellence' },
    { label: 'Custom Development & Customization', to: '/services/custom-development-customization' },
    { label: 'Digital Transformation', to: '/services/digital-transformation' },
    { label: 'End-to-End Solution Framework', to: '/services/end-to-end-solution-framework' },
    { label: 'Migration & Modernization', to: '/services/migration-modernization' },
    { label: 'Proof of Concept (PoC) & Pilot Implementation', to: '/services/poc-pilot-implementation' },
    { label: 'Shared Services & Managed Operations', to: '/services/shared-services-managed-operations' },
  ]

  const PRODUCTS_LIST = [
    { label: 'Featured Products', to: '/products' },
    { label: 'ERP Solutions', to: '/products#erp' },
    { label: 'IT Solutions', to: '/products#it' },
    { label: 'CRM Solutions', to: '/products#crm' },
    { label: 'HRMS Solutions', to: '/products#hrms' },
    { label: 'App Development', to: '/products#appdev' },
  ]

  const TECHNOLOGIES_LIST = [
    { label: 'AI & Robotics Solutions', to: '/technologies/ai-robotics-solutions' },
    { label: 'Business Automation Solutions', to: '/technologies/business-automation-solutions' },
    { label: 'Cloud Migration Solutions', to: '/technologies/cloud-migration-solutions' },
    { label: 'Data Center Solutions', to: '/technologies/data-center-solutions' },
    { label: 'Cognitive Analytics & AI', to: '/technologies/cognitive-analytics-ai' },
    { label: 'Information & Reporting Systems', to: '/technologies/information-reporting-systems' },
    { label: 'Managed Services', to: '/technologies/managed-services' },
    { label: 'One-Stop Technology Solutions', to: '/technologies/one-stop-technology-solutions' },
  ]

  return (
    <footer className="footer">
      {/* Top Branding, Headline, World Map & Credo — full-width strip */}
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="footer-top-left">
            <div className="footer-brand-lockup">
              <SectionLink id="top" className="footer-brand-link" aria-label="Oklut Technologies Home">
                <img
                  src={`${import.meta.env.BASE_URL}img/logo.jpg`}
                  alt="Oklut Technologies"
                  className="footer-brand-logo"
                />
              </SectionLink>
              <span className="footer-brand-sub">Technologies</span>
            </div>

            <div className="footer-divider-vert" aria-hidden="true" />

            <div className="footer-headline-block">
              <h3 className="footer-headline">
                Let's build <span className="footer-headline-accent">what's next.</span>
              </h3>
              <p className="footer-subheadline">
                Partner with Oklut Technologies to turn ideas into real business impact.
              </p>
            </div>
          </div>

          <div className="footer-top-right">
            <div className="footer-map-wrapper">
              <FooterWorldMap />
            </div>
            <div className="footer-credo">
              <span>IDEAS</span>
              <span>SOLUTIONS</span>
              <span>PEOPLE</span>
              <span className="footer-credo-accent">A BRIGHTER TOMORROW</span>
              <div className="footer-credo-bar" aria-hidden="true" />
            </div>
          </div>
        </div>
        </div>

        <div className="container footer-container">
        {/* Four Main Navigation Columns */}
        <div className="footer-nav-grid">
          {/* Column 1: Services */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-nav-list">
              {SERVICES_LIST.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-nav-list">
              {PRODUCTS_LIST.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technologies */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Technologies</h4>
            <ul className="footer-nav-list">
              {TECHNOLOGIES_LIST.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-nav-list">
              <li>
                <SectionLink id="about">About Us</SectionLink>
              </li>
              <li>
                <Link to="/perspectives">Perspectives</Link>
              </li>
              <li>
                <a
                  href="https://hrm.oklut.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <SectionLink id="contact">Contact Us</SectionLink>
              </li>
            </ul>

            {/* Follow Us & Social Icons */}
            <div className="footer-social-section">
              <span className="footer-social-label">Follow us</span>
              <div className="footer-social-icons">
                <a
                  href="https://www.linkedin.com/company/oklut-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oklut Technologies on LinkedIn"
                  className="footer-social-icon-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oklut Technologies on Twitter / X"
                  className="footer-social-icon-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/oklut_?utm_source=qr&stkn=M2poZ24yNDJjb3d5"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oklut Technologies on Instagram"
                  className="footer-social-icon-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oklut Technologies on Facebook"
                  className="footer-social-icon-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information & Office Locations Row */}
        <div className="footer-contact-row">
          {/* Phone & Email — stacked in one contact block */}
          <div className="footer-contact-cell footer-contact-stack">
            <div className="footer-contact-line">
              <Icon name="phone" className="footer-contact-icon" />
              <a href={CONTACT.phoneHref} className="footer-contact-link">
                {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="footer-contact-line">
              <Icon name="mail" className="footer-contact-icon" />
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="footer-contact-divider" aria-hidden="true" />

          {/* Offices — three aligned address blocks in one row */}
          <div className="footer-offices-row">
          <div className="footer-office-block">
            <Icon name="pin" className="footer-contact-icon" />
            <a
              href={CONTACT.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-office-link"
              aria-label="Open India office location on Google Maps"
            >
              <strong>Hyderabad, India</strong>
              <span>
                SBR Towers, Axis bank building, Second Floor, D No 1/98/93/23, HUDA Tecno Encalve Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
              </span>
            </a>
          </div>

          <div className="footer-contact-divider" aria-hidden="true" />

          {/* Vijayawada Office */}
          <div className="footer-office-block">
            <Icon name="pin" className="footer-contact-icon" />
            <a
              href={CONTACT.vijayawadaMapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-office-link"
              aria-label="Open Vijayawada office location on Google Maps"
            >
              <strong>Vijayawada, Andhra Pradesh</strong>
              <span>
                D.No. 24-29-210A, Durgapuram, Gulabithota Road, Vijayawada, NTR District, Andhra Pradesh – 520003
              </span>
            </a>
          </div>

          <div className="footer-contact-divider" aria-hidden="true" />

          {/* South Africa Office */}
          <div className="footer-office-block">
            <Icon name="pin" className="footer-contact-icon" />
            <a
              href={CONTACT.southAfricaMapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-office-link"
              aria-label="Open South Africa office location on Google Maps"
            >
              <strong>South Africa – OKLUT TECHNOLOGIES (PTY) LTD</strong>
              <span>
                Unit 11, Sunset View, 10 Hazy Street, Newcastle, Kwa-Zulu Natal, 2930, South Africa
              </span>
            </a>
          </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2025 Oklut Technologies. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="footer-legal-sep" aria-hidden="true">|</span>
            <span className="footer-legal-static">Terms of Use</span>
            <span className="footer-legal-sep" aria-hidden="true">|</span>
            <span className="footer-legal-static">Accessibility</span>
            <span className="footer-legal-sep" aria-hidden="true">|</span>
            <button type="button" className="footer-legal-btn" onClick={openPreferences}>
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Services() {
  const { t } = useTranslation()
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionHead
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          sub={t('services.sub')}
          center
        />
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Link
              to={`/services/${s.slug}`}
              key={s.slug}
              className="service-card reveal"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="service-card-header">
                <span className="service-card-icon">
                  <Icon name={s.icon} />
                </span>
                <span className="service-card-arrow">
                  <Icon name="arrow" />
                </span>
              </div>
              <h3>{t(`services.items.${s.translationKey}.label`)}</h3>
              <p>{t(`services.items.${s.translationKey}.description`)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const OUR_SERVICES = [
  {
    slug: 'inception-to-deployment',
    image: 'img/build-from-scratch.jpg',
    titleKey: 'ourServices.items.inceptionToDeployment.title',
    textKey: 'ourServices.items.inceptionToDeployment.text',
  },
  {
    slug: 'business-process-automation',
    image: 'img/business-process-automation.jpg',
    titleKey: 'ourServices.items.businessProcessAutomation.title',
    textKey: 'ourServices.items.businessProcessAutomation.text',
  },
  {
    slug: 'center-of-excellence',
    image: 'img/center-of-excellence.jpg',
    titleKey: 'ourServices.items.centerOfExcellence.title',
    textKey: 'ourServices.items.centerOfExcellence.text',
  },
  {
    slug: 'custom-development-customization',
    image: 'img/custom-development-customization.jpg',
    titleKey: 'ourServices.items.customDevelopmentCustomization.title',
    textKey: 'ourServices.items.customDevelopmentCustomization.text',
  },
  {
    slug: 'digital-transformation',
    image: 'img/digital-transformation.jpg',
    titleKey: 'ourServices.items.digitalTransformation.title',
    textKey: 'ourServices.items.digitalTransformation.text',
  },
  {
    slug: 'end-to-end-solution-framework',
    image: 'img/end-to-end-solution-framework.jpg',
    titleKey: 'ourServices.items.endToEndSolutionFramework.title',
    textKey: 'ourServices.items.endToEndSolutionFramework.text',
  },
  {
    slug: 'migration-modernization',
    image: 'img/migration-modernization.jpg',
    titleKey: 'ourServices.items.migrationModernization.title',
    textKey: 'ourServices.items.migrationModernization.text',
  },
  {
    slug: 'poc-pilot-implementation',
    image: 'img/poc-pilot-implementation.jpg',
    titleKey: 'ourServices.items.pocPilotImplementation.title',
    textKey: 'ourServices.items.pocPilotImplementation.text',
  },
  {
    slug: 'shared-services-managed-operations',
    image: 'img/shared-services-managed-operations.jpg',
    titleKey: 'ourServices.items.sharedServicesManagedOperations.title',
    textKey: 'ourServices.items.sharedServicesManagedOperations.text',
  },
]

function OurServices() {
  const { t } = useTranslation()
  return (
    <section id="our-services" className="section our-services-section">
      <div className="container">
        <SectionHead
          eyebrow={t('ourServices.eyebrow')}
          title={t('ourServices.title')}
          sub={t('ourServices.sub')}
          center
        />
        <div className="our-services-grid">
          {OUR_SERVICES.map((s, i) => (
            <Link
              to={`/services/${s.slug}`}
              key={s.slug}
              className="our-service-card reveal"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="our-service-card-img">
                <img
                  src={`${import.meta.env.BASE_URL}${s.image}`}
                  alt={t(s.titleKey)}
                  loading="lazy"
                />
              </div>
              <div className="our-service-card-body">
                <h3>{t(s.titleKey)}</h3>
                <p>{t(s.textKey)}</p>
                <span className="our-service-card-link">
                  {t('ourServices.learnMore')}
                  <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  const location = useLocation()
  const pendingScroll = useRef(location.state?.scrollTo || null)

  useEffect(() => {
    const target = pendingScroll.current
    if (!target) return
    const frame = requestAnimationFrame(() => {
      scrollToSection(target)
      pendingScroll.current = null
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const reveals = () => Array.from(document.querySelectorAll('.reveal'))
    const revealEl = (el) => el.classList.add('revealed')
    const isInView = (el) => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return r.top < vh && r.bottom > 0
    }
    const revealInView = () => {
      reveals().forEach((el) => {
        if (!el.classList.contains('revealed') && isInView(el)) revealEl(el)
      })
    }

    if (!('IntersectionObserver' in window)) {
      reveals().forEach(revealEl)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealEl(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    reveals().forEach((el) => io.observe(el))

    // Fallback: Chrome can skip observer callbacks for elements next to a
    // position:sticky item in a grid (e.g. the services cards), leaving them
    // stuck at opacity 0. Also reveal anything entering the viewport manually.
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        revealInView()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    revealInView()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <OurServices />
      <ContactForm />
    </>
  )
}

function App() {
  const { isRecovery } = useAuth()
  const location = useLocation()
  // Returning from an email-confirmation link (?confirmed=1): open the existing
  // Sign In view immediately with a success notice. No credentials are carried
  // over — the form always initialises empty.
  const [authModal, setAuthModal] = useState(() => {
    const confirmed =
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('confirmed') === '1'
    return {
      open: confirmed,
      mode: 'login',
      redirectTo: null,
      notice: confirmed
        ? {
            type: 'success',
            text: 'Email confirmed successfully! Please sign in with your email and password.',
          }
        : null,
    }
  })
  const hideFooter =
    location.pathname === '/products' ||
    location.pathname.startsWith('/services/')

  const openAuth = (mode, redirectTo) =>
    setAuthModal({ open: true, mode, redirectTo: redirectTo || null, notice: null })
  const closeAuth = () =>
    setAuthModal((prev) => ({ open: false, mode: prev.mode, redirectTo: null, notice: null }))

  useEffect(() => {
    if (isRecovery) {
      setAuthModal((prev) => ({ open: true, mode: 'recovery', redirectTo: prev.redirectTo }))
    }
  }, [isRecovery])

  // Strip the confirmation flag from the URL so a refresh doesn't re-show it.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('confirmed') !== '1') return
    params.delete('confirmed')
    const qs = params.toString()
    window.history.replaceState(
      null,
      '',
      window.location.pathname + (qs ? `?${qs}` : '') + window.location.hash,
    )
  }, [])

  return (
    <>
      <ScrollProgress />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar onSignIn={() => openAuth('login')} onSignUp={() => openAuth('signup')} />
      <main id="main">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/perspectives" element={<Insights />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route
              path="/book-consultation"
              element={
                <BookConsultationPage onRequireAuth={(mode) => openAuth(mode, '/book-consultation')} />
              }
            />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* Primary Service Routes */}
            <Route path="/services/inception-to-deployment" element={<CustomDevelopmentPage />} />
            <Route path="/services/build-from-scratch" element={<CustomDevelopmentPage />} />
            <Route path="/services/business-process-automation" element={<ProcessAutomationPage />} />
            <Route path="/services/center-of-excellence" element={<CentreOfExcellencePage />} />
            <Route path="/services/centre-of-excellence" element={<CentreOfExcellencePage />} />
            <Route path="/services/custom-development-customization" element={<SolutionEngineeringPagePremium />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformationPagePremium />} />
            <Route path="/services/end-to-end-solution-framework" element={<EndToEndSolutionsPagePremium />} />
            <Route path="/services/migration-modernization" element={<MigrationServicesPagePremium />} />
            <Route path="/services/poc-pilot-implementation" element={<PilotPrototypingPagePremium />} />
            <Route path="/services/shared-services-managed-operations" element={<SharedServicesPage />} />

            {/* Technology Routes */}
            <Route path="/technologies/:techId" element={<TechnologyDetailPage />} />
            <Route path="/technologies/ai-robotics-solutions" element={<TechnologyDetailPage fixedId="ai-robotics-solutions" />} />
            <Route path="/technologies/business-automation-solutions" element={<TechnologyDetailPage fixedId="business-automation-solutions" />} />
            <Route path="/technologies/cloud-migration-solutions" element={<TechnologyDetailPage fixedId="cloud-migration-solutions" />} />
            <Route path="/technologies/data-center-solutions" element={<TechnologyDetailPage fixedId="data-center-solutions" />} />
            <Route path="/technologies/cognitive-analytics-ai" element={<TechnologyDetailPage fixedId="cognitive-analytics-ai" />} />
            <Route path="/technologies/information-reporting-systems" element={<TechnologyDetailPage fixedId="information-reporting-systems" />} />
            <Route path="/technologies/managed-services" element={<TechnologyDetailPage fixedId="managed-services" />} />
            <Route path="/technologies/one-stop-technology-solutions" element={<TechnologyDetailPage fixedId="one-stop-technology-solutions" />} />

            {/* Technology Fallback Aliases */}
            <Route path="/services/ai-robotics" element={<TechnologyDetailPage fixedId="ai-robotics-solutions" />} />
            <Route path="/services/business-automation" element={<TechnologyDetailPage fixedId="business-automation-solutions" />} />
            <Route path="/services/cloud-migrations" element={<TechnologyDetailPage fixedId="cloud-migration-solutions" />} />
            <Route path="/services/data-centers" element={<TechnologyDetailPage fixedId="data-center-solutions" />} />
            <Route path="/services/cognitive-analytics" element={<TechnologyDetailPage fixedId="cognitive-analytics-ai" />} />
            <Route path="/services/information-reporting" element={<TechnologyDetailPage fixedId="information-reporting-systems" />} />
            <Route path="/services/information-reporting-systems" element={<TechnologyDetailPage fixedId="information-reporting-systems" />} />
            <Route path="/services/one-stop-solutions" element={<TechnologyDetailPage fixedId="one-stop-technology-solutions" />} />
            <Route path="/services/managed-services" element={<TechnologyDetailPage fixedId="managed-services" />} />

            {/* Legacy Service Fallback Aliases */}
            <Route path="/services/custom-development" element={<CustomDevelopmentPage />} />
            <Route path="/services/process-automation" element={<ProcessAutomationPage />} />
            <Route path="/services/solution-engineering" element={<SolutionEngineeringPagePremium />} />
            <Route path="/services/end-to-end-solutions" element={<EndToEndSolutionsPagePremium />} />
            <Route path="/services/migration-services" element={<MigrationServicesPagePremium />} />
            <Route path="/services/pilot-prototyping" element={<PilotPrototypingPagePremium />} />
            <Route path="/services/shared-services" element={<SharedServicesPage />} />
            <Route path="/services/pilot-prototyping-legacy" element={<PilotPrototypingPage />} />
            <Route path="/services/solution-engineering-legacy" element={<SolutionEngineeringPage />} />
            <Route path="/services/center-of-excellence-legacy" element={<CenterOfExcellencePage />} />
            <Route path="/services/digital-transformation-legacy" element={<DigitalTransformationPage />} />
            <Route path="/services/migration-services-legacy" element={<MigrationServicesPage />} />
            <Route path="/services/end-to-end-legacy" element={<EndToEndSolutionsPage />} />
          </Routes>
        </Suspense>
      </main>
      <BackToTop />
      {!hideFooter && <Footer />}
      <AuthModal
        open={authModal.open}
        mode={authModal.mode}
        redirectTo={authModal.redirectTo}
        notice={authModal.notice}
        onClose={closeAuth}
        onSwitchMode={(mode) => setAuthModal({ open: true, mode, redirectTo: authModal.redirectTo, notice: null })}
      />
      <CookieConsentBanner />
      <CookiePreferenceModal />
      <Chatbot />
    </>
  )
}

export default App

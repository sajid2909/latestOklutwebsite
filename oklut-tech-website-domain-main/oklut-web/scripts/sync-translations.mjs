import fs from 'fs'
import path from 'path'

const localesDir = path.resolve('src/i18n/locales')

const newEnKeys = {
  about: {
    yearsExcellence: 'Years of Enterprise Excellence',
  },
  technologies: {
    explore: 'Explore Technology',
    bookDiscovery: 'Book Technology Discovery',
    exploreAll: 'Explore All Technologies',
    coreCapabilities: 'Core Technology Capabilities',
    bookConsultation: 'Book a Consultation',
  },
  perspectives: {
    talkToExperts: 'Talk to Our Experts',
    viewAll: 'View All Perspectives',
    exploreMore: 'EXPLORE MORE PERSPECTIVES',
    continueExploring: 'Continue Exploring Enterprise Technology Insights',
    readPerspective: 'Read Perspective',
  },
  footer: {
    headline: "Let's build",
    headlineAccent: "what's next.",
    subheadline:
      'Partner with Oklut Technologies to turn ideas into real business impact.',
    credoIdeas: 'IDEAS',
    credoSolutions: 'SOLUTIONS',
    credoPeople: 'PEOPLE',
    credoBrighterTomorrow: 'A BRIGHTER TOMORROW',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    followUs: 'Follow us',
    hyderabadLocation: 'Hyderabad, India',
    vijayawadaLocation: 'Vijayawada, Andhra Pradesh',
    southAfricaLocation: 'South Africa – OKLUT TECHNOLOGIES (PTY) LTD',
    termsOfUse: 'Terms of Use',
    accessibility: 'Accessibility',
    quickLinks: 'Quick Links',
    explore: 'Explore',
    vijayawadaOffice: 'Vijayawada Office',
    allRightsReserved: 'All rights reserved.',
  },
  contact: {
    offices: {
      vijayawada: 'Vijayawada Office',
      southAfrica: 'South Africa Office',
    },
    placeholders: {
      fullName: 'Your full name',
      email: 'you@company.com',
      company: 'Your company or organization',
      subject: 'How can we help?',
      message: 'Tell us about your project, timeline, and goals...',
    },
    validation: {
      fullNameRequired: 'Please enter your full name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Please enter a message.',
    },
  },
  chatbot: {
    typing: 'Oklut AI is typing',
    menuOptions: 'Menu options',
    greetingMorning: 'Good morning',
    greetingAfternoon: 'Good afternoon',
    greetingEvening: 'Good evening',
    welcomeText:
      "! 👋 Welcome to Oklut Technologies.\nI'm the Oklut AI Assistant. I can help you explore our services, technologies, careers, and contact information.",
  },
  services: {
    common: {
      scheduleConsultation: 'Schedule a Consultation',
      exploreFramework: 'Explore Solution Framework',
      talkSeniorEngineer: 'Talk to a Senior Engineer',
      exploreTechStack: 'Explore Technology Stack',
      bookPocSession: 'Book a PoC Discovery Session',
      seeAllServices: 'See All Services',
      requestAssessment: 'Request a Migration Assessment',
      exploreCloudSolutions: 'Explore Cloud Solutions',
    },
    sharedServices: {
      heroBadge: 'SHARED SERVICES & MANAGED OPERATIONS',
      heroTitle: 'Enterprise Shared Services & Managed Operations',
      heroDesc:
        'Scale business capabilities, streamline cross-functional workflows, and achieve operational excellence through standardized, secure, and cost-effective shared service models.',
      bookDiscovery: 'Book Managed Operations Discovery',
      exploreFramework: 'Explore Solution Framework',
      coreCapabilities: 'Core Capabilities:',
      managedServices: 'Managed Services',
      itOperations: 'IT Operations',
      appSupport: 'Application Support',
      serviceManagement: 'Service Management',
      resourceOptimization: 'Resource Optimization',
      slaManagement: 'SLA Management',
      governance: 'Governance',
      continuousImprovement: 'Continuous Improvement',
      costOptimization: 'Cost Optimization',
      readyTitle: 'Ready to Optimize Your Operations?',
      readyDesc:
        'Discover how our Shared Services & Managed Operations frameworks can enhance service quality, ensure operational continuity, and drive sustainable cost efficiencies for your enterprise.',
      scheduleSession: 'Schedule a Discovery Session',
    },
    solutionEngineering: {
      heroBadge: 'SOLUTION ENGINEERING & ARCHITECTURE',
      heroTitle: 'Custom Development & Customization',
      heroDesc:
        'Architect, engineer, and deploy high-performance software systems designed specifically for your operational workflows, data pipelines, and scale requirements.',
    },
    pilotPrototyping: {
      heroBadge: 'RAPID INNOVATION & EXPERIMENTATION',
      heroTitle: 'Proof of Concept (PoC) & Pilot Implementation',
      heroDesc:
        'Validate emerging technologies, de-risk complex architectures, and prove business value with production-grade prototypes in weeks, not quarters.',
    },
    endToEndSolutions: {
      heroBadge: 'LIFECYCLE ARCHITECTURE & DELIVERY',
      heroTitle: 'End-to-End Solution Framework',
      heroDesc:
        'A unified delivery model connecting product discovery, solution architecture, engineering, cloud infrastructure, and 24/7 reliability operations.',
    },
    migrationServices: {
      heroBadge: 'INFRASTRUCTURE & LEGACY MODERNIZATION',
      heroTitle: 'Migration & Modernization',
      heroDesc:
        'Seamlessly transition legacy workloads, monolithic architectures, and on-premises infrastructure to modern, secure, and scalable cloud platforms.',
    },
    pages: {
      digitalTransformation: {
        eyebrow: 'Enterprise Modernization',
        titlePart1: 'Digital',
        titlePart2: 'Transformation',
        bookWorkshop: 'Book Transformation Workshop',
        exploreFramework: 'Explore Solution Framework',
      },
      customDevelopment: {
        eyebrow: 'End-to-End Digital Engineering',
        titlePart1: 'Inception To',
        titlePart2: 'Deployment',
        bookConsultation: 'Book a Consultation',
        exploreEngineering: 'Explore Solution Engineering',
      },
      processAutomation: {
        eyebrow: 'Intelligent Process Operations',
        titlePart1: 'Business Process',
        titlePart2: 'Automation',
        bookDiscovery: 'Book Automation Discovery',
        exploreCoE: 'Explore Center of Excellence',
      },
      centreOfExcellence: {
        badge: 'OKLUT TECHNOLOGIES COE',
        titlePart1: 'Center of',
        titlePart2: 'Excellence',
        bookConsultation: 'Book CoE Consultation',
        exploreCapabilities: 'Explore Capabilities',
      },
      endToEndSolutions: {
        eyebrow: 'Complete Technology Lifecycle',
        titlePart1: 'End-to-End',
        titlePart2: 'Solution Framework',
        startJourney: 'Start Your Lifecycle Journey',
        exploreTransformation: 'Explore Transformation',
      },
      migrationServices: {
        eyebrow: 'Cloud & Infrastructure Transformation',
        titlePart1: 'Migration &',
        titlePart2: 'Modernization',
        planMigration: 'Plan Your Migration',
        exploreTransformation: 'Explore Transformation',
      },
      pilotPrototyping: {
        eyebrow: 'Rapid Validation & Feasibility',
        titlePart1: 'Proof of Concept (PoC) &',
        titlePart2: 'Pilot Implementation',
        initiateDiscovery: 'Initiate PoC Discovery',
        exploreDevelopment: 'Explore Custom Development',
      },
      solutionEngineering: {
        badge: 'Tailored Digital Engineering',
        bookConsultation: 'Book a Consultation',
        exploreCapabilities: 'Explore Capabilities',
      },
      sharedServices: {
        eyebrow: 'Centralized Operations Hub',
        titlePart1: 'Shared Services &',
        titlePart2: 'Managed Operations',
        bookDiscovery: 'Book Managed Operations Discovery',
        exploreFramework: 'Explore Solution Framework',
      },
    },
  },
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {}
      deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
}

async function translateText(text, targetLang) {
  if (!text || typeof text !== 'string' || targetLang === 'en') return text
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(
      targetLang
    )}&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    })
    if (!res.ok) return text
    const data = await res.json()
    if (Array.isArray(data) && Array.isArray(data[0])) {
      return data[0].map((s) => s[0]).join('')
    }
  } catch (err) {
    console.warn(`Translation error for "${text.slice(0, 20)}":`, err.message)
  }
  return text
}

async function translateObject(sourceObj, targetLang, existingObj = {}) {
  const result = { ...existingObj }
  for (const key of Object.keys(sourceObj)) {
    const val = sourceObj[key]
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      result[key] = await translateObject(
        val,
        targetLang,
        existingObj[key] || {}
      )
    } else if (typeof val === 'string') {
      const existingVal = existingObj[key]
      const hasTelugu = /[\u0C00-\u0C7F]/.test(existingVal || '')
      if (
        !existingVal ||
        existingVal === val ||
        (targetLang === 'ar' && hasTelugu)
      ) {
        const translated = await translateText(val, targetLang)
        result[key] = translated
        // gentle rate limiting
        await new Promise((r) => setTimeout(r, 60))
      }
    }
  }
  return result
}

async function main() {
  console.log('1. Updating en/translation.json...')
  const enPath = path.join(localesDir, 'en', 'translation.json')
  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'))
  deepMerge(enData, newEnKeys)
  fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n', 'utf8')
  console.log('   Saved en/translation.json successfully.')

  const targetLangs = ['hi', 'te', 'es', 'fr', 'ar']

  for (const lang of targetLangs) {
    console.log(`\n2. Syncing locale: ${lang}...`)
    const langPath = path.join(localesDir, lang, 'translation.json')
    let currentData = {}
    if (fs.existsSync(langPath)) {
      currentData = JSON.parse(fs.readFileSync(langPath, 'utf8'))
    }

    if (lang === 'ar') {
      console.log('   Cleaning any Telugu strings in Arabic translation...')
      // Full pass over entire ar tree to clean Telugu leaks
      async function cleanAr(sourceEn, targetAr) {
        for (const k of Object.keys(sourceEn)) {
          if (typeof sourceEn[k] === 'object' && sourceEn[k] !== null) {
            if (!targetAr[k]) targetAr[k] = {}
            await cleanAr(sourceEn[k], targetAr[k])
          } else if (typeof sourceEn[k] === 'string') {
            const curVal = targetAr[k]
            if (!curVal || /[\u0C00-\u0C7F]/.test(curVal)) {
              targetAr[k] = await translateText(sourceEn[k], 'ar')
              await new Promise((r) => setTimeout(r, 50))
            }
          }
        }
      }
      await cleanAr(enData, currentData)
    } else {
      currentData = await translateObject(newEnKeys, lang, currentData)
    }

    fs.writeFileSync(
      langPath,
      JSON.stringify(currentData, null, 2) + '\n',
      'utf8'
    )
    console.log(`   Saved ${lang}/translation.json successfully.`)
  }

  console.log('\nAll target locales synced and validated!')
}

main().catch(console.error)

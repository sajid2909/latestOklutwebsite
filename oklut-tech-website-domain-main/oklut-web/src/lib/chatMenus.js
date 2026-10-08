// Menu + general-knowledge resolution for the Oklut AI Assistant.
//
// This module is deliberately PURE: no Supabase, no `import.meta`, no network.
// It is shared by all three chat paths so they answer identically:
//   - the browser fallback (src/lib/chatKnowledge.js)
//   - the local Express server (server/chat-api.js)
//   - the Vercel function (api/chat.js)
//
// It answers three things deterministically (never delegated to the model):
//   1. numbered/ordinal selections against the currently displayed menu
//   2. Services / Technologies menu requests
//   3. well-known general-knowledge questions (capitals, currencies, facts)

// ─── Website data ────────────────────────────────────────────────────────────
// The 9 services and 8 technologies are the ones published on the website and
// in the AI system prompt — no invented entries.

export const SERVICES_MENU = [
  {
    name: 'Inception To Deployment',
    desc: 'End-to-end development of new digital solutions — from business requirements and solution architecture through development, integration, testing, deployment and ongoing support.',
    purpose: 'To turn product ideas and business requirements into production-ready digital applications with robust architecture and continuous lifecycle support.',
    howProvided: 'Oklut provides full-lifecycle engineering covering Requirements Engineering, Solution Architecture, Application Development, API Integration, Quality Assurance, DevOps, Deployment, and 24/7 Support & Maintenance.',
    capabilities: 'Requirements Engineering • Solution Architecture • Application Development • API Integration • Quality Assurance • DevOps • Deployment • Support & Maintenance',
  },
  {
    name: 'Business Process Automation',
    desc: 'Design and implementation of intelligent automation that streamlines business processes, removes repetitive manual work, improves operational efficiency and accelerates business outcomes.',
    purpose: 'To eliminate repetitive manual tasks, reduce human error, accelerate process velocity, and optimize operational costs across departments.',
    howProvided: 'Oklut designs and integrates intelligent automation pipelines using Workflow Automation, RPA, Intelligent Automation, AI Automation, Process Optimization, API Integration, and Process Orchestration.',
    capabilities: 'Workflow Automation • RPA • Intelligent Automation • AI Automation • Process Optimization • API Integration • Process Orchestration',
  },
  {
    name: 'Center of Excellence',
    desc: 'Establishment of specialised technology and business capability centres that provide governance, standards, expertise, frameworks, reusable assets and continuous improvement across the organisation.',
    purpose: 'To ensure architectural consistency, foster innovation, reduce redundant effort, and maintain high engineering quality across teams.',
    howProvided: 'Oklut establishes dedicated CoE capability hubs providing Governance, Technology Standards, Best Practices, Architecture frameworks, Competency Development, Knowledge Management, Innovation, and Continuous Improvement.',
    capabilities: 'Governance • Technology Standards • Best Practices • Architecture • Competency Development • Knowledge Management • Innovation • Continuous Improvement',
  },
  {
    name: 'Custom Development & Customization',
    desc: 'Development and enhancement of applications, platforms, workflows and enterprise solutions to address unique business requirements and deliver tailored functionality.',
    purpose: 'To deliver tailored functionality and competitive advantages that off-the-shelf software cannot provide.',
    howProvided: 'Oklut delivers bespoke engineering across Custom Development, Platform Configuration, Extensions, Custom Workflows, API Development, System Integration, UI/UX Enhancement, and Performance Optimization.',
    capabilities: 'Custom Development • Platform Configuration • Extensions • Custom Workflows • API Development • System Integration • UI/UX Enhancement • Performance Optimization',
  },
  {
    name: 'Digital Transformation',
    desc: 'Modernisation of business operations, technology ecosystems and customer experiences through cloud, AI, automation, data and modern application technologies.',
    purpose: 'To help businesses modernize operations, enhance customer experience, improve organizational agility, and drive sustainable growth.',
    howProvided: 'Oklut guides end-to-end transformation across Digital Strategy, Cloud Transformation, AI & Automation, Application Modernization, Legacy Modernization, Data & Analytics, Customer Experience, and Technology Modernization.',
    capabilities: 'Digital Strategy • Cloud Transformation • AI & Automation • Application Modernization • Legacy Modernization • Data & Analytics • Customer Experience • Technology Modernization',
  },
  {
    name: 'End-to-End Solution Framework',
    desc: 'A comprehensive delivery approach covering the complete technology lifecycle — from strategy, requirements and architecture to development, integration, deployment, governance, monitoring and support.',
    purpose: 'To provide a structured, predictable, and transparent execution framework that ensures project success and alignment with business objectives.',
    howProvided: 'Oklut manages all delivery phases: Strategy, Requirements, Architecture, Development, Integration, Testing, Security, Deployment, Governance, Monitoring, and Managed Support.',
    capabilities: 'Strategy • Requirements • Architecture • Development • Integration • Testing • Security • Deployment • Governance • Monitoring • Managed Support',
  },
  {
    name: 'Migration & Modernization',
    desc: 'Secure, structured migration of applications, data, platforms, infrastructure and workloads from legacy or existing environments to modern, scalable and optimised technology platforms.',
    purpose: 'To eliminate legacy technical debt, reduce infrastructure bottlenecks, lower total cost of ownership, and enhance system security and performance.',
    howProvided: 'Oklut executes structured migrations covering Cloud Migration, Application Migration, Data Migration, Platform Migration, Legacy Modernization, ETL, Data Validation, Cutover Planning, and Performance Optimization with minimal or zero downtime.',
    capabilities: 'Cloud Migration • Application Migration • Data Migration • Platform Migration • Legacy Modernization • ETL • Data Validation • Cutover Planning • Performance Optimization',
  },
  {
    name: 'Proof of Concept (PoC) & Pilot Implementation',
    desc: 'Rapid development and validation of technology solutions to assess technical feasibility, business value, integration requirements, performance and scalability before full-scale implementation.',
    purpose: 'To validate business value, verify technical architecture, mitigate project risks, and ensure stakeholder alignment before capital commitment.',
    howProvided: 'Oklut delivers rapid prototypes and validation through PoC Development, Prototyping, MVP Development, Feasibility Assessment, Technical Validation, Integration Testing, Scalability Assessment, and Business Case Validation.',
    capabilities: 'PoC Development • Prototyping • MVP Development • Feasibility Assessment • Technical Validation • Integration Testing • Scalability Assessment • Business Case Validation',
  },
  {
    name: 'Shared Services & Managed Operations',
    desc: 'Centralised delivery of technology and operational capabilities across business units through standardised processes, skilled resources, governance frameworks, service management and measurable service levels.',
    purpose: 'To achieve operational economies of scale, ensure consistent service quality, optimize operational costs, and meet strict service-level agreements.',
    howProvided: 'Oklut delivers managed operations covering Managed Services, IT Operations, Application Support, Service Management, Resource Optimization, SLA Management, Governance, Continuous Improvement, and Cost Optimization.',
    capabilities: 'Managed Services • IT Operations • Application Support • Service Management • Resource Optimization • SLA Management • Governance • Continuous Improvement • Cost Optimization',
  },
]

export const TECHNOLOGIES_MENU = [
  {
    name: 'AI & Robotics Solutions',
    tagline: 'Intelligent Technology. Automated Operations. Smarter Business.',
    details: 'Combines AI, machine learning, computer vision, intelligent process automation and robotics to automate operations and turn data into decisions.',
    purpose: 'To automate complex manual and operational workflows, augment human decision-making, and extract actionable intelligence from enterprise data.',
    howUsed: 'our teams apply AI & Robotics Solutions on client engagements alongside our 9 services — from assessment through deployment and 24/7 operations.',
  },
  {
    name: 'Business Automation Solutions',
    tagline: 'Simplify Processes. Eliminate Repetition. Accelerate Growth.',
    details: 'Workflow automation, RPA, document automation and approval pipelines that remove repetitive effort from day-to-day operations.',
    purpose: 'To streamline day-to-day organizational workflows, eliminate repetitive tasks, improve compliance, and speed up business turnaround times.',
    howUsed: 'our teams apply Business Automation Solutions on client engagements alongside our 9 services — from assessment through deployment and 24/7 operations.',
  },
  {
    name: 'Cloud Migration Solutions',
    tagline: 'Move to the Cloud with Confidence.',
    details: 'Infrastructure, application and database migration plus cloud modernisation across AWS, Azure and GCP, with cutover planning and minimal downtime.',
    purpose: 'To transition legacy on-premise systems to scalable, resilient, and secure public and hybrid cloud environments with near-zero downtime.',
    howUsed: 'our teams apply Cloud Migration Solutions on client engagements alongside our 9 services — from assessment through deployment and 24/7 operations.',
  },
  {
    name: 'Data Center Solutions',
    tagline: 'Reliable Infrastructure for Mission-Critical Operations.',
    details: 'Computing, networking, storage, virtualisation, backup and disaster recovery designed for 99.999% availability.',
    purpose: 'To provide high-availability computing, storage, networking, and disaster recovery infrastructure for mission-critical enterprise workloads.',
    howUsed: 'our teams apply Data Center Solutions on client engagements alongside our 9 services — from assessment through deployment and 24/7 operations.',
  },
  {
    name: 'Cognitive Analytics & AI',
    tagline: 'Turn Data into Intelligence.',
    details: 'Descriptive, diagnostic, predictive and prescriptive analytics plus machine learning models that turn raw data into decisions.',
    purpose: 'To transform raw enterprise data streams into predictive models and actionable executive intelligence for faster, better decisions.',
    howUsed: 'our teams apply Cognitive Analytics & AI on client engagements alongside our 9 services — from assessment through deployment and 24/7 operations.',
  },
  {
    name: 'Information & Reporting Systems',
    tagline: 'The Right Information. At the Right Time. For Better Decisions.',
    details: 'MIS, business reporting, interactive dashboards and KPI management so teams act on live numbers instead of stale spreadsheets.',
    purpose: 'To equip leadership and operational teams with live interactive dashboards, automated KPI tracking, and centralized reporting systems.',
    howUsed: 'our teams apply Information & Reporting Systems on client engagements alongside our 9 services — from assessment through deployment and 24/7 operations.',
  },
  {
    name: 'Managed Services',
    tagline: 'Reliable Technology Operations. Expert Support. Continuous Improvement.',
    details: '24/7 infrastructure, cloud, network and application management with monitoring, observability, incident response and continuous improvement.',
    purpose: 'To ensure 24/7 application and infrastructure uptime, proactive observability, rapid incident resolution, and ongoing performance optimization.',
    howUsed: 'our teams apply Managed Services on client engagements alongside our 9 services — from assessment through deployment and 24/7 operations.',
  },
  {
    name: 'One-Stop Technology Solutions',
    tagline: 'One Technology Partner. Multiple Capabilities. Complete Business Solutions.',
    details: 'A complete lifecycle partner covering strategy, build, migration, integration and optimisation under one roof.',
    purpose: 'To serve as a single accountable technology partner covering strategy, software engineering, cloud migration, and continuous support.',
    howUsed: 'our teams apply One-Stop Technology Solutions on client engagements alongside our 9 services — from assessment through deployment and 24/7 operations.',
  },
]

export const PRODUCTS_MENU = [
  {
    name: 'Featured Products',
    purpose: 'Simplify operations, connect teams, automate complex processes, and drive smarter business growth.',
    features: '• Oklut AI Suite — Intelligent autonomous agents and tools that automate complex workflows and customer operations.\n• CloudNexus — Multi-cloud management platform optimizing performance, security, compliance, and costs across AWS, Azure, and GCP.\n• WorkSync — Hybrid collaboration and productivity hub with integrated task, chat, and document management.\n• DataStream — Real-time analytics engine transforming streams of business events into actionable insights.',
    benefits: '• Accelerates operational velocity and eliminates repetitive manual tasks.\n• Optimizes multi-cloud resource allocation and reduces infrastructure costs.\n• Unifies team communication, project workflows, and real-time business visibility.',
  },
  {
    name: 'ERP Solutions',
    purpose: 'Empower businesses with connected, intelligent, and scalable enterprise management solutions on a unified platform.',
    features: '• Oklut ERP Core — Unified enterprise architecture connecting finance, assets, HR, procurement, and inventory.\n• HRMS Pro — Employee experience platform covering payroll, benefits, performance reviews, and self-service.\n• SupplyChain IQ — Real-time logistics tracking, automated warehouse operations, and demand forecasting.\n• Finance Hub — Advanced ledger management, billing workflows, automated compliance, and real-time cashflow reports.',
    benefits: '• Eliminates data silos across departments with a single source of truth.\n• Automates financial, inventory, and supply chain reporting.\n• Enables rapid modular deployment without multi-year system disruption.',
  },
  {
    name: 'IT Solutions',
    purpose: 'Transform IT operations with intelligent, proactive, and scalable digital solutions that improve performance, productivity, and business continuity.',
    features: '• Cloud Infrastructure — Scalable architecture, migration, and workload management across AWS, Azure, and GCP.\n• Cybersecurity Suite — Proactive threat detection, vulnerability management, security operations, and compliance.\n• DevOps Pipeline — Automated CI/CD, container orchestration, and infrastructure-as-code for rapid software delivery.\n• Managed IT Services — 24/7 proactive infrastructure and application monitoring, incident response, and SLAs.',
    benefits: '• Delivers 99.999% availability for mission-critical operations.\n• Strengthens enterprise security posture and ensures compliance.\n• Accelerates software release cycles while reducing operational overhead.',
  },
  {
    name: 'CRM Solutions',
    purpose: 'Deliver connected, personalized, and intelligent customer experiences across the entire customer lifecycle.',
    features: '• Sales CRM — Pipeline management, intelligent lead scoring, deal tracking, and sales forecasting.\n• Customer Support Hub — Ticketing system, knowledge base, omnichannel communications, and live chat.\n• Marketing Automation — Campaign orchestration, automated email nurturing, and conversion analytics.\n• Customer 360 View — Unified customer profiles combining sales, support, and interaction data.',
    benefits: '• Boosts sales productivity and closes deals faster.\n• Shortens support resolution times with intelligent routing and self-service.\n• Delivers personalized customer interactions across every digital touchpoint.',
  },
  {
    name: 'HRMS Solutions',
    purpose: 'Empower workforces with intelligent, integrated, and automated HR solutions that simplify employee management and elevate workplace experiences.',
    features: '• Core HR — Employee records, organizational hierarchy, leave management, and attendance tracking.\n• Payroll & Compliance — Automated payroll calculations, statutory tax deductions, and compliance filings.\n• Performance Management — Objective & Key Results (OKRs), 360° reviews, goal setting, and development plans.\n• Recruitment Portal — Job posting distribution, applicant tracking system (ATS), interview scheduling, and onboarding.',
    benefits: '• Drastically reduces manual HR overhead and paperwork.\n• Ensures 100% accurate payroll and statutory compliance.\n• Improves employee engagement and speeds up hiring cycles.',
  },
  {
    name: 'App Development',
    purpose: 'Design, build, and scale high-performance custom applications across web, iOS, and Android that accelerate business growth.',
    features: '• Custom Application Development — Bespoke web and enterprise applications built for scalability and performance.\n• Mobile App Development — Native and cross-platform apps for iPhone, iPad, and Android.\n• API & System Integration — Seamless connectors and data pipelines between platforms and third-party systems.\n• Application Modernization — Cloud-native refactoring, microservices architecture, and 24/7 maintenance.',
    benefits: '• Creates intuitive, engaging user experiences that customers and teams love.\n• Ensures high performance, security, and scalability from MVP to enterprise scale.\n• Integrates cleanly with existing backend systems and third-party APIs.',
  },
]

// Lowercase and strip punctuation the same way the rest of the chat pipeline
// does, so a "?" or "." never breaks an intent match.
export function normalize(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['\u2019]/g, '')
    .replace(/[^a-z0-9\s+./@-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function titleCase(s) {
  return s.replace(/\b[a-z]/g, (c) => c.toUpperCase())
}

// ─── Menu rendering ──────────────────────────────────────────────────────────

export function buildServicesMenu() {
  const lines = SERVICES_MENU.map((s, i) => `${i + 1}. ${s.name}`)
  return `Our Services:\n\n${lines.join('\n')}\n\nPlease select a number to learn more.`
}

export function buildTechnologiesMenu() {
  const lines = TECHNOLOGIES_MENU.map((t, i) => `${i + 1}. ${t.name}`)
  return `Our Technologies:\n\n${lines.join('\n')}\n\nPlease select a number to learn more.`
}

export function buildProductsMenu() {
  const lines = PRODUCTS_MENU.map((p, i) => `${i + 1}. ${p.name}`)
  return `Here are our products:\n\n${lines.join('\n')}\n\nPlease select a number to learn more.`
}

/**
 * Read a numbered menu back out of an assistant message.
 *
 * The menu header is what makes the chatbot remember WHICH menu is on screen.
 */
export function parseMenuOptions(content) {
  if (typeof content !== 'string') return null
  const lines = content.split('\n')
  const header = (lines[0] || '').trim()
  let type = null
  if (/^(?:here\s+are\s+our\s+|our\s+)?services:?$/i.test(header) || /^services:?$/i.test(header)) {
    type = 'services'
  } else if (/^(?:here\s+are\s+the\s+technologies(?:\s+we\s+work\s+with)?|our\s+technologies):?$/i.test(header) || /^technologies:?$/i.test(header)) {
    type = 'technologies'
  } else if (/^(?:here\s+are\s+our\s+|our\s+)?products:?$/i.test(header) || /^products:?$/i.test(header)) {
    type = 'products'
  }
  if (!type) return null

  const options = []
  for (const line of lines) {
    const m = line.match(/^\s*(\d{1,2})\s*[.)]\s+(.+?)\s*$/)
    if (m) options.push({ index: Number(m[1]), label: m[2] })
  }
  if (options.length === 0) return null
  return { type, options }
}

/**
 * The menu currently on screen, recovered from the conversation history.
 * Scans backwards for the most recent menu the assistant displayed, so a
 * visitor can pick another option after reading one item.
 */
export function detectActiveMenu(history) {
  const list = Array.isArray(history) ? history : []
  for (let i = list.length - 1; i >= 0; i--) {
    const m = list[i]
    if (!m || m.role !== 'assistant') continue
    const parsed = parseMenuOptions(m.content)
    if (parsed) return parsed
  }
  return null
}

// ─── Numbered selection ──────────────────────────────────────────────────────

const ORDINAL_WORDS = {
  first: 1, second: 2, third: 3, fourth: 4, fifth: 5,
  sixth: 6, seventh: 7, eighth: 8, ninth: 9, tenth: 10,
}

// Accepts "2", "2.", "option 2", "number 2", "service 2", "the 2nd", "second",
// and natural questions like "Tell me about number 2", "explain 2", "what is option 2".
export function parseOptionIndex(q) {
  const cleaned = (q || '')
    .replace(/^(?:can you\s+)?(?:please\s+)?(?:tell me about|tell me more about|explain|what is|describe|details on|learn more about|show me|give me details about)\s+/, '')
    .trim()

  let m = cleaned.match(/^(\d{1,2})\.?$/)
  if (m) return Number(m[1])
  m = cleaned.match(/^(?:option|number|no|choice|item|service|services|tech|technology|technologies|product|products)\s*(\d{1,2})\.?$/)
  if (m) return Number(m[1])
  m = cleaned.match(/^(\d{1,2})(?:st|nd|rd|th)$/)
  if (m) return Number(m[1])
  m = cleaned.match(/^(?:the\s+)?(\w+)$/)
  if (m && Object.prototype.hasOwnProperty.call(ORDINAL_WORDS, m[1])) return ORDINAL_WORDS[m[1]]
  return null
}

function selectionReply(menu, index) {
  const outOfRange = (n) =>
    `Please select a valid number between 1 and ${n}. ${index} isn't one of the ${menu.type} listed (1-${n}):`

  if (menu.type === 'services') {
    const item = SERVICES_MENU[index - 1]
    if (!item) return `${outOfRange(SERVICES_MENU.length)}\n\n${buildServicesMenu()}`
    return `${index}. ${item.name}

What it is: ${item.desc}

Purpose: ${item.purpose}

How Oklut provides this service: ${item.howProvided}

Core capabilities: ${item.capabilities}

Would you like to explore another service? Just type a number (1-${SERVICES_MENU.length}) or ask for "services".`
  }

  if (menu.type === 'technologies') {
    const item = TECHNOLOGIES_MENU[index - 1]
    if (!item) return `${outOfRange(TECHNOLOGIES_MENU.length)}\n\n${buildTechnologiesMenu()}`
    return `${index}. ${item.name}

${item.tagline}

What it is: ${item.details}

Purpose: ${item.purpose}

How Oklut uses it: ${item.howUsed}

Would you like to explore another technology? Just type a number (1-${TECHNOLOGIES_MENU.length}) or ask for "technologies".`
  }

  if (menu.type === 'products') {
    const item = PRODUCTS_MENU[index - 1]
    if (!item) return `${outOfRange(PRODUCTS_MENU.length)}\n\n${buildProductsMenu()}`
    return `${index}. ${item.name}

Purpose: ${item.purpose}

Key Features:
${item.features}

Benefits:
${item.benefits}

Would you like to explore another product? Just type a number (1-${PRODUCTS_MENU.length}) or ask for "products".`
  }

  return null
}

// ─── Menu intent ─────────────────────────────────────────────────────────────
// Words that may surround the menu keyword without turning the request into a
// question about ONE service ("cloud migration services" keeps "cloud
// migration" as content words and therefore is NOT a menu request).

const MENU_FILLER = new Set([
  'a', 'all', 'about', 'am', 'an', 'and', 'any', 'are', 'as', 'at', 'be',
  'been', 'best', 'bit', 'brief', 'briefly', 'but', 'by', 'can', 'check',
  'could', 'describe', 'details', 'detail', 'did', 'display', 'do', 'does',
  'each', 'either', 'else', 'explain', 'find', 'for', 'from', 'full',
  'get', 'give', 'go', 'had', 'has', 'have', 'help', 'here', 'how', 'i',
  'if', 'in', 'info', 'information', 'into', 'is', 'it', 'its', 'just',
  'kind', 'kinds', 'know', 'latest', 'list', 'listed', 'lot', 'many',
  'me', 'mine', 'more', 'much', 'must', 'my', 'need', 'needs', 'new',
  'now', 'of', 'offering', 'offerings', 'offer', 'offers', 'on', 'one',
  'only', 'or', 'other', 'our', 'ours', 'out', 'over', 'own', 'please',
  'prepare', 'print', 'provide', 'read', 'say', 'see', 'send', 'share',
  'should', 'show', 'showing', 'since', 'so', 'some', 'sort', 'stuff',
  'take', 'tell', 'than', 'that', 'the', 'their', 'theirs', 'them', 'then',
  'there', 'these', 'they', 'thing', 'things', 'this', 'those', 'though',
  'through', 'to', 'top', 'type', 'types', 'under', 'us', 'use', 'used',
  'using', 'very', 'want', 'wanting', 'was', 'we', 'were', 'what', 'when',
  'which', 'who', 'why', 'will', 'with', 'would', 'you', 'your', 'yours',
  'oklut', 'please', 'ok', 'okay', 'right', 'well', 'also', 'again', 'now',
  'really', 'just', 'maybe', 'actually', 'like', 'love', 'see', 'look',
  'lookin', 'looking', 'find', 'founding', 'work', 'working', 'works',
  'menu', 'menus', 'catalog', 'index', 'overview', 'summary',
  're', 've', 'll', 's', 'd', 't', 'youve', 'youre', 'id', 'im',
])

const SERVICE_STEM = /^services?$/
const TECH_STEM = /^(?:tech|techs|technolog(?:y|ies))$/
const PRODUCT_STEM = /^(?:product|products)$/

function matchMenuIntent(q) {
  const tokens = q.split(' ').filter(Boolean)
  if (tokens.length === 0) return null
  const hasService = tokens.some((t) => SERVICE_STEM.test(t))
  const hasTech = tokens.some((t) => TECH_STEM.test(t))
  const hasProduct = tokens.some((t) => PRODUCT_STEM.test(t))
  if (!hasService && !hasTech && !hasProduct) return null

  const content = tokens.filter(
    (t) =>
      !MENU_FILLER.has(t) &&
      !SERVICE_STEM.test(t) &&
      !TECH_STEM.test(t) &&
      !PRODUCT_STEM.test(t),
  )
  if (content.length > 0) return null
  if (hasProduct) return 'products'
  if (hasService) return 'services'
  return 'technologies'
}

/**
 * Priority 1-3 of the chatbot's intent pipeline:
 *   1. numbered selection against the active menu
 *   2. Services menu request
 *   3. Technologies menu request
 *   4. Products menu request
 *
 * Returns `null` when the message is none of these, so the caller keeps its
 * normal flow. A bare number with NO active menu is also `null` — there is
 * nothing to map it onto, so it must not be answered with a menu item.
 */
export function resolveMenuReply(text, history) {
  const q = normalize(text)
  if (!q) return null

  const index = parseOptionIndex(q)
  if (index !== null) {
    const menu = detectActiveMenu(history)
    if (menu) return selectionReply(menu, index)
    return null
  }

  const type = matchMenuIntent(q)
  if (type === 'services') return buildServicesMenu()
  if (type === 'technologies') return buildTechnologiesMenu()
  if (type === 'products') return buildProductsMenu()
  return null
}


// ─── General knowledge ───────────────────────────────────────────────────────

const CAPITALS = {
  france: 'Paris', japan: 'Tokyo', india: 'New Delhi', 'united states': 'Washington, D.C.', usa: 'Washington, D.C.',
  'united kingdom': 'London', uk: 'London', england: 'London', germany: 'Berlin', italy: 'Rome', spain: 'Madrid',
  portugal: 'Lisbon', russia: 'Moscow', china: 'Beijing', 'south korea': 'Seoul', 'north korea': 'Pyongyang',
  canada: 'Ottawa', australia: 'Canberra', 'new zealand': 'Wellington', brazil: 'Brasília', argentina: 'Buenos Aires',
  mexico: 'Mexico City', egypt: 'Cairo', 'south africa': 'Pretoria', nigeria: 'Abuja', kenya: 'Nairobi',
  ethiopia: 'Addis Ababa', morocco: 'Rabat', saudi: 'Riyadh', 'saudi arabia': 'Riyadh', uae: 'Abu Dhabi',
  emirates: 'Abu Dhabi', qatar: 'Doha', turkey: 'Ankara', greece: 'Athens', netherlands: 'Amsterdam',
  belgium: 'Brussels', switzerland: 'Bern', austria: 'Vienna', sweden: 'Stockholm', norway: 'Oslo',
  denmark: 'Copenhagen', finland: 'Helsinki', poland: 'Warsaw', ukraine: 'Kyiv', ireland: 'Dublin',
  thailand: 'Bangkok', vietnam: 'Hanoi', indonesia: 'Jakarta', malaysia: 'Kuala Lumpur', singapore: 'Singapore',
  pakistan: 'Islamabad', bangladesh: 'Dhaka', 'sri lanka': 'Sri Jayawardenepura Kotte', nepal: 'Kathmandu',
  iran: 'Tehran', iraq: 'Baghdad', israel: 'Jerusalem', jordan: 'Amman', chile: 'Santiago', colombia: 'Bogotá',
  peru: 'Lima', cuba: 'Havana', iceland: 'Reykjavík', hungary: 'Budapest', 'czech republic': 'Prague',
  romania: 'Bucharest', mexico_city: 'Mexico City',
}

const CURRENCIES = {
  poland: 'the Polish złoty (PLN)', denmark: 'the Danish krone (DKK)', india: 'the Indian rupee (INR)',
  'united states': 'the US dollar (USD)', usa: 'the US dollar (USD)', 'united kingdom': 'the British pound (GBP)',
  uk: 'the British pound (GBP)', england: 'the British pound (GBP)', germany: 'the euro (EUR)',
  france: 'the euro (EUR)', italy: 'the euro (EUR)', spain: 'the euro (EUR)', portugal: 'the euro (EUR)',
  netherlands: 'the euro (EUR)', belgium: 'the euro (EUR)', austria: 'the euro (EUR)', greece: 'the euro (EUR)',
  ireland: 'the euro (EUR)', finland: 'the euro (EUR)', japan: 'the Japanese yen (JPY)',
  china: 'the Chinese yuan (CNY)', canada: 'the Canadian dollar (CAD)', australia: 'the Australian dollar (AUD)',
  'new zealand': 'the New Zealand dollar (NZD)', brazil: 'the Brazilian real (BRL)',
  russia: 'the Russian ruble (RUB)', 'south korea': 'the South Korean won (KRW)',
  'south africa': 'the South African rand (ZAR)', turkey: 'the Turkish lira (TRY)',
  switzerland: 'the Swiss franc (CHF)', sweden: 'the Swedish krona (SEK)', norway: 'the Norwegian krone (NOK)',
  mexico: 'the Mexican peso (MXN)', egypt: 'the Egyptian pound (EGP)', nigeria: 'the Nigerian naira (NGN)',
  'sri lanka': 'the Sri Lankan rupee (LKR)', nepal: 'the Nepalese rupee (NPR)',
  pakistan: 'the Pakistani rupee (PKR)', bangladesh: 'the Bangladeshi taka (BDT)',
  'czech republic': 'the Czech koruna (CZK)', hungary: 'the Hungarian forint (HUF)',
  'saudi arabia': 'the Saudi riyal (SAR)', uae: 'the UAE dirham (AED)', qatar: 'the Qatari riyal (QAR)',
  thailand: 'the Thai baht (THB)', indonesia: 'the Indonesian rupiah (IDR)',
  malaysia: 'the Malaysian ringgit (MYR)', singapore: 'the Singapore dollar (SGD)',
  ukraine: 'the Ukrainian hryvnia (UAH)', israel: 'the Israeli new shekel (ILS)',
  chile: 'the Chilean peso (CLP)', colombia: 'the Colombian peso (COP)', peru: 'the Peruvian sol (PEN)',
  cuba: 'the Cuban peso (CUP)', iceland: 'the Icelandic króna (ISK)', romania: 'the Romanian leu (RON)',
  vietnam: 'the Vietnamese đồng (VND)', kenya: 'the Kenyan shilling (KES)',
}

// Resolve the country token(s) from the tail of a question against the known
// tables: exact match first, then the last 1-3 words, then the first 1-3 words
// (so "capital of france please" and "capital of south africa" both resolve).
function lookupCountry(raw) {
  const s = (raw || '').replace(/\s+/g, ' ').trim().replace(/[.?!,]+$/, '').trim()
  if (!s) return null
  const table = CAPITALS
  if (table[s]) return s
  const words = s.split(' ').filter(Boolean)
  for (let take = 1; take <= 3 && take <= words.length; take++) {
    const tail = words.slice(words.length - take).join(' ')
    if (table[tail]) return tail
    const head = words.slice(0, take).join(' ')
    if (table[head]) return head
  }
  return null
}

const FACTS = [
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?(?:largest|biggest)\s+(?:planet|planet in\s+(?:the\s+)?solar system)\b/, answer: 'Jupiter — it is the largest planet in our solar system, about 11 times wider than Earth.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?(?:smallest|smallest planet)\s+planet\b/, answer: 'Mercury is the smallest planet in our solar system.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?closest\s+planet\s+(?:to\s+)?(?:the\s+)?sun\b/, answer: 'Mercury is the closest planet to the Sun.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?(?:red|reddest)\s+planet\b/, answer: 'Mars is known as the Red Planet because iron minerals in its soil oxidise, or rust.' },
  { re: /\bhow\s+many\s+planets\s+(?:are\s+)?(?:there\s+)?(?:in\s+(?:the\s+)?solar system)?\b/, answer: 'There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?(?:largest|biggest)\s+ocean\b/, answer: 'The Pacific Ocean is the largest ocean on Earth, covering more area than all the land combined.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?(?:tallest|highest|biggest)\s+mountain\b/, answer: 'Mount Everest is the tallest mountain above sea level, at 8,848.86 m (29,031.7 ft).' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?longest\s+river\b/, answer: 'The Nile is generally measured as the longest river in the world, at about 6,650 km.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?fastest\s+(?:land\s+)?animal\b/, answer: 'The cheetah is the fastest land animal, reaching about 112 km/h (70 mph) in short bursts.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?largest\s+(?:animal|mammal)\b/, answer: 'The blue whale is the largest animal known to have lived on Earth.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?(?:largest|biggest)\s+country\b/, answer: 'Russia is the largest country by land area, spanning Eastern Europe and northern Asia.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?(?:smallest|tiny)\s+country\b/, answer: 'Vatican City is the smallest country in the world, at about 0.49 km².' },
  { re: /\bboiling\s+point\s+of\s+water\b/, answer: 'Water boils at 100 °C (212 °F) at standard atmospheric pressure.' },
  { re: /\b(?:what(?:'?s| is)\s+)?(?:the\s+)?speed\s+of\s+light\b/, answer: 'Light travels at about 299,792 kilometres per second in a vacuum (c ≈ 3 × 10⁸ m/s).' },
  { re: /\b(?:how\s+many\s+)?days\s+(?:are\s+)?in\s+(?:a\s+)?(?:solar\s+)?year\b/, answer: 'A year is about 365.25 days — which is why we add a leap day every four years.' },
]

const GLOSSARY = [
  { re: /\bsql\s*server\b/, answer: "SQL Server is Microsoft's relational database management system (RDBMS). It stores data in tables with rows and columns, and is queried with T-SQL. It's used for transactional applications, reporting and data warehousing, and competes with Oracle, PostgreSQL and MySQL." },
  { re: /\bsql\b/, answer: 'SQL (Structured Query Language) is the standard language for reading and writing data in relational databases — commands like SELECT, INSERT, UPDATE and DELETE. It underpins MySQL, PostgreSQL, SQL Server and Oracle.' },
  { re: /\bdatabase\b/, answer: 'A database is an organised collection of data stored so it can be easily accessed, updated and managed. Relational databases keep data in tables joined by keys; NoSQL databases (document, key-value, graph) trade that structure for flexibility at scale.' },
  { re: /\b(?:rest\s+)?api\b/, answer: 'An API (Application Programming Interface) is a contract that lets two pieces of software talk to each other. A REST API exposes endpoints over HTTP that accept and return JSON, which is how most web and mobile apps fetch data from a backend.' },
  { re: /\bcloud\s*computing\b/, answer: 'Cloud computing means using remote servers over the internet to store, process and run your applications instead of on-premise hardware. You get resources on demand and pay for what you use — the main models are IaaS, PaaS and SaaS on providers like AWS, Azure and GCP.' },
  { re: /\bartificial\s+intelligence\b|\bai\b/, answer: 'Artificial intelligence is the field of building systems that perform tasks normally requiring human intelligence — recognising patterns, understanding language, making decisions. Machine learning is the dominant approach: systems learn from data instead of being explicitly programmed.' },
  { re: /\bmachine\s+learning\b|\bml\b/, answer: 'Machine learning is a subset of AI where models learn patterns from data and improve with experience, rather than following hand-written rules. Typical steps are collecting data, training a model, evaluating it, and deploying it to make predictions on new input.' },
  { re: /\bhtml\b/, answer: 'HTML (HyperText Markup Language) is the standard markup language that gives web pages their structure — headings, paragraphs, lists, images and links. Browsers render it, and CSS styles it.' },
  { re: /\bcss\b/, answer: 'CSS (Cascading Style Sheets) controls the presentation of a web page — colours, fonts, spacing and layout. It separates appearance from the HTML structure.' },
  { re: /\bjavascript\b/, answer: "JavaScript is the programming language of the browser, used to make pages interactive. With Node.js it also runs on servers, so one language can power both the front end and the back end." },
  { re: /\bpython\b/, answer: 'Python is a readable, general-purpose language widely used for web development, automation, data science and machine learning. Its large standard library and package ecosystem (pip) make it a common first choice for scripting and AI work.' },
  { re: /\bjava\b/, answer: 'Java is a statically-typed, object-oriented language designed to run anywhere via the JVM. It is common in large enterprise systems, Android apps and backend services.' },
  { re: /\.net\b|\bdotnet\b|\bdot\s*net\b/, answer: ".NET is Microsoft's free, cross-platform framework for building web, desktop, cloud and mobile applications. It supports C# and F#, and ASP.NET Core is used for high-performance web APIs." },
  { re: /\breact\b/, answer: 'React is a JavaScript library for building user interfaces from reusable components. It uses a virtual DOM to update the page efficiently and is maintained by Meta.' },
  { re: /\bnode(?:\.js)?\b/, answer: "Node.js is a runtime that executes JavaScript outside the browser, on the server. It's event-driven and non-blocking, which makes it popular for APIs and real-time services." },
  { re: /\bdevops\b/, answer: 'DevOps is a set of practices that combines development and operations to ship software faster and more reliably — continuous integration/continuous delivery, infrastructure as code, monitoring and automated testing.' },
  { re: /\b(?:ci\/cd|continuous integration|continuous delivery|continuous deployment)\b/, answer: 'CI/CD automates the path from code to production: continuous integration merges and tests changes frequently, and continuous delivery/deployment releases them automatically once checks pass.' },
  { re: /\bmicroservices?\b/, answer: 'Microservices architecture splits an application into small, independently deployable services that communicate over APIs. Teams can scale and release each service on its own, at the cost of more operational complexity.' },
  { re: /\bui\/?ux\b/, answer: 'UI (user interface) is what the product looks like — layout, controls, typography. UX (user experience) is how it feels to use — flow, clarity, speed. Good UX research drives the UI decisions.' },
  { re: /\bblockchain\b/, answer: 'A blockchain is a distributed ledger that records transactions in cryptographically-linked blocks, so the history is tamper-evident without a central authority. It underpins cryptocurrencies and can be used for supply-chain and settlement tracking.' },
  { re: /\biot\b/, answer: 'The Internet of Things (IoT) is the network of physical devices — sensors, appliances, vehicles — that collect and exchange data over the internet, usually feeding dashboards or automated workflows.' },
  { re: /\bcyber\s*security\b|\binformation\s+security\b/, answer: 'Cybersecurity is the practice of protecting systems, networks and data from unauthorised access, misuse or disruption. Core ideas are defence in depth, least privilege, encryption and continuous monitoring.' },
  { re: /\bencryption\b/, answer: 'Encryption converts readable data into ciphertext using a key, so only someone holding that key can read it. Symmetric encryption uses one shared key; asymmetric uses a public/private key pair.' },
  { re: /\bdata\s+science\b/, answer: 'Data science combines statistics, programming and domain knowledge to extract insights from data. The typical workflow is asking a question, collecting and cleaning data, analysing or modelling it, then communicating the result.' },
  { re: /\bwhat\s+is\s+a?\s*fork\b/, answer: 'In version control, a fork is a personal copy of a repository that lets you experiment freely before proposing changes back to the original project.' },
]

/**
 * Priority 9 of the chatbot's intent pipeline: well-known factual questions.
 *
 * The glossary only fires on definition questions ("What is SQL Server?"), so
 * a passing mention of a technology is never hijacked from the Oklut knowledge
 * base — priority 8 (Oklut information) outranks priority 9 (general facts).
 *
 * Returns `null` for anything else so the caller keeps its normal flow.
 */
const DEFINITION_RE = /^(?:what\s+|define\s+|explain\s+|what\s+do\s+you\s+mean\s+by\s+)/

export function answerGeneralKnowledge(text) {
  const q = normalize(text)
  if (!q) return null

  // "capital of Denmark", "What is the capital of Poland?", "capital city of India"
  const capital = q.match(/\bcapital\s+(?:city\s+)?of\s+(?:the\s+)?([a-z][a-z\s]*?)\.?$/)
  if (capital) {
    const country = lookupCountry(capital[1])
    if (country) return `The capital of ${titleCase(country)} is ${CAPITALS[country]}.`
  }

  // "currency of Poland", "What is the currency of Poland?",
  // "What currency do they use in Poland?"
  const currency =
    q.match(/\bcurrenc(?:y|ies)\s+(?:of|for|in)\s+(?:the\s+)?([a-z][a-z\s]*?)\.?$/) ||
    q.match(/\bcurrenc(?:y|ies)\s+(?:do|does)\s+(?:they|you)\s+use\s+(?:in|of)\s+([a-z][a-z\s]*?)\.?$/) ||
    q.match(/\b(?:what|which)\s+(?:is|are)\s+(?:the\s+)?(?:official\s+)?currenc(?:y|ies)\s+of\s+([a-z][a-z\s]*?)\.?$/)
  if (currency) {
    const country = lookupCountry(currency[1])
    if (country) return `The currency of ${titleCase(country)} is ${CURRENCIES[country]}.`
  }

  for (const fact of FACTS) {
    if (fact.re.test(q)) return fact.answer
  }

  if (DEFINITION_RE.test(q)) {
    for (const entry of GLOSSARY) {
      if (entry.re.test(q)) return entry.answer
    }
  }

  return null
}

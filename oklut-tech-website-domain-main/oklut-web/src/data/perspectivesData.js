/*
 * Oklut Perspectives — thought-leadership editorial library.
 * Five perspectives on retail data, AI, ERP, cyber resilience and cloud modernization.
 * Images are uniformly cropped 960x540 JPEG (public/img/perspectives/*.jpg) so
 * rows never shift while loading; the card/modal layout and styling are unchanged.
 */
export const PERSPECTIVES_DATA = [
  {
    id: 'retail-analytics-decision-making',
    slug: 'retail-business-data-analytics',
    category: 'retail-analytics',
    tag: 'Retail Analytics',
    date: 'Sep 2026',
    readTime: '6 min read',
    imageOptimized: '/img/perspectives/retail-business-data-analytics.jpg',
    image: '/img/perspectives/retail-business-data-analytics.jpg',
    titleKey: 'insights.items.item1.title',
    title: 'Business Improves Decision-Making with Data Analytics',
    excerptKey: 'insights.items.item1.excerpt',
    excerpt: 'Retailers sit on more customer and transaction data than ever, yet many still plan on instinct. Here is how analytics turns that data into faster pricing, inventory and demand decisions.',
    content: {
      lead: 'Retail margins are decided long before the sale — in assortment calls, stock positions and price changes made weeks earlier. Data analytics gives retail organizations the evidence to make those calls faster: see demand shifting, understand which products and stores actually perform, and act before margin leaks become losses. The goal is not more reporting; it is fewer, better decisions made closer to real time.',
      sections: [
        {
          heading: 'From Monthly Reports to Live Signals',
          text: 'Traditional retail reporting arrives after the decision has been made. Modern retail analytics works the other way round — stitching together point-of-sale, loyalty, e-commerce, supply-chain and market data so customer behavior and demand are visible as they move. Sales and demand forecasting then draws on seasonality, promotions, weather and local events rather than a single historical average, giving planners a defensible baseline instead of a spreadsheet guess.'
        },
        {
          heading: 'Optimizing Inventory, Assortment and Price',
          text: 'Once demand is visible, the operational decisions sharpen quickly:',
          points: [
            'Inventory optimization: right-size safety stock by store and SKU so capital is not tied up in slow movers while fast sellers go out of stock.',
            'Product performance: rank items by margin, sell-through and return rate — not revenue alone — to decide what to keep, mark down or drop.',
            'Pricing insights: test elasticity and promotion response to protect margin instead of discounting on habit.',
            'Channel performance: compare store, online and marketplace contribution on the same definitions so channel conflict becomes a trade-off, not a debate.'
          ]
        },
        {
          heading: 'Dashboards That Reach the Decision',
          text: 'Analytics only changes outcomes when it lands in the daily rhythm of the business. Real-time dashboards should answer a small set of recurring questions — what is selling, what is running out, what is drifting off plan — and sit in the hands of store, category and supply-chain teams, not just head office. Pair every metric with a named owner and a review cadence, and the organization gradually moves from reviewing last month to steering this week.'
        }
      ],
      takeaways: [
        'Make customer behavior and demand visible in near real time, not after the period closes.',
        'Optimize inventory, assortment and price together — they trade off against each other.',
        'Put dashboards in the hands of the teams who act on them, with an owner and a cadence.'
      ],
      relatedServices: [
        { title: 'Digital Transformation', path: '/services/digital-transformation' },
        { title: 'Business Process Automation', path: '/services/business-process-automation' },
        { title: 'End-to-End Solution Framework', path: '/services/end-to-end-solution-framework' }
      ]
    }
  },
  {
    id: 'ai-enterprise-applications',
    slug: 'ai-reshaping-enterprise-applications',
    category: 'artificial-intelligence',
    tag: 'Artificial Intelligence',
    date: 'Sep 2026',
    readTime: '6 min read',
    imageOptimized: '/img/perspectives/ai-reshaping-enterprise-applications.jpg',
    image: '/img/perspectives/ai-reshaping-enterprise-applications.jpg',
    titleKey: 'insights.items.item2.title',
    title: 'How AI Is Reshaping Enterprise Applications',
    excerptKey: 'insights.items.item2.excerpt',
    excerpt: 'Artificial intelligence is moving from standalone experiments into the core systems enterprises run on. Explore how automation, copilots and predictive insight are changing the applications of record.',
    content: {
      lead: 'For a decade, AI mostly lived beside enterprise systems — a model in a notebook, a proof of concept in a side channel. That is changing. Intelligence is being embedded inside ERPs, CRMs and service platforms, where it can read the same data, follow the same permissions and act inside the same workflows as the people it supports. The result is not a new category of software so much as a new capability layer across the ones enterprises already own.',
      sections: [
        {
          heading: 'Intelligence Moves Into the System of Record',
          text: 'The first wave of enterprise AI sat outside core applications because they were too rigid to host it. Modern platforms expose APIs, events and permission models that make AI a first-class participant rather than a bolt-on. That lets automation act on live operational data — resolving a service ticket, flagging a risky order, drafting a contract clause — and keeps a full audit trail of what the model saw and did.'
        },
        {
          heading: 'Copilots, Workflows and Decision Support',
          text: 'Three patterns are proving durable in production:',
          points: [
            'Intelligent workflows: AI triages, routes and completes routine steps so exceptions reach humans with context already assembled.',
            'Enterprise copilots: assistants grounded in company knowledge and permissions that draft, summarize and retrieve inside the tool of the moment.',
            'Predictive insight: forecasting and anomaly detection surfaced at the point of decision, not in a separate analytics portal.'
          ]
        },
        {
          heading: 'Personalization, Productivity and Control',
          text: 'Applied well, AI raises employee productivity by removing the searching, transcribing and re-keying that surrounds real work, while personalizing experiences for customers and staff alike. None of that is automatic: organizations need clear data foundations, grounded retrieval, human review for consequential actions and governance over which models touch which data. Treat AI as a product with owners and guardrails, and adoption compounds; treat it as a feature to switch on, and trust erodes quickly.'
        }
      ],
      takeaways: [
        'Embed intelligence in the systems of record so it can act on live data within existing controls.',
        'Start with workflows and copilots where the value and the oversight are both clear.',
        'Govern data, permissions and human review as deliberately as you build the capability.'
      ],
      relatedServices: [
        { title: 'Digital Transformation', path: '/services/digital-transformation' },
        { title: 'Custom Development & Customization', path: '/services/custom-development-customization' },
        { title: 'Center of Excellence', path: '/services/center-of-excellence' }
      ]
    }
  },
  {
    id: 'modern-erp-business-transformation',
    slug: 'accelerating-business-transformation-modern-erp',
    category: 'erp',
    tag: 'Modern ERP',
    date: 'Aug 2026',
    readTime: '6 min read',
    imageOptimized: '/img/perspectives/accelerating-business-transformation-modern-erp.jpg',
    image: '/img/perspectives/accelerating-business-transformation-modern-erp.jpg',
    imageAlt: 'Modern ERP platform connecting enterprise business operations',
    titleKey: 'insights.items.item3.title',
    title: 'Accelerating Business Transformation with Modern ERP',
    excerptKey: 'insights.items.item3.excerpt',
    excerpt: 'ERP has moved well beyond back-office accounting. Explore how modern, cloud-based platforms connect finance, supply chain, procurement and HR into one operating model — and a pragmatic route off legacy systems.',
    content: {
      lead: 'A modern ERP platform is not a larger accounting system; it is the operating model of the business expressed in software. Finance, supply chain, procurement and people all transact in one place, on shared data and standard processes, which is what finally makes an enterprise feel connected rather than merely integrated. The work is as much about process discipline and integration as it is about the platform — and the cost of staying on a fragmented legacy estate compounds every year.',
      sections: [
        {
          heading: 'From System of Record to Operating Backbone',
          text: 'Traditional ERP earned its place as the system of record and then stopped there: batch reports, customised beyond recognition, expensive to change. Cloud ERP works differently. It runs on standard processes with continuous updates, scales with demand, and exposes its data and events through APIs so other applications participate rather than integrate through brittle overnight extracts. Instead of a ledger that records what happened last month, it becomes the backbone the business runs on — orders, inventory, suppliers, costs and workforce visible on the same definitions, in near real time.'
        },
        {
          heading: 'Integrating the Core Business Functions',
          text: 'Value comes from functions transacting together rather than side by side:',
          points: [
            'Finance and accounting: a single ledger with an automated close, so margin, cash and cost-centre performance are visible while the period is still open.',
            'Supply chain and operations: demand, inventory, production and fulfilment on shared data, so planners and operations stop reconciling two versions of the truth.',
            'Procurement: requisition-to-pay, supplier records, contracts and spend analytics in one flow, with approvals and controls built into the process rather than around it.',
            'Human resources: workforce, payroll and cost-to-serve joined to finance, so people costs land in the same model as the P&L instead of a parallel spreadsheet.',
            'Connected processes: a purchase order, a goods receipt and an invoice updating one record, with workflow automation carrying the steps between them.'
          ]
        },
        {
          heading: 'Breaking Down Data and Process Silos',
          text: 'Silos are rarely a technology failure; they are the consequence of systems that each own a slice of the same reality. Modern ERP addresses that with a governed master data model, role-based access, and APIs that let the existing enterprise applications — CRM, field service, warehouse management, industry-specific tools — read and write against the same core. Workflow automation then moves the handoffs that used to live in email and spreadsheets onto the platform, and real-time operational visibility replaces the monthly reconciliation ritual. Integration is the deliverable, not an afterthought.'
        },
        {
          heading: 'AI, Automation and the Move Off Legacy ERP',
          text: 'Two shifts make this the right moment to act. First, automation and AI are now native to modern ERP: anomaly detection on spend, forecasting on demand, exception routing on invoices, assistants that answer operational questions from live data. Those capabilities depend on clean, integrated data — precisely what a legacy estate cannot supply. Second, migration tooling has matured enough that leaving legacy ERP can be staged rather than big-bang: assess the estate, standardise the processes worth standardising, migrate in waves, and retire the customisations that only existed to work around the old platform. Done in that order, scalability and operational efficiency improve as risk comes down, and decision-making improves because the numbers finally agree.'
        }
      ],
      takeaways: [
        'Treat ERP as the operating model, not a finance project — integration and process discipline are the real work.',
        'Connect finance, supply chain, procurement and people on one governed data model exposed through APIs.',
        'Move off legacy ERP in staged waves, then let integrated data unlock automation and AI.'
      ],
      relatedServices: [
        { title: 'Business Process Automation', path: '/services/business-process-automation' },
        { title: 'Migration & Modernization', path: '/services/migration-modernization' },
        { title: 'End-to-End Solution Framework', path: '/services/end-to-end-solution-framework' }
      ]
    }
  },
  {
    id: 'cyber-resilience-connected-enterprise',
    slug: 'cyber-resilience-connected-enterprise',
    category: 'cybersecurity',
    tag: 'Cybersecurity',
    date: 'Aug 2026',
    readTime: '7 min read',
    imageOptimized: '/img/perspectives/cyber-resilience-connected-enterprise.jpg',
    image: '/img/perspectives/cyber-resilience-connected-enterprise.jpg',
    titleKey: 'insights.items.item4.title',
    title: 'Building Cyber Resilience in a Connected Enterprise',
    excerptKey: 'insights.items.item4.excerpt',
    excerpt: 'As enterprises connect more systems, partners and devices, security becomes a question of resilience. Explore how zero-trust, cloud security and incident readiness keep the business running.',
    content: {
      lead: 'Every integration, cloud migration and connected device expands the surface an attacker can reach. Traditional perimeter thinking assumed a trusted inside and a hostile outside; modern enterprises have neither. Cyber resilience accepts that some attempts will succeed and focuses on containing the damage, protecting the data that matters and recovering fast enough that customers never notice.',
      sections: [
        {
          heading: 'Assume Breach, Verify Everything',
          text: 'Zero-trust principles replace implicit network trust with continuous verification: every user, device and service is authenticated and authorized for the specific resource it needs, and only for as long as it needs it. Strong identity and access management — least privilege, short-lived credentials, strong authentication — sits at the center, because most serious incidents begin with a compromised identity rather than a punched hole in the firewall.'
        },
        {
          heading: 'Protecting Data Across Cloud and Enterprise Systems',
          text: 'Resilience depends on controls that follow the data wherever it lives:',
          points: [
            'Cloud security: hardened configuration, encryption in transit and at rest, and clear shared-responsibility boundaries with providers.',
            'Data protection: classification and access governance so sensitive data is protected in proportion to its value.',
            'Connected systems: the same identity and monitoring standards applied to partner integrations, APIs and operational technology.',
            'Threat monitoring: centralized detection and alerting so anomalous behavior is caught early and investigated with context.'
          ]
        },
        {
          heading: 'Detect, Respond, Recover',
          text: 'Detection is only useful if the organization can act on it. That means rehearsed incident response with clear roles, a tested ability to isolate affected systems without halting the business, and backups that are proven restorable. Business continuity planning should assume that some services will degrade and define what "good enough to keep operating" looks like. Resilience is measured after the incident — in hours of downtime avoided and trust preserved, not in tools purchased.'
        }
      ],
      takeaways: [
        'Stop trusting networks and start verifying every identity, device and request.',
        'Apply consistent data protection and monitoring across cloud, partners and connected systems.',
        'Rehearse incident response and recovery — resilience is proven, not assumed.'
      ],
      relatedServices: [
        { title: 'Shared Services & Managed Operations', path: '/services/shared-services-managed-operations' },
        { title: 'Migration & Modernization', path: '/services/migration-modernization' },
        { title: 'End-to-End Solution Framework', path: '/services/end-to-end-solution-framework' }
      ]
    }
  },
  {
    id: 'legacy-cloud-modernization',
    slug: 'legacy-application-cloud-modernization',
    category: 'cloud-modernization',
    tag: 'Cloud & Modernization',
    date: 'Jul 2026',
    readTime: '7 min read',
    imageOptimized: '/img/perspectives/legacy-application-cloud-modernization.jpg',
    image: '/img/perspectives/legacy-application-cloud-modernization.jpg',
    titleKey: 'insights.items.item5.title',
    title: 'Modernizing a Legacy Application for the Cloud',
    excerptKey: 'insights.items.item5.excerpt',
    excerpt: 'Legacy applications still run the core of many enterprises. Explore a pragmatic path — assess, re-platform, refactor — to move them onto scalable, secure cloud architecture.',
    content: {
      lead: 'The applications that run the business are often the ones that hold it back: aging stacks that are costly to maintain, hard to change and risky to keep. Modernizing them for the cloud is not a single leap but a sequence of deliberate choices about what to keep, what to re-host and what to rebuild, made against a clear view of business value and risk.',
      sections: [
        {
          heading: 'Assess Before You Migrate',
          text: 'The first step is honesty about what you have. A structured assessment maps each application against business criticality, technical debt, dependency sprawl and the cost of inaction. That picture tells you which systems are candidates for a lift-and-shift, which need real refactoring, and which should be retired outright. Skipping this step is the most common reason migrations stall — teams commit to a destination before understanding the cargo.'
        },
        {
          heading: 'Choosing the Right Modernization Path',
          text: 'There is no single correct route; there is a right route per application:',
          points: [
            'Re-platforming: move to managed cloud services with minimal code change to cut infrastructure overhead quickly.',
            'Refactoring: restructure key components into services where flexibility, scale or performance justify the investment.',
            'APIs and microservices: expose core capability through clear interfaces so legacy logic can be reused by modern applications.',
            'Containerization: package workloads consistently so they run the same way across environments and scale predictably.'
          ]
        },
        {
          heading: 'Scale, Performance and Security by Design',
          text: 'Cloud-native architecture turns hard-won operational problems — capacity planning, resilience, patch management — into platform capabilities. Elastic scaling absorbs demand peaks without over-provisioning, managed services reduce maintenance burden, and security is built into identity, network and pipeline rather than bolted on later. Done in stages with measurable milestones, modernization lowers infrastructure and maintenance complexity while leaving the business free to move faster on top of a stable core.'
        }
      ],
      takeaways: [
        'Assess business criticality and technical debt before choosing a migration path.',
        'Match the approach per application — re-platform, refactor or retire.',
        'Design for scale, performance and security from the start, and modernize in stages.'
      ],
      relatedServices: [
        { title: 'Migration & Modernization', path: '/services/migration-modernization' },
        { title: 'Custom Development & Customization', path: '/services/custom-development-customization' },
        { title: 'End-to-End Solution Framework', path: '/services/end-to-end-solution-framework' }
      ]
    }
  },
]

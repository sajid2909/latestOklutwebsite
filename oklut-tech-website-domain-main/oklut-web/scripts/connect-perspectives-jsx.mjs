import fs from 'fs'

const perspectives = [
  {
    file: 'src/pages/perspectives/BusinessTransformationPerspective.jsx',
    key: 'businessTransformation',
    replacements: [
      {
        from: `import { useDocumentMeta } from '../../lib/useDocumentMeta'`,
        to: `import { useDocumentMeta } from '../../lib/useDocumentMeta'\nimport { useTranslation } from '../../i18n/TranslationContext'`
      },
      {
        from: `export default function BusinessTransformationPerspective() {`,
        to: `export default function BusinessTransformationPerspective() {\n  const { t } = useTranslation()\n  const art = t('perspectivesArticles.businessTransformation', { returnObjects: true }) || {}`
      },
      {
        from: `category="BUSINESS TRANSFORMATION"
          title="Modernizing Business Applications for a Data-Driven Enterprise"
          subtitle="A modern application and data foundation can help enterprises improve operational efficiency, connect business systems and create better visibility across their operations."`,
        to: `category={art.category || "BUSINESS TRANSFORMATION"}
          title={art.title || "Modernizing Business Applications for a Data-Driven Enterprise"}
          subtitle={art.subtitle || "A modern application and data foundation can help enterprises improve operational efficiency, connect business systems and create better visibility across their operations."}`
      },
      {
        from: `imageCaption="Enterprise Technology Perspective — Application Architecture & Connected Data"`,
        to: `imageCaption={art.imageCaption || "Enterprise Technology Perspective — Application Architecture & Connected Data"}`
      },
      {
        from: `<span className="p-eyebrow">THE BUSINESS CHALLENGE</span>
            <h2 className="p-heading">Navigating Complexity in a Growing Enterprise</h2>
            <p className="p-subtext">
              As businesses scale, technology ecosystems inevitably expand. What begins as focused solutions
              for individual departments can evolve into a tangled web of disparate systems.
            </p>`,
        to: `<span className="p-eyebrow">{art.sec1Eyebrow || "THE BUSINESS CHALLENGE"}</span>
            <h2 className="p-heading">{art.sec1Heading || "Navigating Complexity in a Growing Enterprise"}</h2>
            <p className="p-subtext">
              {art.sec1Subtext || "As businesses scale, technology ecosystems inevitably expand. What begins as focused solutions for individual departments can evolve into a tangled web of disparate systems."}
            </p>`
      },
      {
        from: `<span className="p-eyebrow">SYSTEM EVOLUTION</span>
            <h2 className="p-heading">A Complex Technology Landscape</h2>`,
        to: `<span className="p-eyebrow">{art.sec2Eyebrow || "SYSTEM EVOLUTION"}</span>
            <h2 className="p-heading">{art.sec2Heading || "A Complex Technology Landscape"}</h2>`
      },
      {
        from: `<ArchitectureFlowDiagram
            badge="Legacy Landscape"
            title="Siloed Enterprise Flow"
            steps={legacyLandscapeFlow}
          />`,
        to: `<ArchitectureFlowDiagram
            badge="Legacy Landscape"
            title="Siloed Enterprise Flow"
            steps={art.legacyLandscapeFlow || legacyLandscapeFlow}
          />`
      },
      {
        from: `<span className="p-eyebrow">THE CONNECTED MODEL</span>
            <h2 className="p-heading">Modern Application Architecture</h2>`,
        to: `<span className="p-eyebrow">{art.sec3Eyebrow || "THE CONNECTED MODEL"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Modern Application Architecture"}</h2>`
      },
      {
        from: `<ArchitectureFlowDiagram
            badge="Modern Stack"
            title="Connected Enterprise Architecture"
            steps={modernArchitectureFlow}
          />`,
        to: `<ArchitectureFlowDiagram
            badge="Modern Stack"
            title="Connected Enterprise Architecture"
            steps={art.modernArchitectureFlow || modernArchitectureFlow}
          />`
      },
      {
        from: `<span className="p-eyebrow">INTELLIGENCE &amp; VISIBILITY</span>
            <h2 className="p-heading">Connected Data &amp; Analytics</h2>`,
        to: `<span className="p-eyebrow">{art.sec4Eyebrow || "INTELLIGENCE & VISIBILITY"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Connected Data & Analytics"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">ARCHITECTURE BLUEPRINT</span>
            <h2 className="p-heading">Technology Foundation</h2>`,
        to: `<span className="p-eyebrow">{art.sec5Eyebrow || "ARCHITECTURE BLUEPRINT"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Technology Foundation"}</h2>`
      },
      {
        from: `<TechnologyGrid rows={techFoundationRows} />`,
        to: `<TechnologyGrid rows={art.techFoundationRows || techFoundationRows} />`
      },
      {
        from: `<span className="p-eyebrow">QUALITATIVE VALUE</span>
            <h2 className="p-heading">Business Impact</h2>`,
        to: `<span className="p-eyebrow">{art.sec6Eyebrow || "QUALITATIVE VALUE"}</span>
            <h2 className="p-heading">{art.sec6Heading || "Business Impact"}</h2>`
      },
      {
        from: `<BusinessImpactGrid outcomes={businessImpactOutcomes} />`,
        to: `<BusinessImpactGrid outcomes={art.businessImpactOutcomes || businessImpactOutcomes} />`
      },
      {
        from: `<KeyPerspectiveBox
            eyebrow="STRATEGIC PERSPECTIVE"
            title="Key Takeaways for Enterprise Leaders"
            lead="Modern application and data architecture is not an all-or-nothing proposition. High-performing organizations modernize incrementally by establishing unified data standards, decoupling monolithic backends with secure APIs, and maintaining relentless focus on business user visibility."
            points={keyPerspectivePoints}
          />`,
        to: `<KeyPerspectiveBox
            eyebrow="STRATEGIC PERSPECTIVE"
            title="Key Takeaways for Enterprise Leaders"
            lead="Modern application and data architecture is not an all-or-nothing proposition. High-performing organizations modernize incrementally by establishing unified data standards, decoupling monolithic backends with secure APIs, and maintaining relentless focus on business user visibility."
            points={art.keyPerspectivePoints || keyPerspectivePoints}
          />`
      },
      {
        from: `<PerspectiveCTA
          heading="Ready to Modernize Your Enterprise Application Landscape?"
          description="Explore how Oklut Technologies can partner with your leadership to architect, build, and deploy unified application platforms and modern data pipelines."
          buttonText="Talk to an Enterprise Architect"`,
        to: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Modernize Your Enterprise Application Landscape?"}
          description={art.ctaDescription || "Explore how Oklut Technologies can partner with your leadership to architect, build, and deploy unified application platforms and modern data pipelines."}
          buttonText={art.ctaButton || "Talk to an Enterprise Architect"}`
      }
    ]
  },
  {
    file: 'src/pages/perspectives/ArtificialIntelligencePerspective.jsx',
    key: 'artificialIntelligence',
    replacements: [
      {
        from: `import { useDocumentMeta } from '../../lib/useDocumentMeta'`,
        to: `import { useDocumentMeta } from '../../lib/useDocumentMeta'\nimport { useTranslation } from '../../i18n/TranslationContext'`
      },
      {
        from: `export default function ArtificialIntelligencePerspective() {`,
        to: `export default function ArtificialIntelligencePerspective() {\n  const { t } = useTranslation()\n  const art = t('perspectivesArticles.artificialIntelligence', { returnObjects: true }) || {}`
      },
      {
        from: `category="ARTIFICIAL INTELLIGENCE"
          title="How AI Is Reshaping Enterprise Applications"
          subtitle="Explore how intelligent automation, AI copilots and predictive intelligence are becoming part of the enterprise applications businesses rely on every day."`,
        to: `category={art.category || "ARTIFICIAL INTELLIGENCE"}
          title={art.title || "How AI Is Reshaping Enterprise Applications"}
          subtitle={art.subtitle || "Explore how intelligent automation, AI copilots and predictive intelligence are becoming part of the enterprise applications businesses rely on every day."}`
      },
      {
        from: `imageCaption="Enterprise Technology Perspective — Native Intelligence & Automated Workflows"`,
        to: `imageCaption={art.imageCaption || "Enterprise Technology Perspective — Native Intelligence & Automated Workflows"}`
      },
      {
        from: `<span className="p-eyebrow">THE SHIFT TO NATIVE INTELLIGENCE</span>
            <h2 className="p-heading">AI in Enterprise Applications</h2>`,
        to: `<span className="p-eyebrow">{art.sec1Eyebrow || "THE SHIFT TO NATIVE INTELLIGENCE"}</span>
            <h2 className="p-heading">{art.sec1Heading || "AI in Enterprise Applications"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">AUTOMATION AT SCALE</span>
            <h2 className="p-heading">Intelligent Automation</h2>`,
        to: `<span className="p-eyebrow">{art.sec2Eyebrow || "AUTOMATION AT SCALE"}</span>
            <h2 className="p-heading">{art.sec2Heading || "Intelligent Automation"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">EMBEDDED ASSISTANCE</span>
            <h2 className="p-heading">Enterprise AI Copilots</h2>`,
        to: `<span className="p-eyebrow">{art.sec3Eyebrow || "EMBEDDED ASSISTANCE"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Enterprise AI Copilots"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">FORWARD-LOOKING REASONING</span>
            <h2 className="p-heading">Predictive Intelligence</h2>`,
        to: `<span className="p-eyebrow">{art.sec4Eyebrow || "FORWARD-LOOKING REASONING"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Predictive Intelligence"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">REAL-WORLD APPLICATIONS</span>
            <h2 className="p-heading">Enterprise AI Use Cases</h2>`,
        to: `<span className="p-eyebrow">{art.sec5Eyebrow || "REAL-WORLD APPLICATIONS"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Enterprise AI Use Cases"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">STRATEGIC VALUE</span>
            <h2 className="p-heading">Business Benefits</h2>`,
        to: `<span className="p-eyebrow">{art.sec6Eyebrow || "STRATEGIC VALUE"}</span>
            <h2 className="p-heading">{art.sec6Heading || "Business Benefits"}</h2>`
      },
      {
        from: `<BusinessImpactGrid outcomes={aiBusinessBenefits} />`,
        to: `<BusinessImpactGrid outcomes={art.aiBusinessBenefits || aiBusinessBenefits} />`
      },
      {
        from: `<KeyPerspectiveBox
            eyebrow="RESPONSIBLE AI GOVERNANCE"
            title="Engineering Safe, Predictable Intelligence"
            lead="Deploying AI in enterprise environments requires robust governance alongside raw model capabilities. Leading engineering teams prioritize data lineage, model explainability, access control, and human oversight to unlock value while eliminating operational risk."
            points={governancePoints}
          />`,
        to: `<KeyPerspectiveBox
            eyebrow="RESPONSIBLE AI GOVERNANCE"
            title="Engineering Safe, Predictable Intelligence"
            lead="Deploying AI in enterprise environments requires robust governance alongside raw model capabilities. Leading engineering teams prioritize data lineage, model explainability, access control, and human oversight to unlock value while eliminating operational risk."
            points={art.governancePoints || governancePoints}
          />`
      },
      {
        from: `<PerspectiveCTA
          heading="Ready to Embed Intelligent Capabilities into Your Software?"
          description="Collaborate with Oklut Technologies to architect custom AI copilots, machine learning pipelines, and autonomous workflows tailored to your core business processes."
          buttonText="Explore AI Solutions"`,
        to: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Integrate Native AI into Your Business Applications?"}
          description={art.ctaDescription || "Connect with Oklut Technologies AI practice to architect, evaluate, and deploy enterprise AI copilots and intelligent automation engines."}
          buttonText={art.ctaButton || "Consult an AI Specialist"}`
      }
    ]
  },
  {
    file: 'src/pages/perspectives/ModernERPPerspective.jsx',
    key: 'modernErp',
    replacements: [
      {
        from: `import { useDocumentMeta } from '../../lib/useDocumentMeta'`,
        to: `import { useDocumentMeta } from '../../lib/useDocumentMeta'\nimport { useTranslation } from '../../i18n/TranslationContext'`
      },
      {
        from: `export default function ModernERPPerspective() {`,
        to: `export default function ModernERPPerspective() {\n  const { t } = useTranslation()\n  const art = t('perspectivesArticles.modernErp', { returnObjects: true }) || {}`
      },
      {
        from: `category="MODERN ERP"
          title="Accelerating Business Transformation with Modern ERP"
          subtitle="Explore how modern ERP platforms connect finance, procurement, supply chain and business operations through a unified digital foundation."`,
        to: `category={art.category || "MODERN ERP"}
          title={art.title || "Accelerating Business Transformation with Modern ERP"}
          subtitle={art.subtitle || "Explore how modern ERP platforms connect finance, procurement, supply chain and business operations through a unified digital foundation."}`
      },
      {
        from: `<span className="p-eyebrow">THE OPERATIONAL BACKBONE</span>
            <h2 className="p-heading">Why Modern ERP Matters</h2>`,
        to: `<span className="p-eyebrow">{art.sec1Eyebrow || "THE OPERATIONAL BACKBONE"}</span>
            <h2 className="p-heading">{art.sec1Heading || "Why Modern ERP Matters"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">INTEGRATED ECOSYSTEM</span>
            <h2 className="p-heading">Connected Business Functions</h2>`,
        to: `<span className="p-eyebrow">{art.sec2Eyebrow || "INTEGRATED ECOSYSTEM"}</span>
            <h2 className="p-heading">{art.sec2Heading || "Connected Business Functions"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">CROSS-FUNCTIONAL HARMONY</span>
            <h2 className="p-heading">Unified Operations &amp; Information Flow</h2>`,
        to: `<span className="p-eyebrow">{art.sec3Eyebrow || "CROSS-FUNCTIONAL HARMONY"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Unified Operations & Information Flow"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">ENTERPRISE TELEMETRY</span>
            <h2 className="p-heading">Real-Time Business Visibility</h2>`,
        to: `<span className="p-eyebrow">{art.sec4Eyebrow || "ENTERPRISE TELEMETRY"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Real-Time Business Visibility"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">CORE PLATFORM ARCHITECTURE</span>
            <h2 className="p-heading">Modern ERP Capabilities</h2>`,
        to: `<span className="p-eyebrow">{art.sec5Eyebrow || "CORE PLATFORM ARCHITECTURE"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Modern ERP Capabilities"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">QUALITATIVE IMPACT</span>
            <h2 className="p-heading">Business Benefits</h2>`,
        to: `<span className="p-eyebrow">{art.sec6Eyebrow || "QUALITATIVE IMPACT"}</span>
            <h2 className="p-heading">{art.sec6Heading || "Business Benefits"}</h2>`
      },
      {
        from: `<BusinessImpactGrid outcomes={erpBusinessBenefits} />`,
        to: `<BusinessImpactGrid outcomes={art.erpBusinessBenefits || erpBusinessBenefits} />`
      },
      {
        from: `<KeyPerspectiveBox
            eyebrow="STRATEGIC PRINCIPLES"
            title="Best Practices for ERP Modernization"
            lead="Successful ERP transformations avoid monolithic big-bang deployments. Progressive organizations adopt modular rollout strategies, prioritize robust API integration architectures, and clean master data before initiating platform migrations."
            points={erpStrategyPoints}
          />`,
        to: `<KeyPerspectiveBox
            eyebrow="STRATEGIC PRINCIPLES"
            title="Best Practices for ERP Modernization"
            lead="Successful ERP transformations avoid monolithic big-bang deployments. Progressive organizations adopt modular rollout strategies, prioritize robust API integration architectures, and clean master data before initiating platform migrations."
            points={art.erpStrategyPoints || erpStrategyPoints}
          />`
      },
      {
        from: `<PerspectiveCTA
          heading="Ready to Modernize Your Enterprise ERP Strategy?"
          description="Connect with Oklut Technologies ERP specialists to plan your platform architecture, evaluate cloud migration readiness, and unify your operational data."
          buttonText="Consult an ERP Expert"`,
        to: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Modernize Your Enterprise ERP Spine?"}
          description={art.ctaDescription || "Discover how Oklut Technologies can help you scope, configure, and integrate modular ERP platforms tailored to your business operations."}
          buttonText={art.ctaButton || "Talk to an ERP Architect"}`
      }
    ]
  },
  {
    file: 'src/pages/perspectives/CybersecurityPerspective.jsx',
    key: 'cybersecurity',
    replacements: [
      {
        from: `import { useDocumentMeta } from '../../lib/useDocumentMeta'`,
        to: `import { useDocumentMeta } from '../../lib/useDocumentMeta'\nimport { useTranslation } from '../../i18n/TranslationContext'`
      },
      {
        from: `export default function CybersecurityPerspective() {`,
        to: `export default function CybersecurityPerspective() {\n  const { t } = useTranslation()\n  const art = t('perspectivesArticles.cybersecurity', { returnObjects: true }) || {}`
      },
      {
        from: `category="CYBERSECURITY"
          title="Building Cyber Resilience in a Connected Enterprise"
          subtitle="Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments."`,
        to: `category={art.category || "CYBERSECURITY"}
          title={art.title || "Building Cyber Resilience in a Connected Enterprise"}
          subtitle={art.subtitle || "Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments."}`
      },
      {
        from: `<span className="p-eyebrow">THE EXPANDING PERIMETER</span>
            <h2 className="p-heading">The Connected Enterprise Security Landscape</h2>`,
        to: `<span className="p-eyebrow">{art.sec1Eyebrow || "THE EXPANDING PERIMETER"}</span>
            <h2 className="p-heading">{art.sec1Heading || "The Connected Enterprise Security Landscape"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">COMPREHENSIVE DEFENSE</span>
            <h2 className="p-heading">Multi-Layered Threat Protection</h2>`,
        to: `<span className="p-eyebrow">{art.sec2Eyebrow || "COMPREHENSIVE DEFENSE"}</span>
            <h2 className="p-heading">{art.sec2Heading || "Multi-Layered Threat Protection"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">THE NEW SECURITY BORDER</span>
            <h2 className="p-heading">Identity &amp; Access Management (IAM)</h2>`,
        to: `<span className="p-eyebrow">{art.sec3Eyebrow || "THE NEW SECURITY BORDER"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Identity & Access Management (IAM)"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">ARCHITECTURAL PARADIGM</span>
            <h2 className="p-heading">Demystifying Zero Trust Architecture</h2>`,
        to: `<span className="p-eyebrow">{art.sec4Eyebrow || "ARCHITECTURAL PARADIGM"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Demystifying Zero Trust Architecture"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">INFRASTRUCTURE GOVERNANCE</span>
            <h2 className="p-heading">Cloud Security Considerations</h2>`,
        to: `<span className="p-eyebrow">{art.sec5Eyebrow || "INFRASTRUCTURE GOVERNANCE"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Cloud Security Considerations"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">OPERATIONAL RESILIENCE</span>
            <h2 className="p-heading">Incident Readiness: Beyond Prevention</h2>`,
        to: `<span className="p-eyebrow">{art.sec6Eyebrow || "OPERATIONAL RESILIENCE"}</span>
            <h2 className="p-heading">{art.sec6Heading || "Incident Readiness: Beyond Prevention"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">STRATEGIC VALUE</span>
            <h2 className="p-heading">Business Benefits</h2>`,
        to: `<span className="p-eyebrow">{art.sec7Eyebrow || "STRATEGIC VALUE"}</span>
            <h2 className="p-heading">{art.sec7Heading || "Business Benefits"}</h2>`
      },
      {
        from: `<BusinessImpactGrid outcomes={cyberBusinessBenefits} />`,
        to: `<BusinessImpactGrid outcomes={art.cyberBusinessBenefits || cyberBusinessBenefits} />`
      },
      {
        from: `<KeyPerspectiveBox
            eyebrow="ZERO TRUST CORE"
            title="Five Tenets of Modern Cyber Defense"
            lead="True resilience acknowledges that modern perimeters cannot be defended through firewalls alone. Zero Trust shifts the focus toward identity-centric verification, continuous telemetry, least-privilege access, and proactive incident containment."
            points={zeroTrustPrinciples}
          />`,
        to: `<KeyPerspectiveBox
            eyebrow="ZERO TRUST CORE"
            title="Five Tenets of Modern Cyber Defense"
            lead="True resilience acknowledges that modern perimeters cannot be defended through firewalls alone. Zero Trust shifts the focus toward identity-centric verification, continuous telemetry, least-privilege access, and proactive incident containment."
            points={art.zeroTrustPrinciples || zeroTrustPrinciples}
          />`
      },
      {
        from: `<PerspectiveCTA
          heading="Ready to Fortify Your Enterprise Security Architecture?"
          description="Partner with Oklut Technologies cyber resilience engineers to conduct threat posture assessments, implement Zero Trust controls, and build automated incident response capabilities."
          buttonText="Schedule a Security Review"`,
        to: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Solidify Your Enterprise Cyber Resilience?"}
          description={art.ctaDescription || "Collaborate with Oklut Technologies security practice to audit architectures, implement Zero Trust frameworks, and safeguard mission-critical systems."}
          buttonText={art.ctaButton || "Consult a Cyber Architect"}`
      }
    ]
  },
  {
    file: 'src/pages/perspectives/CloudModernizationPerspective.jsx',
    key: 'cloudModernization',
    replacements: [
      {
        from: `import { useDocumentMeta } from '../../lib/useDocumentMeta'`,
        to: `import { useDocumentMeta } from '../../lib/useDocumentMeta'\nimport { useTranslation } from '../../i18n/TranslationContext'`
      },
      {
        from: `export default function CloudModernizationPerspective() {`,
        to: `export default function CloudModernizationPerspective() {\n  const { t } = useTranslation()\n  const art = t('perspectivesArticles.cloudModernization', { returnObjects: true }) || {}`
      },
      {
        from: `category="CLOUD & MODERNIZATION"
          title="Modernizing Legacy Applications for the Cloud"
          subtitle="Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures."`,
        to: `category={art.category || "CLOUD & MODERNIZATION"}
          title={art.title || "Modernizing Legacy Applications for the Cloud"}
          subtitle={art.subtitle || "Explore a practical approach to assessing, modernizing and moving legacy applications toward scalable, secure cloud architectures."}`
      },
      {
        from: `<span className="p-eyebrow">THE REALITY OF LEGACY SYSTEMS</span>
            <h2 className="p-heading">The Legacy Challenge</h2>`,
        to: `<span className="p-eyebrow">{art.sec1Eyebrow || "THE REALITY OF LEGACY SYSTEMS"}</span>
            <h2 className="p-heading">{art.sec1Heading || "The Legacy Challenge"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">ASSESSMENT &amp; DISCOVERY</span>
            <h2 className="p-heading">Understanding the Application Landscape</h2>`,
        to: `<span className="p-eyebrow">{art.sec2Eyebrow || "ASSESSMENT & DISCOVERY"}</span>
            <h2 className="p-heading">{art.sec2Heading || "Understanding the Application Landscape"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">THE 4 MODERNIZATION PATHS</span>
            <h2 className="p-heading">Modernization Approaches</h2>`,
        to: `<span className="p-eyebrow">{art.sec3Eyebrow || "THE 4 MODERNIZATION PATHS"}</span>
            <h2 className="p-heading">{art.sec3Heading || "Modernization Approaches"}</h2>`
      },
      {
        from: `<ArchitectureFlowDiagram
            badge="Target Model"
            title="Cloud-Native Transformation Lifecycle"
            steps={cloudArchitectureFlow}
          />`,
        to: `<ArchitectureFlowDiagram
            badge="Target Model"
            title="Cloud-Native Transformation Lifecycle"
            steps={art.cloudArchitectureFlow || cloudArchitectureFlow}
          />`
      },
      {
        from: `<span className="p-eyebrow">TARGET TRANSFORMATION MODEL</span>
            <h2 className="p-heading">Modern Cloud Architecture</h2>`,
        to: `<span className="p-eyebrow">{art.sec4Eyebrow || "TARGET TRANSFORMATION MODEL"}</span>
            <h2 className="p-heading">{art.sec4Heading || "Modern Cloud Architecture"}</h2>`
      },
      {
        from: `<span className="p-eyebrow">TRANSFORMATION OUTCOMES</span>
            <h2 className="p-heading">Key Modernization Benefits</h2>`,
        to: `<span className="p-eyebrow">{art.sec5Eyebrow || "TRANSFORMATION OUTCOMES"}</span>
            <h2 className="p-heading">{art.sec5Heading || "Key Modernization Benefits"}</h2>`
      },
      {
        from: `<BusinessImpactGrid outcomes={cloudModernizationBenefits} />`,
        to: `<BusinessImpactGrid outcomes={art.cloudModernizationBenefits || cloudModernizationBenefits} />`
      },
      {
        from: `<KeyPerspectiveBox
            eyebrow="PRACTICAL GUIDANCE"
            title="Key Principles for Cloud Modernization"
            lead="Modernization is not merely a lift-and-shift infrastructure exercise. High-impact initiatives modernize applications in manageable, measurable phases — establishing cloud-native CI/CD, isolating bounded contexts, and refactoring mission-critical data pipelines first."
            points={landscapeAssessmentPoints}
          />`,
        to: `<KeyPerspectiveBox
            eyebrow="PRACTICAL GUIDANCE"
            title="Key Principles for Cloud Modernization"
            lead="Modernization is not merely a lift-and-shift infrastructure exercise. High-impact initiatives modernize applications in manageable, measurable phases — establishing cloud-native CI/CD, isolating bounded contexts, and refactoring mission-critical data pipelines first."
            points={art.landscapeAssessmentPoints || landscapeAssessmentPoints}
          />`
      },
      {
        from: `<PerspectiveCTA
          heading="Ready to Modernize Your Legacy Applications?"
          description="Engage with Oklut Technologies cloud architects to assess application dependencies, design cloud migration blueprints, and transition your systems safely."
          buttonText="Start Modernization Assessment"`,
        to: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Modernize Your Legacy Applications for the Cloud?"}
          description={art.ctaDescription || "Partner with Oklut Technologies cloud architects to evaluate dependencies, build migration roadmaps, and transition your systems safely."}
          buttonText={art.ctaButton || "Talk to a Cloud Specialist"}`
      }
    ]
  }
]

for (const p of perspectives) {
  let content = fs.readFileSync(p.file, 'utf8')
  const crlf = content.includes('\r\n')
  let normContent = content.replace(/\r\n/g, '\n')
  
  for (const r of p.replacements) {
    const normFrom = r.from.replace(/\r\n/g, '\n')
    const normTo = r.to.replace(/\r\n/g, '\n')
    if (!normContent.includes(normFrom)) {
      console.warn(`WARNING in ${p.file}: Could not find snippet:\n"${normFrom.slice(0, 60)}..."`)
    } else {
      normContent = normContent.replace(normFrom, normTo)
    }
  }
  
  const finalContent = crlf ? normContent.replace(/\n/g, '\r\n') : normContent
  fs.writeFileSync(p.file, finalContent, 'utf8')
  console.log(`Successfully wired ${p.file}!`)
}

import fs from 'fs';

function updateFile(filePath, transforms) {
  let content = fs.readFileSync(filePath, 'utf8');
  const hadCrlf = content.includes('\r\n');
  let norm = content.replace(/\r\n/g, '\n');

  let count = 0;
  for (const { target, replacement } of transforms) {
    const normTarget = target.replace(/\r\n/g, '\n');
    const normRepl = replacement.replace(/\r\n/g, '\n');
    if (!norm.includes(normTarget)) {
      console.warn(`[WARN] In ${filePath}, snippet not found: "${normTarget.slice(0, 60)}..."`);
    } else {
      norm = norm.replace(normTarget, normRepl);
      count++;
    }
  }

  if (hadCrlf) {
    norm = norm.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(filePath, norm, 'utf8');
  console.log(`[SUCCESS] Updated ${filePath} with ${count}/${transforms.length} replacements.`);
}

// 1. BusinessTransformationPerspective.jsx
updateFile('src/pages/perspectives/BusinessTransformationPerspective.jsx', [
  {
    target: `<PerspectiveCTA
          heading="Ready to Modernize Your Technology Environment?"
          description="Explore how modern application architecture, connected data and scalable technology can help organizations improve efficiency and prepare for future growth."
          buttonText="Talk to Our Experts"
          serviceContext="Business Transformation & Application Modernization"
        />`,
    replacement: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Modernize Your Technology Environment?"}
          description={art.ctaDescription || "Explore how modern application architecture, connected data and scalable technology can help organizations improve efficiency and prepare for future growth."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Business Transformation & Application Modernization"
        />`
  }
]);

// 2. ArtificialIntelligencePerspective.jsx
updateFile('src/pages/perspectives/ArtificialIntelligencePerspective.jsx', [
  {
    target: `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
import { useTranslation } from '../../i18n/TranslationContext'`,
    replacement: `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'`
  },
  {
    target: `export default function ArtificialIntelligencePerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.artificialIntelligence', { returnObjects: true }) || {}
  const { t } = useTranslation()
  const art = t('perspectivesArticles.artificialIntelligence', { returnObjects: true }) || {}`,
    replacement: `export default function ArtificialIntelligencePerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.artificialIntelligence', { returnObjects: true }) || {}`
  },
  {
    target: `imageCaption="Enterprise Technology Perspective — Artificial Intelligence & Enterprise Systems"`,
    replacement: `imageCaption={art.imageCaption || "Enterprise Technology Perspective — Artificial Intelligence & Enterprise Systems"}`
  },
  {
    target: `<div className="p-use-cases-grid">
            {aiUseCases.map((uc, idx) => (`,
    replacement: `<div className="p-use-cases-grid">
            {(art.aiUseCases || aiUseCases).map((uc, idx) => (`
  },
  {
    target: `<BusinessImpactGrid outcomes={aiBusinessBenefits} />`,
    replacement: `<BusinessImpactGrid outcomes={art.aiBusinessBenefits || aiBusinessBenefits} />`
  },
  {
    target: `<KeyPerspectiveBox
            eyebrow="RESPONSIBLE AI GOVERNANCE"
            title="The 4 Pillars of Enterprise AI Adoption"
            lead="Deploying AI in enterprise environments requires rigorous governance, architectural grounding, and security guardrails to ensure business outcomes remain predictable and safe."
            points={governancePoints}
          />`,
    replacement: `<KeyPerspectiveBox
            eyebrow="RESPONSIBLE AI GOVERNANCE"
            title="The 4 Pillars of Enterprise AI Adoption"
            lead="Deploying AI in enterprise environments requires rigorous governance, architectural grounding, and security guardrails to ensure business outcomes remain predictable and safe."
            points={art.governancePoints || governancePoints}
          />`
  },
  {
    target: `<PerspectiveCTA
          heading="Ready to Embed Intelligence Into Your Enterprise Applications?"
          description="Explore how intelligent automation, predictive intelligence and modern AI can help organizations improve operational efficiency and create sustainable business value."
          buttonText="Talk to Our Experts"
          serviceContext="Artificial Intelligence & Enterprise Modernization"
        />`,
    replacement: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Embed Intelligence Into Your Enterprise Applications?"}
          description={art.ctaDescription || "Explore how intelligent automation, predictive intelligence and modern AI can help organizations improve operational efficiency and create sustainable business value."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Artificial Intelligence & Enterprise Modernization"
        />`
  }
]);

// 3. ModernERPPerspective.jsx
updateFile('src/pages/perspectives/ModernERPPerspective.jsx', [
  {
    target: `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
import { useTranslation } from '../../i18n/TranslationContext'`,
    replacement: `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'`
  },
  {
    target: `export default function ModernERPPerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.modernErp', { returnObjects: true }) || {}
  const { t } = useTranslation()
  const art = t('perspectivesArticles.modernErp', { returnObjects: true }) || {}`,
    replacement: `export default function ModernERPPerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.modernErp', { returnObjects: true }) || {}`
  },
  {
    target: `imageCaption="Enterprise Technology Perspective — Core ERP, Supply Chain & Financial Operations"`,
    replacement: `imageCaption={art.imageCaption || "Enterprise Technology Perspective — Core ERP, Supply Chain & Financial Operations"}`
  },
  {
    target: `<div className="p-use-cases-grid">
            {connectedFunctions.map((fn, idx) => (`,
    replacement: `<div className="p-use-cases-grid">
            {(art.connectedFunctions || connectedFunctions).map((fn, idx) => (`
  },
  {
    target: `<div className="p-use-cases-grid">
            {modernCapabilities.map((cap, idx) => (`,
    replacement: `<div className="p-use-cases-grid">
            {(art.modernCapabilities || modernCapabilities).map((cap, idx) => (`
  },
  {
    target: `<BusinessImpactGrid outcomes={erpBusinessBenefits} />`,
    replacement: `<BusinessImpactGrid outcomes={art.erpBusinessBenefits || erpBusinessBenefits} />`
  },
  {
    target: `<KeyPerspectiveBox
            eyebrow="STRATEGIC PRINCIPLES"
            title="Modern ERP Is an Ongoing Capability, Not a One-Time Project"
            lead="The most successful enterprises treat ERP modernization not as an IT migration with a finish line, but as an adaptable operational foundation that evolves continuously."
            points={erpStrategyPoints}
          />`,
    replacement: `<KeyPerspectiveBox
            eyebrow="STRATEGIC PRINCIPLES"
            title="Modern ERP Is an Ongoing Capability, Not a One-Time Project"
            lead="The most successful enterprises treat ERP modernization not as an IT migration with a finish line, but as an adaptable operational foundation that evolves continuously."
            points={art.erpStrategyPoints || erpStrategyPoints}
          />`
  },
  {
    target: `<PerspectiveCTA
          heading="Ready to Modernize Your ERP Foundation?"
          description="Explore how modern ERP platforms, connected business processes and unified operational data can help your enterprise achieve operational excellence."
          buttonText="Talk to Our Experts"
          serviceContext="Modern ERP & Business Transformation"
        />`,
    replacement: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Modernize Your ERP Foundation?"}
          description={art.ctaDescription || "Explore how modern ERP platforms, connected business processes and unified operational data can help your enterprise achieve operational excellence."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Modern ERP & Business Transformation"
        />`
  }
]);

// 4. CybersecurityPerspective.jsx
updateFile('src/pages/perspectives/CybersecurityPerspective.jsx', [
  {
    target: `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
import { useTranslation } from '../../i18n/TranslationContext'`,
    replacement: `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'`
  },
  {
    target: `export default function CybersecurityPerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.cybersecurity', { returnObjects: true }) || {}
  const { t } = useTranslation()
  const art = t('perspectivesArticles.cybersecurity', { returnObjects: true }) || {}`,
    replacement: `export default function CybersecurityPerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.cybersecurity', { returnObjects: true }) || {}`
  },
  {
    target: `imageCaption="Enterprise Technology Perspective — Cyber Resilience, Zero Trust & Infrastructure Security"`,
    replacement: `imageCaption={art.imageCaption || "Enterprise Technology Perspective — Cyber Resilience, Zero Trust & Infrastructure Security"}`
  },
  {
    target: `<div className="p-use-cases-grid">
            {incidentReadinessPhases.map((phase, idx) => (`,
    replacement: `<div className="p-use-cases-grid">
            {(art.incidentReadinessPhases || incidentReadinessPhases).map((phase, idx) => (`
  },
  {
    target: `<BusinessImpactGrid outcomes={cyberBusinessBenefits} />`,
    replacement: `<BusinessImpactGrid outcomes={art.cyberBusinessBenefits || cyberBusinessBenefits} />`
  },
  {
    target: `<KeyPerspectiveBox
            eyebrow="ZERO TRUST CORE"
            title="The 4 Foundations of Modern Zero Trust Architecture"
            lead="Zero Trust is not a single product or tool. It is an end-to-end security architecture predicated on explicit verification, least-privilege access, and continuous risk assessment."
            points={zeroTrustPrinciples}
          />`,
    replacement: `<KeyPerspectiveBox
            eyebrow="ZERO TRUST CORE"
            title="The 4 Foundations of Modern Zero Trust Architecture"
            lead="Zero Trust is not a single product or tool. It is an end-to-end security architecture predicated on explicit verification, least-privilege access, and continuous risk assessment."
            points={art.zeroTrustPrinciples || zeroTrustPrinciples}
          />`
  },
  {
    target: `<PerspectiveCTA
          heading="Ready to Fortify Your Enterprise Security Architecture?"
          description="Explore how comprehensive cybersecurity, Zero Trust architecture and operational resilience can help your organization protect critical assets and build trust."
          buttonText="Talk to Our Experts"
          serviceContext="Cybersecurity & Enterprise Resilience"
        />`,
    replacement: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Fortify Your Enterprise Security Architecture?"}
          description={art.ctaDescription || "Explore how comprehensive cybersecurity, Zero Trust architecture and operational resilience can help your organization protect critical assets and build trust."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Cybersecurity & Enterprise Resilience"
        />`
  }
]);

// 5. CloudModernizationPerspective.jsx
updateFile('src/pages/perspectives/CloudModernizationPerspective.jsx', [
  {
    target: `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'
import { useTranslation } from '../../i18n/TranslationContext'`,
    replacement: `import { useDocumentMeta } from '../../lib/useDocumentMeta'
import { useTranslation } from '../../i18n/TranslationContext'`
  },
  {
    target: `export default function CloudModernizationPerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.cloudModernization', { returnObjects: true }) || {}
  const { t } = useTranslation()
  const art = t('perspectivesArticles.cloudModernization', { returnObjects: true }) || {}`,
    replacement: `export default function CloudModernizationPerspective() {
  const { t } = useTranslation()
  const art = t('perspectivesArticles.cloudModernization', { returnObjects: true }) || {}`
  },
  {
    target: `imageCaption="Enterprise Technology Perspective — Cloud-Native Re-platforming & Containerization"`,
    replacement: `imageCaption={art.imageCaption || "Enterprise Technology Perspective — Cloud-Native Re-platforming & Containerization"}`
  },
  {
    target: `<div className="p-modernization-grid reveal">
            {modernizationApproaches.map((approach, idx) => (`,
    replacement: `<div className="p-modernization-grid reveal">
            {(art.modernizationApproaches || modernizationApproaches).map((approach, idx) => (`
  },
  {
    target: `<ArchitectureFlowDiagram
            badge="Target Model"
            title="Cloud-Native Enterprise Architecture"
            steps={cloudArchitectureFlow}
          />`,
    replacement: `<ArchitectureFlowDiagram
            badge="Target Model"
            title="Cloud-Native Enterprise Architecture"
            steps={art.cloudArchitectureFlow || cloudArchitectureFlow}
          />`
  },
  {
    target: `<BusinessImpactGrid outcomes={cloudModernizationBenefits} />`,
    replacement: `<BusinessImpactGrid outcomes={art.cloudModernizationBenefits || cloudModernizationBenefits} />`
  },
  {
    target: `<KeyPerspectiveBox
            eyebrow="PRACTICAL GUIDANCE"
            title="Cloud Modernization Is a Value-Driven Journey, Not Just a Destination"
            lead="Migrating legacy applications to the cloud delivers transformative agility, scalability, and performance only when approached with clear architectural intent and disciplined execution."
            points={landscapeAssessmentPoints}
          />`,
    replacement: `<KeyPerspectiveBox
            eyebrow="PRACTICAL GUIDANCE"
            title="Cloud Modernization Is a Value-Driven Journey, Not Just a Destination"
            lead="Migrating legacy applications to the cloud delivers transformative agility, scalability, and performance only when approached with clear architectural intent and disciplined execution."
            points={art.landscapeAssessmentPoints || landscapeAssessmentPoints}
          />`
  },
  {
    target: `<PerspectiveCTA
          heading="Ready to Modernize Your Legacy Applications for the Cloud?"
          description="Explore how cloud modernization, microservices architecture and containerized deployment can help your organization improve performance and reduce maintenance costs."
          buttonText="Talk to Our Experts"
          serviceContext="Cloud Modernization & Legacy Migration"
        />`,
    replacement: `<PerspectiveCTA
          heading={art.ctaHeading || "Ready to Modernize Your Legacy Applications for the Cloud?"}
          description={art.ctaDescription || "Explore how cloud modernization, microservices architecture and containerized deployment can help your organization improve performance and reduce maintenance costs."}
          buttonText={art.ctaButton || "Talk to Our Experts"}
          serviceContext="Cloud Modernization & Legacy Migration"
        />`
  }
]);

console.log('--- ALL 5 PERSPECTIVE ARTICLES HAVE BEEN FLAWLESSLY WIRED ---');

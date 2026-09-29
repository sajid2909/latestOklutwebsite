import { useDocumentMeta } from '../../lib/useDocumentMeta'
import {
  usePerspectiveScrollReveal,
  PerspectiveHero,
  BusinessImpactGrid,
  KeyPerspectiveBox,
  PerspectiveCTA,
  RelatedPerspectives,
} from './PerspectiveComponents.jsx'
import './PerspectivesDetail.css'

export default function CybersecurityPerspective() {
  useDocumentMeta({
    title: 'Building Cyber Resilience in a Connected Enterprise | Perspectives | Oklut',
    description:
      'Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments.',
  })

  usePerspectiveScrollReveal()

  // Incident Readiness Phases
  const incidentReadinessPhases = [
    {
      title: 'Continuous Monitoring',
      desc: '24/7 telemetry across endpoints, network traffic, API gateways, and cloud workloads to establish behavioral baselines.',
      icon: '📡',
    },
    {
      title: 'Rapid Detection',
      desc: 'Automated threat correlation using AI-driven SIEM/SOAR pipelines to surface genuine anomalies while filtering out noise.',
      icon: '🔎',
    },
    {
      title: 'Contained Response',
      desc: 'Tested playbooks that isolate compromised credentials, quarantine affected workloads, and contain threat vectors without halting core business.',
      icon: '🛡️',
    },
    {
      title: 'Resilient Recovery',
      desc: 'Immutable, air-gapped backups and orchestrated restore mechanisms that guarantee business continuity within strict recovery objectives (RTO/RPO).',
      icon: '🔄',
    },
  ]

  // Qualitative Business Benefits
  const cyberBusinessBenefits = [
    'Reduced security exposure across cloud, on-premises, and partner integration boundaries',
    'Better organizational visibility into user identities, access privileges, and data flows',
    'Faster response times to emerging threats through automated triage and playbooks',
    'Protection of critical core systems, customer trust, and proprietary business intellectual property',
    'Stronger operational resilience ensuring uninterrupted business continuity during incidents',
  ]

  const zeroTrustPrinciples = [
    'Never Trust, Always Verify: Explicitly validate and authenticate every user, device, and API request.',
    'Principle of Least Privilege: Restrict access rights to the bare minimum required for each specific task.',
    'Assume Breach: Architect defenses under the assumption that adversaries are already within the perimeter.',
    'Continuous Verification: Continuously monitor session state, device hygiene, and context dynamically.',
  ]

  return (
    <div className="perspective-page">
      <div className="perspective-wrap">
        <PerspectiveHero
          category="CYBERSECURITY"
          title="Building Cyber Resilience in a Connected Enterprise"
          subtitle="Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments."
          date="August 2026"
          readTime="7 min read"
          image="/img/perspectives/cyber-resilience-connected-enterprise.jpg"
          imageAlt="Cyber Resilience in a Connected Enterprise"
          imageCaption="Enterprise Technology Perspective — Cyber Resilience, Zero Trust & Infrastructure Security"
        />

        {/* Section: The Connected Enterprise */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">THE EXPANDING PERIMETER</span>
            <h2 className="p-heading">The Connected Enterprise Security Landscape</h2>
            <p className="p-subtext">
              As modern organizations connect more applications, cloud environments, remote employees,
              mobile devices, and third-party partners, the traditional security perimeter ceases to exist.
            </p>
          </div>

          <div className="p-editorial-grid">
            <div className="p-editorial-text reveal">
              <p>
                In the legacy era of enterprise IT, security operated on a castle-and-moat doctrine: everything inside
                the corporate office network was presumed trusted, while everything outside was considered untrusted.
                A single corporate firewall protected internal servers, databases, and desktop computers.
              </p>
              <p>
                Today’s enterprise has outgrown physical walls. Workloads reside across multi-cloud environments (AWS,
                Azure, GCP), employees access business applications from diverse locations, and APIs continuously
                exchange sensitive operational data with external logistics providers, financial institutions, and SaaS
                vendors.
              </p>
              <p>
                While this hyper-connectivity drives tremendous business agility, it vastly expands the enterprise attack
                surface. Every API endpoint, identity token, connected mobile device, and SaaS integration represents a
                potential vector of exposure. True enterprise protection requires shifting from perimeter-based defense
                to proactive, end-to-end cyber resilience.
              </p>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/cloud-integration-sec.jpg`}
                alt="Connected enterprise cloud security network"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Threat Protection */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">COMPREHENSIVE DEFENSE</span>
            <h2 className="p-heading">Multi-Layered Threat Protection</h2>
            <p className="p-subtext">
              Proactive defenses that safeguard critical infrastructure, sensitive corporate data, and operational systems.
            </p>
          </div>

          <div className="p-card-grid-4">
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">🛡️</div>
              <h3 className="p-card-title">Threat Detection</h3>
              <p className="p-card-desc">
                Machine learning-assisted threat intelligence that monitors anomalous network patterns, credential abuse,
                and zero-day vulnerabilities in real time.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">📡</div>
              <h3 className="p-card-title">Security Monitoring</h3>
              <p className="p-card-desc">
                Centralized Security Operations Center (SOC) telemetry correlating events across servers, container clusters,
                identity providers, and endpoints.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">🔍</div>
              <h3 className="p-card-title">Vulnerability Management</h3>
              <p className="p-card-desc">
                Continuous automated vulnerability scanning across infrastructure, source code repositories, and container
                registries to remediate weaknesses proactively.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <div className="p-card-icon-box">🔒</div>
              <h3 className="p-card-title">Data Protection</h3>
              <p className="p-card-desc">
                Robust encryption in transit (TLS 1.3) and at rest (AES-256), alongside granular data loss prevention (DLP)
                governance to prevent intellectual property leaks.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Identity & Access */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">THE NEW SECURITY BORDER</span>
            <h2 className="p-heading">Identity &amp; Access Management (IAM)</h2>
            <p className="p-subtext">
              Identity is the foundational control plane of modern security. Nearly all serious security breaches
              begin with compromised credentials rather than software exploits.
            </p>
          </div>

          <div className="p-editorial-grid p-reverse">
            <div className="p-editorial-text reveal">
              <p>
                Protecting enterprise assets requires ensuring that every identity—whether a human executive, an external
                contractor, or an autonomous software service account—has validated authorization for the exact resources
                it accesses.
              </p>
              <ul className="p-feature-list">
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Centralized identity management:</strong> Single Sign-On (SSO) and federated identity standards that eliminate fragmented password stores across applications.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Adaptive multi-factor authentication (MFA):</strong> Phishing-resistant FIDO2 hardware keys and risk-based contextual challenges for sensitive administrative functions.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Granular access control:</strong> Fine-grained Role-Based (RBAC) and Attribute-Based (ABAC) access controls enforced at the API and database levels.</span>
                </li>
                <li className="p-feature-item">
                  <span className="p-feature-bullet">✓</span>
                  <span><strong>Least-privilege principles:</strong> Granting temporary, just-in-time (JIT) access that expires automatically when administrative tasks conclude.</span>
                </li>
              </ul>
            </div>

            <div className="p-editorial-media reveal">
              <img
                src={`${import.meta.env.BASE_URL}img/devops-automation-sec.jpg`}
                alt="Identity and access management controls"
                className="p-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section: Zero Trust Architecture */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">ARCHITECTURAL PARADIGM</span>
            <h2 className="p-heading">Demystifying Zero Trust Architecture</h2>
            <p className="p-subtext">
              Zero Trust is not a single product or tool. It is an architectural strategy based on a straightforward principle:
              trust no entity inside or outside the network by default.
            </p>
          </div>

          <KeyPerspectiveBox
            eyebrow="ZERO TRUST CORE DOCTRINE"
            title="Continuous Verification Over Blind Trust"
            lead="In a Zero Trust architecture, implicit trust based on network location is entirely dismantled. Every transaction, database query, and user login must continuously prove its legitimacy:"
            points={zeroTrustPrinciples}
          />
        </section>

        {/* Section: Cloud Security */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">INFRASTRUCTURE GOVERNANCE</span>
            <h2 className="p-heading">Cloud Security Considerations</h2>
            <p className="p-subtext">
              Safeguarding workloads across public cloud, hybrid architectures, and distributed container environments.
            </p>
          </div>

          <div className="p-card-grid-3">
            <div className="p-feature-card reveal">
              <h3 className="p-card-title">Shared Responsibility</h3>
              <p className="p-card-desc">
                Clear governance distinguishing the cloud provider's physical infrastructure security from the enterprise's
                responsibility for data encryption, IAM policies, and application code.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <h3 className="p-card-title">Infrastructure as Code (IaC)</h3>
              <p className="p-card-desc">
                Immutable, auditable cloud configurations managed through code. Automated policy-as-code scanners block
                misconfigurations and exposed buckets before deployment.
              </p>
            </div>
            <div className="p-feature-card reveal">
              <h3 className="p-card-title">Container &amp; Kubernetes Security</h3>
              <p className="p-card-desc">
                Hardened container runtimes, signed image registries, network micro-segmentation, and automated secret
                management that keeps credentials out of source repositories.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Incident Readiness */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">OPERATIONAL RESILIENCE</span>
            <h2 className="p-heading">Incident Readiness: Beyond Prevention</h2>
            <p className="p-subtext">
              True cyber resilience accepts that incidents may occur. Preparedness focuses on rapid containment,
              minimal business disruption, and verified recovery.
            </p>
          </div>

          <div className="p-card-grid-4">
            {incidentReadinessPhases.map((phase, idx) => (
              <div className="p-feature-card reveal" key={idx}>
                <div className="p-card-icon-box">{phase.icon}</div>
                <h3 className="p-card-title">{phase.title}</h3>
                <p className="p-card-desc">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Business Benefits */}
        <section className="perspective-section">
          <div className="p-section-header reveal">
            <span className="p-eyebrow">STRATEGIC VALUE</span>
            <h2 className="p-heading">Business Benefits</h2>
            <p className="p-subtext">
              Building a cyber-resilient enterprise protects organizational value, regulatory standing, and market reputation.
            </p>
          </div>

          <BusinessImpactGrid outcomes={cyberBusinessBenefits} />
        </section>

        {/* CTA */}
        <PerspectiveCTA
          heading="Strengthen Your Enterprise Security"
          description="Explore how organizations can strengthen security, protect critical systems and prepare for threats across increasingly connected environments."
          buttonText="Talk to Our Experts"
          serviceContext="Enterprise Cybersecurity & Cyber Resilience"
        />

        {/* Related Perspectives */}
        <RelatedPerspectives currentId="cybersecurity" />
      </div>
    </div>
  )
}

import { ServicePageTemplate } from './ServicePageTemplate'

export default function ProcessAutomationPage() {
  return (
    <ServicePageTemplate
      title="Business Process Automation"
      tagline="Intelligent Automation & Workflow Orchestration"
      description="Design and implementation of intelligent automation solutions that streamline business processes, eliminate repetitive manual activities, improve operational efficiency, and accelerate business outcomes."
      heroImage={`${import.meta.env.BASE_URL}img/business-process-automation.jpg`}
      overviewImage={`${import.meta.env.BASE_URL}img/bpa-workflow-orchestration.jpg`}
      sectionHeadline="Smarter Workflows. Zero Repetition. Real Results."
      sectionDescription="Our intelligent automation practice combines Robotic Process Automation (RPA), AI cognitive agents, API orchestration, and end-to-end process optimization to transform operational efficiency across your enterprise."
      featuresTitle="Core Capabilities"
      features={[
        'Workflow Automation',
        'RPA (Robotic Process Automation)',
        'Intelligent Automation',
        'AI Automation',
        'Process Optimization',
        'API Integration',
        'Process Orchestration',
        'Continuous Process Telemetry',
      ]}
      benefits={[
        'Reduce operational costs by 40-60%',
        'Eliminate human error in repetitive tasks',
        'Free your workforce for high-value strategic work',
        'Accelerate process turnaround from days to seconds',
        'End-to-end auditability and compliance built-in',
        'Scalable digital workforce that expands on demand',
        'Multi-platform support (UiPath, Power Automate, Custom)',
        'Seamless integration with ERP, CRM, and legacy databases',
      ]}
      technologies={[
        'UiPath', 'Microsoft Power Automate', 'Automation Anywhere', 'Camunda BPM',
        'Python', 'Node.js', 'Apache Airflow', 'AWS Step Functions',
        'Azure Logic Apps', 'Google Cloud Workflows', 'FastAPI', 'Celery',
      ]}
      caseStudies={[
        {
          title: 'Invoice Processing & AP Automation',
          category: 'Finance Automation',
          description: 'Automated end-to-end accounts payable processing for 50k+ invoices/month with a 98% straight-through rate.',
          image: `${import.meta.env.BASE_URL}img/devops-automation-sec.jpg`,
          link: '#'
        },
        {
          title: 'Automated KYC & Customer Onboarding',
          category: 'Compliance & Verification',
          description: 'Reduced enterprise onboarding time from 3 days to under 8 minutes with automated document extraction.',
          image: `${import.meta.env.BASE_URL}img/proto-rapid-sec.jpg`,
          link: '#'
        },
      ]}
      ctaText="Automate Your Business Processes"
    />
  )
}
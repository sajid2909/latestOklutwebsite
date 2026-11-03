import fs from 'fs'

const files = [
  { file: 'CustomDevelopmentPage.jsx', key: 'customDevelopment' },
  { file: 'ProcessAutomationPage.jsx', key: 'processAutomation' },
  { file: 'CentreOfExcellencePage.jsx', key: 'centreOfExcellence' },
  { file: 'SolutionEngineeringPage.jsx', key: 'solutionEngineering' },
  { file: 'DigitalTransformationPage.jsx', key: 'digitalTransformation' },
  { file: 'EndToEndSolutionsPage.jsx', key: 'endToEndSolutions' },
  { file: 'MigrationServicesPage.jsx', key: 'migrationServices' },
  { file: 'PilotPrototypingPage.jsx', key: 'pilotPrototyping' },
  { file: 'SharedServicesPage.jsx', key: 'sharedServices' }
]

const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'))

for (const { file, key } of files) {
  const content = fs.readFileSync('src/pages/' + file, 'utf8')
  const details = en.servicesDetails[key]
  console.log(`\n=== ${file} (${key}) ===`)
  console.log(`Details present: ${Boolean(details)} (keys: ${details ? Object.keys(details).length : 0})`)
  
  // Check if file contains key phrases from details
  if (details) {
    const checks = [
      ['row1Title', details.row1Title],
      ['row2Title', details.row2Title],
      ['row3Title', details.row3Title],
      ['row4Title', details.row4Title],
      ['pillar1Title', details.pillar1Title],
      ['ctaTitle', details.ctaTitle]
    ]
    for (const [prop, val] of checks) {
      const match = val && content.includes(val)
      console.log(`  ${prop}: ${match ? 'FOUND exact in JSX' : 'Not exact (or already t)'}`)
    }
  }
}

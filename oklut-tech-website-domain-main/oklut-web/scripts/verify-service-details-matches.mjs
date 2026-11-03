import fs from 'fs'

const serviceConfigs = [
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

for (const { file, key } of serviceConfigs) {
  const content = fs.readFileSync('src/pages/' + file, 'utf8')
  const details = en.servicesDetails[key] || {}
  console.log(`\n=== Checking ${file} (${key}) ===`)
  
  let matchCount = 0
  let missCount = 0
  for (const [k, v] of Object.entries(details)) {
    if (typeof v === 'string') {
      const cleanV = v.replace(/&amp;/g, '&')
      if (content.includes(v) || content.includes(cleanV)) {
        matchCount++
      } else {
        missCount++
        console.log(`  MISS [${k}]: "${v.slice(0, 50)}..."`)
      }
    }
  }
  console.log(`Result: ${matchCount} matches, ${missCount} misses.`)
}

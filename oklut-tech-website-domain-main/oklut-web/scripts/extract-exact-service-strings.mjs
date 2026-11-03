import fs from 'fs'

const serviceConfigs = [
  { file: 'CustomDevelopmentPage.jsx', key: 'customDevelopment', prefix: 'cd' },
  { file: 'ProcessAutomationPage.jsx', key: 'processAutomation', prefix: 'bpa' },
  { file: 'CentreOfExcellencePage.jsx', key: 'centreOfExcellence', prefix: 'coe' },
  { file: 'SolutionEngineeringPage.jsx', key: 'solutionEngineering', prefix: 'dt' },
  { file: 'DigitalTransformationPage.jsx', key: 'digitalTransformation', prefix: 'dt' },
  { file: 'EndToEndSolutionsPage.jsx', key: 'endToEndSolutions', prefix: 'e2e' },
  { file: 'MigrationServicesPage.jsx', key: 'migrationServices', prefix: 'mig' },
  { file: 'PilotPrototypingPage.jsx', key: 'pilotPrototyping', prefix: 'proto' },
  { file: 'SharedServicesPage.jsx', key: 'sharedServices', prefix: 'ss' }
]

const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'))

for (const { file, key } of serviceConfigs) {
  const content = fs.readFileSync('src/pages/' + file, 'utf8')
  console.log(`\n================ Processing ${file} (${key}) ================`)
  
  // Find all <div className="*-eyebrow"> or <span className="*-eyebrow">
  const eyebrowMatches = Array.from(content.matchAll(/class(?:Name)?=["'][a-z0-9-]+-eyebrow["'][^>]*>([\s\S]*?)<\/(?:div|span)>/g)).map(m => m[1].replace(/<[^>]+>/g, '').trim())
  console.log('Eyebrows:', eyebrowMatches)

  // Find all <h2>
  const h2Matches = Array.from(content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)).map(m => m[1].replace(/<[^>]+>/g, '').trim())
  console.log('H2s:', h2Matches)

  // Find all <h3>
  const h3Matches = Array.from(content.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)).map(m => m[1].replace(/<[^>]+>/g, '').trim())
  console.log('H3s:', h3Matches)
}

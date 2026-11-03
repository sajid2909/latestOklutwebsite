import fs from 'fs'

const files = [
  'CustomDevelopmentPage.jsx',
  'ProcessAutomationPage.jsx',
  'CentreOfExcellencePage.jsx',
  'SolutionEngineeringPage.jsx',
  'DigitalTransformationPage.jsx',
  'EndToEndSolutionsPage.jsx',
  'MigrationServicesPage.jsx',
  'PilotPrototypingPage.jsx',
  'SharedServicesPage.jsx'
]

for (const file of files) {
  const content = fs.readFileSync('src/pages/' + file, 'utf8')
  console.log(`\n=================== ${file} ===================`)
  const h2s = (content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || []).map(h => h.replace(/<[^>]+>/g, '').trim())
  console.log('H2s:', h2s)
  const eyebrows = (content.match(/class(Name)?=\"[a-z0-9-]+-eyebrow\"[^>]*>([\s\S]*?)<\//g) || []).map(e => e.replace(/class(Name)?=\"[a-z0-9-]+-eyebrow\"[^>]*>/, '').replace(/<\//, '').trim())
  console.log('Eyebrows:', eyebrows)
}

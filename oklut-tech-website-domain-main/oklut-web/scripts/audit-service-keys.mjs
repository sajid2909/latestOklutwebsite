import fs from 'fs';

const en = JSON.parse(fs.readFileSync('src/i18n/locales/en/translation.json', 'utf8'));

function getNested(obj, path) {
  return path.split('.').reduce((prev, curr) => prev && prev[curr] !== undefined ? prev[curr] : undefined, obj);
}

const servicePages = [
  'CustomDevelopmentPage.jsx',
  'ProcessAutomationPage.jsx',
  'CentreOfExcellencePage.jsx',
  'SolutionEngineeringPage.jsx',
  'DigitalTransformationPage.jsx',
  'EndToEndSolutionsPage.jsx',
  'MigrationServicesPage.jsx',
  'PilotPrototypingPage.jsx',
  'SharedServicesPage.jsx'
];

for (const p of servicePages) {
  const content = fs.readFileSync('src/pages/' + p, 'utf8');
  const matches = [...content.matchAll(/t\(['"]([^'"]+)['"]/g)].map(m => m[1]);
  console.log(`=== ${p} (${matches.length} t calls) ===`);
  const missing = [];
  for (const key of matches) {
    const val = getNested(en, key);
    if (val === undefined) {
      missing.push(key);
    }
  }
  if (missing.length) {
    console.log(`  MISSING IN en/translation.json (${missing.length}):`, [...new Set(missing)]);
  } else {
    console.log(`  All ${matches.length} keys exist in en/translation.json!`);
  }
}

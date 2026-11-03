import fs from 'fs'

function replaceInFile(filePath, search, replace) {
  let c = fs.readFileSync(filePath, 'utf8')
  if (c.includes(search)) {
    c = c.replace(search, replace)
    fs.writeFileSync(filePath, c, 'utf8')
    console.log(`Replaced in ${filePath}`)
    return true
  } else {
    console.warn(`NOT FOUND in ${filePath}: "${search}"`)
    return false
  }
}

// 1. BusinessTransformationPerspective.jsx
replaceInFile(
  'src/pages/perspectives/BusinessTransformationPerspective.jsx',
  'steps={legacyLandscapeFlow}',
  'steps={art.legacyLandscapeFlow || legacyLandscapeFlow}'
)
replaceInFile(
  'src/pages/perspectives/BusinessTransformationPerspective.jsx',
  'steps={modernArchitectureFlow}',
  'steps={art.modernArchitectureFlow || modernArchitectureFlow}'
)
replaceInFile(
  'src/pages/perspectives/BusinessTransformationPerspective.jsx',
  'points={keyPerspectivePoints}',
  'points={art.keyPerspectivePoints || keyPerspectivePoints}'
)

// 2. ArtificialIntelligencePerspective.jsx
replaceInFile(
  'src/pages/perspectives/ArtificialIntelligencePerspective.jsx',
  'points={governancePoints}',
  'points={art.governancePoints || governancePoints}'
)
replaceInFile(
  'src/pages/perspectives/ArtificialIntelligencePerspective.jsx',
  '{aiUseCases.map((uc, idx) => (',
  '{(art.aiUseCases || aiUseCases).map((uc, idx) => ('
)

// 3. ModernERPPerspective.jsx
replaceInFile(
  'src/pages/perspectives/ModernERPPerspective.jsx',
  'points={erpStrategyPoints}',
  'points={art.erpStrategyPoints || erpStrategyPoints}'
)
replaceInFile(
  'src/pages/perspectives/ModernERPPerspective.jsx',
  '{connectedFunctions.map((fn, idx) => (',
  '{(art.connectedFunctions || connectedFunctions).map((fn, idx) => ('
)
replaceInFile(
  'src/pages/perspectives/ModernERPPerspective.jsx',
  '{modernCapabilities.map((cap, idx) => (',
  '{(art.modernCapabilities || modernCapabilities).map((cap, idx) => ('
)

// 4. CybersecurityPerspective.jsx
replaceInFile(
  'src/pages/perspectives/CybersecurityPerspective.jsx',
  'points={zeroTrustPrinciples}',
  'points={art.zeroTrustPrinciples || zeroTrustPrinciples}'
)
replaceInFile(
  'src/pages/perspectives/CybersecurityPerspective.jsx',
  '{incidentReadinessPhases.map((phase, idx) => (',
  '{(art.incidentReadinessPhases || incidentReadinessPhases).map((phase, idx) => ('
)

// 5. CloudModernizationPerspective.jsx
replaceInFile(
  'src/pages/perspectives/CloudModernizationPerspective.jsx',
  'points={landscapeAssessmentPoints}',
  'points={art.landscapeAssessmentPoints || landscapeAssessmentPoints}'
)
replaceInFile(
  'src/pages/perspectives/CloudModernizationPerspective.jsx',
  'steps={cloudArchitectureFlow}',
  'steps={art.cloudArchitectureFlow || cloudArchitectureFlow}'
)
replaceInFile(
  'src/pages/perspectives/CloudModernizationPerspective.jsx',
  '{modernizationApproaches.map((app, idx) => (',
  '{(art.modernizationApproaches || modernizationApproaches).map((app, idx) => ('
)

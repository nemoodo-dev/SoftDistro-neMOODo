const { getDistroByMood } = require('./utils');

console.log("🌊 SoftDistro : neMOODo Engine Starting...\n");

// Example: User wants a "Development" vibe
const myMood = "development"; 
const distro = getDistroByMood(myMood);

console.log(`[VIBE CHECK]: ${distro.vibe}`);
console.log(`📦 Suggested Apps: ${distro.recommendations.join(", ")}`);
console.log(`\n✅ ${distro.status}`);

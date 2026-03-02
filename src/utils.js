/**
 * 🌊 SoftDistro : neMOODo - Distribution Logic
 * High-end software categorizer based on workflow vibes.
 */

const softwareStacks = {
    creative: ["Photoshop", "Figma", "After Effects", "Blender"],
    development: ["VS Code", "Docker", "Postman", "GitKraken"],
    minimalist: ["Notion", "Spotify", "Terminal", "Brave Browser"],
    gaming: ["Steam", "Discord", "OBS Studio", "Razer Synapse"]
};

const getDistroByMood = (mood) => {
    const selected = softwareStacks[mood.toLowerCase()];
    if (!selected) {
        return "⚠️ Mood not found! Try: creative, development, minimalist, or gaming.";
    }
    return {
        vibe: mood.toUpperCase(),
        recommendations: selected,
        totalApps: selected.length,
        status: "Ready for Distro 🚀"
    };
};

module.exports = { getDistroByMood };

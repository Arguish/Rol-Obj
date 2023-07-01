const npcGenerator = {
  socialPosition: [
    "Lives outside society",
    "Working class",
    "Merchant class",
    "Upper class",
    "Rank within a faction",
    "Specialist or unique role",
  ],
  notableFeature: [
    "Unremarkable",
    "Unremarkable",
    "Obvious physical trait",
    "Quirk or mannerism",
    "Unusual equipment",
    "Unexpected age or origin",
  ],
  attitude: [
    "Withdrawn",
    "Cautious",
    "Neutral",
    "Neutral",
    "Sociable",
    "Helpful",
  ],
  conversationFocus: {
    2: "Current Need",
    9: "Rumors",
    3: "Allies",
    T: "A Plot Arc",
    4: "Community",
    J: "Recent Events",
    5: "History",
    Q: "Equipment",
    6: "Future Plans",
    K: "A Faction",
    7: "Enemies",
    A: "The PC(s)",
    8: "Knowledge",
  },
  suits: {
    C: "descriptive, obvious",
    D: "knowing, logical",
    S: "mysterious, speculative",
    H: "scheming, inquisitive",
  },
};
const plotHookGenerator = {
  objective: [
    "Eliminate a threat",
    "Learn the truth",
    "Recover something valuable",
    "Escort or deliver to safety",
    "Restore something broken",
    "Save an ally in peril",
  ],
  plotFocus: {
    2: "Ancient",
    9: "Mysterious",
    3: "Advanced",
    T: "Natural",
    4: "Creepy",
    J: "Powerful",
    5: "Dirty",
    Q: "Extravagant",
    6: "Exotic",
    K: "Epic",
    7: "Military",
    A: "Weird",
    8: "Simple",
  },
  adversaries: [
    "A powerful organization",
    "Outlaws",
    "Guardians",
    "Local inhabitants",
    "Enemy horde or army",
    "A new or recurring villain",
  ],
  rewards: [
    "Money or valuables",
    "Money or valuables",
    "Knowledge and secrets",
    "Support of an ally",
    "Advance a plot arc",
    "A unique item of power",
  ],
};
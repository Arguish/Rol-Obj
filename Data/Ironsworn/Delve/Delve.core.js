const reglasDelveDepths = {
  descripcion:
    "When you traverse an area within a perilous site, envision your surroundings (Ask the Oracle if unsure). Then, consider your approach.",
  opciones: {
    withHaste: {
      descripcion: "With haste",
      stat: "edge",
    },
    withStealthOrTrickery: {
      descripcion: "With stealth or trickery",
      stat: "shadow",
    },
    withObservationIntuitionOrExpertise: {
      descripcion: "With observation, intuition, or expertise",
      stat: "wits",
    },
  },
  resultados: {
    strongHit: {
      descripcion:
        "On a strong hit, you delve deeper. Mark progress and Find an Opportunity.",
    },
    weakHit: {
      descripcion:
        "On a weak hit, roll on the following table according to your stat.",
      edge: [
        { min: 1, max: 45, result: "Mark progress and Reveal a Danger." },
        { min: 46, max: 65, result: "Mark progress." },
        {
          min: 66,
          max: 75,
          result: "Choose one: Mark progress or Find an Opportunity.",
        },
        {
          min: 76,
          max: 80,
          result: "Take both: Mark progress and Find an Opportunity.",
        },
        {
          min: 81,
          max: 100,
          result: "Mark progress twice and Reveal a Danger.",
        },
      ],
      shadow: [
        { min: 1, max: 30, result: "Mark progress and Reveal a Danger." },
        { min: 31, max: 65, result: "Mark progress." },
        {
          min: 66,
          max: 90,
          result: "Choose one: Mark progress or Find an Opportunity.",
        },
        {
          min: 91,
          max: 99,
          result: "Take both: Mark progress and Find an Opportunity.",
        },
        {
          min: 100,
          max: 100,
          result: "Mark progress twice and Reveal a Danger.",
        },
      ],
      wits: [
        { min: 1, max: 40, result: "Mark progress and Reveal a Danger." },
        { min: 41, max: 55, result: "Mark progress." },
        {
          min: 56,
          max: 80,
          result: "Choose one: Mark progress or Find an Opportunity.",
        },
        {
          min: 81,
          max: 99,
          result: "Take both: Mark progress and Find an Opportunity.",
        },
        {
          min: 100,
          max: 100,
          result: "Mark progress twice and Reveal a Danger.",
        },
      ],
    },
    miss: {
      descripcion: "On a miss, Reveal a Danger.",
    },
  },
};

const findAnOpportunity = {
  descripcion:
    "When you encounter a helpful situation or feature within a site, roll on the following table. If you are making this move as a result of a strong hit on Delve the Depths, you may pick or envision an opportunity instead of rolling. Then, choose one.",
  opciones: [
    "Gain insight or prepare: Take +1 momentum.",
    "Take action now: You and any allies may make a move (not a progress move) which directly leverages the opportunity. When you do, add +1 and take +1 momentum on a hit.",
  ],
  resultados: [
    {
      min: 1,
      max: 25,
      result: "The terrain favors you, or you find a hidden path.",
    },
    {
      min: 26,
      max: 45,
      result: "An aspect of the history or nature of this place is revealed.",
    },
    { min: 46, max: 57, result: "You locate a secure area." },
    { min: 58, max: 68, result: "A clue offers insight or direction." },
    { min: 69, max: 78, result: "You get the drop on a denizen." },
    {
      min: 79,
      max: 86,
      result: "This area provides an opportunity to scavenge, forage, or hunt.",
    },
    {
      min: 87,
      max: 90,
      result: "You locate an interesting or helpful object.",
    },
    { min: 91, max: 94, result: "You are alerted to a potential threat." },
    {
      min: 95,
      max: 98,
      result: "You encounter a denizen who might support you.",
    },
    { min: 99, max: 100, result: "You encounter a denizen in need of help." },
  ],
};

const revealADanger = {
  descripcion:
    "When you encounter a risky situation within a site, envision the danger or roll on the following table.",
  resultados: [
    { min: 1, max: 30, result: "Check the theme card." },
    { min: 31, max: 45, result: "Check the domain card." },
    { min: 46, max: 57, result: "You encounter a hostile denizen." },
    {
      min: 58,
      max: 68,
      result: "You face an environmental or architectural hazard.",
    },
    {
      min: 69,
      max: 76,
      result: "A discovery undermines or complicates your quest.",
    },
    {
      min: 77,
      max: 79,
      result: "You confront a harrowing situation or sensation.",
    },
    {
      min: 80,
      max: 82,
      result: "You face the consequences of an earlier choice or approach.",
    },
    { min: 83, max: 85, result: "Your way is blocked or trapped." },
    { min: 86, max: 88, result: "A resource is diminished, broken, or lost." },
    {
      min: 89,
      max: 91,
      result: "You face a perplexing mystery or tough choice.",
    },
    { min: 92, max: 94, result: "You lose your way or are delayed." },
    {
      min: 95,
      max: 100,
      result:
        "Roll twice more on this table. Both results occur. If they are the same result, make it worse.",
    },
  ],
};

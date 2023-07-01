const themeDefault = {
  description: "",
  themeDangers: [
    { min: 1, max: 5, result: "Uncommon danger (5%)" },
    { min: 6, max: 10, result: "Uncommon danger (5%)" },
    { min: 11, max: 12, result: "Rare danger (2%)" },
    { min: 13, max: 14, result: "Rare danger (2%)" },
    { min: 15, max: 16, result: "Rare danger (2%)" },
    { min: 17, max: 18, result: "Rare danger (2%)" },
    { min: 19, max: 20, result: "Rare danger (2%)" },
    { min: 21, max: 22, result: "Rare danger (2%)" },
    { min: 23, max: 24, result: "Rare danger (2%)" },
    { min: 25, max: 26, result: "Rare danger (2%)" },
    { min: 27, max: 28, result: "Rare danger (2%)" },
    { min: 29, max: 30, result: "Rare danger (2%)" },
  ],

  themeFeatures: [
    { min: 1, max: 4, result: "Rare feature (4%)" },
    { min: 5, max: 8, result: "Rare feature (4%)" },
    { min: 9, max: 12, result: "Rare feature (4%)" },
    { min: 13, max: 16, result: "Rare feature (4%)" },
    { min: 17, max: 20, result: "Rare feature (4%)" },
  ],
};

const themeAncient = {
  descripcion: "This place holds the secrets of a bygone age.",
  peligros: [
    { min: 1, max: 5, result: "Ancient trap" },
    { min: 6, max: 10, result: "Hazardous architecture or terrain" },
    { min: 11, max: 12, result: "Blocked or broken path" },
    { min: 13, max: 14, result: "Denizen protects an ancient secret" },
    { min: 15, max: 16, result: "Denizen reveres an ancient power" },
    { min: 17, max: 18, result: "Living relics of a lost age" },
    { min: 19, max: 20, result: "Ancient evil resurgent" },
    { min: 21, max: 22, result: "Dire warnings of a long-buried danger" },
    { min: 23, max: 24, result: "Ancient disease or contamination" },
    { min: 25, max: 26, result: "Artifact of terrible meaning or power" },
    { min: 27, max: 28, result: "Disturbing evidence of ancient wrongs" },
    { min: 29, max: 30, result: "Others seek power or knowledge" },
  ],
  caracteristicas: [
    { min: 1, max: 4, result: "Evidence of lost knowledge" },
    { min: 5, max: 8, result: "Inscrutable relics" },
    { min: 9, max: 12, result: "Ancient artistry or craft" },
    { min: 13, max: 16, result: "Preserved corpses or fossils" },
    { min: 17, max: 20, result: "Visions of this place in another time" },
  ],
};

const themeFortified = {
  descripcion: "Foes defend this place against intruders.",
  peligros: [
    { min: 1, max: 5, result: "Denizen patrols the area" },
    { min: 6, max: 10, result: "Denizen on guard" },
    { min: 11, max: 12, result: "Denizen ready to sound the alarm" },
    { min: 13, max: 14, result: "Denizen sets an ambush" },
    { min: 15, max: 16, result: "Denizen lures you into a trap" },
    { min: 17, max: 18, result: "Denizens converge on this area" },
    { min: 19, max: 20, result: "Pets or underlings" },
    { min: 21, max: 22, result: "Unexpected alliance revealed" },
    { min: 23, max: 24, result: "Nefarious plans revealed" },
    { min: 25, max: 26, result: "Unexpected leader revealed" },
    { min: 27, max: 28, result: "Trap" },
    { min: 29, max: 30, result: "Alarm trigger" },
  ],
  caracteristicas: [
    { min: 1, max: 4, result: "Camp or quarters" },
    { min: 5, max: 8, result: "Guarded location" },
    { min: 9, max: 12, result: "Storage or repository" },
    { min: 13, max: 16, result: "Work or training area" },
    { min: 17, max: 20, result: "Command center or leadership" },
  ],
};

const themeHallowed = {
  descripcion: "The faithful worship here.",
  peligros: [
    { min: 1, max: 5, result: "Denizen defends their sanctum" },
    { min: 6, max: 10, result: "Denizen enacts the will of their god" },
    { min: 11, max: 12, result: "Denizen seeks martyrdom" },
    { min: 13, max: 14, result: "Secret of the faith is revealed" },
    { min: 15, max: 16, result: "Greater purpose is revealed" },
    { min: 17, max: 18, result: "Unexpected disciples are revealed" },
    { min: 19, max: 20, result: "Divine manifestations" },
    { min: 21, max: 22, result: "Aspect of the faith beguiles you" },
    { min: 23, max: 24, result: "Unexpected leader is revealed" },
    { min: 25, max: 26, result: "Embodiment of a god or myth" },
    { min: 27, max: 28, result: "Protective ward or barrier" },
    { min: 29, max: 30, result: "Prophecies reveal a dark fate" },
  ],
  caracteristicas: [
    { min: 1, max: 4, result: "Temple or altar" },
    { min: 5, max: 8, result: "Offerings or atonements" },
    { min: 9, max: 12, result: "Religious relic or idol" },
    { min: 13, max: 16, result: "Consecrated ground" },
    { min: 17, max: 20, result: "Dwellings or gathering place" },
  ],
};

const themeHaunted = {
  descripcion: "Restless spirits are bound to this place.",
  peligros: [
    { min: 1, max: 5, result: "Denizen haunts this area" },
    { min: 6, max: 10, result: "Unsettling sounds or foreboding signs" },
    { min: 11, max: 12, result: "Denizen attacks without warning" },
    { min: 13, max: 14, result: "Denizen makes a costly demand" },
    { min: 15, max: 16, result: "Denizen seizes your body or mind" },
    { min: 17, max: 18, result: "Denizen taunts or lures you" },
    { min: 19, max: 20, result: "A disturbing truth is revealed" },
    { min: 21, max: 22, result: "Frightening visions" },
    { min: 23, max: 24, result: "The environment is used against you" },
    { min: 25, max: 26, result: "Trickery leads you astray" },
    { min: 27, max: 28, result: "True nature of this place is revealed" },
    { min: 29, max: 30, result: "Sudden, shocking manifestation" },
  ],
  caracteristicas: [
    { min: 1, max: 4, result: "Tomb or burial site" },
    { min: 5, max: 8, result: "Blood was spilled here" },
    { min: 9, max: 12, result: "Unnatural mists or darkness" },
    { min: 13, max: 16, result: "Messages from beyond the grave" },
    { min: 17, max: 20, result: "Apparitions of a person or event" },
  ],
};

const themeInfested = {
  descripcion: "Foul creatures dwell here.",
  peligros: [
    { min: 1, max: 5, result: "Denizens swarm and attack" },
    { min: 6, max: 10, result: "Toxic or sickening environment" },
    { min: 11, max: 12, result: "Denizen stalks you" },
    { min: 13, max: 14, result: "Denizen takes or destroys something" },
    { min: 15, max: 16, result: "Denizen reveals surprising cleverness" },
    { min: 17, max: 18, result: "Denizen guided by a greater threat" },
    { min: 19, max: 20, result: "Denizen blocks the path" },
    { min: 21, max: 22, result: "Denizen funnels you down a new path" },
    { min: 23, max: 24, result: "Denizen undermines the path" },
    { min: 25, max: 26, result: "Denizen lays in wait" },
    { min: 27, max: 28, result: "Trap or snare" },
    { min: 29, max: 30, result: "Victim’s horrible fate is revealed" },
  ],
  caracteristicas: [
    { min: 1, max: 4, result: "Inhabited nest" },
    { min: 5, max: 8, result: "Abandoned nest" },
    { min: 9, max: 12, result: "Ravaged terrain or architecture" },
    { min: 13, max: 16, result: "Remains or carrion" },
    { min: 17, max: 20, result: "Hoarded food" },
  ],
};

const themeRavaged = {
  descripcion: "Time, disaster, or strife have taken their toll.",
  peligros: [
    { min: 1, max: 5, result: "Precarious architecture or terrain" },
    { min: 6, max: 10, result: "Imminent collapse or destruction" },
    { min: 11, max: 12, result: "Path undermined" },
    { min: 13, max: 14, result: "Blocked or broken path" },
    { min: 15, max: 16, result: "Vestiges of a destructive force" },
    { min: 17, max: 18, result: "Unexpected environmental threat" },
    { min: 19, max: 20, result: "Echoes of a troubling past" },
    { min: 21, max: 22, result: "Signs of a horrible fate" },
    { min: 23, max: 24, result: "Denizen seeks retribution" },
    { min: 25, max: 26, result: "Denizen leverages the environment" },
    { min: 27, max: 28, result: "Denizen restores what was lost" },
    { min: 29, max: 30, result: "Ravages return anew" },
  ],
  caracteristicas: [
    { min: 1, max: 4, result: "Path of destruction" },
    { min: 5, max: 8, result: "Abandoned or ruined dwelling" },
    { min: 9, max: 12, result: "Untouched or preserved area" },
    { min: 13, max: 16, result: "Traces of what was lost" },
    { min: 17, max: 20, result: "Ill-fated victims" },
  ],
};

const themeWild = {
  descripcion: "Nature prevails in this place.",
  peligros: [
    { min: 1, max: 5, result: "Denizen hunts" },
    { min: 6, max: 10, result: "Denizen strikes without warning" },
    { min: 11, max: 12, result: "Denizen leverages the environment" },
    { min: 13, max: 14, result: "Denizen wields unexpected abilities" },
    { min: 15, max: 16, result: "Denizen guided by a greater threat" },
    { min: 17, max: 18, result: "Denizen protects something" },
    { min: 19, max: 20, result: "Hazardous terrain" },
    { min: 21, max: 22, result: "Weather or environmental threat" },
    { min: 23, max: 24, result: "Benign aspect becomes a threat" },
    { min: 25, max: 26, result: "Overzealous hunter" },
    { min: 27, max: 28, result: "Disturbing evidence of a victim’s fate" },
    { min: 29, max: 30, result: "Ill-fated victim in danger" },
  ],
  caracteristicas: [
    { min: 1, max: 4, result: "Denizen’s lair" },
    { min: 5, max: 8, result: "Territorial markings" },
    { min: 9, max: 12, result: "Impressive flora or fauna" },
    { min: 13, max: 16, result: "Hunting ground or watering hole" },
    { min: 17, max: 20, result: "Remains or carrion" },
  ],
};

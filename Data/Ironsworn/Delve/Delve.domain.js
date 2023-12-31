const domainDefault = {
  descripcion: "",
  caracteristicas: [
    { min: 21, max: 43, result: "Very common feature (23%)" },
    { min: 44, max: 56, result: "Common feature (13%)" },
    { min: 57, max: 64, result: "Uncommon feature (8%)" },
    { min: 65, max: 68, result: "Rare feature (4%)" },
    { min: 69, max: 72, result: "Rare feature (4%)" },
    { min: 73, max: 76, result: "Rare feature (4%)" },
    { min: 77, max: 80, result: "Rare feature (4%)" },
    { min: 81, max: 84, result: "Rare feature (4%)" },
    { min: 85, max: 88, result: "Rare feature (4%)" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],

  peligros: [
    { min: 31, max: 33, result: "Rare danger (3%)" },
    { min: 34, max: 36, result: "Rare danger (3%)" },
    { min: 37, max: 39, result: "Rare danger (3%)" },
    { min: 40, max: 42, result: "Rare danger (3%)" },
    { min: 43, max: 45, result: "Rare danger (3%)" },
  ],
};

const domainBarrow = {
  descripcion: "The dead are enshrined here.",
  peligros: [
    { min: 31, max: 33, result: "Denizen guards this area" },
    { min: 34, max: 36, result: "Trap" },
    { min: 37, max: 39, result: "Death makes its presence known" },
    { min: 40, max: 42, result: "Crumbling architecture" },
    { min: 43, max: 45, result: "Grave goods with hidden dangers" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Burial chambers" },
    { min: 44, max: 56, result: "Maze of narrow passages" },
    { min: 57, max: 64, result: "Shrine" },
    { min: 65, max: 68, result: "Stately vault" },
    { min: 69, max: 72, result: "Offerings to the dead" },
    { min: 73, max: 76, result: "Statuary or tapestries" },
    { min: 77, max: 80, result: "Remains of a grave robber" },
    { min: 81, max: 84, result: "Mass grave" },
    { min: 85, max: 88, result: "Exhumed corpses" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainCavern = {
  descripcion: "A place of stone and darkness.",
  peligros: [
    { min: 31, max: 33, result: "Denizen lairs here" },
    { min: 34, max: 36, result: "Cave-in" },
    { min: 37, max: 39, result: "Flooding" },
    { min: 40, max: 42, result: "Perilous climb or descent" },
    { min: 43, max: 45, result: "Fissure or sinkhole" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Twisting passages" },
    { min: 44, max: 56, result: "Cramped caves" },
    { min: 57, max: 64, result: "Vast chamber" },
    { min: 65, max: 68, result: "Subterranean waterway" },
    { min: 69, max: 72, result: "Cave pool" },
    { min: 73, max: 76, result: "Natural bridge" },
    { min: 77, max: 80, result: "Towering stone formations" },
    { min: 81, max: 84, result: "Natural illumination" },
    { min: 85, max: 88, result: "Dark pit" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainFrozenCavern = {
  descripcion: "A place of deep caves and enduring cold.",
  peligros: [
    { min: 31, max: 33, result: "Denizen lairs here" },
    { min: 34, max: 36, result: "Fracturing ice" },
    { min: 37, max: 39, result: "Crumbling chasm" },
    { min: 40, max: 42, result: "Bitter chill" },
    { min: 43, max: 45, result: "Disorienting reflections" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Maze of icy tunnels" },
    { min: 44, max: 56, result: "Glistening cave" },
    { min: 57, max: 64, result: "Vast chamber" },
    { min: 65, max: 68, result: "Frigid waterway" },
    { min: 69, max: 72, result: "Icy pools" },
    { min: 73, max: 76, result: "Magnificent ice formations" },
    { min: 77, max: 80, result: "Frozen waterfall" },
    { min: 81, max: 84, result: "Deep crevasses" },
    { min: 85, max: 88, result: "Discovery locked in the ice" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainIcereach = {
  descripcion: "A frigid landscape formed of frozen seas.",
  peligros: [
    { min: 31, max: 33, result: "Denizen hunts" },
    { min: 34, max: 36, result: "Fragile ice above watery depths" },
    { min: 37, max: 39, result: "Perilous climb or descent" },
    { min: 40, max: 42, result: "Avalanche or icefall" },
    { min: 43, max: 45, result: "Foul weather" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Plains of ice and snow" },
    { min: 44, max: 56, result: "Seawater channel" },
    { min: 57, max: 64, result: "Icy highlands" },
    { min: 65, max: 68, result: "Crevasse" },
    { min: 69, max: 72, result: "Ice floes" },
    { min: 73, max: 76, result: "Ship trapped in ice" },
    { min: 77, max: 80, result: "Animal herd or habitat" },
    { min: 81, max: 84, result: "Frozen carcass" },
    { min: 85, max: 88, result: "Camp or outpost" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainMine = {
  descripcion: "Tunnels dug greedily and deep.",
  peligros: [
    { min: 31, max: 33, result: "Cave-in" },
    { min: 34, max: 36, result: "Flooding" },
    { min: 37, max: 39, result: "Unstable platforms or architecture" },
    { min: 40, max: 42, result: "Hazardous gas pocket" },
    { min: 43, max: 45, result: "Weakened terrain" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Cramped tunnels" },
    { min: 44, max: 56, result: "Mine works" },
    { min: 57, max: 64, result: "Excavated chamber" },
    { min: 65, max: 68, result: "Mineshaft" },
    { min: 69, max: 72, result: "Collapsed tunnel" },
    { min: 73, max: 76, result: "Cluttered storage" },
    { min: 77, max: 80, result: "Housing or common areas" },
    { min: 81, max: 84, result: "Flooded chamber" },
    { min: 85, max: 88, result: "Unearthed secret" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainPass = {
  descripcion: "Treacherous paths over high mountains.",
  peligros: [
    { min: 31, max: 33, result: "Denizen lairs here" },
    { min: 34, max: 36, result: "Denizen hunts" },
    { min: 37, max: 39, result: "Perilous climb or descent" },
    { min: 40, max: 42, result: "Avalanche or rockslide" },
    { min: 43, max: 45, result: "Foul weather" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Winding mountain path" },
    { min: 44, max: 56, result: "Snowfield or glacial rocks" },
    { min: 57, max: 64, result: "River gorge" },
    { min: 65, max: 68, result: "Crashing waterfall" },
    { min: 69, max: 72, result: "Highland lake" },
    { min: 73, max: 76, result: "Forgotten cairn" },
    { min: 77, max: 80, result: "Bridge" },
    { min: 81, max: 84, result: "Overlook" },
    { min: 85, max: 88, result: "Camp or outpost" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainRuin = {
  descripcion: "The crumbling legacy of a dead civilization.",
  peligros: [
    { min: 31, max: 33, result: "Ancient mechanism or trap" },
    { min: 34, max: 36, result: "Collapsing wall or ceiling" },
    { min: 37, max: 39, result: "Blocked or broken passage" },
    { min: 40, max: 42, result: "Unstable floor above a new danger" },
    { min: 43, max: 45, result: "Ancient secrets best left buried" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Crumbling corridors and chambers" },
    { min: 44, max: 56, result: "Collapsed architecture" },
    { min: 57, max: 64, result: "Rubble-choked hall" },
    { min: 65, max: 68, result: "Courtyard" },
    { min: 69, max: 72, result: "Archive or library" },
    { min: 73, max: 76, result: "Broken statuary or fading murals" },
    { min: 77, max: 80, result: "Preserved vault" },
    { min: 81, max: 84, result: "Temple to forgotten gods" },
    { min: 85, max: 88, result: "Mausoleum" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainSeaCave = {
  descripcion: "Stone passages carved by ocean waves.",
  peligros: [
    { min: 31, max: 33, result: "Denizen strikes without warning" },
    { min: 34, max: 36, result: "Denizen lurks below" },
    { min: 37, max: 39, result: "Flooding" },
    { min: 40, max: 42, result: "Rushing current" },
    { min: 43, max: 45, result: "Claustrophobic squeeze" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Watery tunnels" },
    { min: 44, max: 56, result: "Eroded chamber" },
    { min: 57, max: 64, result: "Flooded chamber" },
    { min: 65, max: 68, result: "Vast chamber" },
    { min: 69, max: 72, result: "Dry passages" },
    { min: 73, max: 76, result: "Freshwater inlet" },
    { min: 77, max: 80, result: "Rocky island" },
    { min: 81, max: 84, result: "Waterborne debris" },
    { min: 85, max: 88, result: "Shipwreck or boat" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainShadowfen = {
  descripcion: "A primeval marsh, cloaked in mist.",
  peligros: [
    { min: 31, max: 33, result: "Denizen hunts" },
    { min: 34, max: 36, result: "Deep water blocks the path" },
    { min: 37, max: 39, result: "Toxic environment" },
    { min: 40, max: 42, result: "Concealing or disorienting mist" },
    { min: 43, max: 45, result: "Hidden quagmire" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Narrow path through a fetid bog" },
    { min: 44, max: 56, result: "Stagnant waterway" },
    { min: 57, max: 64, result: "Flooded thicket" },
    { min: 65, max: 68, result: "Island of dry land" },
    { min: 69, max: 72, result: "Submerged discovery" },
    { min: 73, max: 76, result: "Preserved corpses" },
    { min: 77, max: 80, result: "Overgrown structure" },
    { min: 81, max: 84, result: "Tall reeds" },
    { min: 85, max: 88, result: "Camp or outpost" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainStronghold = {
  descripcion: "A fortress secured against trespassers.",
  peligros: [
    { min: 31, max: 33, result: "Blocked or guarded path" },
    { min: 34, max: 36, result: "Caught in the open" },
    { min: 37, max: 39, result: "Chokepoint" },
    { min: 40, max: 42, result: "Trap" },
    { min: 43, max: 45, result: "Alarm trigger" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Connecting passageways" },
    { min: 44, max: 56, result: "Barracks or common quarters" },
    { min: 57, max: 64, result: "Large hall" },
    { min: 65, max: 68, result: "Workshop or library" },
    { min: 69, max: 72, result: "Command center or leadership" },
    { min: 73, max: 76, result: "Ladder or stairwell" },
    { min: 77, max: 80, result: "Storage" },
    { min: 81, max: 84, result: "Kitchen or larder" },
    { min: 85, max: 88, result: "Courtyard" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainTanglewood = {
  descripcion: "A perilous forest of eternal shadow.",
  peligros: [
    { min: 31, max: 33, result: "Denizen hunts" },
    { min: 34, max: 36, result: "Denizen lairs here" },
    { min: 37, max: 39, result: "Trap or snare" },
    { min: 40, max: 42, result: "Path leads you astray" },
    { min: 43, max: 45, result: "Entangling plant life" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Dense thicket" },
    { min: 44, max: 56, result: "Overgrown path" },
    { min: 57, max: 64, result: "Waterway" },
    { min: 65, max: 68, result: "Clearing" },
    { min: 69, max: 72, result: "Elder tree" },
    { min: 73, max: 76, result: "Brambles" },
    { min: 77, max: 80, result: "Overgrown structure" },
    { min: 81, max: 84, result: "Rocky outcrop" },
    { min: 85, max: 88, result: "Camp or outpost" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};
const domainUnderkeep = {
  descripcion: "An age-old subterranean dungeon.",
  peligros: [
    { min: 31, max: 33, result: "Ancient mechanism or trap" },
    { min: 34, max: 36, result: "Crumbling architecture" },
    { min: 37, max: 39, result: "Blocked or broken passage" },
    { min: 40, max: 42, result: "Artifact with a hidden danger" },
    { min: 43, max: 45, result: "Denizen lurks in darkness" },
  ],
  caracteristicas: [
    { min: 21, max: 43, result: "Carved passages" },
    { min: 44, max: 56, result: "Hall or chamber" },
    { min: 57, max: 64, result: "Stairs into the depths" },
    { min: 65, max: 68, result: "Grand doorway or entrance" },
    { min: 69, max: 72, result: "Tomb or catacombs" },
    { min: 73, max: 76, result: "Rough-hewn cave" },
    { min: 77, max: 80, result: "Foundry or workshop" },
    { min: 81, max: 84, result: "Shrine or temple" },
    { min: 85, max: 88, result: "Imposing architecture or artistry" },
    { min: 89, max: 98, result: "Something unusual or unexpected" },
    { min: 99, max: 99, result: "You transition into a new theme" },
    { min: 100, max: 100, result: "You transition into a new domain" },
  ],
};

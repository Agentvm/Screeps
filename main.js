var harvesting = require("role.harvest");
var spawner = require("spawner");
var carrying = require("role.carry");

//spawner.spawn();

// Find all creeps that have "harvester" in their name
const harvester = _.filter(Game.creeps, (creep) => {
  return creep.name.toLowerCase().includes("harvester");
});

// Triggering harvester behaviour on each harvester
for (var creep of harvester) {
  harvesting.keepHarvesting(creep); // Direktes Übergeben des Creep-Objekts
}

// Find all creeps that have "carry" in their name
const carry = _.filter(Game.creeps, (creep) => {
  return creep.name.toLowerCase().includes("carry");
});

// Triggering carry behaviour on each carrier
for (var creep of carry) {
  carrying.carry(creep); // Direktes Übergeben des Creep-Objekts
}

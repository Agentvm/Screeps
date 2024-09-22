var harvesting = require("role.harvest");
var carrying = require("role.carry");
var creepInfo = require("info.creeps");
var spawner = require("spawner");

spawner.spawn();

// Triggering harvester behaviour on each harvester
const harvesterCreeps = creepInfo.getCreepsByName("harvester");
for (var harvester of harvesterCreeps) {
  harvesting.keepHarvesting(harvester); // Direktes Übergeben des Creep-Objekts
}

// Triggering carry behaviour on each carrier
const carryCreeps = creepInfo.getCreepsByName("carrier");
for (var carry of carryCreeps) {
  carrying.carry(carry); // Direktes Übergeben des Creep-Objekts
}

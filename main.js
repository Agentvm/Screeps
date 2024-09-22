const harvesting = require("role.harvest");
const carrying = require("role.carry");
const creepInfo = require("info.creeps");
const spawner = require("spawner");
const utility = require("utility");
const resourceInfo = require("info.resources");

// Every n seconds, spawn a new creep
//utility.callEveryNTicks(spawner.spawn, 30);

// Spawn a new Creep when the energy is full
if (resourceInfo.getEnergyPercentageFloat() > 0.9) spawner.spawn();

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

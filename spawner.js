var resourceInfo = require("info.resources");
var creepInfo = require("info.creeps");

// Function to spawn creeps based on their role (takes a creeps.CreepRole enum Instance)
function spawn(creepRole, numberOfPartsToRemove = 0) {
  // Get the type of creep to spawn
  if (creepRole === undefined) creepRole = creepInfo.getPrioritizedCreepRole();

  // Check if we already have enough creeps of this role
  if (
    creepInfo.getCreepCountByName(creepRole.name) >=
    creepRole.config.maxCountPerSource
  ) {
    console.log(
      "[spawner]Max creeps of role ",
      creepRole.toString(),
      " reached"
    );
    return;
  }

  let body = [];

  // Decide the body based on the role using a switch statement
  switch (creepRole.name) {
    case "CARRIER":
      body = [MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY];
      break;
    case "HARVESTER":
      body = [MOVE, WORK, WORK];
      break;
    case "BUILDER":
      body = [MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, MOVE];
      break;
    case "TANK":
      body = [MOVE, ATTACK, TOUGH, TOUGH];
      break;
    case "PRIEST":
      body = [HEAL, MOVE, TOUGH];
      break;
    case "RANGER":
      body = [RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE];
      break;
    default:
      console.log("Unknown role:", creepRole.name);
      return;
  }

  // Remove parts of the body to save energy
  console.log("Parts removed: ", numberOfPartsToRemove);
  body.splice(body.length - numberOfPartsToRemove, numberOfPartsToRemove);

  // Create a unique name for the new creep using Game.time for uniqueness
  const creepName = creepRole.name + "_" + Game.time;

  // Attempt to spawn the creep using the selected body
  const result = Game.spawns["Spawn1"].spawnCreep(body, creepName, {
    memory: { role: creepRole.name }, // Assign role to the creep's memory
  });

  // Check the result of the spawning operation
  if (result === OK) {
    console.log("Spawning new", creepRole.name, ":", creepName);
  } else {
    // If there is not enough energy, remove parts
    if (
      result === ERR_NOT_ENOUGH_ENERGY &&
      numberOfPartsToRemove < creepRole.config.optionalParts
    ) {
      spawn(creepRole, numberOfPartsToRemove + 1); // Inception
    } else
      console.log("Failed to spawn", creepRole.name, "Error code:", result);
  }
}

module.exports = {
  spawn,
};

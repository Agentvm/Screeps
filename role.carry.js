function carry(creep) {
  // Check if the creep's carry capacity is exhausted yet
  if (creep.carry.energy < creep.carryCapacity) {
    // If not, search for dropped resources on the ground
    const droppedResources = creep.room.find(FIND_DROPPED_RESOURCES);

    // If there are some,
    if (droppedResources.length > 0) {
      // Choose the first resource found
      const targetResource = droppedResources[0];

      // Gather the resource, or move to it if you're too far away
      if (creep.pos.isNearTo(targetResource)) {
        creep.pickup(targetResource);
      } else {
        creep.moveTo(targetResource);
      }
    }
  } else {
    // If the carry capacity is reached, try to transfer each frame. If that fails, move towards the spawn instead.
    if (
      creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE
    ) {
      creep.moveTo(Game.spawns["Spawn1"]);
    }
  }
}

module.exports = {
  carry,
};

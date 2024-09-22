function getEnergyPercentageFloat() {
  let totalCapacity = 0;

  // Loop through all spawns
  for (const spawnName in Game.spawns) {
    const spawn = Game.spawns[spawnName];
    totalCapacity += spawn.store.getCapacity(RESOURCE_ENERGY);
  }

  // If there is no capacity (no spawns), return 0 to avoid division by zero
  if (totalCapacity === 0) {
    return 0;
  }

  // Return the percentage as a float (value between 0 and 1)
  return getTotalEnergy() / totalCapacity;
}

function getTotalEnergy() {
  let totalEnergy = 0;

  // Loop through all your spawns
  for (const spawnName in Game.spawns) {
    const spawn = Game.spawns[spawnName];
    totalEnergy += spawn.store[RESOURCE_ENERGY]; // Add spawn's energy
  }

  //   // Find all extensions and add their energy
  //   const extensions = Game.rooms["W0N0"].find(FIND_MY_STRUCTURES, {
  //     filter: { structureType: STRUCTURE_EXTENSION },
  //   });
  //   extensions.forEach((extension) => {
  //     totalEnergy += extension.store[RESOURCE_ENERGY];
  //   });

  //   // Find all containers and sum their energy
  //   const containers = Game.rooms["W0N0"].find(FIND_STRUCTURES, {
  //     filter: { structureType: STRUCTURE_CONTAINER },
  //   });
  //   containers.forEach((container) => {
  //     totalEnergy += container.store[RESOURCE_ENERGY];
  //   });

  //   // If you have a storage structure, add its energy too
  //   const storage = Game.rooms["W0N0"].storage;
  //   if (storage) {
  //     totalEnergy += storage.store[RESOURCE_ENERGY];
  //   }

  //   console.log("Total energy including containers and storage:", totalEnergy);

  return totalEnergy;
}

module.exports = {
  getTotalEnergy,
  getEnergyPercentageFloat,
};

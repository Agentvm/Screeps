function getTotalCreeps(role) {
  const totalCreeps = Object.values(Game.creeps).length;
  return totalCreeps;
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
  getTotalCreeps,
};

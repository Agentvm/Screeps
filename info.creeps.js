// Constants
const MaxCreepsPerRole = 3;

// Creep Information
const CreepRoles = Object.freeze({
  CARRIER: {
    optionalParts: 4, // Parts that can be scrapped to lower energy count
    maxCountPerSource: 4, // Maximum number of this role
    priority: 1, // Creation priority
  },
  HARVESTER: {
    optionalParts: 1,
    maxCountPerSource: 4,
    priority: 0,
  },
  BUILDER: {
    optionalParts: 5,
    maxCountPerSource: 4,
    priority: 2,
  },
  TANK: {
    optionalParts: 1,
    maxCountPerSource: 4,
    priority: 4,
  },
  PRIEST: {
    optionalParts: 1,
    maxCountPerSource: 4,
    priority: 5,
  },
  RANGER: {
    optionalParts: 4,
    maxCountPerSource: 4,
    priority: 3,
  },
});

// CreepRole accessor function
const CreepRole = (role) => {
  const roleName = role.toUpperCase(); // Get the role name in uppercase
  const roleConfig = CreepRoles[roleName]; // Get the configuration for the role

  if (roleConfig) {
    return { name: roleName, config: roleConfig }; // Return both the role name and its configuration
  }

  return null; // If role doesn't exist, return null
};

// Find all creeps that have the given term in their name
function getCreepsByName(creepName) {
  return _.filter(Game.creeps, (creep) => {
    return creep.name.toLowerCase().includes(creepName.toLowerCase());
  });
}

function getTotalCreepsCount() {
  const totalCreeps = Object.values(Game.creeps).length;
  return totalCreeps;
}

// Count all creeps that have the given term in their name
function getCreepCountByName(name) {
  return getCreepsByName(name).length;
}

function getPrioritizedCreepRole() {
  let lowestPriority = Infinity; // Track the priority of the current lowest role
  let lowestCount = Infinity; // Set initial count to a very high number
  let roleWithLowestCount = null;

  // Loop through each role in the CreepRoles object
  for (const roleName in CreepRoles) {
    const roleInfo = CreepRole(roleName); // Access the role name and its config
    if (!roleInfo || !roleInfo.config) continue; // Skip if no valid role or config

    const creepCount = getCreepCountByName(roleInfo.name); // Get count of creeps with this role name
    const priority = roleInfo.config.priority; // Get the priority from the role config

    // Compare based on count and then on priority in case of ties
    if (
      creepCount < lowestCount || // Check if this role has fewer creeps
      (creepCount === lowestCount && priority < lowestPriority) // Resolve ties by priority
    ) {
      lowestCount = creepCount;
      lowestPriority = priority;
      roleWithLowestCount = roleInfo; // Store the role name
    }
  }

  return roleWithLowestCount; // Return the role name with the lowest creep count and highest priority
}

function getTotalCreeps(role) {
  const totalCreeps = Object.values(Game.creeps).length;
  return totalCreeps;
}

module.exports = {
  getCreepsByName,
  getTotalCreepsCount,
  getCreepCountByName,
  getPrioritizedCreepRole,
  CreepRoles,
  getTotalCreeps,
};

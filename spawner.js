var resources = require("resources");

function spawn(type) {
  if (resources.getTotalEnergy() >= 200 && resources.getTotalCreeps() <= 10) {
    Game.spawns["Spawn1"].spawnCreep(
      [WORK, CARRY, MOVE],
      "Harvester" + resources.getTotalCreeps()
    );
  }
}

module.exports = {
  spawn,
};

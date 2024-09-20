var harvesting = require("role.harvest");
var spawner = require("spawner");

spawner.spawn();

for (var name in Game.creeps) {
  var creep = Game.creeps[name];
  harvesting.keepHarvesting(creep);
}

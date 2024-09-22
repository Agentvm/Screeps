const Utility = {
  // Function that executes the callback every 'interval' ticks
  callEveryNTicks(callback, interval) {
    if (!Memory.utility) {
      Memory.utility = {}; // Initialize memory if not present
    }

    if (!Memory.utility.lastCallTime) {
      Memory.utility.lastCallTime = {}; // Initialize lastCallTime if not present
    }

    // Ensure interval is passed, default to 100 ticks if not provided
    interval = interval || 100;

    const currentTime = Game.time;
    const functionName = callback.name || "anonymous";

    // Initialize memory for this specific function if not done already
    if (!Memory.utility.lastCallTime[functionName]) {
      Memory.utility.lastCallTime[functionName] = 0;
    }

    // Check if the required ticks have passed
    if (currentTime - Memory.utility.lastCallTime[functionName] >= interval) {
      callback(); // Call the provided function
      Memory.utility.lastCallTime[functionName] = currentTime; // Update last call time
    }
  },
};

module.exports = Utility;

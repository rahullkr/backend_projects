const { showTimeEntries, stopTimeEntry } = require("../utils/saveTimeUtils");

const { getCurrentTime } = require("../utils/time");

async function stopCommand(project) {
  const stopTime = getCurrentTime();
  await stopTimeEntry(project, stopTime);
  console.log(`Stopped tracking time for ${project} at ${stopTime}`);
}

module.exports = { stopCommand };

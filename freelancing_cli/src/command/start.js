const { saveTimeEntry, showTimeEntries } = require("../utils/saveTimeUtils");
const { getCurrentTime } = require("../utils/time");

async function startCommand(project) {
  const startTime = getCurrentTime();
  await saveTimeEntry(project, startTime);
 
  console.log(`Started tracking time for ${project} at ${startTime}`);
}

module.exports = { startCommand };

const { getTimeEntries } = require("../utils/saveTimeUtils");
const { calculateTotalTime } = require("../utils/time");


async function reportCommand(project, options) {
  const sinceDate = options.since ? new Date(options.since) : null;
  const timeEntries = await getTimeEntries(project, sinceDate);
  let initial = timeEntries[0].start_time;
  let final = timeEntries[0].stop_time;
  const totalTime = calculateTotalTime(initial, final);
  // console.log(totalTime);

  console.log(
    `Total time spent on project ${project} = ${totalTime.hours()} hours: ${totalTime.minutes()} minutes: ${totalTime.seconds()} seconds`
  );
}

module.exports = { reportCommand };

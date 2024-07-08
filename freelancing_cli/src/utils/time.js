const dayjs = require("dayjs");

//plugins

var localizedFormat = require("dayjs/plugin/localizedFormat");
var duration = require("dayjs/plugin/duration");


function getCurrentTime() {
  dayjs.extend(localizedFormat);
  return dayjs().format("LLLL");
}

function calculateTotalTime(startTime, endTime) {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  return dayjs.duration(end.diff(start));
}

dayjs.extend(duration);
// let startTime = dayjs().subtract(2, 'minutes'); 
// let endTime = dayjs();

// var value = calculateTotalTime(startTime, endTime);
// console.log(value);
// console.log(value.years(), value.months(), value.days(), value.hours(), value.minutes(), value.seconds());

module.exports = { getCurrentTime, calculateTotalTime };

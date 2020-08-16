
// Display the Current Day and Date in the top heading
const currentDay = moment().format('dddd');
const currentDate = moment().format("MMM Do");
$("#currentDay").text(currentDay + ", " + currentDate);

// Set hour color background 
const currentTime = moment().format('h');
const workDayHours = [9,10,11,12,1,2,3,4,5];
const currentTimeIndex = workDayHours.indexOf(currentTime);

$("#" + currentTime).addClass("present");

for(i=currentTimeIndex-1; i>=0; i--) {
    $("#"+ workDayHours[i]).addClass("past");
}

for(i=currentTimeIndex+1; i<=workDayHours.length; i++) {
    $("#"+ workDayHours[i]).addClass("future");
}

console.log("Current hour is", currentTime);
      
   
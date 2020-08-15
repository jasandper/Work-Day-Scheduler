
console.log("The current day is ");

const currentDay = moment().format('dddd');
const currentDate = moment().format("MMM Do");
$("#currentDay").text(currentDay + ", " + currentDate);

      
   
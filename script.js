
// Display the Current Day and Date in the top heading
const currentDay = moment().format('dddd');
const currentDate = moment().format("MMM Do");
$("#currentDay").text(currentDay + ", " + currentDate);

// Set hour color background 
const currentTime = parseInt(moment().format('H'));

var workDayHours = [9,10,11,12,13,14,15,16,17];
var currentTimeIndex = workDayHours.indexOf(currentTime);

if(currentTime>=0 && currentTime <9) {
    for(i=0; i>workDayHours.length; i++) {
    $("#"+ workDayHours[i]).addClass("future");
}
}else if(currentTime>=9 && currentTime <18) {
    $("#" + currentTime).addClass("present");
    for(i=currentTimeIndex-1; i>=0; i--) {
    $("#"+ workDayHours[i]).addClass("past");
    }
    for(j=currentTimeIndex+1; j<=workDayHours.length; j++) {
    $("#"+ workDayHours[j]).addClass("future");
}
}else {
    for(i=0; i<workDayHours.length; i++) {
        $("#"+ workDayHours[i]).addClass("past");
}
}

// Save text event to local storage when save button is clicked
$(".saveBtn").on("click", function(event) {
    var id = event.target.id.substring(7)
    var value = $('#event-'+id).val();
    localStorage.setItem(id, value);
})

// loading of tasks from localstorage into html
for(i=9; i<18; i++) {
    var storedValue = localStorage.getItem(i)
    $("#event-"+i).html(storedValue)
}



      
   
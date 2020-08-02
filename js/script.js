// Added style attribute to HTML's body
$("body").attr("style", "background-color: linen;");

// Added Bootstrap classes to HTML's body
$("body").append('<div class="headerContent header py-3 shadow-sm" style="background-color: lightblue">' + "</div>"
);

//Crated HTML's header and added Bootstrap classes
var topEl = $(".headerContent");
topEl.append('<div class="topRow row mx-auto">' + "</div>");

// Created top row that will contain the two (2) columns that will enclose HTML's title and weather widget
var topRowEl = $(".topRow");
    topRowEl.append('<div class="topCol1 col-12 col-md-4 ml-auto text-center" id="dateDiv" style="font-size: 1.5em;">' + "</div>");
    topRowEl.append('<div class="topCol2 col-12 col-md-1 mr-md-auto my-auto pt-3 pt-md-0 text-center">' + "</div>");

// Created header's left column to display pages's title with motto
var topCol1 = $(".topCol1");
    topCol1.append('<h2 class="display-4">Work Daily Schedule</h2>');
    topCol1.append("<h5>Everyday is a beautiful day!</h5>");

// Created header's right column to display page's weather widget (it will go to bottom in mobile view)
var topCol2 = $(".topCol2");
    topCol2.append('<a target="_blank" href="https://www.booked.net/weather/new-york-18103"><img src="https://w.bookcdn.com/weather/picture/25_18103_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=9699" style="border-radius: 10px; box-shadow: 0 0 5px gray;" alt="booked.net"/></a>');


// ****************************
// * HEADER ENDS HERE         *
// ****************************

// Created todayDate to enclose Date() along with date's structure (day string, month string, day number and year number)
var todayDate = new Date(),
    weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");


    dayOfWeek = weekdays[todayDate.getDay()];
    curMonth = months[todayDate.getMonth()];
    curYear = todayDate.getFullYear();
    dayOfMonth = todayDate.getDate();
    curHour = todayDate.getHours();

// Created today variable to establish a string to be appended to page
var today = "Today's date: " + dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;
    
    // Appended date's string to right (bottom) column.
    // NOTE: var was not created for this particular element, sine it's not going to be modified later on. 
    $("#dateDiv").append(today);

// Crated variable to append HTML elements into HTML's body
var bodyEl = $("body");

// Appending Container with .container class to body element
    bodyEl.append('<main class="container">' + "</main>");

// Created variable for container Class
var container = $(".container");


// **************************************
// *  CREATED TIMES STRUCTURE & LABELS  *
// **************************************


// Created and appended section HTML semantic element to .container
    container.append('<section class="row midRowAM">' + "</section>");

// Created variable for HTML section element that will have form with AM times
var midRow = $(".midRowAM");
    midRow.append('<section class="col-12 mainFrameAM">' + "</section>");

// Created var with mainFrameAM class for form to frame label, input and icon ('<i>') tags and append them 
var mainframeElAM = $(".mainFrameAM");

// Created form for AM times
    mainframeElAM.append('<form class="plannerForm text-center">' + "</form>");

// Created variables for styles that repeat through HTML structure
var plannerFormElAM = $(".plannerForm");
var labelStyle = ' col-2 col-md-1 mr-3 pr-5 mt-2" ';
var inputStyle = ' col-8 col-md-8" ';
var iconStyle = '  style="font-size: 1.25em; background-color: transparent; border: none;" class="far fa-calendar-check col-1 storeInput text-center" id="i';

// Created array that will contain values of times through the planner's structure
var timeArray = [];

// Created loop for morning time (tAM)
for (var tAM = 0; tAM < 12; tAM++) {

  //Appended morning time label, input and icons into form
  plannerFormElAM.append('<label class="timeLabel' + labelStyle + 'id="timeLabel' + "[" + tAM + "]" + '">' + [tAM] + ":00AM" + "</label>");
  plannerFormElAM.append('<input type="text" placeholder="task" class="taskInput' + inputStyle + 'id="' + [tAM] + '"' + ">" + "</input>");
  plannerFormElAM.append('<button' + iconStyle + [tAM] + '">' + "</button>");
  timeArray.push(tAM);
  plannerFormElAM.append('<hr style="border-top: 1px dashed lavender;" id="hr' + [tAM] + '">');
}

// 
// for (var noon = 12; noon < 13; noon++) {
  plannerFormElAM.append('<label for="text" class="timeLabel' + labelStyle + 'id="timeLabel' + "[" + 12 + "]" + '">' + [12] + ":00PM" + "</label>");
  plannerFormElAM.append('<input type="text" placeholder="task" class="taskInput' + inputStyle + 'id="' + [12] + '"' + ">" + "</input>");
  plannerFormElAM.append('<button' + iconStyle + [12] + '">' + "</button>");
  timeArray.push(12);
  plannerFormElAM.append('<hr style="border-top: 1px dashed lavender;" id="hr' + [12] + '">');
// }

// Created variable for HTML section element that will have form with PM times
    container.append('<section class="row midRowPM">' + "</section>");

// Created variable for HTML section element that will have form with PM times
var midRowPM = $(".midRowPM");
    midRowPM.append('<div class="col-12 mainFramePM">' + "</div>");

// Created var with mainFramePM class for form to frame label, input and icon ('<i>') tags and append them 
var mainFramePMEl = $(".mainFramePM");
    mainFramePMEl.append('<form class="plannerFormPM text-center">' + "</form>");

// Created var with panner form's structure for PM times  
var plannerFormPMEL = $(".plannerFormPM");
 
// Created loop for afternoon and evening time (tPM)
for (var tPM = 13; tPM < 22; tPM++) {

  //Appended morning time label, input and icons into form
  timePM = [tPM] - 12;
  plannerFormPMEL.append('<label for="text" class="timeLabel' + labelStyle + 'id="timeLabel' + "[" + tPM + "]" + '">' + [timePM] + ":00PM" + "</label>");
  plannerFormPMEL.append('<input type="text" placeholder="task" class="taskInput' + inputStyle + 'id="' + [tPM] + '"' + ' style="border:0;">' + "</input>");
  plannerFormPMEL.append('<button' + iconStyle + [tPM] + '">' + "</button>");
  plannerFormPMEL.append('<hr style="border-top: 1px dashed lavender;" id="hr' + [tAM] + '">');
  timeArray.push(tPM);


}

// *************************************
// *  SECTION COLOR DEPENDING ON TIME  *
// *************************************

// Establishing for loop through the app to grab i values and iterate them into the changes below
for (i = 0; i < 24; i++) {
    
    // Changed background color to be changed if time is equal to the current hour
  if (timeArray[i] == curHour) {document.getElementById(i).setAttribute("style", "background-color: powderblue;");
  }

  // Established background color of labels if time is less than the current hour
  if (timeArray[i] < curHour) {document.getElementById(i).setAttribute("style", "background-color: rgb(250, 211, 217);");
  }

  // Established background color of lables if times is more than the current hour
  if (timeArray[i] > curHour) {document.getElementById(i).setAttribute("style", "background-color: lightyellow;");
  }
}

// *************************************
// *           REMOVED LABELS          *
// *************************************

// Deleting rows on top from midnight to 5AM
document.getElementById("timeLabel[0]").remove("<label>");
document.getElementById("timeLabel[1]").remove("<label>");
document.getElementById("timeLabel[2]").remove("<label>");
document.getElementById("timeLabel[3]").remove("<label>");
document.getElementById("timeLabel[4]").remove("<label>");
document.getElementById("timeLabel[5]").remove("<label>");

// Removed input tags from midnight to 5AM 
document.getElementById(0).remove("<textarea>");
document.getElementById(1).remove("<textarea>");
document.getElementById(2).remove("<textarea>");
document.getElementById(3).remove("<textarea>");
document.getElementById(4).remove("<textarea>");
document.getElementById(5).remove("<textarea>");

// Removed i tags from midnight to 5AM
document.getElementById("i0").remove("<i>");
document.getElementById("i1").remove("<i>");
document.getElementById("i2").remove("<i>");
document.getElementById("i3").remove("<i>");
document.getElementById("i4").remove("<i>");
document.getElementById("i5").remove("<i>");

// Removed i tags from midnight to 5AM
document.getElementById("hr0").remove("<hr>");
document.getElementById("hr1").remove("<hr>");
document.getElementById("hr2").remove("<hr>");
document.getElementById("hr3").remove("<hr>");
document.getElementById("hr4").remove("<hr>");
// document.getElementById("hr5").remove("<hr>");




// *************************************
// *       LOCAL STORAGE SECTION       *
// *************************************

var task1Input = document.querySelector('#\\6');
var saveTaskBtn = document.querySelector('#i6');
console.log(typeof task1Input);

saveTaskBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var task = {
        taskText: task1Input,
    }
      localStorage.setItem("task", task);
      
      // get most recent submission
      var lastUser = localStorage.getItem("task");
      task1Input = lastUser.taskText;
      
});
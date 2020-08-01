$("body").attr("style", "background-color: white;");
$("body").append(
  '<div class="headerContent header py-3 shadow-sm" style="background-color: lightblue">' +
    "</div>"
);

var topEl = $(".headerContent");
topEl.append('<div class="topRow row mx-auto">' + "</div>");

var topRowEl = $(".topRow");
topRowEl.append(
  '<div class="topCol1 col-12 col-md-4 ml-auto text-center" id="dateDiv" style="font-size: 1.5em;">' +
    "</div>"
);
topRowEl.append(
  '<div class="topCol2 col-12 col-md-1 mr-md-auto my-auto pt-3 pt-md-0 text-center">' +
    "</div>"
);

var topCol1 = $(".topCol1");
topCol1.append('<h2 class="display-4">Work Daily Schedule</h2>');
topCol1.append("<h5>Everyday is a beautiful day!</h5>");

var topCol2 = $(".topCol2");
topCol2.append(
  '<a target="_blank" href="https://www.booked.net/weather/new-york-18103"><img src="https://w.bookcdn.com/weather/picture/25_18103_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=9699" style="border-radius: 10px; box-shadow: 0 0 5px gray;" alt="booked.net"/></a>'
);

var todayDate = new Date(),
  weekdays = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
months = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

dayOfWeek = weekdays[todayDate.getDay()];
curMonth = months[todayDate.getMonth()];
curYear = todayDate.getFullYear();
dayOfMonth = todayDate.getDate();
curHour = todayDate.getHours();

var today =
  "Today's date: " +
  dayOfWeek +
  ", " +
  curMonth +
  " " +
  dayOfMonth +
  ", " +
  curYear;
$("#dateDiv").append(today);

var bodyEl = $("body");

// Appending Container
bodyEl.append('<div class="container">' + "</div>");

var container = $(".container");

// Apending top row of time
container.append('<div class="row midRow">' + "</div>");
var midRow = $(".midRow");
midRow.append('<div class="col-12 mainFrameAM">' + "</div>");

var mainframeElAM = $(".mainFrameAM");
mainframeElAM.append('<form class="plannerForm">' + "</form>");

var plannerFormElAM = $(".plannerForm");
var labelStyle = ' col-2 col-md-1 mr-4 mr-md-5 mt-2" ';
var inputStyle = ' col-8 col-md-9"';
var inputStylePassed = "'color: black; background-color: #ffb6c1;'";
var iconStyle =
  '  style="font-size: 1.25em;" class="far fa-calendar-check col-1" id="i';

// Appending lables from 6:00AM to 12:00AM
timeArray = [];

for (var tAM = 0; tAM < 13; tAM++) {
  //Appends labels and input from 1:00AM to 11:00AM

  plannerFormElAM.append(
    '<label class="timeLabel' + labelStyle + 'id="timeLabel' + "[" + tAM + "]" + '">' + [tAM] + ":00" + "</label>"
  );
  plannerFormElAM.append(
    '<input class="taskInput' + inputStyle + 'id="' + [tAM] + '"' + ">" + "</input>");
  plannerFormElAM.append("<i" + iconStyle + [tAM] + '">' + "</i>");
  timeArray.push(tAM);
}

container.append('<div class="row midRowPM">' + "</div>");
var midRowPM = $(".midRowPM");
midRowPM.append('<div class="col-12 mainFramePM">' + "</div>");

var mainFramePMEl = $(".mainFramePM");
mainFramePMEl.append('<form class="plannerFormPM">' + "</form>");

var plannerFormPMEL = $(".plannerFormPM");
var labelStylePM = ' col-2 col-md-1 mr-4 mr-md-5 mt-2" ';
var inputStylePM = ' col-8 col-md-9"';
var inputStylePassedPM = "'color: black; background-color: #ffb6c1;'";
var iconStylePM =
  '  style="font-size: 1.25em;" class="far fa-calendar-check col-1" id="i';

for (var tPM = 13; tPM < 22; tPM++) {
  //Appends labels and input from 1:00AM to 11:00AM
  timePM = [tPM] - 12;
  plannerFormPMEL.append('<label class="timeLabel' + labelStyle + 'id="timeLabel' + "[" + tPM + "]" + '">' + [timePM] + ":00" + "</label>");
  plannerFormPMEL.append('<input class="taskInput' + inputStyle + 'id="' + [tPM] + '"' + ">" + "</input>");
  plannerFormPMEL.append("<i" + iconStyle + [tPM] + '">' + "</i>" + "<br>");
  timeArray.push(tPM);
}


for (i = 0; i < 24; i++) {
    // Established background color to be changed if time is equal to the current hour
  if (timeArray[i] == curHour) {
    document
      .getElementById(i)
      .setAttribute("style", "background-color: powderblue;");
  }

  // Established background color of labels if time is less than the current hour
  if (timeArray[i] < curHour) {
    document
      .getElementById(i)
      .setAttribute("style", "background-color: rgb(250, 211, 217);");
  }

  // Established background color of lables if times is more than the current hour
  if (timeArray[i] > curHour) {
    document
      .getElementById(i)
      .setAttribute("style", "background-color: lightyellow;");
  }
}























// Deleting rows on top from midnight to 5AM
document.getElementById("timeLabel[0]").remove("<label>");
document.getElementById("timeLabel[1]").remove("<label>");
document.getElementById("timeLabel[2]").remove("<label>");
document.getElementById("timeLabel[3]").remove("<label>");
document.getElementById("timeLabel[4]").remove("<label>");
document.getElementById("timeLabel[5]").remove("<label>");

// Removed input tags from midnight to 5AM 
document.getElementById(0).remove("<input>");
document.getElementById(1).remove("<input>");
document.getElementById(2).remove("<input>");
document.getElementById(3).remove("<input>");
document.getElementById(4).remove("<input>");
document.getElementById(5).remove("<input>");

// Removed i tags from midnight to 5AM
document.getElementById("i0").remove("<i>");
document.getElementById("i1").remove("<i>");
document.getElementById("i2").remove("<i>");
document.getElementById("i3").remove("<i>");
document.getElementById("i4").remove("<i>");
document.getElementById("i5").remove("<i>");

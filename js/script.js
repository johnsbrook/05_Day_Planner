$(document).ready(function () {

  // Created todayDate to enclose Date() along with date's structure (day string, month string, day number and year number)
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

  // Created today variable to establish a string to be appended to page
  var today =
    "Today's date: " +
    dayOfWeek +
    ", " +
    curMonth +
    " " +
    dayOfMonth +
    ", " +
    curYear;

  // Appended date's string to right (bottom) column.

  $("#dateDiv").append(today);

  // Establishing for loop through the app to grab i values and iterate them into the changes below

  var timeArray = [];
  for (var t = 0; t < 24; t++) {
    timeArray.push(t);
  }

  for (var i = 8; i < 19; i++) {
    // Changed background color to be changed if time is equal to the current hour
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

  var taskBtn = $(".taskBtn");
  taskBtn.on("click", function () {
    var value = $(this).siblings(".taskInput").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  $("#hr-8 .taskInput").val(localStorage.getItem("hr-8"));
  $("#hr-9 .taskInput").val(localStorage.getItem("hr-9"));
  $("#hr-10 .taskInput").val(localStorage.getItem("hr-10"));
  $("#hr-11 .taskInput").val(localStorage.getItem("hr-11"));
  $("#hr-12 .taskInput").val(localStorage.getItem("hr-12"));
  $("#hr-13 .taskInput").val(localStorage.getItem("hr-13"));
  $("#hr-14 .taskInput").val(localStorage.getItem("hr-14"));
  $("#hr-15 .taskInput").val(localStorage.getItem("hr-15"));
  $("#hr-16 .taskInput").val(localStorage.getItem("hr-16"));
  $("#hr-17 .taskInput").val(localStorage.getItem("hr-17"));
  $("#hr-18 .taskInput").val(localStorage.getItem("hr-18"));
});

$("body").attr("style", "background-color: white;");
$("body").append('<div class="headerContent header py-3 shadow-sm" style="background-color: lightblue">' + '</div>');


var topEl = $('.headerContent');
    topEl.append('<div class="topRow row mx-auto">' + '</div>');

var topRowEl = $('.topRow');
    topRowEl.append('<div class="topCol1 col-12 col-md-4 ml-auto text-center" id="dateDiv" style="font-size: 1.5em;">' + '</div>');
    topRowEl.append('<div class="topCol2 col-12 col-md-1 mr-md-auto my-auto pt-3 pt-md-0 text-center">' + '</div>');

var topCol1 = $('.topCol1');    
    topCol1.append('<h2 class="display-4">Work Daily Schedule</h2>');
    topCol1.append('<h5>Everyday is a beautiful day!</h5>');


var topCol2 = $('.topCol2');  
    topCol2.append('<a target="_blank" href="https://www.booked.net/weather/new-york-18103"><img src="https://w.bookcdn.com/weather/picture/25_18103_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=9699" style="border-radius: 10px; box-shadow: 0 0 5px gray;" alt="booked.net"/></a>');


var todayDate = new Date(),
    weekdays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

    dayOfWeek = weekdays[todayDate.getDay()];    
    curMonth = months[todayDate.getMonth()];
    curYear = todayDate.getFullYear();
    dayOfMonth = todayDate.getDate();
    curHour = todayDate.getHours();
    
var today = "Today's date: " + dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;
$('#dateDiv').append(today);



var bodyEl = $('body');

// Appending Container
    bodyEl.append('<div class="container">' + '</div>');

var container = $('.container')
    

// Apending top row of time
    container.append('<div class="row midRow">' + '</div>');
var midRow = $('.midRow') 
    midRow.append('<div class="col-12 mainFrame">' + '</div>');

var mainframeEl = $('.mainFrame');
    mainframeEl.append('<form class="plannerForm">' + '</form>');

var plannerFormEL = $('.plannerForm');
var labelStyle = ' col-2 col-md-1 mr-4 mr-md-5 mt-2" ';
var inputStyle = ' col-8 col-md-9"';
var inputStylePassed = "'color: black; background-color: #ffb6c1;'";
var iconStyle = '  style="font-size: 1.25em;" class="far fa-calendar-check col-1" id="i';

    // Appending lables from 6:00AM to 12:00AM
    timeArray = [];

    for (var tAM = 0; tAM < 13; tAM++) {
    
            //Appends labels and input from 1:00AM to 11:00AM
            
            plannerFormEL.append('<label class="timeLabel' + labelStyle + 'id="timeLabel' + '[' + tAM + ']' + '">' + [tAM] + ":00" + '</label>');
            plannerFormEL.append('<input class="taskInput' + inputStyle + 'id="' + [tAM] + '"' + '>' + '</input>');            
            plannerFormEL.append('<i' + iconStyle + [tAM] + '">' + '</i>' + '<br>');
            timeArray.push(tAM);
   
    }


    container.append('<div class="row midRowPM">' + '</div>');
var midRowPM = $('.midRowPM') 
    midRowPM.append('<div class="col-12 mainFramePM">' + '</div>');

var mainFramePMEl = $('.mainFramePM');
    mainFramePMEl.append('<form class="plannerFormPM">' + '</form>');

var plannerFormPMEL = $('.plannerFormPM');
var labelStylePM = ' col-2 col-md-1 mr-4 mr-md-5 mt-2" ';
var inputStylePM = ' col-8 col-md-9"';
var inputStylePassedPM = "'color: black; background-color: #ffb6c1;'";
var iconStylePM = '  style="font-size: 1.25em;" class="far fa-calendar-check col-1" id="i';


    for (var tPM = 13; tPM < 22; tPM++) {

            //Appends labels and input from 1:00AM to 11:00AM
            timePM = ([tPM] - 12);
            plannerFormPMEL.append('<label class="timeLabel' + labelStyle + 'id="timeLabel' + '[' + tPM + ']' + '">' + [timePM] + ":00" + '</label>');
            plannerFormPMEL.append('<input class="taskInput' + inputStyle + 'id="' + [tPM] + '"' + '>' + '</input>');            
            plannerFormPMEL.append('<i' + iconStyle + [tPM] + '">' + '</i>' + '<br>');
            timeArray.push(tPM);

    }


    for (i = 0; i < 24; i++) {
        if (timeArray[i] == (curHour) ) {
            document.getElementById(i).setAttribute('style', 'background-color: powderblue;');
        }
        if (timeArray[i] < curHour ) {
            document.getElementById(i).setAttribute('style', 'background-color: rgb(250, 211, 217);');
        }
        if (timeArray[i] > curHour ) {
            document.getElementById(i).setAttribute('style', 'background-color: lightyellow;');
        }
    }


      
            document.getElementById('timeLabel[0]').setAttribute('style', 'display: none;');
            document.getElementById('timeLabel[1]').setAttribute('style', 'display: none;');
            document.getElementById('timeLabel[2]').setAttribute('style', 'display: none;');
            document.getElementById('timeLabel[3]').setAttribute('style', 'display: none;');
            document.getElementById('timeLabel[4]').setAttribute('style', 'display: none;');
            document.getElementById('timeLabel[5]').setAttribute('style', 'display: none;');

            document.getElementById(0).setAttribute('style', 'display: none;');
            document.getElementById(1).setAttribute('style', 'display: none;');
            document.getElementById(2).setAttribute('style', 'display: none;');
            document.getElementById(3).setAttribute('style', 'display: none;');
            document.getElementById(4).setAttribute('style', 'display: none;');
            document.getElementById(5).setAttribute('style', 'display: none;');

            document.getElementById('i0').setAttribute('style', 'display: none;');
            document.getElementById('i1').setAttribute('style', 'display: none;');
            document.getElementById('i2').setAttribute('style', 'display: none;');
            document.getElementById('i3').setAttribute('style', 'display: none;');
            document.getElementById('i4').setAttribute('style', 'display: none;');
            document.getElementById('i5').setAttribute('style', 'display: none;');






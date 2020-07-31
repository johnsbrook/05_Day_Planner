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
    container.append('<div class="row midRow">' + '</div>');
var midRow = $('.midRow') 
    midRow.append('<div class="col-12 mainFrame">' + '</div>');

var mainframeEl = $('.mainFrame');
    mainframeEl.append('<form class="plannerForm">' + '</form>');

var plannerFormEL = $('.plannerForm');

    // Appending lables from 6:00AM to 12:00AM
    for (var tAM = 0; tAM < 12; tAM++) {
    
            //Appends labels and input from 1:00AM to 11:00AM
            
            plannerFormEL.append('<label class="timeLabel col-2 col-md-1 mr-4 mr-md-5 mt-2" id="timeLabel' + [tAM] + '">' + [tAM] + ":00AM" + '</label>');
            plannerFormEL.append('<input class="taskInput col-8 col-md-9" id="input' + [tAM] + '">' + '</input>');
            
            // for (var dt = 0; dt < 12; dt++) {
            //     $('.taskInput').attr('data-number', [dt]);
            //     console.log(dt);
            // }
            
            plannerFormEL.append('<i style="font-size: 1.25em;" class="far fa-calendar-check col-1" id="i' + [tAM] + '">' + '</i>' + '<br>');

        var taskInput = $('.taskInput'); 
            if (tAM < curHour) {
                taskInput.attr('style', 'color: black; background-color: lightpink;');
            }

            console.log("Current Hour: " + curHour);
            console.log("Time Options are: " + tAM);

    }

    var pmTime = []
    for (var tPM = 12; tPM < 21; tPM++) {
   
            //Appends labels and input from 1:00PM to 11:00PM
            plannerFormEL.append('<label class="timeLabel col-2 col-md-1 mr-4 mr-md-5 mt-2" id="timeLabel' + [tPM] + '">' + [tPM] + ":00PM" + '</label>');
            plannerFormEL.append('<input class="taskInput col-8 col-md-9" id="input' + [tPM] + '">' + '</input>');
            plannerFormEL.append('<i style="font-size: 1.25em;" class="far fa-calendar-check col-1" id="i' + [tPM] + '">' + '</i>' + '<br>');
            pmTime.push(tPM)

        var taskInput = $('.taskInput');
            
            if (tPM < curHour) {
                taskInput.attr('style', 'color: black; background-color: red;');
            }
            
            console.log("Current Hour: " + curHour);
            console.log("Time Options are: " + tPM);

    }
    console.log(pmTime.join());
    console.log(curHour);

    






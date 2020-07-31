$("body").attr("style", "background-color: white;");

var topEl = $('.headerContent');
    topEl.append('<div class="topRow row">' + '</div>');

var topRowEl = $('.topRow');
    topRowEl.append('<div class="topCol1 col-12 col-md-6 text-center" id="dateDiv">' + '</div>');
    topRowEl.append('<div class="topCol2 col-12 col-md-6 text-center pt-3 pt-md-0">' + '</div>');

var topCol1 = $('.topCol1');    
    topCol1.append('<h2>Work Daily Schedule</h2>');
    topCol1.append('<h5>Everyday is a beautiful day!</h5>');

var topCol2 = $('.topCol2');  
    topCol2.append('<a target="_blank" href="https://www.booked.net/weather/new-york-18103"><img src="https://w.bookcdn.com/weather/picture/25_18103_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=9699"  alt="booked.net"/></a>');


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
    

    // Appending lables from 6:00AM to 12:00AM
    for (var tAM = 1; tAM < 12; tAM++) {
    
            //Appends labels and input from 1:00AM to 11:00AM
            mainframeEl.append('<label class="timeLabel col-2 col-md-1 mr-4 mt-2">' + [tAM] + ":00AM" + '</label>');
            mainframeEl.append('<input class="col-8 col-md-9">' + '</input>');
            mainframeEl.append('<i class="far fa-calendar-check col-1" style="font-size: 1.25em;">' + '</i>' + '<br>');

        var timeLabel = $('.timeLabel');
            if (tAM < curHour) {
                timeLabel.attr('style', 'color: red; font-weight: bold;');
            } 

            if (tAM = curHour) {
                timeLabel.attr('style', 'color: yellow; font-weight: bold;');
            }

    }

    var pmTime = []
    for (var tPM = 12; tPM < 21; tPM++) {
   
        //Appends labels and input from 1:00PM to 11:00PM
        mainframeEl.append('<label class="timeLabel col-2 col-md-1 mr-4 mt-2">' + [tPM] + ":00PM" + '</label>');
        mainframeEl.append('<input class="col-8 col-md-9">' + '</input>');
        mainframeEl.append('<i class="far fa-calendar-check col-1" style="font-size: 1.25em;">' + '</i>' + '<br>');
        pmTime.push(tPM)

        if(tPM < curHour) {
            $('.timeLabel').attr('style', 'color: red; font-weight: bold;');
        }
        
    }
    console.log(pmTime.join());
    console.log(curHour);

    






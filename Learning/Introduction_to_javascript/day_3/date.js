function inputFocus(i) {
    if(i.value==i.defaultValue) {
        i.value="";
        i.style.color="#000000";
    }
}
function inputBlur(i) {
    if(i.value=="") {
        i.value=i.defaultValue;
        i.style.color="#B0C4DE";
    }
}
function dateDifference(){
    var oneDay = 24 * 60 * 60 * 1000 ;
    var f_date = new Date(document.getElementById("date1").value);
    var s_date = new Date(document.getElementById("date2").value);
    var dateDiff = Math.round(Math.abs((f_date.getTime() - s_date.getTime()) / (oneDay)));
    document.getElementById("dateDiff").value = dateDiff;
}
function timeDifference() {
    var date1, date2;
    var hour1 = parseInt(document.getElementById("firstHour").value);
    var minute1 = parseInt(document.getElementById("firstMinute").value);
    var hour2 = parseInt(document.getElementById("secondHour").value);
    var minute2 = parseInt(document.getElementById("secondMinute").value);
    var e1 = document.getElementById("am");
    var time1 = e1.options[e1.selectedIndex].value;
    var e2 = document.getElementById("pm");
    var time2 = e2.options[e2.selectedIndex].value;
    if(time1 == 'PM' && hour1 != 12)
        hour1 = hour1 + 12;
    if(time2 == 'PM' && hour2 != 12)
        hour2 = hour2 + 12;
    if(time1 == 'AM' && hour1 == 12)
        hour1 = 0;
    if(time2 == 'AM' && hour2 == 12)
        hour2 = 0;
    date1 = new Date(2000, 0, 1,  hour1, minute1);
    if((time2 == 'PM' && time2 == 'AM') || (hour2 < hour1))
        date2 = new Date(2000, 0, 2,  hour2, minute2);
    else
        date2 = new Date(2000, 0, 1,  hour2, minute2);
    var time = (date2 - date1) / 1000;
    var timediff = document.getElementById("timedifference");
    var hours = parseInt(time / 3600);
    var minutes = (time / 60) % 60;
    var timeResult = hours + " " + "hours" + " " + minutes + " " + "minutes";
    document.getElementById("timeDiff").value = timeResult;
}

function timeInterval(){
    var d = new Date(document.getElementById("date").value);
    var limit, timeSpan ="AM";
    var date = document.getElementById("date").value;
    var year = parseInt(date.slice(0,4));
    var month = parseInt(date.slice(5,7));
    var day = parseInt(date.slice(8,10));
    var hour = parseInt(date.slice(11,13));
    var min = parseInt(date.slice(14,16));
    if(month === 2)
        limit = 28;
    else if (month === 4 || month === 6 || month === 9 || month ===11) 
        limit = 30;
    else
        limit = 31;
    var day = parseInt(document.getElementById("day").value);
    var hour = parseInt(document.getElementById("hour").value);
    hour += hour;
    day += day;
    if(hour >= 24){
        day += parseInt(hour/24);
        hour %= 24;
    }
    if(day >= limit){
        month += parseInt(day/limit);
        day %= limit;
    }
    if(month > 12){
        year++;
        month %= 12;
    }
    if(hour > 12){
        timeSpan = "PM";
        hour %= 12
    }
    var interResult = month + " / " + day + " / " + year + ", " + hour + " : 00 " + timeSpan;
    document.getElementById("interval").value = interResult;

}
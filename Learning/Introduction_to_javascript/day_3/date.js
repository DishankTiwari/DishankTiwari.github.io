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
function timeDifference(startTime, endTime){
    alert("Click OK");
    var starttime = startTime.value;
    var endtime = endTime.value;  
    if(endtime>starttime){
    	var i = endtime-starttime;
    	document.getElementById("hour").value=i;
    }
    return endtime;
    console.log(endtime);
}
function finalDate(){
    var someDate = new Date(document.getElementById("date").value);
    var numberOfDaysToAdd = document.getElementById("add").value;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
    var dd = someDate.getDate();
    var mm = someDate.getMonth() + 1;
    var y = someDate.getFullYear();
    console.log(mm,dd,y);
    var someFormattedDate = mm + '/'+ dd + '/'+ y;
}
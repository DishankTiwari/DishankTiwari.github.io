(function mainfun() {
	var iDiv = document.createElement("div");
	iDiv.id = "block";
	document.getElementsByTagName("body")[0].appendChild(iDiv);
	for(i = 1; i < 4; i++){
		var mInput = document.createElement("input");
		mInput.id = "radio" + i;
		mInput.name = "radio";
		mInput.setAttribute("type", "radio");
		mInput.setAttribute("style", "width : 50px");
		mInput.style.margin = "40px";
		mInput.addEventListener("click",calc);
		iDiv.appendChild(mInput);
		var x = document.createElement("label");
		var l = (i > 1 ? (i > 2 ? document.createTextNode("Mortgage Calculator") : document.createTextNode("Date Calculator")) : (document.createTextNode("Basic Calculator")));
		x.setAttribute("for", "radio" + i);
		x.appendChild(l);
		document.getElementById('block').insertBefore(x,document.getElementById("radio" + i));
	}
	function calc(){
		if(document.getElementById('basicForm')){
				document.getElementsByTagName('body')[0].removeChild(document.getElementById('basicForm'));
		}
		if(document.getElementById('dateForm'))
			document.getElementsByTagName('body')[0].removeChild(document.getElementById('dateForm'));
		if(document.getElementById('mortForm'))
			document.getElementsByTagName('body')[0].removeChild(document.getElementById('mortForm'));
		
		if(this.id=="radio1"){
			basic();
		}
		else if(this.id=="radio2"){
			date();
		}
		else if(this.id=="radio3"){
			mortgage();
		}
	}
	function basic(){
	var bForm = document.createElement("form");
	bForm.style.margin = "40px";
	bForm.id = "basicForm";
	document.getElementsByTagName("body")[0].appendChild(bForm);

	var heading = document.createElement('p');
	var head = document.createElement("h2");
	head.innerHTML = "BASIC CALCULATOR";
	heading.appendChild(head);
	bForm.appendChild(heading);
	var input_data = document.createElement('p');
	var inp_da1 = document.createElement("input");
	inp_da1.id="ds";
	inp_da1.setAttribute("type", "textbox");
	input_data.appendChild(inp_da1);
	bForm.appendChild(input_data);
	var ms = document.createElement('p');
	var inp1 = document.createElement("input");
	inp1.setAttribute("type", "button");
	inp1.setAttribute("value", "MS");
	inp1.setAttribute("onclick", "memory_p(MS)");
	ms.appendChild(inp1);
	bForm.appendChild(ms);
	var para1 = document.createElement('p');
	var inp1 = document.createElement("input");
	inp1.setAttribute("type", "button");
	inp1.setAttribute("value", "MC");
	inp1.setAttribute("onclick", "memory_p(MC)");
	para1.appendChild(inp1);
	var inp2 = document.createElement("input");
	inp2.setAttribute("type", "button");
	inp2.setAttribute("value", "M+");
	inp2.setAttribute("onclick", "memory_p(M+)");
	para1.appendChild(inp2);
	var inp3 = document.createElement("input");
	inp3.setAttribute("type", "button");
	inp3.setAttribute("value", "M-");
	inp3.setAttribute("onclick", "memory_p(M-)");
	para1.appendChild(inp3);
	var inp4 = document.createElement("input");
	inp4.setAttribute("type", "button");
	inp4.setAttribute("value", "MR");
	inp4.setAttribute("onclick", "memory_p(MR)");
	para1.appendChild(inp4);
	bForm.appendChild(para1);
	var para2 = document.createElement('p');
	var inp1 = document.createElement("input");
	inp1.setAttribute("type", "button");
	inp1.setAttribute("value", "CLS");
	inp1.setAttribute("onclick", "addtoscreen('cls')");
	para2.appendChild(inp1);
	var inp2 = document.createElement("input");
	inp2.setAttribute("type", "button");
	inp2.setAttribute("value", "CAN");
	inp2.addEventListener("click",backspace);
	para2.appendChild(inp2);
	var inp3 = document.createElement("input");
	inp3.setAttribute("type", "button");
	inp3.setAttribute("value", "REM");
	inp3.setAttribute("onclick", "addtoscreen('%')");
	para2.appendChild(inp3);
	var inp4 = document.createElement("input");
	inp4.setAttribute("type", "button");
	inp4.setAttribute("value", "%");
	para2.appendChild(inp4);
	bForm.appendChild(para2);
	var para3 = document.createElement('p');
	var inp1 = document.createElement("input");
	inp1.setAttribute("type", "button");
	inp1.setAttribute("value", "7");
	inp1.setAttribute("onclick", "addtoscreen('7')");
	para3.appendChild(inp1);
	var inp2 = document.createElement("input");
	inp2.setAttribute("type", "button");
	inp2.setAttribute("value", "8");
	inp2.setAttribute("onclick", "addtoscreen('8')");
	para3.appendChild(inp2);
	var inp3 = document.createElement("input");
	inp3.setAttribute("type", "button");
	inp3.setAttribute("value", "9");
	inp3.setAttribute("onclick", "addtoscreen('9')");
	para3.appendChild(inp3);
	var inp4 = document.createElement("input");
	inp4.setAttribute("type", "button");
	inp4.setAttribute("value", "+");
	inp4.setAttribute("onclick", "addtoscreen('+')");
	para3.appendChild(inp4);
	bForm.appendChild(para3);
	var para4 = document.createElement('p');
	var inp1 = document.createElement("input");
	inp1.setAttribute("type", "button");
	inp1.setAttribute("value", "4");
	inp1.setAttribute("onclick", "addtoscreen('4')");
	para4.appendChild(inp1);
	var inp2 = document.createElement("input");
	inp2.setAttribute("type", "button");
	inp2.setAttribute("value", "5");
	inp2.setAttribute("onclick", "addtoscreen('5')");
	para4.appendChild(inp2);
	var inp3 = document.createElement("input");
	inp3.setAttribute("type", "button");
	inp3.setAttribute("value", "6");
	inp3.setAttribute("onclick", "addtoscreen('6')");
	para4.appendChild(inp3);
	var inp4 = document.createElement("input");
	inp4.setAttribute("type", "button");
	inp4.setAttribute("value", "-");
	inp4.setAttribute("onclick", "addtoscreen('-')");
	para4.appendChild(inp4);
	bForm.appendChild(para4);
	var para5 = document.createElement('p');
	var inp1 = document.createElement("input");
	inp1.setAttribute("type", "button");
	inp1.setAttribute("value", "1");
	inp1.setAttribute("onclick", "addtoscreen('1')");
	para5.appendChild(inp1);
	var inp2 = document.createElement("input");
	inp2.setAttribute("type", "button");
	inp2.setAttribute("value", "2");
	inp2.setAttribute("onclick", "addtoscreen('2')");
	para5.appendChild(inp2);
	var inp3 = document.createElement("input");
	inp3.setAttribute("type", "button");
	inp3.setAttribute("value", "3");
	inp3.setAttribute("onclick", "addtoscreen('3')");
	para5.appendChild(inp3);
	var inp4 = document.createElement("input");
	inp4.setAttribute("type", "button");
	inp4.setAttribute("value", "x");
	inp4.setAttribute("onclick", "addtoscreen('x')");
	para5.appendChild(inp4);
	bForm.appendChild(para5);
	var para6 = document.createElement('p');
	var inp1 = document.createElement("input");
	inp1.setAttribute("type", "button");
	inp1.setAttribute("value", ".");
	inp1.setAttribute("onclick", "addtoscreen('.')");
	para6.appendChild(inp1);
	var inp2 = document.createElement("input");
	inp2.setAttribute("type", "button");
	inp2.setAttribute("value", "0");
	inp2.setAttribute("onclick", "addtoscreen('0')");
	para6.appendChild(inp2);
	var inp3 = document.createElement("input");
	inp3.setAttribute("type", "button");
	inp3.setAttribute("value", "=");
	inp3.addEventListener("click",answer);
	para6.appendChild(inp3);
	var inp4 = document.createElement("input");
	inp4.setAttribute("type", "button");
	inp4.setAttribute("value", "/");
	inp4.setAttribute("onclick", "addtoscreen('/')");
	para6.appendChild(inp4);
	var line = document.createElement("hr");
	para6.appendChild(line);
	bForm.appendChild(para6);
	function addtoscreen(x) {
		console.log("dd");
		var box = document.getElementById("ds");
		document.getElementById("ds").value=x;
		box.value = x;
		if(x=='cls'){
			box.value='';
		}
	}
	function answer () {
		x = box.value;
		x=eval(x);
		box.value = x;
	}
	function backspace(){
		var number = box.value;
		var len=number.length-1;
		var newnumber=number.substring(0,len);
		box.value=newnumber;
	}
	function memory_p(value){
		memory_p.index=1;
		if (value=="MS") {
			memory.push(box.value);
		}
		else if(value=="MC"){
			memory=[];
			memory_p.index=1;
			alert("Memory Has Been Cleared!!");
			box.value=0;
		}
		else if( value=="MR"){
			if(typeof memory[(memory.length)-memory_p.index] === 'undefined'){
				box.value=0;
			}
			else{
				box.value=memory[(memory.length)-memory_p.index];
				memory_p.index++;
			}
		}
		else if(value=="M+"){
			value = memory[memory.length-1];
			box.value = value + "+";
		}
		else if(value=="M-"){
			value = memory[memory.length-1];
			box.value = value - "-";
		}
		else if(value==="%") {
			box.value = eval(box.value/100);
		}
	}
}
	function date(){
		var dForm = document.createElement("form");
		dForm.style.margin = "40px";
		dForm.id = "dateForm";
		document.getElementsByTagName("body")[0].appendChild(dForm);

		var heading = document.createElement('p');
		var head = document.createElement("h2");
		head.innerHTML = "DATE CALCULATOR";
		heading.appendChild(head);
		dForm.appendChild(heading);
		var para = document.createElement('p');
		var head = document.createElement("h3");
		head.innerHTML = "Date Difference";
		para.appendChild(head);
		dForm.appendChild(para);
		var para1 = document.createElement('p');
		var l1 = document.createElement('label');
		l1.innerHTML = "Date 1 -";
		para1.appendChild(l1);
		var inp1 = document.createElement('input');
		inp1.setAttribute("type", "text");
		inp1.id="date1";
		para1.appendChild(inp1);
		var l2 = document.createElement('label');
		l2.innerHTML = "Date 2 -";
		para1.appendChild(l2);
		var inp2 = document.createElement('input');
		inp2.setAttribute("type", "text");
		inp2.id="date2";
		para1.appendChild(inp2);
		var but = document.createElement('input');
		but.setAttribute("type", "button");
		but.setAttribute("value", "Submit");
		but.addEventListener("click",dateDifference);
		para1.appendChild(but);
		dForm.appendChild(para1);
		var para2 = document.createElement('p');
		var l = document.createElement('label');
		l.innerHTML = "Difference In Days -";
		para2.appendChild(l);
		var inp = document.createElement('input');
		inp.setAttribute("type", "text");
		inp.id="dateDiff";
		para2.appendChild(inp);
		dForm.appendChild(para2);
		var para = document.createElement('p');
		var head = document.createElement("h3");
		head.innerHTML = "Time Difference";
		para.appendChild(head);
		dForm.appendChild(para);
		var div1 = document.createElement('div');
		var inp1 = document.createElement('input');
		inp1.setAttribute("type", "text");
		inp1.id="firstHour";
		div1.appendChild(inp1);
		var inp2 = document.createElement('input');
		inp2.setAttribute("type", "text");
		inp2.id="firstMinute";
		div1.appendChild(inp2);
		var sel1 = document.createElement('select');
		var op1 = document.createElement('option');
		op1.setAttribute("value", "AM");
		op1.id="am";
		sel1.appendChild(op1);
		var op2 = document.createElement('option');
		op2.setAttribute("value", "PM");
		sel1.appendChild(op2);
		div1.appendChild(sel1);
		var inp3 = document.createElement('input');
		inp3.setAttribute("type", "text");
		inp3.id="secondHour";
		div1.appendChild(inp3);
		var inp4 = document.createElement('input');
		inp4.setAttribute("type", "text");
		inp4.id="secondMinute";
		div1.appendChild(inp4);
		var sel2 = document.createElement('select');
		var op1 = document.createElement('option');
		op1.setAttribute("value", "AM");
		sel2.appendChild(op1);
		var op2 = document.createElement('option');
		op2.setAttribute("value", "PM");
		op2.id="pm";
		sel2.appendChild(op2);
		div1.appendChild(sel2);
		var but = document.createElement('input');
		but.setAttribute("type", "button");
		but.setAttribute("value", "Submit");
		but.addEventListener("click",timeDifference);
		div1.appendChild(but);
		var para = document.createElement('p');
		var l = document.createElement('label');
		l.innerHTML = "Time Difference -";
		para.appendChild(l);
		var inp = document.createElement('input');
		inp.setAttribute("type", "text");
		inp.id="timeDiff";
		para.appendChild(inp);
		div1.appendChild(para);
		dForm.appendChild(div1);
		var para = document.createElement('p');
		var head = document.createElement("h3");
		head.innerHTML = "Date/Time Interval";
		para.appendChild(head);
		dForm.appendChild(para);
		var para1 = document.createElement('p');
		var l1 = document.createElement('label');
		l1.innerHTML = "Date/Time -";
		para1.appendChild(l1);
		var inp1 = document.createElement('input');
		inp1.setAttribute("type", "datetime-local");
		inp1.id="date";
		para1.appendChild(inp1);
		var l2 = document.createElement('label');
		l2.innerHTML = "Days -";
		para1.appendChild(l2);
		var inp2 = document.createElement('input');
		inp2.setAttribute("type", "number");
		inp2.id="day";
		para1.appendChild(inp2);
		var l3 = document.createElement('label');
		l3.innerHTML = "Hours -";
		para1.appendChild(l3);
		var inp2 = document.createElement('input');
		inp2.setAttribute("type", "number");
		inp2.id="hour";
		para1.appendChild(inp2);
		var but = document.createElement('input');
		but.setAttribute("type", "button");
		but.setAttribute("value", "Submit");
		but.addEventListener("click",timeInterval);
		para1.appendChild(but);
		dForm.appendChild(para1);
		var para2 = document.createElement('p');
		var l = document.createElement('label');
		l.innerHTML = "Date/Time Interval -";
		para2.appendChild(l);
		var inp = document.createElement('input');
		inp.setAttribute("type", "text");
		inp.id="interval";
		para2.appendChild(inp);
		var line = document.createElement("hr");
		para2.appendChild(line);
		dForm.appendChild(para2);

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
	}	
	function mortgage(){
		var mForm = document.createElement("form");
		mForm.style.margin = "40px";
		mForm.id = "mortForm";
		document.getElementsByTagName("body")[0].appendChild(mForm);

		var heading = document.createElement('p');
		var head = document.createElement("h2");
		head.innerHTML = "MORTGAGE CALCULATOR";
		heading.appendChild(head);
		mForm.appendChild(heading);
		var para1 = document.createElement('p');
		var l = document.createElement('label');
		l.innerHTML = "Loan Amount :";
		para1.appendChild(l);
		var tex = document.createElement('input');
		tex.setAttribute("type", "textbox");
		tex.id="p";
		para1.appendChild(tex);
		mForm.appendChild(para1);
		var para2 = document.createElement('p');
		var l = document.createElement('label');
		l.innerHTML = "Interest Rates :";
		para2.appendChild(l);
		var tex = document.createElement('input');
		tex.setAttribute("type", "textbox");
		tex.id="r";
		para2.appendChild(tex);
		mForm.appendChild(para2);
		var para3 = document.createElement('p');
		var l = document.createElement('label');
		l.innerHTML = "Time(Years) :";
		para3.appendChild(l);
		var tex = document.createElement('input');
		tex.setAttribute("type", "textbox");
		tex.id="t";
		para3.appendChild(tex);
		mForm.appendChild(para3);
		var s_button = document.createElement("input");
		s_button.setAttribute("type", "button");
		s_button.setAttribute("value", "Calculate");
		s_button.addEventListener("click",loan);
		mForm.appendChild(s_button);
		var para4 = document.createElement('p');
		var l = document.createElement('label');
		l.innerHTML = "Time(Years) :";
		para4.appendChild(l);
		var tex = document.createElement('input');
		tex.setAttribute("type", "textbox");
		tex.id="emi";
		para4.appendChild(tex);
		var line = document.createElement("hr");
		para4.appendChild(line);
		mForm.appendChild(para4);
		function loan() {
			var principal = document.getElementById("p").value;
			var rate = document.getElementById("r").value;
			var year = document.getElementById("t").value;
			var time = year * 12;
			var interest_rate = rate / (12 * 100);
			var emi = (principal * interest_rate * Math.pow((1 + interest_rate),time))/(Math.pow((1 + interest_rate),time)-1);
			var emi_r = Math.round((emi * 10) / 10)
			document.getElementById("emi").value = emi_r;
		}
	}
})();
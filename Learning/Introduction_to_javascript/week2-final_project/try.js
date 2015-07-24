(function mortgage(){
		var mForm = document.createElement("form");
		mForm.id = "block";
	document.getElementsByTagName("body")[0].appendChild(mForm);
	
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
		s_button.setAttribute("onclick", "loan()");
		mForm.appendChild(s_button);

		var para4 = document.createElement('p');
		var l = document.createElement('label');
		l.innerHTML = "Time(Years) :";
		para4.appendChild(l);
		var tex = document.createElement('input');
		tex.setAttribute("type", "textbox");
		tex.id="emi";
		para4.appendChild(tex);
		mForm.appendChild(para4);
	})();
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
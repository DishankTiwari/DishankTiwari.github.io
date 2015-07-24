(function mainfun() {
	//var bTitle = document.createElement("title");
	//bTitle.title = "Calculator";
	//document.getElementsByTagName("html")[0].appendChild(bTitle);
	var iDiv = document.createElement("div");
	iDiv.id = "block";
	document.getElementsByTagName("body")[0].appendChild(iDiv);
	for(i = 1; i < 4; i++){
		var mInput = document.createElement("input");
		mInput.class = "radio" + i;
		mInput.name = "radio";
		mInput.setAttribute("type", "radio");
		mInput.setAttribute("style", "width : 50px");
		mInput.setAttribute("onclick", "radio" + i + "()");
		mInput.style.margin = "40px";
		iDiv.appendChild(mInput);
		var x = document.createElement("label");
		var l = (i > 1 ? (i > 2 ? document.createTextNode("Mortgage Calculator") : document.createTextNode("Date Calculator")) : (document.createTextNode("Basic Calculator")));
		x.setAttribute("for", "radio" + i);
		x.appendChild(l);
		document.getElementById('block').insertBefore(x,document.getElementById("radio" + i));
	}
	function mortgage(){
		var mForm = document.createElement("form");
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
	}
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
	function basic(){
		var bForm = document.createElement("form");
		var inp1 = document.createElement("input");
		inp1.setAttribute("type", "button");
		inp1.setAttribute("value", "1");
		bForm.appendChild(inp1);
		var inp2 = document.createElement("input");
		inp2.setAttribute("type", "button");
		inp2.setAttribute("value", "2");
		bForm.appendChild(inp2);
		var inp3 = document.createElement("input");
		inp3.setAttribute("type", "button");
		inp3.setAttribute("value", "3");
		bForm.appendChild(inp3);
	}
})();
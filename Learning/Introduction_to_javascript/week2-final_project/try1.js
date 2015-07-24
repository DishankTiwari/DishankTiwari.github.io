
(function basic(){
		var bForm = document.createElement("form");
		bForm.id = "display";
		document.getElementsByTagName("body")[0].appendChild(bForm);

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
		ms.appendChild(inp1);
		bForm.appendChild(ms);

		var para1 = document.createElement('p');
		var inp1 = document.createElement("input");
		inp1.setAttribute("type", "button");
		inp1.setAttribute("value", "MC");
		para1.appendChild(inp1);
		var inp2 = document.createElement("input");
		inp2.setAttribute("type", "button");
		inp2.setAttribute("value", "M+");
		para1.appendChild(inp2);
		var inp3 = document.createElement("input");
		inp3.setAttribute("type", "button");
		inp3.setAttribute("value", "M-");
		para1.appendChild(inp3);
		var inp4 = document.createElement("input");
		inp4.setAttribute("type", "button");
		inp4.setAttribute("value", "MR");
		para1.appendChild(inp4);
		bForm.appendChild(para1);

		var para2 = document.createElement('p');
		var inp1 = document.createElement("input");
		inp1.setAttribute("type", "button");
		inp1.setAttribute("value", "CLS");
		para2.appendChild(inp1);
		var inp2 = document.createElement("input");
		inp2.setAttribute("type", "button");
		inp2.setAttribute("value", "CAN");
		para2.appendChild(inp2);
		var inp3 = document.createElement("input");
		inp3.setAttribute("type", "button");
		inp3.setAttribute("value", "REM");
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
		para3.appendChild(inp1);
		var inp2 = document.createElement("input");
		inp2.setAttribute("type", "button");
		inp2.setAttribute("value", "8");
		para3.appendChild(inp2);
		var inp3 = document.createElement("input");
		inp3.setAttribute("type", "button");
		inp3.setAttribute("value", "9");
		para3.appendChild(inp3);
		var inp4 = document.createElement("input");
		inp4.setAttribute("type", "button");
		inp4.setAttribute("value", "+");
		para3.appendChild(inp4);
		bForm.appendChild(para3);

		var para4 = document.createElement('p');
		var inp1 = document.createElement("input");
		inp1.setAttribute("type", "button");
		inp1.setAttribute("value", "4");
		para4.appendChild(inp1);
		var inp2 = document.createElement("input");
		inp2.setAttribute("type", "button");
		inp2.setAttribute("value", "5");
		para4.appendChild(inp2);
		var inp3 = document.createElement("input");
		inp3.setAttribute("type", "button");
		inp3.setAttribute("value", "6");
		para4.appendChild(inp3);
		var inp4 = document.createElement("input");
		inp4.setAttribute("type", "button");
		inp4.setAttribute("value", "-");
		para4.appendChild(inp4);
		bForm.appendChild(para4);

		var para5 = document.createElement('p');
		var inp1 = document.createElement("input");
		inp1.setAttribute("type", "button");
		inp1.setAttribute("value", "1");
		para5.appendChild(inp1);
		var inp2 = document.createElement("input");
		inp2.setAttribute("type", "button");
		inp2.setAttribute("value", "2");
		para5.appendChild(inp2);
		var inp3 = document.createElement("input");
		inp3.setAttribute("type", "button");
		inp3.setAttribute("value", "3");
		para5.appendChild(inp3);
		var inp4 = document.createElement("input");
		inp4.setAttribute("type", "button");
		inp4.setAttribute("value", "x");
		para5.appendChild(inp4);
		bForm.appendChild(para5);

		var para6 = document.createElement('p');
		var inp1 = document.createElement("input");
		inp1.setAttribute("type", "button");
		inp1.setAttribute("value", ".");
		para6.appendChild(inp1);
		var inp2 = document.createElement("input");
		inp2.setAttribute("type", "button");
		inp2.setAttribute("value", "0");

		para6.appendChild(inp2);
		var inp3 = document.createElement("input");
		inp3.setAttribute("type", "button");
		inp3.setAttribute("value", "=");
		para6.appendChild(inp3);
		var inp4 = document.createElement("input");
		inp4.setAttribute("type", "button");
		inp4.setAttribute("value", "/");
		inp4.setAttribute("onclick", "addtoscreen('/')");
		para6.appendChild(inp4);
		bForm.appendChild(para6);
	})();
	function addtoscreen(x) {
	console.log("dd");
	var box = document.getElementById("ds");
	document.getElementById("ds").value=x;
	box.value += x;
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
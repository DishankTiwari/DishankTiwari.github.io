function addition(id) {
	var x = Math.round(100*Math.random());
	var y = Math.round(100*Math.random());
	z = x + y;
	document.getElementById(id).innerHTML = "&nbsp;&nbsp;" + x + "</br>" + "+" + y + "</br>" + "<p><input type=text id=re  onkeydown=checkdown(this) onkeyup=checkup("+z+",this.value,this)></p>";
}
function subtraction(id) {
	var z, first, second, count;
	var x = Math.round(100*Math.random());
	var y = Math.round(100*Math.random());
	if (y > x) {
		first = y;
		second = x;
	}
	else {
		first = x;
		second = y;
	}
	z = first - second;
	count = z;
	z = first - second;
	document.getElementById(id).innerHTML = "&nbsp;&nbsp;" + first + "</br>" + "-" + second + "</br>" + "<p><input type=text id=re  onkeydown=checkdown(this) onkeyup=checkup("+z+",this.value,this)></p>";
}
function checkup(c,d,idd){
	if(c==d)
		idd.style.background="green";
	else
		idd.style.background="red";
}
function checkdown(e){
	if(e.setSelectionRange){
		e.setSelectionRange(0,0);
	}
}
function result(id) {
	var iDiv = document.createElement("div");
	iDiv.id = "block";
	iDiv.className = "block";
	document.getElementsByTagName("body")[0].appendChild(iDiv);
	for(i=0;i<20;i++){
		var innerDiv = document.createElement('div');
		innerDiv.id = "block2" + i;
		innerDiv.setAttribute("style", "width : 50px");
		innerDiv.setAttribute("style", "margin-top : 50px");
		innerDiv.style.margin = "8px";
		iDiv.appendChild(innerDiv);
		if(id === "add")
		addition(innerDiv.id);
		else if(id === "sub")
			subtraction(innerDiv.id);
	}
}
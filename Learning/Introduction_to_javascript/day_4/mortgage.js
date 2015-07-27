function inputFocus(i) {
    if(i.value==i.defaultValue) {
        i.value="";
        i.style.color="#000000";
    }
}
function inputBlur(i) {
    if(i.value==="") {
        i.value=i.defaultValue;
        i.style.color="#000000";
    }
}
function loan() {
	var principal = document.getElementById("p").value;
	var rate = document.getElementById("r").value;
	var year = document.getElementById("t").value;
	var emi = document.getElementById("e").value;
	var interest_rate = rate / (12 * 100);
	if(emi === "" || emi == "EMI"){
		e = (principal * interest_rate * Math.pow((1 + interest_rate),(year)))/(Math.pow((1 + interest_rate),(year))-1);
		document.getElementById("e").value = e;
	}
	else if(year === "" || year == "Time(Years)"){
		t = Math.log(emi/(emi-principal * interest_rate ))/Math.log(1+ interest_rate);
		document.getElementById("t").value = t;
	}
	else if(principal === ""|| principal == "Load Amount"){
		p = emi *( Math.pow((1+interest_rate),(year)) -1)/(interest_rate *Math.pow((1+interest_rate),year) );
		document.getElementById("p").value = p;
	}
}


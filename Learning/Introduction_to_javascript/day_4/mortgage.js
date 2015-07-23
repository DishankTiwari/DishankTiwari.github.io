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
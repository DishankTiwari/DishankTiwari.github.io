var box = document.getElementById("display");
var memory = [];

function addtoscreen(x) {
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
function memory_p(value){
	memory_p.index=1;
	if (value=="MS") {
		memory.push(box.value);
		console.log(box.value);
	}
	else if(value=="MC"){
		memory=[];
		memory_p.index=1;
		alert("Memory Has Been Cleared!!");
		box.value=0;	
		opleft=0;
		display.current=0;
		digits=0;
	}
	else if( value=="MR"){
		if(typeof memory[(memory.length)-memory_p.index] === 'undefined'){
			box.value=0;
		}
		else{
			box.value=memory[(memory.length)-memory_p.index];
			memory_p.index++;
			console.log(box.value);
		}
	}
}

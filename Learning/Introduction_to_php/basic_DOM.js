function tab1() {
  document.getElementById("news").style.color="blue";
  document.getElementById("sub").style.color="black";
  document.getElementById("news").style.background="#E5EFFF";
  document.getElementById("sub").style.background="none";
  document.getElementById("left").style.display="block";
  document.getElementById("right").style.display="block";
  document.getElementById("lern").style.display="block";
  document.getElementById("form").style.display="none";
  document.getElementById("subscribe").style.display="none";
}
function tab2() {
  document.getElementById("news").style.color="black";
  document.getElementById("sub").style.color="blue";
  document.getElementById("sub").style.background="#E5EFFF";
  document.getElementById("news").style.background="none";
  document.getElementById("left").style.display="none";
  document.getElementById("right").style.display="none";
  document.getElementById("lern").style.display="none";
  document.getElementById("form").style.display="block";
  document.getElementById("subscribe").style.display="block";
}
function jsonVal() {
  var interest="";
  var name=document.form1name.name.value;
  var email=document.form1name.email.value;
  var sex=document.form1name.sex.value;
  var inputElements = document.getElementsByClassName('inter');
  for(var i=0; inputElements[i]; ++i) {
    if(inputElements[i].checked) {
      interest= interest+inputElements[i].value+" ";
    }
  }
  var country=document.form1name.country.value;
  var description=document.form1name.description.value;
  var object={};
  var array=[];
  object.name=name;
  object.country=country;
  object.email=email;
  object.description=description;
  object.sex=sex;
  object.interest=interest;
  JSON.stringify(object);
  console.log(object);
}
function optns(){
  if(document.getElementById("country").options[0].selected){
    document.getElementById("country").options[0].disabled=true;
    document.getElementById("country").options[1].disabled=false;
    document.getElementById("state1").style.visibility="visible";
    document.getElementById("state2").style.visibility="hidden";
  }
  else{
    document.getElementById("country").options[0].disabled=false;
    document.getElementById("country").options[1].disabled=true;
    document.getElementById("state1").style.visibility="hidden";
    document.getElementById("state2").style.visibility="visible";
  }
  document.getElementById("state1_name").style.visibility="visible";
}
function movieType(){
  l = document.getElementById("movieType");
  l.style.visibility = (l.style.visibility == "visible") ? "hidden" : "visible";
}
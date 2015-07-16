function tab(i){
if(i===1){
    document.getElementById("News").style.visibility="visible";
    document.getElementById("subs").style.visibility="hidden";
    document.getElementById("tab2").style.background="white";
    document.getElementById("tab1").style.background="#e4efff";
    document.getElementById("tab2_a").style.color=" #6e6e6e  ";
    document.getElementById("tab1_a").style.color="#1b6bce";
    document.getElementById("tab1").style.zIndex=1;
    document.getElementById("tab2").style.zIndex=0;
  }
  else{
    document.getElementById("News").style.visibility="hidden";
    document.getElementById("subs").style.visibility="visible";
    document.getElementById("tab2").style.background="#e4efff";
    document.getElementById("tab1").style.background="white";
    document.getElementById("tab1_a").style.color=" #6e6e6e  ";
    document.getElementById("tab2_a").style.color="#1b6bce";
    document.getElementById("tab1").style.zIndex=0;
    document.getElementById("tab2").style.zIndex=1;
  }
}

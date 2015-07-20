function inputFocus(i) {
    if(i.value==i.defaultValue) {
    	i.value="";
    	i.style.color="#B0C4DE";
    }
}
function inputBlur(i) {
    if(i.value=="") {
    	i.value=i.defaultValue;
    	i.style.color="#888";
    }
}
function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}  
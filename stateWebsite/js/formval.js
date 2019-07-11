window.onload = validate;

function validate () {
   
	var form = document.getElementById('form')
	//form.onsubmit
	document.getElementById('submit').onclick= function registration() {
		 
    	document.getElementById('name_error').innerHTML="";	
		document.getElementById('phone_error').innerHTML ="";
		document.getElementById('email_error').innerHTML="";
		document.getElementById('party_error').innerHTML="";	
	    document.getElementById("date_error").innerHTML ="";
		document.getElementById('time_error').innerHTML="";	
	    
	
		if	(form.name.value == "")
			{   
			document.getElementById("name_error").innerHTML = "<br>This field is required";
			document.getElementById("name").focus();
			return false;
			}
		if	(form.phone.value == "")
			{   
			document.getElementById("phone_error").innerHTML = "<br>This field is required";
			document.getElementById("phone").focus();
			return false;
			}
	
			if	(form.email.value == "")
			{   
			document.getElementById("email_error").innerHTML = "<br>This field is required";
			document.getElementById("email").focus();
			return false;
			}
			var emailPattern =/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,7}$/;
			var email_addr = document.getElementById("email").value;
	
		if((emailPattern.test(email_addr)) == false)  	
			{
			 document.getElementById("email_error").innerHTML = "Valid email required";
			 document.getElementById("email").focus();
			 return false;
			 }
			 
		if	(form.party.value == "")
			{   
			document.getElementById("party_error").innerHTML = "<br>This field is required";
			document.getElementById("party").focus();
			return false;
			}
		if	(form.date.value == "")
			{   
			document.getElementById("date_error").innerHTML = "<br>This field is required";
			document.getElementById("date").focus();
			return false;
			}			
		if	(form.time.value == "")
			{   
			document.getElementById("time_error").innerHTML = "<br>This field is required";
			document.getElementById("time").focus();
			return false;
			}			
		else
			{	
			return true;
			
			}
		
		};
}
// JavaScript Document
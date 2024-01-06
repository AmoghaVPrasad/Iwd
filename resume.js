document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.panel');

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        sections.forEach(function(section) {
            var sectionTrigger = section.offsetTop - windowHeight * 0.7;

            // Adjust the opacity based on the scroll position
            section.style.opacity = scrollPosition >= sectionTrigger ? 1 : 0;

            // Adjust the visibility of each section
            section.style.visibility = scrollPosition >= sectionTrigger ? 'visible' : 'hidden';
        });
    });
});
function check(form){

	if (form.username.value==""){
		alert("Username cannot be empty!")
		return false;
	}

	if (form.emailID.value==""){
    	alert("Email cannot be empty!")
		return false;
	}
    else if (form.emailID.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)==null){
         alert("Invalid Email Address entered!")
		return false;
    }

     if (form.mobilephone.value==""){
    	alert("Mobile Number cannot be empty!")
    	return false;
    }
    else if (form.mobilephone.value.match(/^(?!0+$)(\+\d{1,3}[- ]?)?(?!0+$)\d{10}$/)==null){
    	alert("Invalid Mobile Number entered!")
    	return false;
    }
    if(form.altmobilephone.value==""){
			alert("Please enter an Alternate Number! If same as Mobile Number, select the checkbox.")
			return false;
		}
	else if (form.altmobilephone.value.match(/^(?!0+$)(\+\d{1,3}[- ]?)?(?!0+$)\d{10}$/)==null){
    	alert("Invalid Alternate Mobile Number entered!")
    	return false;
    }
   
 

   return true;

}

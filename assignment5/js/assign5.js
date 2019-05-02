/*********************************************************************************
*
* WEB222 – Assignment #5
*
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Gayane Babayan   Student ID: 107-061-160    Date: 09-April-2017
*
********************************************************************************/

function formValidation() {
         if (validateEduStatus()) {
             return validateFirstName() 
                    && validateLastName() 
                    && validatePhoneNumber() 
                    && validatePassword1() 
                    && validatePassword2();
         }
         return false;
      }
	  
      /************************************************************************************/
      /* Function: validateFirstName
      /* Condition: (a-zA-Z) or (') or (-) and contain at least 1 letter,
      /*             shouldn't be empty
      /************************************************************************************/
      function validateFirstName() {
        var elem = document.querySelector("#fName");
        var inputValue = elem.value.trim();
        var count = 0;
        var good = 0;
        var alpha = 0;

        document.getElementById("err-fName").innerHTML = "";

        // checks if the entry is an empty
        if (inputValue.length == 0) {      
           document.getElementById("err-fName").innerHTML = "<span id='x-err'>X</span> No input. Please enter your First Name.\n";
           elem.focus();
		   return false;
        }  
        // checks if the the entered name meets the requirements
        inputValue = inputValue.toUpperCase();   
        for (var i = 0; i < inputValue.length; i++) {
            if ((inputValue.charAt(i) >= "A" && inputValue.charAt(i) <= "Z") 
                || inputValue.charAt(i) == "'" || inputValue.charAt(i) == "-")
                good++;
            else 
                count++; 
                
            if (inputValue.charAt(i) >= "A" && inputValue.charAt(i) <= "Z")
                alpha++;
        }  
        // show the appropriate error message 
        if (count != 0 || alpha == 0) {
            document.getElementById("err-fName").innerHTML = "<span id='x-err'>X</span> You must enter at least one alphabetic letter and you can use only apostrophe(') or hyphen(-) characters.";
            elem.focus();
            return false;
        }
        return true;
      }

      /************************************************************************************/
      /* Function: validateLastName
      /* Condition: (a-zA-Z) or (') or (-) and contain at least 1 letter,
      /*             shouldn't be empty
      /************************************************************************************/
     function validateLastName() {
        var elem = document.querySelector("#lName");
        var inputValue = elem.value.trim();
        var count = 0;
        var good = 0;
        var alpha = 0;

        document.getElementById("err-lName").innerHTML = "";      

        // checks if the entry is an empty 
        if (inputValue.length == 0) {      
           document.getElementById("err-lName").innerHTML = "<span id='x-err'>X</span> No input! Please enter your Last Name.";
           elem.focus();
		   return false;
        }  
        // checks if the the entered name meets the requirements 
        inputValue = inputValue.toUpperCase();   
        for (var i = 0; i < inputValue.length; i++) {
            if ((inputValue.charAt(i) >= "A" && inputValue.charAt(i) <= "Z") 
                || inputValue.charAt(i) == "'" || inputValue.charAt(i) == "-")
                good++;
            else 
                count++; 
                
            if (inputValue.charAt(i) >= "A" && inputValue.charAt(i) <= "Z")
                alpha++;
        }  
        // show the appropriate error message 
        if (count != 0 || alpha == 0) {
            document.getElementById("err-lName").innerHTML = "<span id='x-err'>X</span> You must enter at least one alphabetic letter and you can use only apostrophe(') or hyphen(-) characters.";
            elem.focus();
            return false;
        }
        return true;
      }

      /************************************************************************************/
      /* Function: validatePhone
      /* Condition: must be present; 
      /*            must be in a format 999-999-9999 ('9' means any digit);
      /*            the area code(first 3 numbers) can NOT be all zeros;
      /*            the actual phone number can NOT be all zeros
      /************************************************************************************/
      function validatePhoneNumber() {

         var input = document.form1.phone.value.trim();
         var sum1 = 0;
         var sum2 = 0;
         var sum3 = 0;
         var notNumber = 0;
         
         document.getElementById("err-phone").innerHTML = "";

         if (input.length == 0) {
             document.getElementById("err-phone").innerHTML = "<span id='x-err'>X</span> No input! Please enter the phone number.";
             document.form1.phone.focus();
             return false;
         }
        // 1) checks the first part of the phone number
         for (var i = 0; i < 3; i++) {
             if (parseInt(input.charAt(i)) == input.charAt(i)) {
                 sum1 = sum1 + input.charAt(i);
             }
             else
                 notNumber++;
         }
         // 2) checks the second part of the phone number
         for (var i = 4; i < 7; i++) {
             if (parseInt(input.charAt(i)) == input.charAt(i)) {
                 sum2 = sum2 + input.charAt(i);
             }
             else
                 notNumber++;
         }
         // 3) checks the third part of the phone number
         for (var i = 8; i < 12; i++) {
             if (parseInt(input.charAt(i)) == input.charAt(i)) {
                 sum3 = sum3 + input.charAt(i);
             }
             else
                 notNumber++;
         }
         if (input.charAt(3) != "-" || input.charAt(7) != "-") {
             document.getElementById("err-phone").innerHTML = "<span id='x-err'>X</span> Enter ONLY numbers with the following format 999-999-9999.";             
             document.form1.phone.focus();
             return false; 
         }
         if (notNumber != 0){
             document.getElementById("err-phone").innerHTML = "<span id='x-err'>X</span> Enter ONLY numbers with the following format 999-999-9999.";
             document.form1.phone.focus();
             return false; 
         }
         if (sum1 == 0) {
             document.getElementById("err-phone").innerHTML = "<span id='x-err'>X</span> The area code CAN NOT be all zeros(0).";
             document.form1.phone.focus();
             return false; 
         }
         if ((sum2 + sum3) == 0) {
             document.getElementById("err-phone").innerHTML = "<span id='x-err'>X</span> The actual phone number CAN NOT be all zeros(0).";
             document.form1.phone.focus();
             return false; 
         }         
         return true; 
      } 

      /************************************************************************************/
      /* Function: validatePassword1
      /* Condition: must contain both upper and lower case characters,
      /*            at least 1 number;
      /*            at least 8 characters long;
      /*            the value of 2 fileds(passw & re-passw should be identical, 
      /*            unless one of them is an empty string)
      /************************************************************************************/
     function validatePassword1() {
        var elem = document.querySelector("#password1");
        var inputValue = elem.value.trim();
        var pass2 = document.querySelector("#password2");
        var pass2Value = pass2.value.trim();
        var lower = 0;
        var upper = 0;
        var number = 0;

        document.getElementById("err-pass1").innerHTML = "";

        // checking the length of the password
        if (inputValue.length < 8) {
            document.getElementById("err-pass1").innerHTML = "<span id='x-err'>X</span> Password should contain at least 8 characters.";
            document.form1.password1.focus();
            return false;
        }
        // checking the existence of at least 1 number
        var patt = new RegExp("[0-9]");
        if (patt.test(inputValue))
        number++;
        if (number == 0) {
            document.getElementById("err-pass1").innerHTML = "<span id='x-err'>X</span> Password should include at least 1 number.";
            document.form1.password1.focus();
            return false;
        }
        // checking the existence of lower case letter
        var patt = new RegExp("[a-z]");
        if (patt.test(inputValue))
        lower++;
        if (lower == 0) {
            document.getElementById("err-pass1").innerHTML = "<span id='x-err'>X</span> Password should include lower case character.";
            document.form1.password1.focus();
            return false;
        }
        // checking the existence of upper case letter
        var patt = new RegExp("[A-Z]");
        if (patt.test(inputValue))
        upper++;
        if (upper == 0) {
            document.getElementById("err-pass1").innerHTML = "<span id='x-err'>X</span> Password should include upper case character.";            
            document.form1.password1.focus();
            return false;
        }
        return true;
      }

      /************************************************************************************/
      /* Function: validatePassword2
      /* Condition: must contain both upper and lower case characters,
      /*            at least 1 number;
      /*            at least 8 characters long;
      /*            the value of 2 fileds(passw & re-passw should be identical, 
      /*            unless one of them is an empty string)
      /************************************************************************************/
     function validatePassword2() {
        var elem = document.querySelector("#password2");
        var inputValue = elem.value.trim();
        var pass1 = document.querySelector("#password1");
        var pass1Value = pass1.value.trim();
        var lower = 0;
        var upper = 0;
        var number = 0;

        document.getElementById("err-pass2").innerHTML = "";

        // checking the length of the password
        if (inputValue.length < 8) {
            document.getElementById("err-pass2").innerHTML = "<span id='x-err'>X</span> Password should contain at least 8 characters.";
            document.form1.password2.focus();
            return false;
        }
        // checking the existence of at least 1 number
        var patt = new RegExp("[0-9]");
        if (patt.test(inputValue))
        number++;
        if (number == 0) {
            document.getElementById("err-pass2").innerHTML = "<span id='x-err'>X</span> Password should include at least 1 number.";
            document.form1.password2.focus();
            return false;
        }
        // checking the existence of lower case letter
        var patt = new RegExp("[a-z]");
        if (patt.test(inputValue))
        lower++;
        if (lower == 0) {
            document.getElementById("err-pass2").innerHTML = "<span id='x-err'>X</span> Password should include lower case character.";
            document.form1.password2.focus();
            return false;
        }
        // checking the existence of upper case letter
        var patt = new RegExp("[A-Z]");
        if (patt.test(inputValue))
        upper++;
        if (upper == 0) {
            document.getElementById("err-pass2").innerHTML = "<span id='x-err'>X</span> Password should include upper case character.";
            document.form1.password2.focus();
            return false;
        }
        // checking passw1 with passw2
        if (inputValue != "" && pass1Value != "" && inputValue != pass1Value){
            document.getElementById("err-pass2").innerHTML = "<span id='x-err'>X</span> Two passwords do not match! Please retype again!.";
            document.form1.password2.focus();
            return false;
        }
        return true;
      }


      /************************************************************************************/
      /* Function:  validateEduStatus
      /* Condition: must select one of its menu options
      /************************************************************************************/
     function validateEduStatus() {
         var radio_num = document.form1.status.length;
         var onechecked = false;

         document.getElementById("err-EduStatus").innerHTML = "";
         
         for (var i = 0; i < radio_num; i++) {
             if (document.form1.status[i].checked == true){
                 onechecked = true;
             }
         }
         if (!onechecked) {
             document.getElementById("err-EduStatus").innerHTML = "<span id='x-err'>X</span> Please select an Education Status.";
             document.getElementById('radiogroup1').focus();
             return false;
         }
         return true;
     } 

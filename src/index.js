function submitData() {
    var name = document.getElementById("name").value; 
    var mobile = document.getElementById("mobile").value; 
    var hasNumber = /^[a-zA-Z ]{2,30}$/; 
    document.getElementById("success").innerHTML = ""; 
  
    if (name) {
      if (!hasNumber.test(name)) {
        document.getElementById("errorName").innerHTML =
          "*Name should contain only string";
        document.getElementById("name").style.borderColor = "red";
        
      } else {
        document.getElementById("name").style.borderColor = "black";
        document.getElementById("errorName").innerHTML = "";
      }
    } else {
      document.getElementById("errorName").innerHTML = "*Name can't be empty.";
      document.getElementById("name").style.borderColor = "red";
      
    }
  
   
    if (mobile) {
      if (isNaN(mobile)) {
        document.getElementById("errorMobile").innerHTML =
          "*Mobile number should be numeric";
        document.getElementById("mobile").style.borderColor = "red";
       
      } else {
        document.getElementById("mobile").style.borderColor = "black";
        document.getElementById("errorMobile").innerHTML = "";
      }
    } else {
      document.getElementById("errorMobile").innerHTML =
        "*Mobile number can't be empty.";
      document.getElementById("mobile").style.borderColor = "red";
      
    }
  
    if (name && mobile) {
      if (hasNumber.test(name) && !isNaN(mobile)) {
       
        if (mobile.length == 10) {
          document.getElementById("errorMobile").innerHTML = "";
          document.getElementById("errorName").innerHTML = "";
          document.getElementById("name").style.borderColor = "black";
          document.getElementById("mobile").style.borderColor = "black";
         
  
          document.getElementById("success").innerHTML =
            "Submitted Successfully - " + name + ":" + mobile + "."; t
        } else {
          document.getElementById("mobile").style.borderColor = "red";
          document.getElementById("errorMobile").innerHTML =
            "*Mobile number must be of 10 digits.";
  
        }
      }
    }
  }
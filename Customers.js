function changeBackground() {
    var selectElement = document.getElementById("countryselect");
    var selectedValue = selectElement.value;
    var bodyElement = document.body;
     if (selectedValue === "italy") {
      bodyElement.style.backgroundImage = "url('tt.jpeg')";
    } else if (selectedValue === "Croatia") {
      bodyElement.style.backgroundImage = "url('cc.jpg')";
    }
    else if(selectedValue==="Egypt"){
      bodyElement.style.backgroundImage="url('car.jpg')";
    }
    else if(selectedValue==="Germnay"){
      bodyElement.style.backgroundImage="url('gg.jpg')";
    }
   
  } 
  // function showForm() {
  //   var centerButton = document.getElementById("centerButton");
  //   centerButton.style.display = "none";
    
  //   var form = document.getElementById("form");
  //   form.classList.add("show");
  // }
  window.addEventListener("load", function() {
    var formContainer = document.querySelector(".form-container");
    formContainer.classList.add("slide-in");
  });
  
  
 



 
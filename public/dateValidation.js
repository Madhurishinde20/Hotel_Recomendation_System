let checkinInput=document.getElementById('checkin');
let checkoutInput=document.getElementById('checkout');
let errorText=document.getElementById('date-error');

function validateDate(){
     let checkinDate=new Date(checkinInput.value);
     let checkoutDate=new Date(checkoutInput.value);

     if(checkoutDate < checkinDate){
        errorText.textContent="Check-out must be after check-in.";
        checkoutInput.setCustomValidity("Check-out must be after check-in.");
     }
     else{
         errorText.textContent = "";
        checkoutInput.setCustomValidity("");
     }
    }
  checkinInput.addEventListener("change", validateDate);
  checkoutInput.addEventListener("change", validateDate);

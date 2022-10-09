
  // document. is DOM, Document Object Model
  // define variable name with let and 
  // store to  each variable name
  // document.querySelector() used for select the name of class
  // based on specific task

  
  let heightInput = document.querySelector('.height-input');  // input height value
  let weightInput = document.querySelector('.weight-input');  // input weight value
  let clear = document.querySelector('.btn-clear'); // clear screen
  let equal = document.querySelector('.btn-equal'); // calculate 
  let result = document.querySelector('.result'); // display range value 
  let statement = document.querySelector('.result-statement'); // display text statement
  let BMI, height, weight;
    

  // addEventListiner() used for what gonna happen when user click button
  // User put any value from input as value and store in variable
  // Calculated value and store in BMI and convert to string for display
  equal.addEventListener('click', ()=>{
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2);
    result.innerText = BMI;

    // decision making
    // text statement display depens on value of BMI
    if (BMI < 18.5) {
      statement.innerText = "Your BMI is underweight";
    }else if ((BMI > 18.5) && (BMI < 24.9)) {
      statement.innerHTML = "Your BMI is normal";
    }else if ((BMI > 25) && (BMI < 29.9)) {
      statement.innerHTML = "Your BMI is overweight";
    }else {
      statement.innerText = "You BMI is obese range";
    }

  });

  // Clear input field and output field
  clear.addEventListener('click', ()=>{
    heightInput.value = "";
    weightInput.value = "";
    result.innerText = "";
    statement.innerText = "";
  });
  
  // Clear input field only 
  function clearFields() {

    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";
  }


    
                    
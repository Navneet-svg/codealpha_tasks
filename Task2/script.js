// Step 3.1: Add value to the display

function addToDisplay(value) {

    const display = document.getElementById("display");

    display.value += value;

  }

  

  // Step 3.2: Clear the display

  function clearDisplay() {

    document.getElementById("display").value = "";

  }

  

  // Step 3.3: Delete the last character

  function deleteLast() {

    const display = document.getElementById("display");

    display.value = display.value.slice(0, -1);

  }

  

  // Step 3.4: Calculate the result

  function calculateResult() {

    const display = document.getElementById("display");

    try {

      // Use eval to calculate, but ensure safety

      display.value = eval(display.value);

    } catch (e) {

      display.value = "Error";

    }

  }

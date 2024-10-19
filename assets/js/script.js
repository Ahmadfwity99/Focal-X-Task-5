// Select the screen element for displaying calculations
const screen = document.querySelector(".screen");
let ans = null; // Variable to store the last answer

// Function to print input on the screen
function printOnScreen(input) {
    screen.value += input; // Append the input to the current screen value
}

// Function to clear the screen
function clearScreen() {
    screen.value = ""; // Set the screen value to an empty string
}

// Function to delete the last character from the screen
function deleteLast() {
    // If the screen shows "Error" or "undefined", reset the screen to an empty space
    if (screen.value == "Error" || screen.value == "undefined") {
        screen.value = " ";
    } else {
        // Remove the last character from the screen value
        screen.value = screen.value.slice(0, -1);
    }
}

// Function to append the last answer to the screen
function lastAns() {
    if (ans !== null) { // Check if there is a last answer stored
        screen.value += ans; // Append the last answer to the screen
    }
}

// Function to calculate the expression on the screen
function Calc() {
    try {
        // Replace trigonometric functions with Math functions for evaluation
        let expression = screen.value
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan');

        // Evaluate the modified expression using eval
        screen.value = eval(expression);
        ans = screen.value; // Store the result as the last answer
    } catch (error) {
        screen.value = "Error"; // Display "Error" if evaluation fails
    }
}

// Unit Converter functionality

const firstUnit = document.querySelector(".from"); // Select the unit to convert from
const numberOne = document.querySelector(".number-one"); // Select the input number
const secondUnit = document.querySelector(".to"); // Select the unit to convert to
const result = document.querySelector(".result"); // Select the result display

// Function to convert units based on user input
function convertUnit() {
    const inputNumber = parseFloat(numberOne.value); // Convert the input to a float
    if (isNaN(inputNumber)) {
        alert("Wrong Input, Please Enter a Number!"); // Alert if the input is not a number
    } else {
        let answer; // Variable to store the conversion result
        // Check the 'from' unit and perform the appropriate conversion
        if (firstUnit.value === "km") {
            if (secondUnit.value === "m") {
                answer = inputNumber * 1000; // km to m
            } else {
                answer = inputNumber * 100000; // km to cm
            }
        } else if (firstUnit.value === "m") {
            if (secondUnit.value === "km") {
                answer = inputNumber / 1000; // m to km
            } else {
                answer = inputNumber * 100; // m to cm
            }
        } else if (firstUnit.value === "cm") {
            if (secondUnit.value === "km") {
                answer = inputNumber / 100000; // cm to km
            } else {
                answer = inputNumber / 100; // cm to m
            }
        }
        result.value = answer; // Display the conversion result
    }
}

// Function to clear the unit converter input and result fields
function clearResult() {
    firstUnit.selectedIndex = 0; // Reset the 'from' unit selection to the first option
    secondUnit.selectedIndex = 0; // Reset the 'to' unit selection to the first option
    numberOne.value = ""; // Clear the input number
    result.value = ""; // Clear the result display
}
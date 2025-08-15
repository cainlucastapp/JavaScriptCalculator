
//ARRAY Keeps track of all calculations in a history log.
const history = [];

//Add Result To History
function addToHistory(number1, operation, number2, result){
    history.push(number1 + " " + operation + " " + number2 + " = " + result);
}

//Addition
function addition(number1, number2){
    let result = number1 + number2;
    addToHistory(number1, '+', number2, result);
    return result;
}

//Subtraction
function subtraction(number1, number2){
    let result = number1 - number2;
    addToHistory(number1, '-', number2, result);
    return result;
}

//Multiplication
function multiplication(number1, number2){
    let result = number1 * number2;
    addToHistory(number1, '*', number2, result);
    return result;
}

//Division
function division(number1, number2){
    let result = number1 / number2;
    addToHistory(number1, '/', number2, result);
    return result;
}  

//Display History / No Calculations Message
function displayHistory(){
        if (history.length === 0) {
        console.log("No calculations saved yet.");
    } else {
        console.log("Calculation History: " + history);
    }
}



// Test addition
console.log("Addition test:", addition(5, 3)); 
// Expected: 8

// Test subtraction
console.log("Subtraction test:", subtraction(10, 4)); 
// Expected: 6

// Test multiplication
console.log("Multiplication test:", multiplication(2, 6)); 
// Expected: 12

// Test division
console.log("Division test:", division(20, 4)); 
// Expected: 5

// Show history
displayHistory(); 
// Expected: ["5 + 3 = 8", "10 - 4 = 6", "2 * 6 = 12", "20 / 4 = 5"]

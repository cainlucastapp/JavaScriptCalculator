//History Log Array
const history = [];

//Add Result To History
function addToHistory(number1, operation, number2, result) {
    history.push(number1 +  operation + number2 + " = " + result);
}

//Check Inputs For Numbers And Symbols
function inputCheck (input) {
    //Convert Input To Number
    const number = Number(input);
    //Invalid Input
    if (isNaN(number)) {
        throw "Error: Invalid character used.";
    }
    //Input Valid
    return number;
}

//Addition
function addition(number1, number2) {
    let result = inputCheck(number1) + inputCheck(number2);
    addToHistory(number1, '+', number2, result);
    return result;
}

//Subtraction
function subtraction(number1, number2) {
    let result = inputCheck(number1) - inputCheck(number2);
    addToHistory(number1, '-', number2, result);
    return result;
}

//Multiplication
function multiplication(number1, number2) {
    let result = inputCheck(number1) * inputCheck(number2);
    addToHistory(number1, '*', number2, result);
    return result;
}

//Division
function division(number1, number2) {
    //Error Message For Divide By Zero
    if (number2 === 0) {
        const result = "Cannot divide by zero.";
        addToHistory(number1, '/', number2, result);
        return result;
    }
    //Valid Division
    let result = inputCheck(number1) / inputCheck(number2);
    addToHistory(number1, '/', number2, result);
    return result;
}  

//Display History / No Calculations Message
function displayHistory() {
    if (history.length === 0) {
        //No Calculations Message
        return "No calculations saved yet.";
    } else {
        //Show History
        return "Calculation History: " + history.join(", ");
    }
}
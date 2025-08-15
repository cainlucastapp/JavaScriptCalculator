
//ARRAY Keeps track of all calculations in a history log.
const history = [];

//Add Result To History
function addResultsToHistory(number1, operation, number2, result){
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
   

//Displays the calculation history upon request.
//A function to display the history or inform the user that they have no stored calculations
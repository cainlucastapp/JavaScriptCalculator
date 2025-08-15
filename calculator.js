
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
    addResultsToHistory(number1, '-', number2, result);
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
        console.log(history);
    }
}
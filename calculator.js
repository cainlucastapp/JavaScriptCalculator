
//History Log Array
const history = [];

//Add Result To History
function addToHistory(number1, operation, number2, result) {
    history.push(number1 +  operation + number2 + " = " + result);
}

//Addition
function addition(number1, number2) {
    let result = number1 + number2;
    addToHistory(number1, '+', number2, result);
    return result;
}

//Subtraction
function subtraction(number1, number2) {
    let result = number1 - number2;
    addToHistory(number1, '-', number2, result);
    return result;
}

//Multiplication
function multiplication(number1, number2) {
    let result = number1 * number2;
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
    let result = number1 / number2;
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


//Tests Left In For Instructor To Use


//Test No History
console.log(displayHistory());


//Test Addition: 5+3=8
console.log("Addition Test:", addition(5, 3)); 


//Test Subtraction: 10-4=6
console.log("Subtraction Test:", subtraction(10, 4)); 


//Test Multiplication: 2*6=12 
console.log("Multiplication Test:", multiplication(2, 6)); 


//Test Division: 20/4=5 
console.log("Division Test:", division(20, 4)); 


//Test Division: Divide By Zero
console.log("Division Test:", division(7, 0)); 


//Test Show History / Returns  5 + 3 = 8, 10 - 4 = 6, 2 * 6 = 12, 20 / 4 = 5, 7 / 0 = Cannot divide by zero.
console.log(displayHistory());
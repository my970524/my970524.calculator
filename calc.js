const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const equals = document.querySelector("equals");
const numbers = Array.from(document.querySelectorAll(".number"));
const operations = Array.from(document.querySelectorAll(".operation"));

let firstValue = "";
let firstDone;
let secondValue = "";
let secondDone;

//console.log(!firstDone); = true
//console.log(firstDone); = undefined

function handleNumberClick(event) {
    const clickedNum = event.target.innerText;
    
    if(!firstDone) {
        firstValue = firstValue + clickedNum;
        result.innerText = firstValue;
    } else {
        secondValue = secondValue + clickedNum;
        result.innerText = secondValue;
        secondDone = true;
    }
}

function operate() {
    const valueA = parseInt(firstValue, 10);
    const valueB = parseInt(secondValue, 10);
    switch (operation) {
        case "+":
            return valueA + valueB;
        case "-":
            return valueA - valueB;
        case "/":
            return valueA / valueB;
        case "*":
            return valueA * valueB;
        default:
            return;
    }
}

function calculate() {
    const result = operate();
    console.log(result);
}

function handleOperationClick(event) {
    const clickedOperation = event.target.innerText;
    
    if(!firstDone) {
        firstDone = true;
    }
    if(firstDone && secondDone) {
        calculate();
    }
    operation = clickedOperation;
    
}

numbers.forEach(function(number) {
    number.addEventListener("click", handleNumberClick);
});
operations.forEach(function(oper) {
    oper.addEventListener("click", handleOperationClick);
});
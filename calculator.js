const screen = document.querySelector(".Screen")

const btns = document.querySelectorAll("button")
let a;
let b;
let operator;
let result;
let internalbuffer;
let screenBuffer;
screen.textContent="0"

btns.forEach(button =>button.addEventListener("click", (e)=>{
    console.log(e.target.textContent)
    screenBuffer=e.target.textContent;

    
}) )
function populate(value){
    screen.textContent = value
}



function eventHandler(value){
  
}




function add(a,b){
    result =a +b;
    screen.textContent = result
    return result
}

function subtract(a,b){
    return a - b
} 
function multiply(a,b){
   return a * b
}

function divide(a,b){
   return a / b
}

function operate(operator, a, b){
    switch (operator){
        case "+": return add(a,b);
        case "-" : return subtract(a,b);
      	case "*" : return multiply(a,b);
      	case "/" : return divide(a,b);
    }
}
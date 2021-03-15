const display = document.querySelector('.display')
let buffer='0'
let runningTotal=0

let preoperator = null
const btns = document.querySelectorAll('.btn')
 btns.forEach(btn =>{btn.addEventListener('click', e => {
    handleImput(e.target.innerText)

})

})  




//action made for everyclick

function handleImput(value){
   if(isNaN(parseInt(value))){
            workOnSymbols(value);
   } else {
       workOnNumbers(value);
   }
   renderer();
}


// actions made every time a symbol is clicked

function workOnSymbols(value){
 if(value === 'A/C'){
    buffer='0'
    runningTotal=0
    preoperator = null
 } else if ( value === '+' ||value === '-'|| value === '/'||value === '%' || value === '*'){
    preoperator = value;
    runningTotal = parseFloat(buffer);
    buffer = '0'
    
}   else if (value === '←'){
        if(buffer.length > 1)
            buffer = buffer.slice(0, -1) 
}   else if (value === '.'){
    buffer += value;
 }  else if (value === '='){
        if(preoperator != null){
            console.log(`preop is ${preoperator}`)
            let intBuffer = parseFloat(buffer);
            console.log(intBuffer)
            operate(preoperator, runningTotal, intBuffer)

        } else{ 
            console.log('no preop yet')
        }
} 
}

// actions made every time a number is clicked

function workOnNumbers(value){
    if(buffer === '0'){
        buffer = value
       
    } else{
        buffer += value;
       
    }
}

function operate(operator,num,num2){
    if(operator == "+") {
        return add(num,num2)
    } else if (operator == "-"){
        return rest(num, num2)
    } else if (operator == "/"){
        return divide(num,num2)
    } else if (operator == "*"){
        return multiply(num,num2)
    }else if (operator == "%"){
        return percentage(num,num2)
    }
}
let renderer = () => display.textContent = buffer;

function add(num, num2){
   //runningTotal = 0;
  // intBuffer = 0
    return buffer = num+num2
}
function rest(num, num2){
    return buffer = num - num2
}
function multiply(num, num2){
    return buffer = num * num2
}
function divide(num, num2){
    if(num2 == 0){
        return buffer = `Error`
    }
    return buffer = num / num2
}
function percentage(num, num2){
    return buffer = (num * num2)/100
}
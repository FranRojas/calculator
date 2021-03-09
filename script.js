let total = 0
const display =  document.querySelector('.display');
const show = ()=>{
    console.log(btn)
}

const btn= document.querySelector('.btn').addEventListener('click',function(event){
    
        console.log(event.target.innerText)})

    
    




const addition = (a,b)=> {
    total= a+b;
    return display.textContent = total
}
const multiply = (a,b) => {
    total = a * b;
    return display.textContent = total
}
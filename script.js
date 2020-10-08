let arr = [];
let exp = [];
let str = '';
let value1=null,value2=null;
let curroper;

let expression = document.createElement('p');
let output = document.querySelector('.output-screen');
output.classList.add('answer');
output.appendChild(expression);

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function subtract(a,b){
    return a-b;
}

function takeInput(){

    let numbers = document.querySelectorAll('.number');

    numbers.forEach(function(number){
        number.addEventListener('click', (e)=>{
            if(number.textContent==='.'){
                if(arr.indexOf('.') === -1)
                    arr.push(number.textContent);  
            }else
                arr.push(Number(number.textContent));

            console.log(number.textContent);
        });
    });

}

function operatorInput(){

    let operators = document.querySelectorAll('.operator');
    
    operators.forEach(function(operator){
        operator.addEventListener('click',(e)=>{
            if(arr.indexOf('.') > -1)
                exp.push(parseFloat(arr.join('')));
            else
                exp.push(Number(arr.join('')));

            arr = [];

            if(exp.length==2){
                if(curroper=='+')
                    exp[0] = add(exp[0],exp[1]);
                else if(curroper=='-')
                    exp[0] = subtract(exp[0],exp[1]);
                else if(curroper=='x')
                    exp[0] = multiply(exp[0],exp[1]);
                else if(curroper=='/')
                    exp[0] = divide(exp[0],exp[1]);
                else if(curroper=='^')
                    exp[0] = Math.pow(exp[0],exp[1]);
                    
                str = exp[0].toString(10);
                exp.pop();
            }

            curroper = operator.textContent;        

            console.log(exp);
        })
    })
}

function createOutput(){
    const buttons = document.querySelectorAll('.but');
    
    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            if(button.textContent==='clear'){
                str = '';
                expression.innerHTML = str;
                exp = [];
            }else if(button.textContent==='='){
                console.log('solve');
                expression.innerHTML = str;
            }else if(button.textContent==='.'){ 
                if(str.indexOf('.') === -1){
                    str = str + button.textContent;
                    expression.innerHTML = str;
                }
            }else{
                str = str + button.textContent;
                expression.innerHTML = str;
            }          
        })      
    })
}


takeInput();
operatorInput();
createOutput();
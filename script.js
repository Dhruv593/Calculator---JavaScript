const display = document.getElementById('display')

function clearDisplay(){
    display.innerText = '0'
}

function deleteLast(){
    if(display.innerText.length === '1'){
        display.innerText = '0'
    } else {
        display.innerText = display.innerText.slice(0, -1)
    }
}

function appendNumber(number){
    if(display.innerText === '0'){
        display.innerText = number
    } else {
        display.innerText += number
    }
}   

function appendOperator(operator){
    if(!isNaN(display.innerText.slice(-1))){
        display.innerText += operator
    }
}

function appendDot(){
    if(!display.innerText.includes('.')){
        display.innerText += '.'
    }
}

function calculate(){
    try{
        display.innerText = eval(display.innerText)
    } catch (error) {
        display.innerText = 'Error'
    }

}
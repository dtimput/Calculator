const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let onScreen = [0];

function updateDisplay(e){
    button = e.target.textContent;
    if(onScreen[0] == 0 && !isNaN(button)){
        onScreen[0] = button;
        display.textContent = onScreen;
    }else if((!isNaN(button) && onScreen.length <= 10) || (button == '.' && !onScreen.includes('.') && onScreen.length <= 10)){
        onScreen.push(button);
        display.textContent = onScreen.join('');
    }else if(button == 'CLEAR'){
        clearDisplay();
    }else if(button == 'DELETE'){
        deleteDisplay();
    }
}

function clearDisplay(){    
    onScreen = [0];
    display.textContent = onScreen;
}

function deleteDisplay(){
    if(onScreen.length > 1){
        onScreen.pop();
        display.textContent = onScreen.join('');
    }else{
        onScreen = [0];
        display.textContent = onScreen;
    }
    
}

buttons.forEach(button => button.addEventListener('click', updateDisplay));
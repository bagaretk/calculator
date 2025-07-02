const sum = function(a,b) {
    return a+b;
}

const subtract = function(a,b){
    return a-b;
}

const multiply = function(a, b){
    return a*b;
}
const divide = function(a,b){
    //dat return la eroare daca b e 0
    if(b === 0){
        alert("You can`t devide with 0");
    } else {
        return a/b;
    }
}

const operate = function(a, b, sign){
    switch(sign){
        case `+`:
            return sum(a,b);
        case `-`:
            return subtract(a,b);
        case `*`:
            return multiply(a,b);
        case `/`:
            return divide(a,b);
        default:
            return "error";
    }
}

function buttonPressed(input){
    const calcTextBox= document.querySelector("#panel_calculate_text");
    if(!Number.isInteger(input)){
        sign = input;
    } else {
        if(!Number.isInteger(displayText[displayText.length - 1])) {
            if(!a) {
                a = a * 10 + input;
            }
        }
    }
    displayText[displayText.length] = input;
    calcTextBox.textContent = displayText.join("");

}

let displayText = []
let a, b, sign;


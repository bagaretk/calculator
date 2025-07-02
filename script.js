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
    if(input == "AC"){
        displayText = "";
        a = null; b = null; sign = null;
        calcTextBox.textContent = "";
        return;
    }
    if(input === "=") {
        a = operate(a,b,sign);
        b = null;
        sign = null;
        calcTextBox.textContent = `${a}`;
        return;
    }

    if(!Number.isInteger(input)) {
        if(a && b){
            a = operate(a,b,sign);
            b = null;
            //display doar a, rezultatul
        }
        sign = input;
        calcTextBox.textContent = `${a} ${sign}`;
    } else {
        if(!sign) { //if we don t have a sign, we input the first number
            if(!a) {    //if a does not exist, we create it
                a = 0;
            }
            a = a * 10 + input;
            calcTextBox.textContent = `${a}`;

        } else { //if sign exists, we input the second number
            if(!b){
                b = 0;
            }
            b = b * 10 + input;
            calcTextBox.textContent = `${a} ${sign} ${b}`;
        }
    }
}


let displayText = []
let a, b, sign;


let input = document.getElementById('inputField');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.map((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.textContent == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.textContent == 'DEL') {
            string = string.substring(0, string.length-1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
       
    })
})
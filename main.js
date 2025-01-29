//note created 20th / 29th January 2025. From scratch - HTML, CSS and JavaScript.

const button = document.getElementById("check_btn");

button.onclick = palindrome;

        
function palindrome(){
    const username = document.getElementById("username_input").value;
    const display = document.getElementById("display");
    const word = document.getElementById("yourWord_input").value;

        if(word === " "){
            display.textContent = "Please enter a value"
        }
        
        else {

        for(let i = 0; i < word.length; i++){

        let cleanInput = word.replace(/[^A-Z-a-z-0-9]/g, '').toLowerCase();

        let reversedInput = cleanInput.split('').reverse().join('');


        if(cleanInput === reversedInput){
            display.textContent = `${cleanInput} is a Palindrome.\n Well done ${username}!👏🏽`
        }

        else {
            display.textContent = `${cleanInput} is not a Palindrome. \n Try Again.. \n You got this ${username}!🤞🏽`
        }
    
        }
    }
}

function cleardisplay(){
    display.textContent = "Enter your chosen value above to check if it is a palindrome - Goodluck!"
    document.getElementById("yourWord_input").value = " ";
}
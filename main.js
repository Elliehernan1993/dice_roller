// Variables
const textbox = document.querySelector("#textbox");
const rollButton = document.querySelector("#roll-button");
const showButton = document.querySelector("#show-rolls");
const total = document.querySelector("#total");
const allRolls = document.querySelector("#all-rolls");
let dieRolls = []

rollButton.addEventListener("click", function () {
    
    let value = Number(textbox.value)
    let dice = 0;
    
    for(let i = 0; i < value; i++) {
        dice = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(dice);
    };
    
    let sumOfDice = 0;
        for (const dice of dieRolls) {   
        sumOfDice = sumOfDice + dice;
         };
    
    total.innerHTML = "Total: " + sumOfDice;
});


showButton.addEventListener("click", function () {  
    
    let numberRolled = 0;
    for (let i = 0; i < dieRolls.length; i++) {
    
        numberRolled = dieRolls[i];
        let newDiceString = '<li>' + numberRolled + '</li>';
        allRolls.innerHTML += newDiceString;
    }
});



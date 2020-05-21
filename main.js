// Variables
const textbox = document.querySelector("#textbox");
const rollButton = document.querySelector("#roll-button");
const showButton = document.querySelector("#show-rolls");
const total = document.querySelector("#total");
const allRolls = document.querySelector("#all-rolls");
let dieRolls = []
 // Push the result of each dice roll onto the array

// Event Listeners
rollButton.addEventListener("click", function () {
    //Get value in textbox
    let value = Number(textbox.value)
    let dice = 0;
    // Roll dice -> x many times, where x is value
    for(let i = 0; i < value; i++) {
        dice = Math.floor(Math.random() * 6) + 1;
        // Push the result of each dice roll onto the array
        dieRolls.push(dice);
    };
    
    let sumOfDice = 0;

    for (const dice of dieRolls) {
        // Add values in array
        sumOfDice = sumOfDice + dice;
    };
    // Display sum of all dice rolls in total area
    total.innerHTML = "Total: " + sumOfDice;
});


showButton.addEventListener("click", function () {  
    // loop over dieRolls array
    let numberRolled = 0;
    for (let i = 0; i < dieRolls.length; i++) {
        // set numberRolled to that element
        numberRolled = dieRolls[i];
        // create a new li element
        let newDiceString = '<li>' + numberRolled + '</li>';
        // add li element on to ol element
        allRolls.innerHTML += newDiceString;
    }
});



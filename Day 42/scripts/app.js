let selectedPlayerId = 0;
const players= [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    }
]

// Select the backdrop and modal Element
const backdropElement = document.getElementById("backdrop")
const playerConfigOverlayElement = document.getElementById("config-overlay")
const formElement = document.querySelector("form")
const configErrorElement = document.getElementById("config-errors")


//  SELECT THE BUTTONS
// edit player name
const player1EditBtnElement = document.getElementById("edit-player-1-btn");
const player2EditBtnElement = document.getElementById("edit-player-2-btn");
// close config button
const closeConfigBtnElement  = document.getElementById("close-config-button");

player1EditBtnElement.addEventListener('click', openPlayerConfig);
player2EditBtnElement.addEventListener('click', openPlayerConfig);

closeConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig)
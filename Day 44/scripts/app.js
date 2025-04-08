let gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let selectedPlayerId = 0;
let activePlayer = 0;
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

const startGameBtnElement = document.getElementById("start-game-btn");
const startGameErrorsElement = document.getElementById("start-game-errors");
const activePlayerNameElement = document.getElementById("active-player-name")
const activeGameElement = document.getElementById("active-game");

const noTilesLeftElement = document.getElementById("no-possible-tiles")
const gameOverElement = document.getElementById("game-over")
const winnerNameElement = document.getElementById("winner-name")
const turnDisplayElement = document.getElementById("turn-display")

const gameBoardElement = document.getElementById("game-board")
for (let i=0; i<9; i++){
    gameBoardElement.children[i].addEventListener('click',tileClicked);
}

player1EditBtnElement.addEventListener('click', openPlayerConfig);
player2EditBtnElement.addEventListener('click', openPlayerConfig);

closeConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig)

startGameBtnElement.addEventListener('click', startNewGame)

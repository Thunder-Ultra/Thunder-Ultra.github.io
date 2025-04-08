
function startNewGame(){
    if ((!players[0].name) || (!players[1].name)){
        // alert("Enter valid Player Names for both Players!");
        startGameErrorsElement.style.display="block";
        return;
    }
    activePlayerNameElement.textContent=players[activePlayer].name
    startGameErrorsElement.style.display= "none";
    activeGameElement.style.display = "block";
}

function switchPlayer(){
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
    activePlayerNameElement.textContent=players[activePlayer].name
}

function gameOver(){
    turnDisplayElement.style.display="none";
    winnerNameElement.textContent=players[activePlayer].name;
    gameOverElement.style.display="block";
    for (let i=0; i<9; i++){
        gameBoardElement.children[i].removeEventListener('click',tileClicked);
    }
}

function tileClicked(event){
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col-1;
    const selectedRow = selectedField.dataset.row-1;

    if (gameData[selectedRow][selectedColumn]){
        alert("This tile is already occupied!!")
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled")


    gameData[selectedRow][selectedColumn] = activePlayer+1;

    // first check the selected row
    let winner=1
    for (let col=0; col<3; col++){
        if (gameData[selectedRow][col]!=activePlayer+1){
            winner=0;
            break;
        }
    }
    if (winner){
        gameOver();
    }

    // second check the selected row
    winner=1
    for (let row=0; row<3; row++){
        if (gameData[row][selectedColumn]!=activePlayer+1){
            winner=0;
            break;
        }
    }
    if (winner){
        gameOver();
    }

    // Then check if the diagonal needs to be checked
    // 00 11 22
    winner=1
    for (let row=0, col=0; row < 3, col<3; row++, col++){
        if (gameData[row][col]!=activePlayer+1){
            winner=0;
            break;
        }
    }
    if (winner){
        gameOver();
    }
    // 02 11 20 
    winner=1
    for (let row=0, col=2; row < 3, col > -1; row++, col--){
        if (gameData[row][col]!=activePlayer+1){
            winner=0;
            break;
        }
    }
    if (winner){
        gameOver();
    }
    


    
    switchPlayer();



}
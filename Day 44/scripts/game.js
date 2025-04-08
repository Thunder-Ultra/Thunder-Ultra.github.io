
function startNewGame(){
    if ((!players[0].name) || (!players[1].name)){
        // alert("Enter valid Player Names for both Players!");
        startGameErrorsElement.style.display="block";
        return;
    }

    gameData = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]

    for (const children of gameBoardElement.children){
        children.addEventListener('click',tileClicked);
        children.className=''
        children.textContent='';
    }
    noTilesLeftElement.style.display='none';
    gameOverElement.style.display='none';
    turnDisplayElement.style.display='block';
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

    console.log("game over check will commence!")
    if (checkForGameOver(selectedRow,selectedColumn)){
        gameOver();
        return;
    }
    console.log("game over check done!")
    if (!checkForFreeTiles()){
        return;
    }
    console.log("free tile check done!")
    switchPlayer();
}

function checkForGameOver(selectedRow,selectedColumn) {
    // first check the selected row
    let winner=1
    for (let col=0; col<3; col++){
        if (gameData[selectedRow][col]!=activePlayer+1){
            winner=0;
            break;
        }
    }
    if (winner){
        for (let tile=selectedRow; tile<selectedRow+3; tile++){
            gameBoardElement.children[tile].classList.add("winner-tile");
        }
        return 1;
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
        for (let tile=selectedColumn; tile<9; tile+=3){
            gameBoardElement.children[tile].classList.add("winner-tile");
        }
        return 1;
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
        for (let row=0, col=0; row < 3, col<3; row++, col++){
            gameBoardElement.children[row*3+col].classList.add('winner-tile')
        }
        return 1;
    }
    // 02 11 20 
    winner=1
    for (let row=0, col=2; row < 3, col > -1; row++, col--){
        if (gameData[row][col]!=activePlayer+1){
            winner=0;
            break;
        }
    }
    if (winner){for (let row=0, col=2; row < 3, col > -1; row++, col--){
        gameBoardElement.children[row*3+col].classList.add('winner-tile')
    }
        return 1;
    }

    return 0;
}

function checkForFreeTiles() {
    for (let i=0; i<3; i++){
        for (let j=0; j<3; j++){
            if (!gameData[i][j]){
                return 1;
            }
        }
    }
    turnDisplayElement.style.display="none";
    for (let i=0; i<9; i++){
        gameBoardElement.children[i].removeEventListener('click',tileClicked);
    }
    noTilesLeftElement.style.display='block'
    return 0;
}
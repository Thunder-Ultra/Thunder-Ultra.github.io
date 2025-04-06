function openPlayerConfig(event) {
    selectedPlayerId = +event.target.dataset.playerid;
    if (players[selectedPlayerId-1].name){
        formElement.firstElementChild.firstElementChild.textContent = players[selectedPlayerId-1].name;
    } else {
        formElement.firstElementChild.firstElementChild.textContent = "PLAYER NAME";
    }
    backdropElement.style.display="block";
    playerConfigOverlayElement.style.display="block";
}

function closePlayerConfig() {
    backdropElement.style.display="none";
    playerConfigOverlayElement.style.display="none";
    formElement.firstElementChild.classList.remove("error"); // To remove the error indication of player name and input box
    configErrorElement.textContent='';  // To remove the invalid input msg when the config window is closed
    formElement.firstElementChild.children[1].value=''; // To remove the input value when the backdrop is clicked
}

function savePlayerConfig(event) {
    event.preventDefault();
    // console.log(event);
    // new object formData created with the blueprint of event.target (which is the form element) using the FormData Function
    let formData = new FormData(event.target);
    // Access the playername value submited in the form
    const enteredPlayerName = formData.get('playername').trim(); // To remove the excess whitespace in the start and end of the string
    // console.log(enteredPlayerName)
    if (!enteredPlayerName) {
        configErrorElement.textContent="Please enter a valid name!";
        event.target.firstElementChild.classList.add('error')
        return;
    }

    // console.log("player-"+selectedPlayerId+"-data")
    const selectedPlayerDataElement = document.getElementById("player-"+selectedPlayerId+"-data");
    selectedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[selectedPlayerId-1].name=enteredPlayerName;

    closePlayerConfig();
}
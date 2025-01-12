const userInput = document.getElementById('product-name')
const charsLeftDisplay = document.getElementById('characters-left')

const maxAllowedChars = userInput.maxLength;


function setCharsLeft(event) {
    const productName = event.target.value
    const charsLeft = maxAllowedChars-productName.length
    
    charsLeftDisplay.textContent = charsLeft
}

userInput.addEventListener('input',setCharsLeft)
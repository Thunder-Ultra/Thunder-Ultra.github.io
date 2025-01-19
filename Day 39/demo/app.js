const userInput = document.getElementById('product-name')
const charsLeftDisplay = document.getElementById('characters-left')

const maxAllowedChars = userInput.maxLength;

document.body.inser
function setCharsLeft(event) {
    const productName = event.target.value
    const charsLeft = maxAllowedChars-productName.length
    
    charsLeftDisplay.textContent = charsLeft

    if (charsLeft === 0) {
        charsLeftDisplay.classList.add('error')
        userInput.classList.add('error')
    } else if (charsLeft <=10) {
        charsLeftDisplay.classList.add('warning')
        userInput.classList.add('warning')
        charsLeftDisplay.classList.remove('error')
        userInput.classList.remove('error')
    } else {
        charsLeftDisplay.classList.remove('warning')
        userInput.classList.remove('warning')
        charsLeftDisplay.classList.remove('error')
        userInput.classList.remove('error')
    }
}

userInput.addEventListener('input',setCharsLeft)

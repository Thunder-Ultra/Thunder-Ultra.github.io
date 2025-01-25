// First Example : Calculate SUM
const calcSumButtonElement = document.querySelector('#calculator button')
const userInputElement = document.getElementById('user-number')
const displaySumElement = document.getElementById('calculated-sum')

function calculateSum() {
    userNumber = userInputElement.value
    if (userNumber==='') {
        alert('Invalid Input')
        return
    }
    let sum=0

    for (let currentNo=0; currentNo<=userNumber; currentNo++) {
        sum += currentNo
    }

    displaySumElement.textContent = sum
    displaySumElement.style.display='block'
}

calcSumButtonElement.addEventListener('click',calculateSum)

// Second Example : Highlight links
const highlightButtonElement = document.querySelector("#highlight-links button")
const linkElementList = document.querySelectorAll("#highlight-links a")

function highlightAllLinks() {
    for (const linkElement of linkElementList) {
        let shouldHighlight=true
        for (const current of linkElement.classList){
            if (current === 'highlight'){
                shouldHighlight = false
                break
            }
        }
        if (shouldHighlight){
            linkElement.classList.add('highlight')
        } else {
            linkElement.classList.remove('highlight')
        }
    }
}

highlightButtonElement.addEventListener('click', highlightAllLinks)

// Third Example : Display User Data
const dummyUserData = {
    firstName: 'Tuchar',
    lastName: 'Das',
    age: 21
}

const displayUserDataButtonElement = document.querySelector('#user-data button')

function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data')
    outputDataElement.textContent = ''

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li')
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key]
        newUserDataListItemElement.textContent = outputText
        outputDataElement.append(newUserDataListItemElement)
    }
}

displayUserDataButtonElement.addEventListener('click',displayUserData)

// Statistics / Roll the Dice
const rollDiceButtonELement = document.querySelector('#statistics button')

function rollDice(){
    return Math.floor( Math.random()*6 ) + 1
}

function deriveNumberOfDiceRolls() {
    const targetNoInputElement = document.getElementById('user-target-number')
    const diceRollsListElement = document.getElementById('dice-rolls')

    const enteredNo = targetNoInputElement.value
    diceRollsListElement.innerHTML = ''

    let hasRolledTargetNumber = false
    let numberOfRolls = 0

    while (!hasRolledTargetNumber){
        const rolledNumber = rollDice()
        // if (rolledNumber == enteredNo) {
        //     hasRolledTargetNumber = true
        // }
        numberOfRolls++
        const newRollListElement = document.createElement('li')
        const outputText = 'Roll '+numberOfRolls+': '+rolledNumber
        newRollListElement.textContent = outputText
        diceRollsListElement.append(newRollListElement)
        hasRolledTargetNumber = (rolledNumber == enteredNo) // As the condition will result an boolean required 
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls')
    const outputTargetNumberElement = document.getElementById('output-target-number')

    outputTargetNumberElement.textContent = enteredNo
    outputTotalRollsElement.textContent = numberOfRolls
}

rollDiceButtonELement.addEventListener('click', deriveNumberOfDiceRolls)

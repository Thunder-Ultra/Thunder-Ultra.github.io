let paragraphElement = document.body.firstElementChild;
let inputElement = document.querySelector('input')

function changeParagraphText(event) {
    paragraphElement.textContent = 'Clicked'
    console.log('Click Me! is clicked')
    console.log(event)
}

paragraphElement.addEventListener('click',changeParagraphText);

function retrieveUserInput(event)
{
    let enteredText = event.target.value
    // console.log(inputElement.value.length)
    // console.log(enteredText.length)
    console.log(event.data)
    // console.log(event)
}

inputElement.addEventListener('input',retrieveUserInput)
console.dir(document);

// document.body.children[1].children[0].href='https://www.google.com';


// let anchorElement = document.getElementById('external-link')
let anchorElement = document.querySelector("a")
anchorElement.href='https://www.academind.com'

// STEPS TO INSERT NEW ELEMENT IN A PARENT ELEMENT
// 1. Create

let newAnchorElement = document.createElement('a')

// 2. Fill

newAnchorElement.textContent = 'This leads to GOOGLE!!!'
newAnchorElement.href = 'www.google.com'

// 3. Get

let parentElement = document.querySelector('p')

// 3. Add

parentElement.append(newAnchorElement)
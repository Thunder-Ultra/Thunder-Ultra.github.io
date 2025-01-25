// console.dir(document);

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


// STEPS TO REMOVE AN ELEMENT FROM A PARENT ELEMENT
// 1. Get

let firstH1Element = document.querySelector('h1');

// 2. Remove

// firstH1Element.remove(); // If building only for modern browsers, this is enough!!!

firstH1Element.parentElement.removeChild(firstH1Element); // Also works in older browsers


// MOVING ELEMENTS
// 1. Get target Element

let firstParagraph = document.querySelector('p');

// 2. Get Parent

firstParagraph.parentElement

// 3. Move
firstParagraph.parentElement.append(firstParagraph)

firstParagraph.innerHTML = 'This is <strong>Data</strong>'
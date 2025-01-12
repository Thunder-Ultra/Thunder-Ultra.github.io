// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

let h1Element = document.body.children[0]
h1Element = document.body.firstElementChild
console.dir(h1Element)

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

let h1Parent = h1Element.parentElement
console.dir(h1Parent)
// BONUS
let h1Sibling = h1Element.nextElementSibling
console.dir(h1Sibling)

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let h1ElementId = document.getElementById('welcome-message')
console.dir(h1ElementId)

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice

// let pSecondElement = document.querySelectorAll('p')
// console.dir(pSecondElement)
// console.dir(pSecondElement[1])

let pSecondElement = document.querySelector('.link')
console.dir(pSecondElement)

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

pSecondElement.textContent = 'This is not a link'
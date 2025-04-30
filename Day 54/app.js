function sumUp(...numbers){
    let result = 0;
    for ( const number of numbers){
        result += number;
    }

    return result;
}

function greetUser(username= "user") {
    console.log(`Hello ${username}!`)   // Template Literals ( like formated string in Python )
}

console.log(sumUp(2,3,1,4,6));

greetUser("Tuchar");
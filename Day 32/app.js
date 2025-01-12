let age = 32;
let username = 'Tuchar';
let hobbies = [
    "Calisthenics", 
    "Cooking", 
    "Coding"
];
let job = { 
    title: "Developer", 
    place: "New Delhi", 
    salary: 50000 
};

let adultYears;

function calculateAdultYears(userage) {
    let result;
    result =  userage - 18;
    return result;
}

adultYears = calculateAdultYears(age);
console.log(adultYears);

age=45;

adultYears = calculateAdultYears(age);
console.log(adultYears);
 
let person = {
    name:'Max',
    greet() {
        console.log('Hello!');
    }
}

person.greet();
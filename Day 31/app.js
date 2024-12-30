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
alert(adultYears);

age=45;

adultYears = calculateAdultYears(age);
alert(adultYears);
 

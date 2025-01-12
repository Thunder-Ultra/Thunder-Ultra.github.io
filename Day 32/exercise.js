// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

let nameOnlineCourse='Web Development with JavaScript';
let priceOnlineCourse=200;
let mainGoals=[
    'Learn JavaScript',
    'Learn Web Development',
    'Learn React'
];

// alert(nameOnlineCourse);
// alert(priceOnlineCourse);
// alert(mainGoals);

let onlineCourse = { 
    name:'Web Development with JavaScript',
    price: 200,
    mainGoals: [
        'Learn JavaScript',
        'Learn Web Development',
        'Learn React'
        ]
};

// alert(onlineCourse.name);
// alert(onlineCourse.price);
// alert(onlineCourse.mainGoals);

// alert(onlineCourse.mainGoals[1]);

function accessElementByIdentifier(arrayIndex,array=onlineCourse.mainGoals)
{
    return array[arrayIndex];
}

alert( accessElementByIdentifier(0) )

let totalTime_Minutes;

// EXTRA 
// totalTime_Minutes = 57 + 45 + 49 + 39 + 54 + 49 + 46 + 49 + 44 ;

// alert("Total Time needed " + (totalTime_Minutes-(totalTime_Minutes%60))/60 + "hrs and " + totalTime_Minutes%60 + "mins");
// totalTime_Minutes = totalTime_Minutes/1.5
// alert("Total Time needed if i speed up 1.5x " + (totalTime_Minutes-(totalTime_Minutes%60))/60 + "hrs and " + totalTime_Minutes%60 + "mins");
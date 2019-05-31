// USING THE CONSOLE
/*  console.log('Hello World!')
console.log(1233454)
console.log(true)
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('This is an error');
console.clear();
console.warn('This is a Warning');
*/

// USING VARIABLE
// Three possible way of declaring a javascript variable (var, let, const)
// You can reassigned variables if using only 'var' and 'let'
// variable should only include (letters, numbers, _, or $).
//variable can not start with a number

/* //best format for creating a variable example: 
var firstName = 'John'; // Camel Case (MOST RECOMMENDED)
var first_name = 'Rob'; // Underscore
var FirstName = 'John'; // Pascal Case
var firstname = 'John'; // Lower Case */

// DECLARING VARIABLES USING LET.
// let works very similar to var

//CONST
// unlike var and let, const value can not reassign, or left undefined(must assign value)

//EXPLAINING DATA TYPE IN JAVASCRIPT
/* There are two data types in js 
    PRIMITIVE DATA TYPE: stored directly in the location the variable
    accesses Stored on the stack.

    Six (6) primitive data types
    1. String
    2. Numbers
    3. Boolean
    4. Null
    5. Undefined
    6. Symbols (ES6)


    REFERENCE DATA TYPES: Accessed by reference
    Objects that are stored on the heap
    A pointer to a location in Memory.

    Reference data type / objects
    1. Arrays
    2. Objects Literals
    3. Functions
    4. Dates
    5. Anything else...
*/

/*
//TEMPLATE LITERALs 
const name = 'John';
const age = 28;
const job = 'Web Developer';
const city = 'Miami';

let html;

function greeting(){
    return 'Hello my name is ' + name    
}
/// Without template strings (es5)
html  = '<ul>'+
            '<li>Name: ' + name +'</li>'+
            '<li>Age: ' + age +'</li>'+
            '<li>Job: ' + job +'</li>' +
            '<li>City: ' + city +'</li>'
        '</ul>'

//With template strings (es6)
html = `
    <ul>
    <li> Name: ${name}</li>
    <li> Age: ${age}</li>
    <li> Job: ${job}</li>
    <li> City: ${city}</li>
    <li> ${2+2}</li>
    <li> ${greeting()}</li>
    </ul>
`;
document.body.innerHTML = html
*/

/*
//SWITCHES
//switches are different way of doing conditional statement (if, elss if, else)
// much easier.
const color =  'red';
switch (color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is Blue');
        break;
    case 'green':
        console.log('Color is Green')
        break;
    default:
        console.log('Color is not red, blue, or red')
        break;
}

// switch conditonal for days
let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday'
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
}
console.log(`Today is ${day}`);


// switch conditional for months
let month;
switch(new Date().getMonth()){
    case 0:
        month = 'January';
        break;
    case 1:
        month = 'February';
        break;
    case 2:
        month = 'March';
        break;
    case 3:
        month = 'April';
        break;
    case 4:
        month = 'May';
        break;
    case 5:
        month = 'June';
        break;
    case 6:
        month = 'July';
        break;
    case 7:
        month = 'August';
        break;
    case 8:
        month = 'September';
        break;
    case 9:
        month = 'October';
        break;
    case 10:
        month = 'November';
        break;
    case 11:
        month = 'December';
        break;
}
console.log(`We are in the month of ${month}`)
*/

/*
//FUNCTION DECLARATIONS AND EXPRESSIONS

//Function Declaration
function greet(firstName = 'John', lastName = 'Doe'){
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Andral', 'Orelus'));


// Function expresssions
const square = function(x) {
    return x*x
};
// console.log(square(8))

// Immidiately Invokable Function Expressions  - IIFEs
(function(name = 'Bob'){
    console.log('Welcome Mr. ' + name)
})('Orelus');

//Property Methods
const todo = {
    add: function(){
        console.log('ADD TODO....');
    },
    edit: function(id){
        console.log(`EDIT TODO ... ${id}`);
    },
}
todo.delete = function(){
    console.log('Delete todo...')
}
todo.add();
todo.edit('A lot more');
todo.delete();
*/

//GENERAL LOOPS



//WINDOW METHODS / OBJECTS / PROPERTIES
//ALERT
//alert('Hello World')

//PROMPT
// const input  = prompt('Type anything inside');
// alert(input)


//CONFIRM
// if (confirm('Are you sure?')){
//     console.log('YES');
// }
// else {
//     console.log('NO');
// }


// let val;
// Outter height and width
// val = window.outerHeight;
// val = window.outerWidth;

// Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

//Scroll points
// val = window.scrollX;
// val = window.scrollY;

// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Navigator Object
// val = window.navigator;
// val = window.navigator.platform;

// console.log(val);

/* const colorChange = document.getElementById('text');
colorChange.style.color = 'red';
colorChange.style.padding = '10px'
colorChange.style.border = 'solid 2px green'
colorChange.style.width = '50%'
colorChange.style.margin = 'auto'
colorChange.style.textAlign = 'center'
colorChange.style.background = 'yellow' */


//CREATE ELEMENTS
/* const li  = document.createElement('li');
// Add Class name
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// Add Attribute
li.setAttribute('title', 'A new item');
// Create text node and append
li.appendChild(document.createTextNode('Hello World'));
// Append li as child to ul.
document.querySelector('.collection').appendChild(li);

console.log(li); */



/* //REPLACE ELEMENTS
// create the element
const newHeading = document.createElement('h2');
newHeading.className = 'h3-class';
newHeading.id = "color";
newHeading.setAttribute('title', 'Heading 3');
newHeading.appendChild(document.createTextNode("I love JavaScript"))
// Get the old heading
oldHeading = document.getElementById('title');
// Grab the parent element
elementReplace = document.querySelector('.replace_element');
elementReplace.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENTS
const list = document.querySelectorAll('li');
const lis = document.querySelector('ul')
list[3].remove()
*/

// CLASSES AND ATTRIBUTES


/*
//addEvenListenter take two things.
let paraText;

// paraText = document.querySelector(".para").addEventListener('click',
// function(e){
//     console.log("Hello world");
//     e.preventDefault();
// });


document.querySelector(".btn").addEventListener('click', 
onclick);
function onclick(e){
    // console.log("Paragragh was cliked..");
    let val;
    val = e;

//Event Target Elements
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    // e.target.innerText = 'Something else';

// Event Type
    val = e.type;

// Timestamp
    val = e.timeStamp;

// Coords Event Relative to the window
    val = e.clientY;
    val = e.clientX;

// Coords Event Relative to the element (btn)
    val = e.offsetY;
    val = e.offsetX;


    console.log(val)
};
*/

// 29. Mouse Events
// const clearBtn = document.querySelector('.btn');
// const card  = document.querySelector('.text_content');
// const myTitle = document.querySelector('h1.title');

    //click
// clearBtn.addEventListener('click', runEvent);
    //Double Click
// clearBtn.addEventListener('dblclick', runEvent);
    //Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
    // Mouseup 
// clearBtn.addEventListener('mouseup', runEvent);
    // Mouse enter 
// card.addEventListener('mouseenter', runEvent);
    // Mouseleave 
// card.addEventListener('mouseleave', runEvent);
    // Mouseover 
// card.addEventListener('mouseover', runEvent);
    // Mouseout 
// card.addEventListener('mouseout', runEvent);
    // Mousemove 
// card.addEventListener('mousemove', runEvent);


/// Side note: 
// A method is a function contain within an object.
// Encapsulation - Grouping Data together.
// NOUNS, ADJECTIVES - properties, 
// VERBS - functions

// var carObject = {
//     make: "RollS Royce",
//     model: "Wraith",
//     speed: 130 + " mph",
//     color: 'black',
//     engine: {
//         size: 3.0,
//         company: 'UtS',
//         fuel: "shells",
//         millage: 2155 + " mph"
//     }
    
// }
  

// let carList = {
//     make : "Audi",
//     model: "A7",
//     year: 2018 
// };

// let person = {
//     firstName: "Andral",
//     lastName: "Orelus",
//     age: 25,
//     eyeColor: "Brown",
//     job: "Web Developer"
// }


// const registrationForm = document.querySelector('.form');
// const taskInput  = document.getElementById('first-name');
// const heading  = document.querySelector('.form_heading');
// const selection = document.querySelector('select');

//c Clear the input text after submited
// taskInput.value = '';

// registrationForm.addEventListener("submit", registrationInfo);

//KEYBOARD LISTENER EVENT TYPES:
//Keyup
//taskInput.addEventListener('keyup', registrationInfo);

//Keydown
//taskInput.addEventListener('keydown', registrationInfo);

//Keypress
//taskInput.addEventListener('keypress', registrationInfo);

//focus
// taskInput.addEventListener('focus', registrationInfo);

//blur
// taskInput.addEventListener('blur', registrationInfo);

//cut
// taskInput.addEventListener('cut', registrationInfo);

//paste
// taskInput.addEventListener('paste', registrationInfo);

//input
// taskInput.addEventListener('input', registrationInfo);

//change
// taskInput.addEventListener('change', registrationInfo);


// selection.addEventListener('change', registrationInfo)


// taskInput.addEventListener('keypress', registrationInfo);

// function registrationInfo(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     console.log(e.target.value);

//     heading.innerText = e.target.value;

//     // e.preventDefault();

//     //Get Input Value
//     // console.log(taskInput.value)

// };

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`)
//     myTitle.textContent = `MouseX: ${e.offsetX} ; MouseY: ${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
// };


// const text = document.querySelector('.change_text');

// text.addEventListener('click', txtDisplay);

// function txtDisplay(e){
//     console.log(`Event Type: ${e.type}`);
//     text.textContent = "Read Different Info"
//     e.preventDefault();
// };
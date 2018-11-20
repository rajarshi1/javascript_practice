// Log message in console saying "I'm Learning Javascript"


alert("I'm Learning Javascript");

// var name = "Mark";  "Mark" is a string.  What is name?

//name is name of variable

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

var admin;
var name = "John";
admin=name; // space between = and the variables required.
alert(admin);

// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm

alert("Hello World");


// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"

var name=prompt("What is your name"); // spaces between 
alert("Welcome "+ name); // Style: line space missing before the line

// Modify the previous program such that only the users Alice and Bob are greeted with their names.




// Find the error if any (var product cost = 3.45;)

//no space between product and cost


// Write a function that takes 'user' as an argument and log a message in console saying "Hello Sam, How are you doing?" if name of the user passed is "Sam"

function hello(user){
    alert(`Hello ${user}, How are you doing?`);
} // Style: line space after the function declaration and call missing
hello('Tom');
// Right or Wrong
//   "Hello World"
//   'Hello World"
//   "Hello World'
//   'Hello World'

//1st and 3rd


// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.

function length() {
    var word = prompt("type");
    alert(word.length);
}


// Age of the owner
var age = 26;

// Calculate the age of the dog if owner's age is 7 times of dog
var dogAge= age/7; // Style: line space missing before and after the statement
// Use console.log() function to log the age of the dog 
alert(dogAge); //Style:line space missing after the statement

// Marks and max marks of the student
var studentScore = 41 // Style: Semicolon missing
var maxScore = 100 // Style: semicolon missing
// Calculate the percentage of marks the student got
var percentage = studentScore/maxScore * 100;

// log the percentage in console using console.log()
alert(percentage);



var city = 'Dharamshala' // Style: semicolon missing
var country = 'India' // Style: semicolon missing
// Make a function which can alert the message "Dharamshala, India"
function show(){
 alert (`${city}, ${country}`);
} // Style: line space after function declaration missing
show();
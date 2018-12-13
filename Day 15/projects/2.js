// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties -- what does this line mean (initiate properties);g

function Persone(name, yearOfBirth, job) {
    this.setName = name;
    this.birthYear = yearOfBirth;
    this.work = job
}

var Prashant = new Persone("Prashant", 1990, "Programmer");
var Nihal = new Persone("Nihal", 1994, "Programmer");



// Define a function name calculateAge which returns the age of the person

function calculateAge(personName){
    var currentYear = 2018;
    return currentYear - personName.birthYear;   
}

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

var Prashant = new Persone("Prashant", 1990, "Programmer");
var Nihal = new Persone("Nihal", 1994, "Programmer");
var Rajarshi = new Persone("Rajarshi", 1994, "teacher");


// call the calculateAge function on each object

calculateAge(Prashant);
calculateAge(Nihal);
calculateAge(Rajarshi);
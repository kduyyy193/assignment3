// Welcome
alert("Welcome to my first JavaScipt program in COMP1223")

// Initial first name
let  firstNameValue = ''
firstNameValue = prompt("Enter your first name")

// Validate first name
while(!firstNameValue && firstNameValue.length <= 0) {
    firstNameValue = prompt("Please enter your first name!!")
}

//Initial last name
let lastNameValue = ''
lastNameValue = prompt("Enter your last name")

// Validate last name
while(!lastNameValue && lastNameValue.length <= 0) {
    lastNameValue = prompt("Please enter your last name!!")
}

//Initial program name
let programNameValue = ''
programNameValue = prompt("Enter your program name", 'Computer Systems Analyst')

//Initial year of study
let yearOfStudyValue = ''
yearOfStudyValue = prompt("Enter your year of study", '1')

// validate year of value if there
if(yearOfStudyValue !== '1') {
    while(Number(yearOfStudyValue) < 1 ||  Number(yearOfStudyValue) > 3) {
        yearOfStudyValue = prompt("Please enter your year of study (range is 1-3 )")
    }
} 

//Display to Console 
console.log("Full Name: ", firstNameValue + ' ' + lastNameValue, "\nProgram Name: ", programNameValue, "\nYear Of Study: ", yearOfStudyValue)


// Get HTML element in the DOM
const fullNameView = document.querySelector("#full_name")
const programNameView = document.querySelector("#program_of_study")
const  yearOfStudyView = document.querySelector("#year_of_study")

// Check and render view
if (firstNameValue && lastNameValue && programNameValue && yearOfStudyValue) {
    fullNameView.innerHTML = `Full Name: ${firstNameValue} ${lastNameValue}`
    programNameView.innerHTML = `Program Name: ${programNameValue}`
    yearOfStudyView.innerHTML = `Year Of Study: ${yearOfStudyValue}`
}


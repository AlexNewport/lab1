//Task 1, part A
const quantity1A = parseInt(prompt("Please enter a number"));
const pageElement1A = document.querySelector(".text1a");
pageElement1A.innerHTML = `Quantity: ${quantity1A}`;

//Task 1, part B
const quantity1B = parseInt(prompt("Please enter a number"));
const pageElement1B = document.querySelector(".text1b");
const percentage1B = parseInt(prompt("Please enter a percentage"));
pageElement1B.innerHTML = `Quantity: ${quantity1B}\n${percentage1B}% of Quantity, ${quantity1B}, is ${quantity1B * (percentage1B / 100)}`;

//Task 2, part A
const grade2A = parseInt(prompt("Please enter your grade"));
const pageElement2A = document.querySelector(".text2a");
let ifLetterGrade2A;
if (grade2A >= 91) {
    ifLetterGrade2A = "A";
}
else if (grade2A >= 81) {
    ifLetterGrade2A = "B";
}
else if (grade2A >= 71) {
    ifLetterGrade2A = "C";
}
else if (grade2A >= 61) {
    ifLetterGrade2A = "D";
}
else {
    ifLetterGrade2A = "F";
}

pageElement2A.innerHTML = `The grade is an (a)- ${ifLetterGrade2A}`;

//Task 2, part B
const grade2B = parseInt(prompt("Please enter your grade"));
const pageElement2B = document.querySelector(".text2b");
let ifLetterGrade2B;
let switchLetterGrade2B;

if (grade2B >= 91) {
    ifLetterGrade2B = "A";
}
else if (grade2B >= 81) {
    ifLetterGrade2B = "B";
}
else if (grade2B >= 71) {
    ifLetterGrade2B = "C";
}
else if (grade2B >= 61) {
    ifLetterGrade2B = "D";
}
else {
    ifLetterGrade2B = "F";
}

switch(true) {
    case grade2B >= 91:
        switchLetterGrade2B = "A";
        break;
    case grade2B >= 81:
        switchLetterGrade2B = "B";
        break;
    case grade2B >= 71:
        switchLetterGrade2B = "C";
        break;
    case grade2B >= 61:
        switchLetterGrade2B = "D";
        break;
    default:
        switchLetterGrade2B = "F";
        break;
}

pageElement2B.innerHTML = `The grade is an (a)- ${ifLetterGrade2B}, (b) ${switchLetterGrade2B}`;

//Task 3
console.log("Task 3\n")
const professorName3 = prompt("Please enter your professor's name");
const line3 = prompt("Please enter a line to write");
const numberOfTimes3 = parseInt(prompt("Please enter the number of times the line should be written"));

console.log(professorName3)
for (let count = 1; count <= numberOfTimes3; count++) {
    console.log(`${count} ${line3}`);
}

//Task 4
const professorName4 = prompt("Please enter your professor's name");
const line4 = prompt("Please enter a line to write");
const numberOfTimes4 = parseInt(prompt("Please enter the number of times the line should be written"));
const professorElement4 = document.querySelector(".professorText4");
const pageElement4 = document.querySelector(".text4");

professorElement4.innerHTML = `${professorName4}`
for (let count = 1; count <= numberOfTimes4; count++) {
    pageElement4.innerHTML += `${count} ${line4}\n`;
}

//Task 5
const lineWriter = () => {
    const professorName5 = prompt("Please enter your professor's name");
    const line5 = prompt("Please enter a line to write");
    const numberOfTimes5 = parseInt(prompt("Please enter the number of times the line should be written"));
    const professorElement5 = document.querySelector(".professorText5");
    const pageElement5 = document.querySelector(".text5");

    professorElement5.innerHTML = `${professorName5}`
    for (let count = 1; count <= numberOfTimes5; count++) {
        pageElement5.innerHTML += `${count} ${line5}\n`;
    }
}

lineWriter();

//Task 6, part A
console.log("Task 6A\n")
for (let factor1 = 1; factor1 <= 12; factor1++) {
    for (let factor2 = 1; factor2 <= 12; factor2++) {
        console.log(`${factor1} X ${factor2} = ${factor1 * factor2}`);
    }
    console.log("\n-----------------------------\n")
}

//Task 6, part B
console.log("Task 6B\n")
const createTables6B = function(factor1) {
    for (let factor2 = 1; factor2 <= 12; factor2++) {
        console.log(`${factor2} X ${factor2} = ${factor1 * factor2}`);
    }
}

for (let factor1 = 1; factor1 <= 12; factor1++) {
    createTables6B(factor1)
    console.log("\n-----------------------------\n")
}

//Task 6, part C
console.log("Task 6C\n")
const createTables6C = function(factor1, delimiter) {
    for (let factor2 = 1; factor2 <= delimiter; factor2++) {
        console.log(`${factor1} X ${factor2} = ${factor1 * factor2}`);
    }
}

const allTables = (delimiter) => {
    for (let factor = 1; factor <= delimiter; factor++) {
        createTables6C(factor, delimiter);
        console.log("\n-----------------------------\n");
    }
}

allTables(10);
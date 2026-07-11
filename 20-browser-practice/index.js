//Practice Q1
// const canDrive = (age) => {
//     return age >= 18 ? true : false
// }
// let age = prompt("What is your age?");
// age = parseInt(age);

// if (canDrive(age)) {
//     alert("You can drive!");
// } else {
//     alert("You cannot drive.");
// }



//Practice Q2

// let runAgain = true;

// const canDrive = (age) => {
//     return age >= 18 ? true : false
// }

// while (runAgain) {
//     let age = prompt("What is your age?");
//     age = parseInt(age);

//     if (canDrive(age)) {
//         alert("You can drive!");
//     } else {
//         alert("You cannot drive.");
//     }
//     runAgain = confirm("Do you want to check another age?");
// }


//practice Q3
// let runAgain = true;

// const canDrive = (age) => {
//     return age >= 18 ? true : false
// }

// while (runAgain) {
//     let age = prompt("What is your age?");
//     age = parseInt(age);
//     if (age < 0) {
//         console.error("Age cannot be negative. Please enter a valid age.");
//         break;
//     }
//     if (canDrive(age)) {
//         alert("You can drive!");
//     }
//     else {
//         alert("You cannot drive.");
//     }
//     runAgain = confirm("Do you want to check another age?");

// }

//practice Q4
// let number = prompt("Enter your number?");
// number = parseInt(number);

// if (number > 4) {
//     location.href = "https://www.google.com";
// }


//practice Q5

let color = prompt("Enter the page background color");
document.body.style.backgroundColor = color;
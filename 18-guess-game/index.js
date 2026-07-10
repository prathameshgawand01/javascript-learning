let num = Math.random() * 100;
num = Number.parseInt(num)
console.log(num)
let input;
let score = 100;
while (input!=num){
    score = score-1;
    input=prompt("Guess the number: ");
    if (input == num) {
        console.log("Congratulation! You guess the correct number.")
        console.log(`You guess the actual number in ${100 - score} chances.`)
    }
    else if (input > num && input < 100){
        console.log("your number is greater than the actual number.")
    }
    else if (input < num && input > 0){
        console.log("your number is smaller than the actual number.")
    }
    else{
        console.log("Enter number between 1 to 100")
    }
}




let firstNumber = 44;
let secondNumber = 60;

if( (firstNumber < 40 || firstNumber > 60) || (secondNumber < 40 || secondNumber > 60) ) {
    console.log("Two numbers must be between range of 40 and 60.");
} else if (firstNumber == secondNumber){
    console.log("Two numbers are the same.");
} else if (firstNumber < secondNumber){
    console.log("The largest number is " + secondNumber + ".");
} else{
    console.log("The largest number is " + firstNumber + ".");
}
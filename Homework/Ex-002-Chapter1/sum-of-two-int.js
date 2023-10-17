let firstInt = Number(prompt('First Interger',''));
let secontInt = Number(prompt('Second Interger',''));
let sum = firstInt + secontInt;

if(firstInt == secontInt){
    sum *= 3;
    alert("Triple of the sum of two intergers is " + sum); 
} else{
    alert("The sum of two intergers is " + sum);
}
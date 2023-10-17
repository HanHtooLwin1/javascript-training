let x = Number(prompt('Value of x',''));
let y = Number(prompt('Value of y',''));

if(x == 0 && y > 0){
    alert("Pointing North!");
} else if(y == 0 && x > 0){
    alert("Pointing East!");
} else if(x == 0 && y < 0){
    alert("Pointing South!");
} else if(y == 0 && x < 0){
    alert("Pointing West!");
} else if(y < 0 && x > 0){
    alert("Pointing North-east!");
} else if(y > 0 && x > 0){
    alert("Pointing South-east!");
} else if(y > 0 && x < 0 ){
    alert("Pointing South-west!");
} else if(y < 0 && x < 0){
    alert("Pointing North-west!");
}
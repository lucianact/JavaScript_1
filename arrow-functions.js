// no parameter function
function randomNumber() {
    return Math.random();
}
console.log(randomNumber());

// randomNumberArrow function
let randomNumberArrow = () => Math.random() 
console.log(randomNumberArrow());

// one parameter function 
function isPositive(number) {
    return number >= 0;
}
console.log(isPositive(-1));
console.log(isPositive(2));

// isPositive arrow function
let isPositiveArrow = (number) => number >= 0 
console.log(isPositiveArrow(-1));
console.log(isPositiveArrow(2));
// the parameter parenthesis is not mandatory

// two parameter function
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

// sum arrow function
let sumArrow = (a, b) => a + b 
console.log(sumArrow(1, 2));

// function with fuction parameter 
document.addEventListener('click', function() {
    console.log("Click")
}) 

document.addEventListener("click", () => console.log("Click"))
// Question: 
// 
// Convert an array of integers into an array of strings,
//   representing the phonetic equivalent of the integer. 
// 
// For example: 
// Given an array: [3, 25, 209], 
//   print “Three,TwoFive,TwoZeroNine” into stdout. 
// 
// Given an array: [10, 300, 5],
//   print “OneZero,ThreeZeroZero,Five” into stdout. 


const integerToString = (arrayOfIntegers) => {

    // Edge cases:
    if(!arrayOfIntegers.length){
        return "Array is empty!"
    }

    let isArray = arrayOfIntegers instanceof Array
    if(!isArray){
        return "You must provide an array!"
    } 

    // Create an object/dict to match numbers to its respective names
    let integerNames = {
        "0" : "Zero",
        "1" : "One",
        "2" : "Two",
        "3" : "Three",
        "4" : "Four",
        "5" : "Five",
        "6" : "Six",
        "7" : "Seven",
        "8" : "Eigth",
        "9" : "Nine"
    }

    // Convert integers into strings
    let integerStrings = arrayOfIntegers.toString().split(",")

    let lastElement = integerStrings[integerStrings.length - 1]
    let finalString = ""
    // Match each (string) number from the array to its name
    for (i = 0; i < integerStrings.length; i++){
        // Necessay to break down numbers > 9 into single numbers
        if(integerStrings[i].length > 1){
            for (j = 0; j < integerStrings[i].length; j++)
            finalString += integerNames[integerStrings[i][j]]
            // If the element is not the last array element,
            // a comma must be inserted between elements
            if(integerStrings[i] != lastElement){
                finalString += ","
            }
        } else {
            finalString += integerNames[integerStrings[i]]
            if(integerStrings[i] != lastElement){
                finalString += ","
            }
        }
    }
    
    // Make sure the array contains numbers only
    if(finalString.includes("undefined")){
        return "Please provide an array of numbers. Chars are not allowed!"
    } else {
        return finalString
    }
}

// console.log(integerToString("luci"));
// console.log(integerToString(["a", "b", "c"]));
// console.log(integerToString(["a", "1", "2"]));
// console.log(integerToString(["a", 1, 2]));
// console.log(integerToString([]));
// console.log(integerToString([10, 300, 5]));
// console.log(integerToString([3, 25, 209]));
const myArgs = process.argv.slice(2);
console.log(integerToString(myArgs));
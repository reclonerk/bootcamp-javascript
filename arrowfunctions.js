// Syntatical difference
// Referential difference
// Anonymous functions

function addMethd(a, b){
    return (a + b)
}

// const addMethd = function(){

// }

// Step - 1 : Removal of function keyword
// Step - 2 : Bringing arrow in the function
// Step - 3 : if you have only one statement in the function
//              body, amit "return" keyword
// let addMethod2(a, b) => {
//     return (a + b)
// }

let addMethod3 = (a,b)=> a+b 
// reduce code length and
// also optimise in running time. as it does not create a stack
// for return statement.

// console.log(addMethd(2,3))
// console.log(addMethod3(1,3))

function isPositive(number){
    return number>=0
}

let isPositive2 = (a) => a>=0
// if there is only one parameter, omit brackets.
let isPositive3 = a => a>=0


// console.log(isPositive(4))
console.log(isPositive3(4))


// Usage of arrow functions
//  1. How ready function write
//  2. What is the use
//  3. reduce time


// ES6 - Ecma Script 6
// var      : function scope
// let      : block scope ----- recommendation
// const    : block scope


// function sayHello(){
//     // code goes here !!!
//     // function scope
// }

// if(a == 0){
//     // block scope
// }


// var varName = "Rahul"
// let letName = "Kumar"
// const constName = "Shreya"

// console.log(varName)
// console.log(letName)
// console.log(constName)

const constName = "Rahul"
// constName = "ajay"

function sayHello() {
    for(var i = 0; i < 5; i++){
        console.log(i)
    }

    console.log(i)
}

sayHello()


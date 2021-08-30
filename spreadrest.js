// Spread operator - expands the iterable
// Rest Operator - determine unknown arguments


/*  Spread Operator */
var arrayVal = [1,2,3]


var arrayVal2 = [...arrayVal, 4,5]

console.log(arrayVal2)
// output : [1,2,3,4,5]


var objectEmployee = {
    fname : 'Rahul',
    lname : 'Kumar'
}

var objectEmployeeDetails = {
    ...objectEmployee,
    designation : 'Data Engineer'
}

console.log(objectEmployeeDetails)

/**
 * REST OPERATORS
 * 
 */

/*
function add(a, b){
    return a + b
}

add(2,3)
console.log(add(2,3))

*/

function add(...args){
    // something here
    console.log(args[3])
}

add(2,3,4,5,6)


/**
 * filter method
 * 
 */

const items = [
    {
        name : "Bike",
        price : 100,
    },
    {
        name : "TV",
        price : 100,
    },
    {
        name : "Mouse",
        price : 100,
    },
    {
        name : "laptop",
        price : 500,
    },
    {
        name : "Mac",
        price : 600,
    },
    {
        name : "Phone",
        price : 700,
    }
]

console.log(items)

/**
 * filter method
 */

// const funcName = () => {}

const fileteredItems = items.filter((oneItem)=>{
    return oneItem.price <= 100
})

const fileteredItems2 = items.filter(oneItem=>oneItem.price <= 100)

console.log(fileteredItems2)

/**
 * Map method
 */

const itemNames = items.map(item => item.name)

console.log(itemNames)

/**
 * find method
 */

const foundItem = items.find(item => item.name === 'Mac')

console.log(foundItem)

/**
 * forEach method
 * - it does not return anything.
 */

items.forEach(element => {
    console.log(element.price * 100)
})

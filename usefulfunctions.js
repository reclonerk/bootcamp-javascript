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

console.log(fileteredItems)


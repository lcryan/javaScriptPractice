// practice exercise 3.1
// let arrayFood = ["milk", "bread", "apples"]
// console.log(arrayFood.length)
//
// arrayFood[1] = "bananas"
//
// console.log(arrayFood)
// practice exercise 3.2 page 59

let shoppingList = ["milk", "bread", "apples"]
shoppingList.splice(1, 1 ,"bananas", "eggs")
console.log(shoppingList)

console.log(shoppingList.pop())
console.log(shoppingList)

console.log(shoppingList.sort())

console.log(shoppingList.indexOf("milk"))

shoppingList.splice(1,0, "carrots", "lettuce")
console.log(shoppingList)

let newShoppingList = ["juice", "pop"]
let combinedShoppingLists = shoppingList.concat(newShoppingList)
console.log(combinedShoppingLists)

let double = combinedShoppingLists.concat(newShoppingList)
console.log(double)

console.log(double.lastIndexOf("pop"))

// practice exercise 3.3 page 60
let newArrayOfNumbers = [1,2,3]

let newNestedArrays = [[1,2,3], [1,2,3], [1,2,3]]

let valueExtraction = newNestedArrays[2][1]
console.log(valueExtraction)
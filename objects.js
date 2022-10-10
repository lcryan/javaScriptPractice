// let car = {
//     carBrand: "Volkswagen",
//     model: "Touran",
//     color: "black",
//     buildIn: 2012,
//     new: false
// }
//
// let realColor = "color"
// car[realColor] = "yellow"
//
// console.log(car)
//
// let reallyNew = "new"
// car[reallyNew] = true
//
// console.log(car)
//
// console.log(car["model"])
// console.log(car.carBrand)
// console.log(car.new)

//practice 3.5 page 67

let people = {
    friends: [
        {
            firstName: "Maria",
            lastName: "Montero",
            numberId: 332255,
        },
        {
            firstName: "Georgiana",
            lastName: "Wang",
            numberId: 678556,
        },
        {
            firstName: "Franziska",
            lastName: "Preusse",
            numberId: 11234,
        }

    ]

}

console.log(people.friends[0].numberId)
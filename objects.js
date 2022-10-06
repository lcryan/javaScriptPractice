let car = {
    carBrand: "Volkswagen",
    model: "Touran",
    color: "black",
    buildIn: 2012,
    new: false
}

let realColor = "color"
car[realColor] = "yellow"

console.log(car)

let reallyNew = "new"
car[reallyNew] = true

console.log(car)

console.log(car.model)
console.log(car.carBrand)
console.log(car.new)
'use strict'

var firstName = 'Mateusz'
var lastName = 'Choma'

var car = {
    brand: 'Opel',
    model: 'Insignia'
}

var me = {
    firstName: firstName,
    lastName: lastName,
    car: car
}

me.name = me.firstName + ' ' + me.lastName

firstName = 'Marek' // strings are passed by value as all primitives!

car.model = 'Adam' // objects are passed by reference!


console.log(firstName === me.firstName) // false
console.log(car === me.car) // true

console.log(me)

car = null

console.log(car === me.car) // false

/*

Get the Flavors: Exercise
Using lenses, write a point-free solution to get everyone's favorite ice cream.

You’re a great person, so you decide to surprise the office with ice cream!

Everyone’s favorite flavor is saved in your company’s database. Use lenses to get them! Your solution must be point-free.

*/

// ********** My Solution **********

const { lensPath, view, map } = require('ramda')
const employees = require('./data/employees.json')


const favFlavorLens = lensPath([
  'interests',
  'foods',
  'sweets',
  'iceCream',
  'favoriteFlavor'
])

const result = map(view(favFlavorLens), employees)

console.log({ result })

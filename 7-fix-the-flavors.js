/*

Fix the Flavors: Exercise
Using lenses, write a point-free solution to manipulate and return everyone's favorite ice cream.

You’re having fun with these exercises, so let’s start manipulating data!

Using lenses, write a point-free solution that

1. Capitalizes all the flavors
2. Appends “IS A GREAT FLAVOR” to each one
3. Returns them

*/

// ********** My Solution **********

const { lensPath, view, toUpper, pipe, map } = require('ramda')
const employees = require('./data/employees.json')


const favFlavorLens = lensPath([
  'interests',
  'foods',
  'sweets',
  'iceCream',
  'favoriteFlavor'
])

const appendGreatFlavor = (flavor) => `${flavor} IS A GREAT FLAVOR`

const emphasizeFlavors = pipe(
  view(favFlavorLens),
  toUpper,
  appendGreatFlavor
)

const result = map(emphasizeFlavors, employees)

console.log({ result })

// ********** Their Solution #1 **********

// import { lensPath, map, pipe, over, toUpper, view } from 'ramda';
// import employees from './employees.json';
//
// const favoriteFlavor = lensPath([
//   'interests',
//   'foods',
//   'sweets',
//   'iceCream',
//   'favoriteFlavor'
// ]);
//
// const emphasize = pipe(
//   toUpper,
//   (flavor) => `${flavor} IS A GREAT FLAVOR`
// );
//
// const emphasizeFlavor = pipe(
//   over(favoriteFlavor, emphasize),
//   view(favoriteFlavor)
// );
//
// const emphasizeFlavors = map(emphasizeFlavor);
//
// const result = emphasizeFlavors(employees);
//
// console.log({ result });

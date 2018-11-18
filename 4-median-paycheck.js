/*

Median Paycheck: Exercise
Write a point-free function to find the median monthly paycheck above $100,000.

I hope this one looks familiar–it’s from our higher-order functions section!

Given a list of employee salaries, find the median monthly paycheck above $100,000.

Usage


const medianPaycheck = getMedianPaycheck(employees) // $141,000
The median’s $141,000?! Must be Google or Facebook employees…oh, by the way, your solution must be point-free. ;)

*/

// ********** My Solution **********

const { filter, pipe, median, pluck, lte, propSatisfies } = require('ramda')
const employees = require('./data/employees.js')


const bySalary = propSatisfies(lte(100000), 'salary')

const yearlyToMonthly = (yearly) => yearly / 12

const toUSD = (amount) => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const getMedianPaycheck = pipe(
  filter(bySalary),
  pluck('salary'),
  (num) => {
    console.log({ num })
    return num
  },

  median,
  yearlyToMonthly,
  toUSD
)

const medianPaycheck = getMedianPaycheck(employees)

console.log({ medianPaycheck })

// ********** Their Solution #1 **********

// import { divide, filter, flip, lte, median, pipe, pluck, tap } from 'ramda';
// import employees from './employees';
//
// const toUSD = (amount) => amount.toLocaleString('en-US', {
//   style: 'currency',
//   currency: 'USD',
// });
//
// const flippedDivide = flip(divide);
//
// const getMedianPaycheck = pipe(
//   pluck('salary'),
//   filter(lte(100000)),
//   median,
//   flippedDivide(12),
//   toUSD
// );
//
// const result = getMedianPaycheck(employees);
//
// console.log({ result });

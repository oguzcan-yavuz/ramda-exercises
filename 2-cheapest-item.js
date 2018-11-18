/*
Cheapest Item: Exercise
Write a point-free function to return a cart's cheapest item.

Given a cart, return the cheapest item’s name.

Usage


const cheapestItem = getCheapestItem(cart); // 'apple'
Your solution must be point-free.
*/

// ********** My Solution **********

const { pipe, comparator, sort, head, prop } = require('ramda')
const cart = require('./cart-2.js')

const byPrice = comparator((a, b) => a.price < b.price)

const getCheapestItem = pipe(
  sort(byPrice),
  head,
  prop('name')
)

const cheapestItem = getCheapestItem(cart)

console.log({ cheapestItem })

// ********** Their Solution #1 **********

// import { head, pipe, prop, sortBy } from 'ramda';
// import cart from './cart-2.js';
//
// const getCheapestItem = pipe(
//   sortBy(prop('price')),
//   head,
//   prop('name')
// );
//
// const result = getCheapestItem(cart);
//
// console.log({ result });


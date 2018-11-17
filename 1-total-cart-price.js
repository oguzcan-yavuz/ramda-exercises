/*

Total Cart Price: Exercise
Write a point-free function to calculate a shopping cart’s total price in dollars.

Calculate a shopping cart’s total price in dollars.

Usage


const price = getTotalPrice(cart); // '$44.20'
Your solution must be point-free.

import {} from 'ramda';
import cart from './cart';

const getTotalPrice = () => {};

*/

// ********** My Solution ********** 

import { reduce, pipe, curry, flip, prop, add } from 'ramda';
import cart from './cart';

// const addPrice = (sum, cardObj) => sum + cardObj.price;
const getPrice = prop('price');

const addPrice = (total, cardObj) => add(total, getPrice(cardObj))

const adjustPrecision = (num) => num.toFixed(2);

const convertNumToDollars = (num) => `$${num}`;

const getTotalPrice = pipe(
  reduce(addPrice, 0),
  (num) => {
    console.log(`num after reduce: ${num}`);
    return num;
  },
  
  adjustPrecision,
  convertNumToDollars
);

const price = getTotalPrice(cart); // '$44.20'

console.log({ price });

// ********** Their Solution #1 **********

import { add, map, pipe, prop, reduce } from 'ramda';
import cart from './cart';

const toUSD = (amount) => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const getTotalPrice = pipe(
  map(prop('price')),
  reduce(add, 0),
  toUSD
);

const result = getTotalPrice(cart);

console.log({ result });

// ********** Their Solution #2 **********

import { add, pipe, pluck, sum } from 'ramda';
import cart from './cart';

const toUSD = (amount) => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const getTotalPrice = pipe(
  pluck('price'),
  sum,
  toUSD
);

const result = getTotalPrice(cart);

console.log({ result });


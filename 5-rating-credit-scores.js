/*

Rating Credit Scores: Exercise
Write a point-free function that reviews credit scores.

Given a list of credit scores, return a list of reviews.

If the score’s at or above 800, return “{score} is excellent!”
If the score’s at or above 700, return “{score} is good”
If the score’s at or above 650, return “{score} is fair”
If the score’s at or below 649, return “{score} is poor”

Usage

const ratings = [740, 550, 681, 805];
​
getCreditScoreRatings(ratings);
// ['740 is good', '550 is poor', ' 681 is fair', '805 is excellent!']
Your solution must be point-free.

*/

// ********** My Solution **********

const { map, cond, gte, lte, flip, always } = require('ramda')
const scores = require('./data/scores.json')


const flippedGTE = flip(gte)

const flippedLTE = flip(lte)

const rater = cond([
  [ flippedGTE(800), always(`excellent!`) ],
  [ flippedGTE(700), always(`good`) ],
  [ flippedGTE(650), always(`fair`) ],
  [ flippedLTE(649), always(`poor`) ],
])

const createReview = (score) => `${score} is ${rater(score)}`

const getCreditScoreRatings = map(createReview)

const result = getCreditScoreRatings(scores)

console.log({ result })

// ********** Their Solution #1 **********

// import { cond, gte, lte, map } from 'ramda';
// import scores from './scores.json';
//
// const reviewCreditScore = cond([
//   [lte(800), (score) => `${score} is excellent!`],
//   [lte(700), (score) => `${score} is good`],
//   [lte(650), (score) => `${score} is fair`],
//   [gte(649), (score) => `${score} is poor`]
// ]);
//
// const reviewCreditScores = map(reviewCreditScore);
//
// console.log(reviewCreditScores(scores));

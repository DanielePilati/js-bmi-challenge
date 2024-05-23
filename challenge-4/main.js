"use strict";

// Let's improve Steven's tip calculator even more, this time using loops!
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// Create an array called bills containing all 10 test bill values.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays for the tips and the totals (tips and totals)
const tips = [];
const totals = [];

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array.
// Use a for loop to perform the 10 calculations!
console.log(bills);

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

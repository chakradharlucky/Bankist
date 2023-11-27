"use strict"
//Create Accounts
const account1 = {
  owner: "Lakinana Chakradhar",
  movements: [2000, 4500, -4000, 30000, -6500, -1300, 700, 13000],
  interestRate: 1.2, // %
  pin: 513,
};

const account2 = {
  owner: "Ariga Chaturya Mokshitha",
  movements: [50000, 34000, -1500, -7900, -32100, -10000, 85000, -300],
  interestRate: 1.5,
  pin: 515,
};

const account3 = {
  owner: "Gajula Pranay",
  movements: [2000, -2000, 3400, -3000, -200, 500, 4000, -4600],
  interestRate: 0.7,
  pin: 537,
};

const account4 = {
  owner: "Neeli Vaishnavi",
  movements: [4300, 10000, 7000, 500, 900],
  interestRate: 1,
  pin: 560,
};

// Account array
let accounts = [account1,account2,account3,account4]
console.log(accounts)


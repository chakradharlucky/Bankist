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

// Select elements
//Select navigation bar elements
const greet = document.querySelector("#greet")
const login_username = document.querySelector("#login_username")
const login_password = document.querySelector("#login_password")
const login_button = document.querySelector("#login_button")

// Select Operations's elements 
// Select Transfer money elements
const transfer_money_userName = document.querySelector("#transfer_money_userName")
const transfer_money_amount = document.querySelector("#transfer_money_amount")
const transfer_money_button = document.querySelector("#transfer_money_button")
// Select Request loan elements
const request_loan_amount = document.querySelecter("#request_loan_amount")
const request_loan_button = document.querySelector("#request_loan_button")
// Select Close account elements
const close_account_user_name = document.querySelector("#close_account_user_name");
const close_account_pin = document.querySelector("#close_account_pin")
const close_account_button = document.querySelector("#close_account_button")


function createUserName(accounts){
  accounts.forEach(account=>account.userName = account.owner.toLowerCase().split(" ").map(splitname=> splitname[0]).join(""))
}

//Create user name
createUserName(accounts)

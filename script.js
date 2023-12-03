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
// console.log(accounts)

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
const request_loan_amount = document.querySelector("#request_loan_amount")
const request_loan_button = document.querySelector("#request_loan_button")
// Select Close account elements
const close_account_user_name = document.querySelector("#close_account_user_name");
const close_account_pin = document.querySelector("#close_account_pin")
const close_account_button = document.querySelector("#close_account_button")
const balance_lable = document.querySelector("#balance")
const movements_row_container = document.querySelector("#movements");

//Functions 
//Create user name
function loan(accts){
  accts.forEach((acct)=> acct.loan = 0)
}
loan(accounts)  
function createUserName(accounts){
  accounts.forEach(account=>account.userName = account.owner.toLowerCase().split(" ").map(splitname=> splitname[0]).join(""))
}
createUserName(accounts)

function balance(accts)
{
  accts.forEach((account)=> 
  {
    account.balance = account.movements.reduce((sum=0,movment)=> sum+movment)
  })
} 
balance(accounts);
function display(move, idx) {
    let move_type = move > 0 ? "Deposit" : "withdraw";
    movements_row_container.insertAdjacentHTML(
      "afterbegin",
      `<div id="movements_row">
            <div>
              <h3>${idx + 1}.${move_type}</h3>
            </div>
            <div>
            <h2>&#x20B9; ${Math.abs(move)}</h2>
            </div>
        </div>`)
}

// Login
let currentUser;
login_button.addEventListener('click',function(){
  currentUser = accounts.find((account) => account.userName===login_username.value);
  if(currentUser?.pin === Number(login_password.value)){
    movements_row_container.textContent = ""
    app.style = "opacity: 100";
    greet.textContent = `Wellcome,${currentUser.owner.split(" ")[1]}`
    balance_lable.textContent = currentUser.balance
    currentUser.movements.forEach((move, idx) => display(move,idx))
  }
})

// Implement Operations
transfer_money_button.addEventListener("click",(e)=>{
  e.preventDefault();
  const amount = Number(transfer_money_amount.value)
  const recevier = accounts.find((acct)=> acct.userName === transfer_money_userName.value)
  if(amount>0 && amount <= recevier.balance && currentUser.userName!== recevier)
  {
    currentUser.movements.push(-amount)
    display(-amount,currentUser.movements.length-1)
    recevier.movements.push(amount)
    balance_lable.textContent = currentUser.balance - amount
  }
}) 

// Request Loan
request_loan_button.addEventListener("click",(e)=>{
  e.preventDefault();
  const amount = Number(request_loan_amount.value)
  if(amount>0){
    console.log(amount)
     currentUser.loan += amount
    currentUser.movements.push(amount)
    display(amount,currentUser.movements.length - 1)
    balance_lable.textContent = currentUser.balance + amount
  }
})

// Close account
close_account_button.addEventListener("click",(e)=>{
  e.preventDefault();
  const closeAcctuUser = accounts.find((acct)=> acct.userName === close_account_user_name.value)
  // console.log(closeAcctuUser)
  if(closeAcctuUser.pin === Number(close_account_pin.value)){
    console.log(`Account ${closeAcctuUser.owner} is close with the balance ${closeAcctuUser.balance} and the loan ${closeAcctuUser.loan} `)
    accounts.pop(closeAcctuUser)
  }
})
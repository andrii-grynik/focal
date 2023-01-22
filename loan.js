let creditLimit = 500  // change to '0' for edge(catch) case

const loanOut = function (amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject('Insufficient funds')
    };
    if (creditLimit > 0 && creditLimit < amount) {
      resolve(amount = creditLimit)
    }
    creditLimit -= amount
    resolve(amount)
  })
}

console.log('Asking for $150, which should be okay ...')
loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`)
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`)
  })

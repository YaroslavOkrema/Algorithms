const transs = [
  { id: 1, type: 'income', amount: 1200 },
  { id: 2, type: 'expense', amount: 300 },
  { id: 3, type: 'expense', amount: 150 },
  { id: 4, type: 'income', amount: 500 },
  { id: 5, type: 'expense', amount: 100 },
]

function analyzeTransactions(transactions) {
  return transactions.reduce((acc, { type, amount }) => {
    if (type === 'income') {
      acc.totalIncome += amount
    } else if (type === 'expense') {
      acc.totalExpense += amount
      acc.biggestExpense = Math.max(acc.biggestExpense, amount)
    }
    
    acc.balance = acc.totalIncome - acc.totalExpense;
    
    return acc
  },
  {
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    biggestExpense: 0
  })
}

console.log(analyzeTransactions(transs))
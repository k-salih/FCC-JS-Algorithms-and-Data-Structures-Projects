function checkCashRegister(price, cash, cid) {

  const currencyUnits = [
    {unit: "ONE HUNDRED", amount: 100},
    {unit: "TWENTY", amount: 20},
    {unit: "TEN", amount: 10},
    {unit: "FIVE", amount: 5},
    {unit: "ONE", amount: 1},
    {unit: "QUARTER", amount: 0.25},
    {unit: "DIME", amount: 0.1},
    {unit: "NICKEL", amount: 0.05},
    {unit: "PENNY", amount: 0.01}
  ]
  
  let change = cash - price;
  let cashRegister = cid.reduce(function(accumulator, current) {
    accumulator.sum += current[1]
    accumulator[current[0]] = current[1]
    return accumulator
  },
  {sum : 0})

  cashRegister.sum = +cashRegister.sum.toFixed(2)

  if (change > cashRegister.sum) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } 

  if (change == cashRegister.sum) {
    return {status: "CLOSED", change: cid}
  }

  let final_array = currencyUnits.reduce(function(accumulator, current) {
    let value = 0

    while (cashRegister[current.unit] >= current.amount && change >= current.amount) {
      value += current.amount
      change -= current.amount
      cashRegister[current.unit] -= current.amount
      change = +change.toFixed(2)
    }
  
  if (value > 0) {
    accumulator.push([current.unit, value])
  }
  return accumulator
  }, []);

  if (final_array.length > 0 && change == 0) {
    return {status: "OPEN", change: final_array}
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
}


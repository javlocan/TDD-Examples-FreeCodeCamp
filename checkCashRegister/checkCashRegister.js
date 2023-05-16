
export const checkCashRegister = (price, cash, cid) => {
  const diff = cash - price
  let left = diff
  const change = {
    status: 'OPEN',
    change: []
  }
  const VALUE = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100
  }

  const closed = cid.reduce((total,coin) => {
    console.log(total)
    return total=total+coin[1]
  },0) 

  if(closed===left){return {status: 'CLOSED', change: cid}}

  let rest = 0

  for(let i = cid.length-1; i >= 0; i--) {
    if(left >= VALUE[cid[i][0]]) { // si el resto es mayor a este billete
    
      if(left>=cid[i][1]){   // y si el resto es mayor que lo que hay en caja
        left = parseFloat((left - cid[i][1]).toFixed(2))
        change.change.push([cid[i][0], cid[i][1]]) // se lo paso
      }else{ // si el resto es menor a caja && mayor que el billete
        rest = Math.floor(left/VALUE[cid[i][0]])
        change.change.push([cid[i][0], parseFloat((rest*VALUE[cid[i][0]]).toFixed(2))])
        left = parseFloat((left-rest*VALUE[cid[i][0]]).toFixed(2))
        
      }
    }
  }


  if(left>0){return {status: 'INSUFFICIENT_FUNDS', change: []}}

  return change
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
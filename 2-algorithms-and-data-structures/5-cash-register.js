/* 

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

*/


function getValue(unitName) {
  switch (unitName) {
    case "PENNY":
      return 0.01;
      break;
    case "NICKEL":
      return 0.05;
      break;
    case "DIME":
      return 0.1;
      break;
    case "QUARTER":
      return 0.25;
      break;
    case "ONE":
      return 1;
      break;
    case "FIVE":
      return 5;
      break;
    case "TEN":
      return 10;
      break;
    case "TWENTY":
      return 20;
      break;
    case "ONE HUNDRED":
      return 100;
      break;
  }
}

function checkCashRegister(price, cash, cid) {
  // console.clear();
  console.log('price and cash are ', price, cash)
  console.log('cid is ', cid)

  let changeDue = cash - price;
  // console.log('change due is ', changeDue)

  let data = cid.map(unit => {
    //console.log('unit is', unit)
    //console.log('unit[1] is ', unit[1])
    return {
      name: unit[0],
      value: getValue(unit[0]),
      // number: Math.round(unit[1]/getValue(unit[0])),
      total: unit[1],
    }
  });

  console.log('data is ', data)

  let changeArr = [];

  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].total == 0) {
      continue;
    }
    if (changeDue > data[i].value) {
      let x = Math.floor(changeDue / data[i].value) * data[i].value;
      console.log('change due is ', changeDue)
      console.log('x is ', x)

      if (x > data[i].total) {
        changeArr.push([data[i].name, data[i].total]);
        changeDue -= data[i].total;
        changeDue = Number(changeDue.toFixed(2))
        data[i].total = 0;
      } else {
        changeArr.push([data[i].name, x]);
        changeDue -= x;
        changeDue = Number(changeDue.toFixed(2))
        data[i].total -= x;
      }
    }
  }

  console.log('change arr is ', changeArr);

  let status;
  let change;

  let changeArrTotal = 0;
  for (let i = 0; i < changeArr.length; i++) {
    changeArrTotal += changeArr[i][1]
  }

  let cidTotal = 0
  for (let i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1]
  }

  console.log('changeArrTotal are ', changeArrTotal)
  console.log('final change due is ', changeDue)
  if (changeArrTotal < changeDue || cidTotal < cash - price) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (cidTotal == cash - price) {
    status = 'CLOSED';
    change = cid
  } else {
    status = 'OPEN';
    change = changeArr;
  }


  console.log({
    status,
    change
  })
  return {
    status,
    change
  }


}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

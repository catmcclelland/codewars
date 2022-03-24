function checkCashRegister(price, cash, cid) {
  let register = { status: "", change: cid };
  const changeNeeded = parseFloat(cash - price).toFixed(2);
  const changeAvail = getTotalRegisterChange(cid);
  register.status = getTotalRegisterStatus(changeNeeded, changeAvail);
  register.change = getChange(changeNeeded, cid);

  if (register.status === REGISTER_STATUS.insufficientFunds) {
    register.change = [];

    return register;
  }
  
  if (changeNeeded > getTotalRegisterChange(register.change)) {
    register.status = REGISTER_STATUS.insufficientFunds;
    register.change = [];
  }     

  if (register.status === REGISTER_STATUS.closed) {
    register.change = [...cid];
  }
  return register;
}

function getTotalRegisterChange(cid) {
  let total = 0;
  for (let change of cid) {
    let changeVal = change[1];
    total += changeVal;
  }
  return total.toFixed(2);
}

function getTotalRegisterStatus(changeNeeded, changeAvail) {
  if (Number(changeNeeded) > Number(changeAvail)) {
    return REGISTER_STATUS.insufficientFunds;
  }
  else if (Number(changeNeeded) < Number(changeAvail)) {
    return REGISTER_STATUS.open;
  } 
  return REGISTER_STATUS.closed;
}

function getChange(changeNeeded, changeInDrawer) {
  const change = [];
  const currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
  };
  for (let i = changeInDrawer.length-1; i >= 0; i--) {
    const coin = changeInDrawer[i][0];
    const coinTotal = changeInDrawer[i][1];
    const coinValue = currency[coin];
    let amount = (coinTotal / coinValue).toFixed(2);
    let returnCoins = 0;

    while (changeNeeded >= coinValue && amount > 0) {
      changeNeeded -= coinValue;
      changeNeeded = changeNeeded.toFixed(2);
      amount--;
      returnCoins++;
    }
    if (returnCoins > 0) {
      change.push([coin, returnCoins*coinValue]);
    }
    
  }
  return change;
  
}

const REGISTER_STATUS = {
  closed: "CLOSED",
  insufficientFunds: "INSUFFICIENT_FUNDS",
  open: "OPEN"
};


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
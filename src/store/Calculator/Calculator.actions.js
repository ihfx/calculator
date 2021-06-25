function sum(num1, num2) {
  return {
    type: 'SUM',
    payload: [num1, num2]
  }
}

function subtract(num1, num2) {
  return {
    type: 'SUBTRACT',
    payload: [num1, num2]
  }
}

function multi(num1, num2) {
  return {
    type: 'MULTI',
    payload: [num1, num2]
  }
}

function clearResult() {
  return {
    type: 'CLEAR_RESULT',
    payload: []
  }
}

export {
  sum,
  subtract,
  clearResult,
  multi
}
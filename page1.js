function isEven(number) {
  if (number % 2 == 0) {
    console.log(`${number} is EVEN`)
  } else {
    console.log(`${number} is NOT EVEN`)
  }
}

isEven(10)
isEven(11)

function isOdd(number) {
  if (number % 2 != 0) {
    console.log(`${number} is ODD`)
  } else {
    console.log(`${number} is NOT ODD`)
  }
}

isOdd(10)
isOdd(11)

function add(p1, p2) {
  console.log(`${p1} + ${p2} = ${p1 + p2}`)
}

add(10, 20)

function subtract(p1, p2) {
  console.log(`${p1} - ${p2} = ${p1 - p2}`)
}

subtract(10, 4)

function divide(p1, p2) {
  console.log(`${p1} / ${p2} = ${p1 / p2}`)
}

divide(10, 4)
function multiply(p1, p2) {
  console.log(`${p1} * ${p2} = ${p1 * p2}`)
}

multiply(10, 4)

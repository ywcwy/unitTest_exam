
function comma(number) {
  if (isNaN(number)) {
    throw new Error('argument needs to be a number')
  }
  return String(new Intl.NumberFormat().format(number))
}

const increment = num => num + 1

const pipe = (...fns) => {
  if (isNaN(fns[0])) {
    throw new Error('argument needs to be a number')
  }
  return fns.reduce(increment)
}


module.exports = { comma, pipe }
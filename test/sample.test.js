const { expect } = require('chai')
const { comma, pipe } = require('./sample')


// 測試 - 化為千分位
describe('Comma # 測試 - 化為千分位', () => {
  it('# isNaN(number)', () => {
    expect(() => comma('aaaaa')).to.throw('argument needs to be a number')
  })

  it('# comma(9527) == "9,527"', () => {
    expect(comma(9527)).to.equal("9,527")
  })
  it('# comma(3345678) == "3,345,678"', () => {
    expect(comma(3345678)).to.equal("3,345,678")
  })
  it('# comma(-1234.45)== "-1,234.45"', () => {
    expect(comma(-1234.45)).to.equal("-1,234.45")
  })
})

// 測試 - pipe function
describe('pipe function', () => {
  it('# isNaN(number)', () => {
    const increment = num => num + 1
    expect(() => pipe('a', increment)).to.throw('argument needs to be a number')
  })

  it('# pipe(5, increment) == 6', () => {
    const increment = num => num + 1
    expect(pipe(5, increment)).to.equal(6)
  })
  it('# pipe(5, increment, increment, increment) == 8', () => {
    const increment = num => num + 1
    expect(pipe(5, increment, increment, increment)).to.equal(8)
  })
})


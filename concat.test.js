// import concat from './concat'
const name = require('./name')
const myConcat = require(`./${name}/concat`)
String.prototype.myConcat = myConcat

test('concat a & b chars to \'ab\'', () => {
    const a = 'a'
    const b = 'b'
    expect(a.myConcat(b)).toBe('ab')
})

test('Concat multiply string correctly', () => {
    const a = 'a'
    expect(a.myConcat('bb', 'string', 'l,')).toBe('abbstringl,')
})

test('Concat with object and array correct', () => {
    const a = 'a'
    expect(a.myConcat([1,2,3], {a: 7})).toBe(a.concat([1,2,3], {a:7}))
})

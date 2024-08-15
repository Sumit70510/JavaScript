const alpha=['a','b','c']
console.log(alpha)
const marvel=['thor','ironman','spiderman']
const dc=['superman','flash','batman']
marvel.push(dc)
console.log(marvel)
marvel.pop()
const newheros=marvel.concat(dc)
console.log(newheros)

//flat function

const numbers=[1,2,3,4,[5,6,7],7,[8,[4,5]]]
console.log(numbers.flat(Infinity))
console.log(numbers.flat(1))
console.log(numbers.flat(2))

console.log(Array.isArray("Hitest"))
console.log(Array.isArray([100,200,300]))

console.log(Array.from('hitesh'))
console.log(Array.of('hitesh','himesh'))


console.log(Array.from({name:'hitesh'}))
let a=100,b=200,c=300
console.log(Array.of(a,b,c))

//variables:

const myvar=20
console.log(myvar)
//myvar=21 reassignment doesn't work with const.

let myvar2=30
console.log(myvar2)
myvar2=31
console.log(myvar2)

//datatypes:
const myvar3=22
const myvar4='sagun'
const ageabove18=true
const freind=[22,'sagun',true]
console.log(freind[1]) //array index start with 0.

console.log(freind[3]) //show undefined

//const undefinedvar
//console.log(undefinedvar) //shows error of missing initializer

let undefinevar2
console.log(undefinevar2)// run and show undefined

//type of operator
const value= (typeof myvar)
console.log(value)

//when we need larger no to work with then we use bigint ex=const v1=111111111111111n //n to make big no see in console of inspects
//other dataypes are Object,functions,symbol,null

//null
let varr=null
console.log(varr)
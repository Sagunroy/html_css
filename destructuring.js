const keyname='cool'
//destructuring in array
const arr1=[1,2,3]
const arr2=[4,5,6]
const arr3=[...arr1,arr2]
console.log(arr3)
//destructuring with obj in array
const arr4=[{
    name:'sagun'
}]
const arr5=[{
    name:'mehul'
}]
const arr6=[...arr4,arr5]
console.log(arr6)
//destructuring b/w obj
const obj1={
    name:'mehuu',
    keyname
}
const obj2={
    name:"maaa", //obj that destruct last has more weightage
    age:22
}
const obj3={
    ...obj1,
    ...obj2
}
console.log(obj3) 
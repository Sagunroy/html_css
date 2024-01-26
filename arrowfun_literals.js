function likethis(){
    return 2
}
// arrow fun syntax is below and u can put a variable declaration, a fun call a return statement in arrow fun
// diff with normal fun is u have to call a fun after its declaration done.
const afunlikethis = () => {
    return 1
}
afunlikethis()
//u can also not give anything in body and  it will run
const afunlikethat = () => 200
console.log(afunlikethat())
//pass argu
const afunlikethats = (arg) => arg
console.log(afunlikethats(201))
//do same without () braces
//const afunlikethats = arg => arg
//console.log(afunlikethats(201))
//this upper 3 line work for only single argu
/*
here increament must be id of any button in index file
const btn=document.getElementById('increment')
btn.addEventListener('click',() => {
    console.log('clicked')
}
)
*/

const myobjj ={
    name:'mahii',
    age:22
}
const aboutme='my name is '+myobjj.name+' and my age is '+myobjj.age+' '
const aboutmenew=`my name is ${myobjj.name} and my age is ${myobjj.age}`
console.log(aboutme)
console.log(aboutmenew)

//push
let freindss = []
function addmyfreind(freind){
   freindss.push(freind)
  
    console.log(freindss)

}
addmyfreind('pihu')
addmyfreind('mahi')
addmyfreind('sagar')

//unshift =puts element at 1st position

let freindsss = []
function addmyfreinds(freind){
   freindsss.unshift(freind)
  
    console.log(freindsss)

}
addmyfreinds('pihu')
addmyfreinds('mahi')
addmyfreinds('sagar')
console.log(freindsss[2])
console.log(freindsss.length)
freindsss.pop()
console.log(freindsss)
freindsss[1] = 'sam'
console.log(freindsss)

//for loop
for(let i=0; i<5; i++)
{
    freindsss.push(i)
}
console.log(freindsss)





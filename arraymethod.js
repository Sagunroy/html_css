arr1=[1,2,3,4,5,6]
const newmaparr_forEq=[]
for(let i=0;i<arr1.length;i++){
    const el=arr1[i]
    newmaparr_forEq.push(el**2)
}
//array methods:
const newmaparr=arr1.map(function(element) //  same result by simple switch 7to 12 line with this only const newmaparr=aa1.map(element => element**2)
    {
        console.log(element)
         return element**2
    }
)
console.log(arr1,newmaparr)
const filteredarr=arr1.filter(element => element>3)
console.log(filteredarr)
const freinds=[
{
    name:'roop',
    age:13
},
{
    name:'aadi',
    age:33
},
{
    name:'aarya',
    age:44
}]
const filterredarr=freinds.filter(element => element.age>18)
console.log(filterredarr)
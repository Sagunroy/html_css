/*function Scopingg(){
    const x='hello'
    console.log(x)
}
Scopingg()*/
const x='hello'
function Scopingg(){
    
    console.log(x)
}
Scopingg()
console.log(x)//error
function xx(){
    if(true){
        const y='hii'
        console.log(y)
    }
    //console.log(y) error out of scope
}
xx()
//for scoping pblm u can declared it as global for all at the top of code until or unless they r shadow

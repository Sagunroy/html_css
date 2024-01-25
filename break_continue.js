//even no
let evenno =[]
let oddno = []
    for(i=0; i<20; i++){
        if(i % 2 === 0)
        {
            evenno.push(i)

        }
        else{
            oddno.push(i)

        }
    }

console.log(evenno , oddno)

//skip any iteration
function skipno(number){
    let evenno=[]

    for(i=0;i<20;i++){
        if(i%2===0 && i!==number)
        {
            evenno.push(i)
        }

    }
    return evenno
}
console.log(skipno(10))

//continue

function skipno1(number1){
    let evenno=[]

    for(i=0;i<20;i++){
        if(i%2===1)
        {
            continue
        }
        if(i=number1){
            continue
        }
        evenno.push(i)

    }
    return evenno
}
console.log(skipno1(10))  
console.log(skipno1(2))

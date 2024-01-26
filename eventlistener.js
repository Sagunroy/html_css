const increamentbtn=document.querySelector('#increament')
const decreamentbtn=document.querySelector('#decreament')
const counterEl=document.getElementById('counter')
const ulelement=document.getElementById('list-item')
let counter=0
function increamentCounter()
{
    counter++
    counterEl.innerText=counter
    //create an element
    const li=document.createElement('li')
    li.setAttribute('data-counter',counter)
    if(counter % 2 === 0)
    {
        li.setAttribute('class','red') //1st way to add css style using attributes
    }
    else{
        li.style.background='yellow' //2nd way to add css 
        li.style.padding='20px'// u can also add padding here simply after this
    }
    const b=document.createElement('b')

    ulelement.appendChild(li)
    const textnode=document.createTextNode('Sentence')
    b.appendChild(textnode)
    const textnode2=document.createTextNode(counter) //bold can be also done using inner html

    li.appendChild(b)
    li.appendChild(textnode2)

    //append the element
    ulelement.appendChild(li)


}
function decreamentCounter()
{
    const li=ulelement.querySelector('[data-counter="'+counter+'"]')
    const numb=parseInt(li.getAttribute('data-counter'),10)
    if(numb % 2 === 0)
    {
    li.remove()}
    counter--
    counterEl.innerText=counter

}
increamentbtn.addEventListener('click',increamentCounter)
decreamentbtn.addEventListener('click',decreamentCounter)
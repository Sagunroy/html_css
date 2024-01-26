const heading=document.querySelector('h1')
heading.innerText='hello sagun'
console.log(heading)
//if heading has id or class then in query sel for id ('#h1') and for class('.h1')
const alllistitem = document.querySelectorAll('ul li')
for(let i=0;i<alllistitem.length;i++){
    const listitem=alllistitem[i]
    listitem.innerText='yoooooo'
}
console.log(alllistitem)
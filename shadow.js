const myage=23
//const myage=24 gets error if we type this here bcz variable is in same scope 
if(true)
{
    const myage=24 //and no error when it is in different acope
    function printage()
    { 
        let myage //when we define it here the above variable gets shadow and when we run without line 8 it will print 24 & with line 8 it will print undefined
        console.log(myage)
    }

    printage()
}

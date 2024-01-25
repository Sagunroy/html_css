//if-else
function drivingage(agee)
{
    if(agee<18)
    {
        return true
    }
    else{
        return false
    }
}
console.log(drivingage(50))

//if else chain
function testSize(num) {
    
  if(num < 5) {
      return "Tiny";
  } else if (num < 10) {
      return "Small";
  } else if (num < 15) {
      return "Medium";
  } else if (num < 20) {
      return "Large";
  } else if(num >= 20) {
      return "Huge";
  }
    return "";
  }
  
  console.log(testSize(7))

  //basic calculator
  function performMath(number1,number2,operation) {
    if(operation === "+") {
       return number1 + number2;
    }
    return number1 * number2;
   }
   
   console.log(performMath(4,4,"+"));
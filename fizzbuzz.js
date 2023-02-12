function fizzBuzz() {

  const tab = new Array(100)
              .fill(1)
              .map((e,i)=>i+1)
              .map(function(e){
                return e%3===0 && e%5===0 ? "FizzBuzz":
                  e%3 === 0 ? "Fizz":
                  e%5 === 0 ? "Buzz":e
              })
  
  return tab
}
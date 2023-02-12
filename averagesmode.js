function mode(arr) {
    const set = new Set(arr)
    const array = Array.from(set);
    const counter = []
   for(let element of array)
   {
       counter.push(arr.filter(e=>e===element).length)
   }

   const max = Math.max.apply(null,counter)

   const nums = counter.map(function(e,i){
       if(e===max){return array[i]}
       else return false
   })





    return nums.filter(e=>e)
  }

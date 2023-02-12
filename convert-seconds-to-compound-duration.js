function convertSeconds(s) {

    const multipliers = [60,60,24,7]
    const names = ["sec","min","hr","d","wk"]
    const values = []
   
    values.push(multipliers.reduce(function(acc,curr){
           const element = Math.floor(acc/curr);
           const left = acc%curr;
           values.push(left);
           return element
        },s))
    let string = []
    values.forEach((e,i)=>{
        if(e>0){string.unshift(`${e} ${names[i]}`)}
    })
    
    return string.join(', ')
  }


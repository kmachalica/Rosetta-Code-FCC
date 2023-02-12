function getDPA(num) {
  let [deficient, perfect,abundant] = [0,0,0]
  for(let i = 1; i<=num; i++)
  {
    let sum = 0
    for(let j = 1; j<i; j++)
    {
        if(i%j === 0){sum+=j}
        if(sum > num){break}
        
    }
    if(sum > i){abundant++}
    else if(sum < i){deficient++}
    else if(sum === i){perfect++}
  }

  return [deficient,perfect,abundant]
}
function allEqual(arr) {

    if(arr.length===0){return true}
    let isEqual = true;
    arr.reduce(function(acc,curr){
        if(acc===curr)return curr
        else{isEqual = false}
    })
    return isEqual
  }

  
  function azSorted(arr) {
  
    if(arr.length===0){return true}
    let isSorted = true;
    arr.reduce(function(acc,curr){
        if(acc<curr){return curr}
        else{isSorted = false}
    })
    return isSorted
  }
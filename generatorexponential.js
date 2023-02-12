function exponentialGenerator(n) {
    const tabSq = []
    const tabCub = []
    let counter = 1;
    while(tabSq.length<n)
    {
      tabSq.push(Math.pow(counter,2))
      tabCub.push(Math.pow(counter,3))
      counter++;
      if(tabCub.some(e=>e===tabSq[tabSq.length-1])){tabSq.pop()}
    }
    return tabSq[tabSq.length-1]
}
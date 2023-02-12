function wordFrequency(txt, n) {
    
    if(txt===""){return []}

    const map = new Map()
    
    txt.split(' ')
        .map(e=>e.toLowerCase())
        .forEach(e=>{
        if(map.get(e)){map.set(e,map.get(e)+1)}
        else{map.set(e,1)}
    })
    
    return Array.from(map)
                .sort((a,b)=>b[1]-a[1])
                .slice(0,n)
}

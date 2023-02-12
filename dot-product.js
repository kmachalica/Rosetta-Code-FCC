function dotProduct(ary1, ary2) {
    return ary1.reduce((acc,curr,index)=>(acc+(curr*ary2[index])),0)
}
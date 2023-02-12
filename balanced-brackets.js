function isBalanced(str) {
const array = str.split('')

if(array.length%2!==0){return false}

let edit = [...array]
for(let i = 0; i<=array.length/2-1; i++){
    const bracket1 = edit.lastIndexOf('[')
    const bracket2 = edit.slice(bracket1).indexOf(']')+bracket1;

    if(bracket1<0||bracket2<0||bracket1>bracket2){return false}
    edit = edit.filter((e,i)=>(i!==bracket1&&i!==bracket2))
}
    return true
  }
function canMakeWord(word) {
  word = word.toUpperCase().split('')
  const trueArray = []
  
  for(let i = 0; i<word.length; i++)
  {
    for(let j = 0; j<blocksArr.length; j++)
    {
      if(blocksArr[j].some(e=>e === word[i])){
        blocksArr.splice(j,1);
        trueArray.push(true);
        break;
      }
    }
  }
  return trueArray.length === word.length ? true:false
}

 const blocksArr = [
  ["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"],
  ["G", "T"], ["R", "E"], ["T", "G"], ["Q", "D"], ["F", "S"],
  ["J", "W"], ["H", "U"], ["V", "I"], ["A", "N"], ["O", "B"],
  ["E", "R"], ["F", "S"], ["L", "Y"], ["P", "C"], ["Z", "M"],
];

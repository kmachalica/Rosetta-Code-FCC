function findXmasSunday(start, end) {

  const xmas = []
  for(let i = start; i <= end; i++){
    const date = new Date(i,11,25)
    if(date.getDay()===0){xmas.push(i)}
  }

  return xmas;
}
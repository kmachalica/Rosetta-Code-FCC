function getFinalOpenedDoors(numDoors) {
  
  const doors = new Array(numDoors)
  doors.fill(false)

  for(let i = 0; i <numDoors;i++)
  {
    for(let j = i; j<numDoors; j+=(i+1))
    {
      doors[j]=!doors[j]
    }
  }
  return doors.map((e,i)=>[e,i+1]).filter(e=>e[0]).map(e=>e[1])
}
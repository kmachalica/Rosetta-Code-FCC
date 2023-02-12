function lascii(cFrom, cTo) {

  const first = cFrom.charCodeAt(0)
  const last = cTo.charCodeAt(0)

  const table = []
  for(let i = first; i<=last; i++)
  {
    let string = String.fromCharCode(i)
    table.push(string)
  }

  return table
}
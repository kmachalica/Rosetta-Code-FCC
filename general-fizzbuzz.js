function genFizzBuzz(rules, num) {
  let factors = rules.filter(e=>num%e[0]===0)
  if(factors.length === 0){return num}
  factors = factors.map(e=>e[1])
                    .join("")

  return factors
}

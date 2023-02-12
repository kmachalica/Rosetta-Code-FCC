function quibble(words) {
    if(words.length===0){return "{}"}
    if(words.length===1){return `{${words[0]}}`}
    return `{${words.slice(0,words.length-1).join(', ')} and ${words.slice(-1)}}`
  }
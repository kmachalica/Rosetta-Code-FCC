function add12Hours(dateString) {
    const array = dateString.split(' ');
    let endOfString = array.splice(-1)
    const isPM = array[array.length-1].match(/am|pm/gi)
    const parseHour = array.splice(array.length-1)[0]
                            .split('')
                            .map(e=>parseInt(e))
                            .filter(e=>!isNaN(e))
    const date = new Date(array.join())

    let minutes = parseHour.splice(-1)[0]+parseHour.splice(-1)[0]*10+parseHour.splice(-1)[0]*60
    if(parseHour.length>0){minutes+=parseHour.splice(-1)[0]*10*60}

    if(isPM[0]==="pm"){minutes+=24*60; endOfString = "am EST"}
    else{minutes+=12*60;endOfString = "pm EST"}

    date.setMinutes(minutes)

    const options = {
        month: "long",
        day: "numeric",
        year: 'numeric',
        hour: "numeric",
        minute: "2-digit"
    }
    let returnDate = date.toLocaleDateString('en',options)
    returnDate = returnDate.replace(/,|\sat|pm|am/gi,"").trim()+endOfString
    
    return returnDate
  }

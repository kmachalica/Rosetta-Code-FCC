function getDateFormats() {

    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth()+1
    const day = date.getDate();
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }
    const date1 = date.toLocaleDateString('en',options)
    const date2 = `${year}-${month}-${day}`
    return [date2,date1]
  }

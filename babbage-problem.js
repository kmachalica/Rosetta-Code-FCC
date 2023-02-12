 function babbage(babbageNum, endDigits) {

    const start = Math.ceil(Math.sqrt(babbageNum))

    for(let i = start; i<=babbageNum;i++)
    {
        const wynik = Math.pow(i,2);
        if((wynik-endDigits)%1000000===0){return i}
    }
  }
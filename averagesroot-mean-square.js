function rms(arr) {
    return Math.sqrt(arr.map(e=>Math.pow(e,2))
        .reduce((acc,curr)=>acc+curr)/arr.length)
}

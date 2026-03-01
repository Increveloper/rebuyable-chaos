function FormatNumber(data){
    if (!(data instanceof Decimal)) return "NaN"
    const cleanMantissa = data.mantissa.toFixed(2)
    const cleanExp = data.exponent.toFixed(2)
    if(data.exponent > 6){
        return `${cleanMantissa}e${data.exponent}`
    }
    if(data.exponent > 3000003){
        return `e${cleanExp}`
    }
}
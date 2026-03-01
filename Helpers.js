function add(decimalVar, amount) {
    if (!(decimalVar instanceof Decimal)){
        decimalVar = new Decimal(decimalVar)
    }
    if (!(amount instanceof Decimal)){
        amount = new Decimal(amount)
    }
    return decimalVar.add(amount);
}
function sub(decimalVar, amount) {
    if (!(decimalVar instanceof Decimal)){
        decimalVar = new Decimal(decimalVar)
    }
    if (!(amount instanceof Decimal)){
        amount = new Decimal(amount)
    }
    return decimalVar.sub(amount);
}
function mul(decimalVar, amount) {
    if (!(decimalVar instanceof Decimal)){
        decimalVar = new Decimal(decimalVar)
    }
    if (!(amount instanceof Decimal)){
        amount = new Decimal(amount)
    }
    return decimalVar.mul(amount);
}
function div(decimalVar, amount) {
    if (!(decimalVar instanceof Decimal)){
        decimalVar = new Decimal(decimalVar)
    }
    if (!(amount instanceof Decimal)){
        amount = new Decimal(amount)
    }
    return decimalVar.div(amount);
}
function pow(decimalVar, amount) {
    if (!(decimalVar instanceof Decimal)){
        decimalVar = new Decimal(decimalVar)
    }
    if (!(amount instanceof Decimal)){
        amount = new Decimal(amount)
    }
    return decimalVar.pow(amount);
}
function root(decimalVar, amount){
    if (!(decimalVar instanceof Decimal)){
        decimalVar = new Decimal(decimalVar)
    }
    if (!(amount instanceof Decimal)){
        amount = new Decimal(amount)
    }
    if(amount.eq(new Decimal(0))){
        amount = new Decimal(1)
    }
    return decimalVar.pow(new Decimal(1).div(amount))
}
function log(decimalVar, base) {
    if (!(decimalVar instanceof Decimal)){
        decimalVar = new Decimal(decimalVar)
    }
    if (!(base instanceof Decimal)){
        base = new Decimal(base)
    }
    return decimalVar.log(base);
}
function floor(decimalVar) {
    if (!(decimalVar instanceof Decimal)){
        decimalVar = new Decimal(decimalVar)
    }
    return decimalVar.floor();
}
function dec(data) {
    return new Decimal(data)
}
function ClassToggle(id, classItem, requirement){
    document.getElementById(id).classList.toggle(classItem, requirement)
}
function text(id, text){
    document.getElementById(id).textContent = text
}
function ToggleText(id, requirement, text1, text2){
    if(requirement){
        text(id, text1)
    }
    else if(!requirement){
        text(id, text2)
    }
    else{
        console.log("Invalid requirement!")
    }
}
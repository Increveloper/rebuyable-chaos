//let upg = game.rebuyablevars
function CheckAvailability(LayerIndex, RowIndex, BuyableIndex, Resource){
    let Amount = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0]
    let Cost = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][1]
    let Max = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][4]
    document.getElementById(`R${RowIndex + 1}B${BuyableIndex + 1}`).classList.remove("unbuyable")
    document.getElementById(`R${RowIndex + 1}B${BuyableIndex + 1}`).classList.remove("buyable")
    document.getElementById(`R${RowIndex + 1}B${BuyableIndex + 1}`).classList.remove("maxed")
    if(Amount.eq(Max)){
        document.getElementById(`R${RowIndex + 1}B${BuyableIndex + 1}`).classList.add("maxed")
    }
    else if(Resource.lt(Cost)){
        document.getElementById(`R${RowIndex + 1}B${BuyableIndex + 1}`).classList.add("unbuyable")
    }
    else if(Resource.gte(Cost)){
        document.getElementById(`R${RowIndex + 1}B${BuyableIndex + 1}`).classList.add("buyable")
    }

}
function ResetRows(num, exclusive){
    let Resource;
    if(exclusive !== null && exclusive instanceof Decimal){
        Resource = exclusive
    }
    if(num >= 0){
        game.points = new Decimal(0)
        game.pointGain = new Decimal(1)
    }
    if(num >= 1){
        game.rebuyables[0][0][0][0][0] = new Decimal(0)
    }
    if(num >= 2){
        game.rebuyables[0][1][0][0][0] = new Decimal(0)
    }
    if(num >= 3){
        game.rebuyables[0][2][0][0][0] = new Decimal(0)
        game.rebuyables[0][2][1][0][0] = new Decimal(0)
    }
    if(typeof Resource !== undefined){
        return Resource
    }
}
function DisplayRow(RowID, Resource, Requirement){
    if(Resource.gte(Requirement)){
        document.getElementById(RowID).classList.remove("hidden")
    }
}
function BuyUpgrade(LayerIndex, RowIndex, BuyableIndex, Resource){
    let Amount = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0]
    let Cost = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][1]
    let Max = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][4]
    if(Resource.gte(Cost) && Amount.lt(Max)){
        game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0] = add(game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0], new Decimal(1))
        Resource = new Decimal(0)
    }

    return [game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0], Resource]
}

function BuyR1B1(){
    [game.rebuyables[0][0][0][0][0], game.points] = BuyUpgrade(0, 0, 0, game.points)
}
function BuyR2B1(){
    if(game.rebuyables[0][0][0][0][0].gte(game.rebuyables[0][1][0][0][1])){
        [game.rebuyables[0][1][0][0][0], game.rebuyables[0][0][0][0][0]] = BuyUpgrade(0, 1, 0, game.rebuyables[0][0][0][0][0])
        ResetRows(0, null)
    }
}
function BuyR3B1(){
    if(game.rebuyables[0][1][0][0][0].gte(game.rebuyables[0][2][0][0][1])){
        //[game.rebuyables[0][2][0][0][0], game.rebuyables[0][1][0][0][0]] = BuyUpgrade(0, 2, 0, upg[0][1][0][0][0])
        let Amount = game.rebuyables[0][2][0][0][0]
        console.log("Amount:", Amount)
        let Cost = game.rebuyables[0][2][0][0][1]
        console.log("Cost:", Cost)
        let Max = game.rebuyables[0][2][0][0][4]
        console.log("Max:", Max)
        let Resource = upg[0][1][0][0][0]
        console.log("Resource Amount:", Resource)
        console.log("Resource greater than Cost:", Resource.gte(Cost), "Amount lesser than Max:", Amount.lt(Max))
        if(Resource.gte(Cost) && Amount.lt(Max)){
            console.log("Before:", upg[0][2][0][0][0])
            game.rebuyables[0][2][0][0][0] = add(game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0], new Decimal(1))
            console.log("After:", upg[0][2][0][0][0])
            upg[0][1][0][0][0] = new Decimal(0)
        }
        ResetRows(1, null)
    }
}
function BuyR3B2(){
    if(game.points.gte(game.rebuyables[0][2][1][0][1])){
        [upg[0][2][1][0][0], game.points] = BuyUpgrade(0, 2, 1, game.points)
        game.points = ResetRows(1, game.points)
    }
}


setInterval(function(){
    CheckAvailability(0, 0, 0, game.points)
    CheckAvailability(0, 1, 0, game.rebuyables[0][0][0][0][0])
    CheckAvailability(0, 2, 0, game.rebuyables[0][1][0][0][0])
    CheckAvailability(0, 2, 1, game.points)

    DisplayRow("MainRow2", game.rebuyables[0][0][0][0][0], new Decimal(10))
    DisplayRow("MainRow3", game.rebuyables[0][1][0][0][0], new Decimal(10))
}, 100)
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
        game.points = new Decimal(0)
    }
    [game.rebuyables[0][1][0][0][0], game.rebuyables[0][0][0][0][0]] = BuyUpgrade(0, 1, 0, game.rebuyables[0][0][0][0][0])
}

setInterval(function(){
    CheckAvailability(0, 0, 0, game.points)
    CheckAvailability(0, 1, 0, game.rebuyables[0][0][0][0][0])
}, 100)
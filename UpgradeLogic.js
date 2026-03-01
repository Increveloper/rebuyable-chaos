function CheckAvailability(LayerIndex, RowIndex, BuyableIndex, Resource){
    let Amount = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0]
    let Cost = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][1]
    let Max = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][4]
    if(LayerIndex === 0){
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
    else{
        document.getElementById(`L${LayerIndex + 1}R${RowIndex + 1}B${BuyableIndex + 1}`).classList.remove("unbuyable")
        document.getElementById(`L${LayerIndex + 1}R${RowIndex + 1}B${BuyableIndex + 1}`).classList.remove("buyable")
        document.getElementById(`L${LayerIndex + 1}R${RowIndex + 1}B${BuyableIndex + 1}`).classList.remove("maxed")
    }
}
function ResetRows(num){
    if(num >= 0){
        game.points = new Decimal(0)
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
    if(num >= 4){
        game.rebuyables[0][3][0][0][0] = new Decimal(0)
        game.rebuyables[0][3][1][0][0] = new Decimal(0)
        game.rebuyables[0][3][2][0][0] = new Decimal(0)
    }
}
function ResetRPRows(num){
    if(num >= 0){
        game.RebuyablePoints = dec(0)
    }
    if(num >= 1){
        game.rebuyables[1][0][0][0][0] = dec(0)
    }
}
function DisplayRow(RowID, Resource, Requirement){
    for(let i = 0; i < Resource.length; i++){
        if(Resource[i].gte(Requirement[i])){
            document.getElementById(RowID).classList.remove("hidden")
        }
    }
}
function BuyUpgrade(LayerIndex, RowIndex, BuyableIndex, Resource, miles){
    let Amount = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0]
    let Cost = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][1]
    let Max = game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][4]
    let doReset = !miles
    if(Resource.gte(Cost) && Amount.lt(Max)){
        game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0] = add(game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0], new Decimal(1))
        if(doReset){
            Resource = new Decimal(0)
        }
    }

    return [game.rebuyables[LayerIndex][RowIndex][BuyableIndex][0][0], Resource]
}

function BuyR1B1(){
    [game.rebuyables[0][0][0][0][0], game.points] = BuyUpgrade(0, 0, 0, game.points, game.miles[0][0])
}
function BuyR2B1(){
    if(game.rebuyables[0][0][0][0][0].gte(game.rebuyables[0][1][0][0][1])){
        [game.rebuyables[0][1][0][0][0], game.rebuyables[0][0][0][0][0]] = BuyUpgrade(0, 1, 0, game.rebuyables[0][0][0][0][0], game.miles[0][1])
        if(!game.miles[0][1]){
            ResetRows(1)
        }
    }
}
function BuyR3B1(){
    if(game.rebuyables[0][1][0][0][0].gte(game.rebuyables[0][2][0][0][1])){
        [game.rebuyables[0][2][0][0][0], game.rebuyables[0][1][0][0][0]] = BuyUpgrade(0, 2, 0, game.rebuyables[0][1][0][0][0], game.miles[0][2])
        if(!game.miles[0][2]){
            ResetRows(2)
        }
    }
}
function BuyR3B2(){
    if(game.points.gte(game.rebuyables[0][2][1][0][1])){
        [game.rebuyables[0][2][1][0][0], game.points] = BuyUpgrade(0, 2, 1, game.points, game.miles[0][2])
        if(!game.miles[0][2]){
            ResetRows(1)
        }
    }
}
function BuyR4B1(){
    if(game.points.gte(game.rebuyables[0][3][0][0][1])){
        [game.rebuyables[0][3][0][0][0], game.points] = BuyUpgrade(0, 3, 0, game.points, game.miles[0][3])
        if(game.miles[0][3]){
            ResetRows(3)
        }
    }
}
function BuyR4B2(){
    if(game.points.gte(game.rebuyables[0][3][0][0][1])){
        [game.rebuyables[0][3][1][0][0], game.rebuyables[0][2][0][0][0]] = BuyUpgrade(0, 3, 1, game.rebuyables[0][2][0][0][0], game.miles[0][3])
        if(!game.miles[0][3]){
            ResetRows(3)
        }
    }
}
function BuyR4B3(){
    if(game.points.gte(game.rebuyables[0][3][2][0][1])){
        [game.rebuyables[0][3][2][0][0], game.points] = BuyUpgrade(0, 3, 2, game.points, game.miles[0][3])
        if(!game.miles[0][3]){
            ResetRows(3)
        }
    }
}
function BuyL1R1B1(){
    if(game.RebuyablePoints.gte(game.rebuyables[1][0][0][0][1])){
        [game.rebuyables[1][0][0][0][0], game.RebuyablePoints] = BuyUpgrade(1, 0, 0, game.RebuyablePoints, game.miles[1][0])
        if(!game.miles[1][0]){
            ResetRPRows(0)
        }
    }
}



setInterval(function(){
    CheckAvailability(0, 0, 0, game.points)
    CheckAvailability(0, 1, 0, game.rebuyables[0][0][0][0][0])
    CheckAvailability(0, 2, 0, game.rebuyables[0][1][0][0][0])
    CheckAvailability(0, 2, 1, game.points)
    CheckAvailability(0, 3, 0, game.points)
    CheckAvailability(0, 3, 1, game.rebuyables[0][3][0][0][0])
    CheckAvailability(0, 3, 2, game.points)
    CheckAvailability(1, 0, 0, game.RebuyablePoints)

    DisplayRow("MainRow2", [game.rebuyables[0][0][0][0][0]], [new Decimal(10)])
    DisplayRow("MainRow3", [game.rebuyables[0][1][0][0][0]], [new Decimal(10)])
    DisplayRow("MainRow4", [game.rebuyables[0][2][0][0][0], game.rebuyables[0][2][1][0][0]], [dec(10), dec(10)])
}, 100)
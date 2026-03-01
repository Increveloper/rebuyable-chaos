function CalculateR1B1Base(){
    game.rebuyables[0][0][0][0][2] = new Decimal(1)
 
    game.rebuyables[0][0][0][0][2] = mul(game.rebuyables[0][0][0][0][2], game.rebuyables[0][1][0][0][3])

    game.rebuyables[0][0][0][0][5] = new Decimal(0)

    game.rebuyables[0][0][0][0][5] = add(game.rebuyables[0][0][0][0][5], game.rebuyables[0][3][1][0][3])
}
function CalculateR2B1Base(){
    game.rebuyables[0][1][0][0][2] = new Decimal(1.10)

    game.rebuyables[0][1][0][0][2] = add(game.rebuyables[0][1][0][0][2], game.rebuyables[0][2][0][0][3])

    game.rebuyables[0][1][0][0][5] = dec(0)

    game.rebuyables[0][1][0][0][5] = add(game.rebuyables[0][1][0][0][5], game.rebuyables[0][3][1][0][3])
}
function CalculateR3B1Base(){
    game.rebuyables[0][2][0][0][2] = new Decimal(0.10)
    game.rebuyables[0][2][0][0][5] = dec(0)
}
function CalculateR3B2Base(){
    game.rebuyables[0][2][1][0][2] = new Decimal(1.50)
    game.rebuyables[0][2][1][0][5] = dec(0)
}
function CalculateR4B1Base(){
    game.rebuyables[0][3][0][0][2] = add(game.rebuyables[0][3][0][0][6][0], div(pow(log(game.points, game.rebuyables[0][3][0][0][6][1]), game.rebuyables[0][3][0][0][6][2]), game.rebuyables[0][3][0][0][6][3]))
    game.rebuyables[0][3][0][0][5] = dec(0)
}
function CalculateR4B2Base(){
    game.rebuyables[0][3][1][0][2] = new Decimal(1)
    game.rebuyables[0][3][1][0][5] = dec(0)
}
function CalculateR4B3Base(){
    game.rebuyables[0][3][2][0][2] = new Decimal(0.01)
    game.rebuyables[0][3][2][0][5] = dec(0)
}
function CalculateBuyableTotal(){
    game.TotalRebuyables[0] = [dec(0), dec(0), dec(0), dec(0)]
    game.TotalRebuyables[1] = [dec(0)]
    game.TotalRebuyables[game.TotalRebuyables.length - 1] = dec(0)

    for(let i = 0; i < game.rebuyables.length; i++){
        for(let j = 0; j < game.rebuyables[i].length; j++){
            for(let k = 0; k < game.rebuyables[i][j].length; k++){
                game.TotalRebuyables[i][j] = add(game.TotalRebuyables[i][j], game.rebuyables[i][j][k][0][0])
                game.TotalRebuyables[game.TotalRebuyables.length - 1] = add(game.TotalRebuyables[game.TotalRebuyables.length - 1], game.rebuyables[i][j][k][0][0])
            }
        }
    }
}
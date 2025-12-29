function CalculateR1B1Base(){
    game.rebuyables[0][0][0][0][2] = new Decimal(1)
    
    game.rebuyables[0][0][0][0][2] = mul(game.rebuyables[0][0][0][0][2], game.rebuyables[0][1][0][0][3])
}
function CalculateR2B1Base(){
    game.rebuyables[0][1][0][0][2] = new Decimal(1.10)

    game.rebuyables[0][1][0][0][2] = add(game.rebuyables[0][1][0][0][2], game.rebuyables[0][2][0][0][3])
}
function CalculateR3B1Base(){
    game.rebuyables[0][2][0][0][2] = new Decimal(0.10)
}
function CalculateR3B2Base(){
    game.rebuyables[0][2][1][0][2] = new Decimal(1.10)
}
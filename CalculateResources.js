function CalculatePoints(){
    game.pointgain = new Decimal(1)

    game.pointgain = add(game.pointgain, game.rebuyables[0][0][0][0][3])

    game.pointgain = mul(game.pointgain, game.rebuyables[0][2][1][0][3])
}
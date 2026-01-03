setInterval(function(){
    CalculateR1B1Base();
    CalculateR2B1Base();
    CalculatePoints();

    game.points = add(game.points, div(game.pointgain, new Decimal(10)))
    game.rebuyables[0][0][0][0][3] = mul(game.rebuyables[0][0][0][0][2], game.rebuyables[0][0][0][0][0])
    game.rebuyables[0][1][0][0][3] = pow(game.rebuyables[0][1][0][0][2], game.rebuyables[0][1][0][0][0])
    game.rebuyables[0][2][0][0][3] = mul(game.rebuyables[0][2][0][0][2], game.rebuyables[0][2][0][0][0])
    game.rebuyables[0][2][1][0][3] = pow(game.rebuyables[0][2][1][0][2], game.rebuyables[0][2][1][0][0])
    game.rebuyables[0][2][1][0][1] = mul(new Decimal(1000), pow(new Decimal(10), upg[0][2][1][0][0]))

    for(let i = 0; i < combos.length; i++){
        const value = combos[i][0]();
        document.getElementById(combos[i][1]).textContent = value.toFixed(2)
    }
}, 100)
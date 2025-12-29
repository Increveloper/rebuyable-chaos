setInterval(function(){
    CalculateR1B1Base();
    CalculatePoints();

    game.points = add(game.points, div(game.pointgain, new Decimal(10)))
    game.rebuyables[0][0][0][0][3] = mul(game.rebuyables[0][0][0][0][2], game.rebuyables[0][0][0][0][0])

    for(let i = 0; i < combos.length; i++){
        const value = combos[i][0]();
        document.getElementById(combos[i][1]).textContent = value.toString()
    }
}, 100)
setInterval(function(){
    CalculateR1B1Base();
    CalculateR2B1Base();
    CalculatePoints();

    ClassToggle("UnlockRPTab", "hidden", game.rebuyables[0][3][2][0][0] >= 1)
    ClassToggle("Info1")

    ToggleText("PR1Auto", game.ActiveAuto[0][0], "Enabled", "Disabled")
    ToggleText("PR2Auto", game.ActiveAuto[0][1], "Enabled", "Disabled")

    game.points = add(game.points, div(game.pointgain, new Decimal(10)))
    game.rebuyables[0][0][0][0][3] = mul(game.rebuyables[0][0][0][0][2], game.rebuyables[0][0][0][0][0])
    game.rebuyables[0][1][0][0][3] = pow(game.rebuyables[0][1][0][0][2], game.rebuyables[0][1][0][0][0])
    game.rebuyables[0][2][0][0][3] = mul(game.rebuyables[0][2][0][0][2], game.rebuyables[0][2][0][0][0])
    game.rebuyables[0][2][1][0][3] = pow(game.rebuyables[0][2][1][0][2], game.rebuyables[0][2][1][0][0])
    game.rebuyables[0][2][1][0][1] = mul(new Decimal(1000), pow(new Decimal(10), game.rebuyables[0][2][1][0][0]))

    for(let i = 0; i < combos.length; i++){
        const value = combos[i][0]();
        document.getElementById(combos[i][1]).textContent = value.toFixed(2)
    }
    for(let i = 0; i < game.rebuyables.length; i++){
        for(let j = 0; j < game.rebuyables[i].length; j++){
            for(let k = 0; k < game.rebuyables[i][j].length; k++){
                document.getElementById(`ShowRB${i}${j}${k}`).classList.toggle("hidden", game.rebuyables[i][j][k][0][5] > 0)
            }
        }
    }
}, 100)
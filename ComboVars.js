let combos = [
    [() => game.points, "points"], 
    [() => game.pointgain, "pointGain"], 
    [() => game.rebuyables[0][0][0][0][2], "R1B1base"], 
    [() => game.rebuyables[0][0][0][0][3], "R1B1Effect"],
    [() => game.rebuyables[0][0][0][0][1], "R1B1cost"],
    [() => game.rebuyables[0][0][0][0][0], "R1B1Amount"],
    [() => game.rebuyables[0][1][0][0][2], "R2B1base"],
    [() => game.rebuyables[0][1][0][0][3], "R2B1Effect"],
    [() => game.rebuyables[0][1][0][0][0], "R2B1Amount"]
]
function ToggleAuto(vars){
    vars = !vars

    return vars
}
setInterval(function(){
    if(game.ActiveAuto[0][0] && game.miles[0][0]){
        BuyR1B1()
    }
    if(game.ActiveAuto[0][1] && game.miles[0][1]){
        BuyR2B1()
    }
}, 100)
//setInterval(function(){
//    localStorage.setItem("game", JSON.stringify(game))
//}, 60000)
//localStorage.getItem("game")
function SaveGame(){
    localStorage.setItem("game", JSON.stringify(game))
} 
function LoadGame(){
    localStorage.getItem("game")
}
function HardReset(){
    let game = {}
    game.points = new Decimal(0)
    game.pointgain = new Decimal(1)
    game.rebuyables = [
        [ //Layer
            [ //Row
                [ //Buyable
                    [new Decimal(0), new Decimal(10), new Decimal(1), new Decimal(0), new Decimal(10)],
                ],
            ],
            [
                [
                    [new Decimal(0), new Decimal(10), new Decimal(1.10), new Decimal(1), new Decimal(10)],
                ],
            ],
        ],
    ]
    console.log("Performed reset!", game.points, typeof game.points)
}
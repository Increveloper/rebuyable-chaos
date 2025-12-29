//setInterval(function(){
//    localStorage.setItem("game", JSON.stringify(game))
//}, 60000)
//localStorage.getItem("game")
function SaveGame(){
    SavedGame = localStorage.setItem("game", JSON.stringify(gameObject))
} 
function LoadGame(){
    parsed = JSON.parse(SavedGame)
}
function HardReset(){
    game = {}
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
}
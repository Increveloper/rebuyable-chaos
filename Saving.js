//setInterval(function(){
//    localStorage.setItem("game", JSON.stringify(game))
//}, 60000)
//localStorage.getItem("game")
function downloadSave(game) {
    const data = JSON.stringify(game, null, 2); // pretty print (optional)
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "savegame.json";
    a.click();

    URL.revokeObjectURL(url);
}
document.getElementById("loadSave").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        //try {
        const loaded = JSON.parse(reader.result);
        Object.assign(game, loaded);
        //} //catch {
            //alert("Invalid save file");
        //}
    };
    reader.readAsText(file);
});

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
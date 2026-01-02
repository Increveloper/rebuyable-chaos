//setInterval(function(){
//    localStorage.setItem("game", JSON.stringify(game))
//}, 60000)
//localStorage.getItem("game")
function serializeRebuyables(rebuyables) {
    return rebuyables.map(layer =>
        layer.map(row =>
            row.map(buyable =>
                buyable.map(value => 
                    value.map(statistic => statistic.toString())
                )
            )
        )
    );
}
function deserializeRebuyables(data) {
    return data.map(layer =>
        layer.map(row =>
            row.map(buyable =>
                buyable.map(value => 
                    value.map(statistic => new Decimal(statistic))
                )
            )
        )
    );
}

function downloadSave(game) {
    if (game === undefined) {
        alert("Game state is undefined — cannot save");
        return;
    }
    const SaveData = {
        rebuyables: serializeRebuyables(game.rebuyables),
        points: game.points?.toString() ?? "0",
        pointGain: game.pointgain?.toString() ?? "0"
    }

    const data = JSON.stringify(SaveData, null, 2);
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
        try {
        const loaded = JSON.parse(reader.result);
        if (!loaded || typeof loaded !== "object") {
            throw new Error("Invalid save root");
        }
        if (!Array.isArray(loaded.rebuyables)) {
            throw new Error("Invalid rebuyables");
        }
        game.rebuyables = deserializeRebuyables(loaded.rebuyables) ?? new Decimal("0")
        game.points = new Decimal(loaded.points ?? "0")
        game.pointGain = new Decimal(loaded.pointGain ?? "0")
        e.target.value = ""

        } catch {
            alert("Invalid save file");
        }
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
//setInterval(function(){
//    localStorage.setItem("game", JSON.stringify(game))
//}, 60000)
//localStorage.getItem("game")
// The serialize/deserialize functions were made by ChatGPT and have been manually tested for bugs.
function serializeRebuyables(rebuyables) {
    return rebuyables.map(layer =>
        layer.map(row =>
            row.map(buyable =>
                buyable.map(value => 
                    value.map(statistic => {if(Array.isArray(statistic)){return statistic.map(base => base.toString())} else{return statistic.toString()}})
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
                    value.map(statistic => {if(Array.isArray(statistic)){return statistic.map(base => new Decimal(base))} else{ return new Decimal(statistic)}})
                )
            )
        )
    );
}
function SerializeMilestones(data) {
    return data.map(layer => 
        layer.map(value => Boolean(value))
    )
}
function DeserializeMilestones(data){
    return data.map(layer => 
        layer.map(value => Boolean(value))
    )
}

// The save/load functions below were made by ChatGPT and have been manually tested for bugs.
function downloadSave(game) {
    if (game === undefined) {
        alert("Game state is undefined — cannot save");
        return;
    }
    const SaveData = {
        rebuyables: serializeRebuyables(game.rebuyables),
        milestones: SerializeMilestones(game.milestones),
        points: game.points?.toString() ?? "0",
        pointGain: game.pointgain?.toString() ?? "0",
        RP: game.RebuyablePoints?.toString() ?? "0",
        RPGain: game.RebuyablePointGain?.toString() ?? "0"
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
        game.milestones = DeserializeMilestones(loaded.milestones)
        game.points = new Decimal(loaded.points ?? "0")
        game.pointGain = new Decimal(loaded.pointGain ?? "0")
        game.RebuyablePoints = dec(loaded.RP) ?? dec(0)
        game.RebuyablePointGain = dec(loaded.RPGain) ?? dec(0)
        e.target.value = ""

        } catch {
            alert("Invalid save file");
        }
    };
    reader.readAsText(file);
});

function HardReset(){
    game.points = new Decimal(0)
    game.pointgain = new Decimal(1)
    game.RebuyablePoints = dec(0)
    game.RebuyablePointGain = dec(0)
    //for(let i = 0; i < game.rebuyablesDefault.length; i++){
    //    for(let j = 0; j < game.rebuyablesDefault[i].length; j++){
    //        for(let k = 0; k < game.rebuyablesDefault[i][j].length; k++){
    //            for(let l = 0; l < game.rebuyablesDefault[i][j][k][0].length; l++){
    //                if(Array.isArray(game.rebuyables[i][j][k][0][l])){
    //                    for(let m = 0; m < game.rebuyablesDefault[i][j][k][0][l].length; m++){
    //                        game.rebuyables[i][j][k][0][l][m] = game.rebuyablesDefault[i][j][k][0][l][m]
    //                    }
    //                }
    //                else{
    //                    game.rebuyables[i][j][k][0][l] = game.rebuyablesDefault[i][j][k][0][l]
    //                }
    //            }
    //        }
    //    }
    //}
    //Lines 96-111 is old code for resetting variables. If StructuredClone works, it may be removed.
    game.rebuyables = structuredClone(game.rebuyablesDefault)
    game.miles = structuredClone(game.DefaultMiles)
}
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
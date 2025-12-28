setInterval(function(){
    localStorage.setItem("game", JSON.stringify(game))
}, 60000)
localStorage.getItem("game")
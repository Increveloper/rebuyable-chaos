function CheckAchieved(id, requirement){
    ClassToggle(id, "achieved", requirement)
    ClassToggle(id, "unachieved", !requirement)
}
function AchieveMilestone(requirement, varId){
    if(requirement){
        varId = true
    }
    else if(!requirement){
        varId = false
    }
    else{
        console.log("Invalid requirement detected!")
    }
}


setInterval(function(){
    CheckAchieved("PointMile1", game.miles[0][0])
    CheckAchieved("PointMile2", game.miles[0][1])
}, 100)
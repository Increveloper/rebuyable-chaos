tab = [["MainPointsTab", "InfoPointsTab", "RebyablePointsPointsTab", "MilestonePointsTab"]]
tabIndex = [0, 0, 0]
ShownSubTabs = ["PointsSub"]

function ShowTab(MainTabIndex, SubTabIndex){
    tabIndex[0] = MainTabIndex
    tabIndex[1] = SubTabIndex

    for(let i = 0; i < tab.length; i++){
        for(let j = 0; j < tab[i].length; j++){
            document.getElementById(tab[i][j]).classList.add("hidden")
        }
    }

    document.getElementById(tab[MainTabIndex][SubTabIndex]).classList.remove("hidden")
}
function ShowSubTabs(MainTabIndex){
    tabIndex[2] = MainTabIndex

    for(let i = 0; i < ShownSubTabs.length; i++){
        document.getElementById(ShownSubTabs[1]).classList.add("hidden")
    }

    document.getElementById(ShownSubTabs[MainTabIndex]).classList.remove("hidden")
}
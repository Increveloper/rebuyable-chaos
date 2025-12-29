tab = [["MainPointsTab"]]
tabIndex = [0, 0]

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
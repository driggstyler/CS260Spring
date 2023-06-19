async function getLeaderboards() {
    let leaderboards = [];
    try {
    const response = await fetch("/api/leaderboards");
    leaderboards = await response.json();
    localStorage.setItem("leaderboards", JSON.stringify(leaderboards));
    }
    catch {
        const leaderboardsText = localStorage.getItem("leaderboards");
        if (leaderboardsText) {
            leaderboards = JSON.parse(leaderboardsText);
            
        }
    }
    displayLeaderBoards(leaderboards);
}

function displayLeaderBoards(leaderboards) {
    document.getElementById("firstPlace").innerHTML = leaderboards[0].name;
    document.getElementById("firstPlaceScore").innerHTML = leaderboards[0].score;
    document.getElementById("secondPlace").innerHTML = leaderboards[1].name;
    document.getElementById("secondPlaceScore").innerHTML = leaderboards[1].score;
    document.getElementById("thirdPlace").innerHTML = leaderboards[2].name;
    document.getElementById("thirdPlaceScore").innerHTML = leaderboards[2].score;
}
/*async function sendScores() {
    try {
        const response = await fetch("api/endgame", {
            method: 'POST',
            body: JSON.stringify({
                username: localStorage.getItem('username'),
                score: localStorage.getItem('usersScore')
            }),
            headers: {
                'Content-type': 'application/json; charsset=UTF-8',
            },
        })
    }
    catch {
        console.log("Online scoring is unavailable");
    }
}*/

/*async function getPlacement() {
    let placement = 0;
    try {
        const response = await fetch("api/endgame");
        placement = await response.json();
        //Save place in case server goes down
        localStorage.setItem('placement', JSON.stringify(placement));
    }
    catch {
        console.log("Online scoring is unavailable.");
    }
    return placement;
}*/

async function sendScore(player, points) {
    try {
        const response = await fetch('api/endgame', {
            method: 'POST',
            body: JSON.stringify({
              username: player,
              score: points,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    }
    catch {
        console.log("Failed to send scores.");
    }
}

//sendScores();
//let userPlacement = getPlacement();
document.getElementById('player').innerHTML= localStorage.getItem('username');
document.getElementById('score').innerHTML= localStorage.getItem('usersScore');
sendScore(localStorage.getItem('username'), localStorage.getItem('usersScore'));
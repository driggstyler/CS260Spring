async function joinLobby() {
    let lobbyUsers = [];
    try {
        const response = await fetch("api/lobby", {
            method: 'POST',
            body: JSON.stringify({
                username: localStorage.getItem('username'),
            }),
            headers: {
                'Content-type': 'application/json; charsset=UTF-8',
            },
        });
        lobbyUsers = await response.json();
        displayUsers(lobbyUsers);
        localStorage.setItem("lobbyUsers", lobbyUsers);
    }
    catch {
        console.log("Failed to connect to server/lobby.")
    }
};

function displayUsers(lobbyUsers) {
    document.getElementById('otherP1').innerHTML= lobbyUsers.pop();
    document.getElementById('otherP2').innerHTML= lobbyUsers.pop();
    document.getElementById('otherP3').innerHTML= lobbyUsers.pop();
    startGame();
};

function startGame() {
    window.location.href = "game.html";
}

joinLobby();
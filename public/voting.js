const { response } = require("express");

let answers = [];

async function sendWords() {
    try {
        const response = await fetch('api/voting', {
            method: 'POST',
            body: JSON.stringify({
                username: localStorage.getItem('username'),
                usersWords: localStorage.getItem('usersWords')
            }),
            headers: {
                'Content-type': 'application/json; charsset=UTF-8',
            },
        });
    }
    catch {
        console.log("Failed to send words to server.");
    }
}

async function getWords(newUsername) {
    try {
        const response = await fetch('api/voting', {
            method: 'GET',
            body: JSON.stringify({
                username: newUsername,
            }),
            headers: {
                'Content-type': 'application/json; charsset=UTF-8',
            }
        });
        answers = await response.json();
    }
    catch {
        console.log("Failed to retrieve words from server.");
    }
}

async function sendScore(newUsername, newScore) {
    try {
        const response = await fetch('api/voting', {
            method: 'POST',
            body: JSON.stringify({
                username: newUsername,
                score: newScore
            }),
            headers: {
                'Content-type': 'application/json; charsset=UTF-8',
            },
        });
    }
    catch {
        console.log("Failed to send words to server.");
    }
}

sendWords();
let points = 0;
let players = localStorage.getItem("lobbyUsers");

//document.getElementById('currUsername').innerHTML= localStorage.getItem('username');
//Debugging array
let myArray = ['1','2','3','4','5','6','7','8','9','10','11','12'];

//let wordArray = JSON.parse(localStorage.getItem('usersWords'));

let itemArray = ["Things That Float","Famous Actor","Fast Food Chain","Movie Title","Book Author","Athletic Sport",
"Crime","Board Game","Car Brand","University","Mountain","Superhero"];
let currItemArray = itemArray;


let currPlayer = players.pop();
document.getElementById('currUsername').innerHTML= currPlayer;
getWords(currPlayer);
const newText = document.createTextNode(answers.pop());
document.getElementById('usersWord').replaceChildren(newText);
const newItem = document.createTextNode(currItemArray.pop());
document.getElementById('currItem' ).replaceChildren(newItem);


//const newText = document.createTextNode(wordArray.pop());
//document.getElementById('usersWord').replaceChildren(newText);
//const newItem = document.createTextNode(itemArray.pop());
//document.getElementById('currItem').replaceChildren(newItem);

function yesButton() {
    points++;
    if (answers.length === 0) {
        if (players.length == 0) {
            //localStorage.setItem("usersScore", points);
            window.location.href = "endgame.html";
        }
        sendScore(currPlayer, points);
        points = 0;
        currPlayer = players.pop();
        document.getElementById('currUsername').innerHTML= currPlayer;
        getWords(currPlayer);
        currItemArray = itemArray;

    }
    const newText = document.createTextNode(answers.pop());
    document.getElementById('usersWord').replaceChildren(newText);
    const newItem = document.createTextNode(currItemArray.pop());
    document.getElementById('currItem' ).replaceChildren(newItem);
}

function noButton() {
    if (answers.length === 0) {
        if (players.length == 0) {
            //localStorage.setItem("usersScore", points);
            window.location.href = "endgame.html";
        }
        sendScore(currPlayer, points);
        points = 0;
        currPlayer = players.pop();
        document.getElementById('currUsername').innerHTML= currPlayer;
        getWords(currPlayer);
        currItemArray = itemArray;

    }
    const newText = document.createTextNode(answers.pop());
    document.getElementById('usersWord').replaceChildren(newText);
    const newItem = document.createTextNode(currItemArray.pop());
    document.getElementById('currItem' ).replaceChildren(newItem);
}

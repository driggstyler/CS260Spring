let points = 0;
document.getElementById('currUsername').innerHTML= localStorage.getItem('username');

let myArray = ['1','2','3','4','5','6','7','8','9','10','11','12'];
let wordArray = JSON.parse(localStorage.getItem('usersWords'));
let itemArray = ["Things That Float","Famous Actor","Fast Food Chain","Movie Title","Book Author","Athletic Sport",
"Crime","Board Game","Car Brand","University","Mountain","Superhero"]

const newText = document.createTextNode(wordArray.pop());
document.getElementById('usersWord').replaceChildren(newText);
const newItem = document.createTextNode(itemArray.pop());
document.getElementById('currItem').replaceChildren(newItem);

function yesButton() {
    points++;
    if (wordArray.length === 0) {
        localStorage.setItem("usersScore", points);
        window.location.href = "endgame.html";
        
    }
    const newText = document.createTextNode(wordArray.pop());
    document.getElementById('usersWord').replaceChildren(newText);
    const newItem = document.createTextNode(itemArray.pop());
    document.getElementById('currItem').replaceChildren(newItem);
    
}

function noButton() {
    if (wordArray.length === 0) {
        localStorage.setItem("usersScore", points);
        window.location.href = "endgame.html";
    }
    const newText = document.createTextNode(wordArray.pop());
    document.getElementById('usersWord').replaceChildren(newText);
    const newItem = document.createTextNode(itemArray.pop());
    document.getElementById('currItem').replaceChildren(newItem);
    
}

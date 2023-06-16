let points = 0;
document.getElementById('currUsername').innerHTML= localStorage.getItem('username');

let myArray = ['1','2','3','4','5','6','7','8','9','10','11','12'];

document.getElementById('usersWord').innerHTML = myArray.pop;
document.getAnimations('currItem').innerHTML = "Things that are round";

function yesButton() {
    points++;
    document.getElementById('usersWord').innerHTML = myArray.pop;
    document.getAnimations('currItem').innerHTML = "Things that are round";
    if (myArray.length === 0) {
        localStorage.setItem("usersScore", points);
        window.location.ref = "endgame.html"
    }
}

function noButton() {
    document.getElementById('usersWord').innerHTML = myArray.pop;
    document.getAnimations('currItem').innerHTML = "Things that are round";
    if (myArray.length === 0) {
        localStorage.setItem("usersScore", points);
        window.location.ref = "endgame.html"
    }
}

let points = 0;
//Set Letter
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
document.getElementById('randomLetter').innerHTML= randomCharacter;
//Set Timer
const startingMinutes = 3;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");
setInterval(updateCountdown, 1000);
function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time === 0) {
        //Getting items from user's input
        const curritem1= document.querySelector("#r1item1");
        if (curritem1.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem2= document.querySelector("#r1item2");
        if (curritem2.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem3= document.querySelector("#r1item3");
        if (curritem3.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem4= document.querySelector("#r1item4");
        if (curritem4.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem5= document.querySelector("#r1item5");
        if (curritem5.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem6= document.querySelector("#r1item6");
        if (curritem6.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem7= document.querySelector("#r1item7");
        if (curritem7.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem8= document.querySelector("#r1item8");
        if (curritem8.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem9= document.querySelector("#r1item9");
        if (curritem9.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem10= document.querySelector("#r1item10");
        if (curritem10.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem11= document.querySelector("#r1item11");
        if (curritem11.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        const curritem12= document.querySelector("#r1item12");
        if (curritem12.toLowerCase.startsWith(randomCharacter)){
            points++;
        }
        //Putting locally stored items into an array
        let userWords = [curritem1.value, curritem2.value, curritem3.value, curritem4.value, curritem5.value, curritem6.value,
            curritem7.value, curritem8.value, curritem9.value, curritem10.value, curritem11.value, curritem12.value];
        let jsonUserWords = JSON.stringify(userWords);
        localStorage.setItem("usersWords", jsonUserWords);
        localStorage.setItem("usersScore", points);

        window.location.href="endgame.html";
    }
}

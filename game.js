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
        const curritem2= document.querySelector("#r1item2");
        const curritem3= document.querySelector("#r1item3");
        const curritem4= document.querySelector("#r1item4");
        const curritem5= document.querySelector("#r1item5");
        const curritem6= document.querySelector("#r1item6");
        const curritem7= document.querySelector("#r1item7");
        const curritem8= document.querySelector("#r1item8");
        const curritem9= document.querySelector("#r1item9");
        const curritem10= document.querySelector("#r1item10");
        const curritem11= document.querySelector("#r1item11");
        const curritem12= document.querySelector("#r1item12");
        //Putting locally stored items into an array
        let userWords = [curritem1.value, curritem2.value, curritem3.value, curritem4.value, curritem5.value, curritem6.value,
            curritem7.value, curritem8.value, curritem9.value, curritem10.value, curritem11.value, curritem12.value];
        let jsonUserWords = JSON.stringify(userWords);
        localStorage.setItem("usersWords", jsonUserWords);


        window.location.href="voting.html";
    }
}

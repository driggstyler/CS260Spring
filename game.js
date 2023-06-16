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
        localStorage.setItem("r1item1", curritem1.value);
        const curritem2= document.querySelector("#r1item2");
        localStorage.setItem("r1item2", curritem2.value);
        const curritem3= document.querySelector("#r1item3");
        localStorage.setItem("r1item3", curritem3.value);
        const curritem4= document.querySelector("#r1item4");
        localStorage.setItem("r1item4", curritem4.value);
        const curritem5= document.querySelector("#r1item5");
        localStorage.setItem("r1item5", curritem5.value);
        const curritem6= document.querySelector("#r1item6");
        localStorage.setItem("r1item6", curritem6.value);
        const curritem7= document.querySelector("#r1item7");
        localStorage.setItem("r1item7", curritem7.value);
        const curritem8= document.querySelector("#r1item8");
        localStorage.setItem("r1item8", curritem8.value);
        const curritem9= document.querySelector("#r1item9");
        localStorage.setItem("r1item9", curritem9.value);
        const curritem10= document.querySelector("#r1item10");
        localStorage.setItem("r1item10", curritem10.value);
        const curritem11= document.querySelector("#r1item11");
        localStorage.setItem("r1item11", curritem11.value);
        const curritem12= document.querySelector("#r1item12");
        localStorage.setItem("r1item12", curritem12.value);
        //Putting locally stored items into an array


        window.location.href="voting.html";
    }
}

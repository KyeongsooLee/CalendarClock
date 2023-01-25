const clockTime = document.querySelector(".clock .time");
const clockDate = document.querySelector(".clock .date");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

let d = new Date();
let day = d.getDay(); // return 0 to 6 => sunday to saturday
let date = d.getDate();
let month = d.getMonth(); // return 0 to 11 => January to December
let year = d.getFullYear();


// Clock
function renderClock(){
    const time = d.toLocaleTimeString();
    clockTime.innerText=time;
}

function renderDate(){
    clockDate.innerText = `${days[day]}, ${months[month]} ${date}, ${year}`;
    console.log(months[month]);
}

renderDate();


// Init
function init(){
    d = new Date();
    renderClock();

    setTimeout(init, 1000);
}

init();
var today = new Date();

var dt = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + ' ' + today.getHours() + ":" + today.getMinutes();

document.getElementById("dt").innerHTML = dt;

var ticketBought = document.getElementsByClassName("tickets");
var ticketsList = [].slice.call(ticketBought);
var arena = document.getElementsByClassName("location");
var arenaList = [].slice.call(arena);
var place = Math.floor(Math.random() * 100);
var greeting = "Meet you there!";

for (let i = 0; i < ticketsList.length; i++) {
    ticketsList[i].addEventListener("click", () => {
        alert("Meet you at " + arenaList[i].innerText + ". \nYour place will be: " + place);
        const parent = ticketsList[i].parentElement;
        parent.removeChild(ticketsList[i]);
        parent.innerText = greeting;
    });
}

let remainingDays = document.getElementsByClassName("remaining-days");
let concertDates = document.getElementsByClassName("date");

showDays(concertDates, remainingDays);

console.log(concertDates);
console.log(remainingDays);

function showDays(eventDates, days) {
    for(let i=0; i < eventDates.length; i++){
        days[i].innerText = `${daysLeft(today, eventDates[i].innerText)} days left`;
    }
}

function daysLeft(start, end){
    const concertDate = Date.parse(end);

    var diffInMs = concertDate - start;
    var diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return Math.floor(diffInDays);
}




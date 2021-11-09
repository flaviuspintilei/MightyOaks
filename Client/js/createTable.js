const url = 'http://localhost:3000/api/v1/concerts';

var today = new Date();

var greeting = "Meet you there!";

function setPlace() {
    return Math.floor(Math.random() * 100);
}

function showDays(eventDate) {
    return `${daysLeft(today, eventDate)} days left`;
}

function daysLeft(start, end) {
    const concertDate = Date.parse(end);

    var diffInMs = concertDate - start;
    var diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return Math.floor(diffInDays);
}

// function btn(button, arena) {

//     alert("Meet you at " + this.arena + ". \nYour place will be: " + place);
// const parent = button.parentElement;
// parent.removeChild(button);
// parent.innerHTML = greeting;
// }

fetch(url, {
    method: 'GET',
})
    .then(response => response.json())
    .then(data => {
        createTable(data);
    });

function createTable(concerts) {
    var something = document.getElementsByTagName('table');
    var tableca = something[0];

    console.log(concerts);

    var upcomingEvents = document.getElementById("events");

    if (concerts.length == 0) {
        upcomingEvents.innerHTML = 'No Upcoming Events';
    } else {
        upcomingEvents.innerHTML = 'Upcoming Events';
        concerts.forEach(concert => {

            var daysLeft = showDays(concert.date);
            var arena = concert.Arena;
            var city = concert.City;

            let concertDate = new Date(concert.date).toDateString();
            // var newLine = document.createElement('pre');

            var tr = document.createElement('tr');

            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');

            var text1 = document.createTextNode(daysLeft);
            var text2 = document.createTextNode(city + "<br />" + arena);
            var text3 = document.createTextNode(concertDate);
            var div1 = document.createElement('div');
            var button1 = document.createElement('button');
            button1.onclick = function () {
                alert("Meet you at " + arena + ' \n' + city + ". \nYour place will be: " + setPlace());
                div1.innerHTML = greeting;

            }
            var icon = document.createElement('i');

            td1.appendChild(text1);
            td2.innerHTML = text2.data;
            td3.appendChild(text3);
            td4.appendChild(div1);
            div1.appendChild(button1);
            button1.appendChild(icon);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            tableca.appendChild(tr);
            tableca.setAttribute("class", "my-table");
            tr.setAttribute("class", "table-row");
            td1.setAttribute("class", "remaining-days");
            td2.setAttribute("class", "location");
            td3.setAttribute("class", "date");
            td4.setAttribute("class", "days");
            button1.setAttribute("class", "tickets");
            icon.setAttribute("class", "fas fa-ticket-alt");
        });
        document.body.appendChild(tableca);
    }
}
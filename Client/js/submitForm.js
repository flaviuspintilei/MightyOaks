const url = "http://localhost:3000/api/v1/concerts/create";

var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (ev) => {
    
    var concertDate = document.getElementById("concertDate").value;
    var arena = document.getElementById("arena").value;
    var city = document.getElementById("city").value;
    var tickets = document.getElementById("tickets").value;
    var capacity = document.getElementById("capacity").value;
    
    var concert = {
        date: concertDate,
        City: city,
        Arena: arena,
        Capacity: capacity,
        AvailableTickets: tickets
    };

    console.log(concert);
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(concert),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then();
    console.log(JSON.stringify(concert));
    
    let message = 'A new concert has been created!'
    window.alert(message);
    
    // ev.preventDefault();
}, false);

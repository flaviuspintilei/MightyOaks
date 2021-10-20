const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => console.log(`it's alive on port ${port}`));

const concerts = [
    {
        id: 1,
        date: "date",
        city: "city",
        arena: "arena",
        capacity: "capacity",
        tickets: "sold tickets" 
    },
    {
        id: 2,
        date: "date",
        city: "city",
        arena: "arena",
        capacity: "capacity",
        tickets: "sold tickets" 
    },
    {
        id: 3,
        date: "date",
        city: "city",
        arena: "arena",
        capacity: "capacity",
        tickets: "sold tickets" 
    }
];

app.get('/api/v1/concerts', (req, res) => {
    res.status(200).send(concerts)
});

app.get('/api/v1/concert/:id', (req, res) => {
    const concert = concerts.find(c => c.id === parseInt(req.params.id))

    if(!concert) res.status(404).send("The concert with the given id was not found")
    res.send(concert);
    
});


app.post('/api/v1/concert/create', (req, res) => {
    if(!req.body.date){
        res.status(400).send("Wrong date provided")
    }
    
    const concert = {
        id: concerts.length + 1,
        date: req.body.date
    };
    concerts.push(concert);
    res.send(concert);
});
const Joi = require("joi");
const express = require("express");
const { POINT_CONVERSION_UNCOMPRESSED } = require("constants");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => console.log(`it's alive on port ${port}`));

function validateConcert(concert) {
    const schema = {
        date: Joi.string().required()
    };

    return Joi.validate(concert, schema);
}

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

    if(!concert) return res.status(404).send("The concert with the given id was not found")
    res.send(concert);
});


app.post('/api/v1/concert/create', (req, res) => {
    const { error } = validateConcert(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const concert = {
        id: concerts.length + 1,
        date: req.body.date
    };
    concerts.push(concert);
    res.send(concert);
});


app.put('/api/v1/concert/update/:id', (req, res) => {
    //Look up the concert, if not existing return 404
    const concert = concerts.find(c => c.id === parseInt(req.params.id))
    if(!concert)  return res.status(404).send("The concert with the given id was not found");
    
    
    //Validate, if invalid return 400
    const { error } = validateConcert(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    

    //Update concert
    concert.date = req.body.date;
    res.send(concert);
});

app.delete('/api/v1/concert/delete/:id', (req, res) => {
    //Look up the course, non-existing -> return 404
    const concert = concerts.find(c => c.id === parseInt(req.params.id))
    if(!concert) return res.status(404).send("The concert with the given id was not found")

    //Delete
    let index = concerts.indexOf(concert);
    concerts.splice(index, 1);

    res.send(concert);
})
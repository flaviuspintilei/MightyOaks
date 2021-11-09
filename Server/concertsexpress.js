import Joi from "joi";
import express, { json } from "express";
import Concert from "./mongodbconnection.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(json());

app.listen(port, () => console.log(`it's alive on port ${port}`));

function validateConcert(concert) {
    const schema = {
        date: Joi.string().required()
    };

    return validate(concert, schema);
}

app.get('/api/v1/concerts', (req, res) => {
    Concert.find().lean().exec(function (err, concerts) {
        return res.end(JSON.stringify(concerts));
    });
});

app.post('/api/v1/concerts/create', (req, res) => {
    // const { error } = validateConcert(req.body);
    // if(error) return res.status(400).send(error.details[0].message)
    
    var concert = new Concert ({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        Arena: req.body.Arena,
        City: req.body.City,
        Capacity: req.body.Capacity,
        AvailableTickets: req.body.AvailableTickets
    });

    console.log(concert);
    
    concert.save(function(err) {
        if(err) {
            console.log(err);
            return ;
        }
    });

    res.send(concert);
});

// app.put('/api/v1/concert/update/:id', (req, res) => {
//     //Look up the concert, if not existing return 404
//     const concert = concerts.find(c => c.id === parseInt(req.params.id))
//     if(!concert)  return res.status(404).send("The concert with the given id was not found");
    
    
//     //Validate, if invalid return 400
//     const { error } = validateConcert(req.body);
//     if(error) return res.status(400).send(error.details[0].message)
    

//     //Update concert
//     concert.date = req.body.date;
//     res.send(concert);
// });


// app.delete('/api/v1/concert/delete/:id', (req, res) => {
//     //Look up the course, non-existing -> return 404
//     const concert = concerts.find(c => c.id === parseInt(req.params.id))
//     if(!concert) return res.status(404).send("The concert with the given id was not found")

//     //Delete
//     let index = concerts.indexOf(concert);
//     concerts.splice(index, 1);

//     res.send(concert);
// });

import Joi from "joi";
import express, { json } from "express";
import sql from "mssql"
const app = express();
const port = 3000;

app.use(json());

app.listen(port, () => console.log(`it's alive on port ${port}`));

function validateConcert(concert) {
    const schema = {
        date: Joi.string().required()
    };

    return validate(concert, schema);
}

app.get('/api/v1/concerts', function (req, res) {

    // config database 
    var config = {
        user: 'DESKTOP-5O9VCTS\Flavius Pintilei',
        server: 'DESKTOP-5O9VCTS\SQLEXPRESS', 
        database: 'MightyOaks',
        port: 3000
    };

    // connect to database
    sql.connect(config, function (err) {

        if (err)  {
            console.log(err)
            return;
        }
        // create Request object
        var request = new sql.Request();
           
        // get the records
        request.query('select * from Concerts', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});



// app.get('/api/v1/concert/:id', (req, res) => {
//     const concert = concerts.find(c => c.id === parseInt(req.params.id))

//     if(!concert) return res.status(404).send("The concert with the given id was not found")
//     res.send(concert);
// });

// app.post('/api/v1/concert/create', (req, res) => {
//     const { error } = validateConcert(req.body);
//     if(error) return res.status(400).send(error.details[0].message)
    
//     const concert = {
//         id: concerts.length + 1,
//         date: req.body.date
//     };
//     concerts.push(concert);
//     res.send(concert);
// });

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

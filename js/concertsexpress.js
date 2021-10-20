const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`it's alive on port ${PORT}`));

app.get('/api/v1/', (req, res) => {
    res.status(200).send({
        id: "concert id",
        date: "date",
        city: "city",
        arena: "arena",
        capacity: "capacity",
        tickets: "sold tickets" 
    })
});
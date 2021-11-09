import mongoose from "mongoose";
import pkg from "mongoose";
const {Int} = pkg;

var mongoDB = 'mongodb://127.0.0.1/MightyOaks';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var ConcertSchema= new Schema({
    _id: Schema.Types.ObjectId,
    date: Date,
    City: String,
    Arena: String,
    Capacity: Number,
    AvailableTickets: Number
});

var Concert = mongoose.model('Concert', ConcertSchema);

export default Concert;
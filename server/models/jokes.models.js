const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: { 
        type: String, 
        required: [true, "This is required"], 
        minlength: [5, "Joke must be 5 characters long"]
    },
    
    punchline: {
        type: String, 
        required: [true, "This is required"],
        minlength: [5, "Punchline must be 5 characters long"]
    }
});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;
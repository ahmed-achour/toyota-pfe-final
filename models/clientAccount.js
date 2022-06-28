const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    entretient: {
        type: String,
        required: true
    },
    account:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true 
    }
    

});

const Client = mongoose.model("client", ClientSchema);

module.exports = Client;
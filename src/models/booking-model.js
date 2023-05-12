const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    travellingFrom: {
        type: String,
        required: true
    },
    travellingTo:{
        type: String,
        required: true
    },
    departureDate:{
        type: Date,
        required: true
    },
    arrivalDate:{
     type:Date,
     required:true
     },
    timeOfTravel:{
        type: String,
        required: true
    },
    numberOfTickets:{
        type: Number,
        required:true
    }
})
const Bookmodel = mongoose.model('Booking', BookingSchema)

module.exports = Bookmodel
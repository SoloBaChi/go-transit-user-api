const express = require('express')
const { createBooking , getBookedDoc}  = require('../controllers/booking-controllers')


bookingRouter = express.Router()


bookingRouter.post("/create", createBooking)
bookingRouter.get("/getbook/:id",getBookedDoc)

module.exports =  bookingRouter;
const express = require('express')
const createBooking  = require('../controllers/booking-controllers')


bookingRouter = express.Router()


bookingRouter.post("/create", createBooking)

module.exports =  bookingRouter;
const mongoose = require('mongoose');

// Define the bill schema
const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerContact: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: false });

const customer = mongoose.model("Customer", customerSchema)
module.exports = customer;
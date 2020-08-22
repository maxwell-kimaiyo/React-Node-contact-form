const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  msg: { type: String, required: true },
  date: {type: Date,default: Date(),
  },
});

module.exports = contactModel = mongoose.model("Pagecontact", contactSchema);

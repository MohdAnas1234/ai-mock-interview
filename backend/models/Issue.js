const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  issueDate: { type: Date, default: Date.now },
  returnDate: { type: Date, default: null },
  fine: { type: Number, default: 0 },
  finePaid: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Issue", issueSchema);

const Issue = require("../models/Issue");
const Book = require("../models/Book");

exports.issueBook = async (req, res) => {
  const { bookId, userId } = req.body;

  const book = await Book.findById(bookId);
  if (!book.available)
    return res.status(400).json({ message: "Book not available" });

  const issue = await Issue.create({ book: bookId, user: userId });
  book.available = false;
  await book.save();

  res.json(issue);
};

exports.returnBook = async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  const today = new Date();
  const diff = today - issue.issueDate;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (days > 7) {
    issue.fine = (days - 7) * 10;
  }

  issue.returnDate = today;
  await issue.save();

  const book = await Book.findById(issue.book);
  book.available = true;
  await book.save();

  res.json(issue);
};

exports.payFine = async (req, res) => {
  const issue = await Issue.findById(req.params.id);
  issue.finePaid = true;
  await issue.save();

  res.json({ message: "Fine paid successfully" });
};

exports.overdueReport = async (req, res) => {
  const overdue = await Issue.find({
    returnDate: null
  }).populate("book user");

  res.json(overdue);
};

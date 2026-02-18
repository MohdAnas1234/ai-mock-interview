const Book = require("../models/Book");

exports.addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};

exports.getBooks = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 5;
  const keyword = req.query.keyword
    ? { title: { $regex: req.query.keyword, $options: "i" } }
    : {};

  const count = await Book.countDocuments(keyword);

  const books = await Book.find(keyword)
    .limit(limit)
    .skip(limit * (page - 1));

  res.json({
    books,
    page,
    pages: Math.ceil(count / limit)
  });
};

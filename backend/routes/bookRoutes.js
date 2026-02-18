const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  addBook,
  updateBook,
  deleteBook,
  getBooks
} = require("../controllers/bookController");

router.post("/", protect, addBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);
router.get("/", protect, getBooks);

module.exports = router;

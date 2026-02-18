const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  issueBook,
  returnBook,
  payFine,
  overdueReport
} = require("../controllers/issueController");

router.post("/issue", protect, issueBook);
router.post("/return/:id", protect, returnBook);
router.post("/payfine/:id", protect, payFine);
router.get("/overdue", protect, overdueReport);

module.exports = router;

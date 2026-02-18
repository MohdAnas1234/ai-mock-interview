const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  addUser,
  getUsers
} = require("../controllers/userController");

router.post("/", protect, addUser);
router.get("/", protect, getUsers);

module.exports = router;

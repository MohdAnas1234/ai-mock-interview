const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

exports.registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "All fields required" });

  const adminExists = await Admin.findOne({ email });
  if (adminExists)
    return res.status(400).json({ message: "Admin already exists" });

  const admin = await Admin.create({ email, password });

  res.json({
    _id: admin._id,
    email: admin.email,
    token: generateToken(admin._id)
  });
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id)
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

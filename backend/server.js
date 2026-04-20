const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const connectDB = require("./config/db");
connectDB();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API Running.....");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
});




const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const app = express();


// Connect Database
connectDB();

// Init middleware
app.use(cors())
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = 6000;

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));

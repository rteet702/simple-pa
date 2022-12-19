const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8000;

const app = express();

require("dotenv").config();
require("./config/jwt.config");

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000", "https://simple.teets.dev"],
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require("./routes/user.routes")(app);
require("./routes/task.routes")(app);

app.listen(port, () => {
    console.log(`Locked and loaded on port ${port}`);
});

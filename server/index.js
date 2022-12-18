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
        origin: "https://simple.teets.dev",
    })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require("./routes/user.routes")(app);

app.listen(port, () => {
    console.log(`Locked and loaded on port ${port}`);
});

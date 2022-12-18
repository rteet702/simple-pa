const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8000;

const app = express();

require("dotenv").config();
require("./config/jwt.config");

const whitelist = ["http://localhost:3000", "https://simple.teets.dev"];

app.use(
    cors({
        credentials: true,
        origin: (origin, callback) => {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS."));
            }
        },
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

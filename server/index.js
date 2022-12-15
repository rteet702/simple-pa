const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Locked and loaded on port ${port}`);
});

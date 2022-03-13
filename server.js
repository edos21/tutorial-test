const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");

const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// health check
app.get("/", (req, res) => {
    res.json({ message: "OK!" });
});

require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
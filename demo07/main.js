const express = require("express");

const app = express();

const portti = 3007;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.render("index", {});

});

app.listen(portti, () => {

    console.log(`Plavelin käynnistyi porttiin: ${portti}`);

});
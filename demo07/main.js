const express = require("express");
const app = express();

const portti = 3007;

const palvelut = require("./models/palvelut");

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    palvelut.haeKaikkiPalvelut((data) => {

        res.render("index", { "palvelut" : data });

    });

});

app.listen(portti, () => {

    console.log(`Plavelin käynnistyi porttiin: ${portti}`);

});
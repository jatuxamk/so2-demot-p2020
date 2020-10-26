const express = require("express");
const app = express();

const portti = 3007;

const palvelut = require("./models/palvelut");

app.set("views", "./views");
app.set("view engine", "ejs");


app.get("/muokkaa/:id", (req, res) => {

    res.render("palvelu", {});

});

app.get("/", (req, res) => {

    palvelut.haeKaikkiPalvelut((err, data) => {

        if (err) throw err;

        res.render("index", { "palvelut" : data });

    });

});

app.listen(portti, () => {

    console.log(`Plavelin käynnistyi porttiin: ${portti}`);

});
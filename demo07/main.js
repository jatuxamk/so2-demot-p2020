const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const portti = 3007;

const palvelut = require("./models/palvelut");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.post("/tallenna", (req, res) => {

    palvelut.muokkaaPalvelua(req.body, (err) => {

        if (err) throw err; 

        res.redirect("/");

    });

});

app.get("/muokkaa/:id", (req, res) => {

    let id = req.params.id;

    palvelut.haePalvelu(id, (err, data) => {

        if (err) throw err; 

        res.render("palvelu", {"palvelu" : data[0]});

    });

});

app.get("/", (req, res) => {

    palvelut.haeKaikkiPalvelut((err, data) => {

        if (err) throw err;

        res.render("index", { "palvelut" : data });

    });

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});
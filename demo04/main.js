const express = require("express");
const app = express();

const portti = 3004;

const fs = require("fs");

app.use(express.static("./public"));

app.set("views", "./views");
app.set("view engine", "ejs");

let kayttajat = [];

fs.readFile("./models/kayttajat.json", "utf-8", (err, data) => {

    if (err) throw err;

    kayttajat = JSON.parse(data);

});

app.get("/kayttaja/:id", (req, res) => {

    let indeksi = req.params.id - 1;

    let kayttaja = kayttajat[indeksi];

    res.render("tiedot", { "kayttaja" : kayttaja });

});

app.get("/", (req, res) => {

    res.render("index", { "kayttajat" : kayttajat });

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});
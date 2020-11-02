const express = require("express");

const app = express();
const portti = 3008;

const kayttajat = require("./models/kayttajat");

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    kayttajat.hae((err, data) => {

        res.render("index", {"kayttajat" : data});

    });    
  

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin : ${portti}`);

});
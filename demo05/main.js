const express = require("express");
const app = express();
const portti = 3005;

const matkat = require("./models/ajopaivakirja");

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    matkat.haeKaikki((data) => {

        let matkat = data;

        res.render("index", { "matkat" : matkat });

    });
      

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});
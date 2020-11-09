const express = require("express");
const app = express();

const portti = 3009;

const artikkelit = require("./models/artikkelit");

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    artikkelit.haeKaikki((err, artikkelit) => {

        if (err) throw err;

        res.render("index", {"artikkelit" : artikkelit});

    });

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});
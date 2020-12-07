const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const tvdb = require("./models/tvdb");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const portti = 3012;

app.set("views", "./views");
app.set("view engine", "ejs");

app.post("/lisaa", (req, res) => {

    tvdb.lisaaSuosikiksi(req.body.id).then((data) => {

        res.redirect("/");

    });
    
});

app.get("/lisaa", (req, res) => {

    res.render("lisaa", {});

});

app.get("/", (req, res) => {

    tvdb.haeSuosikit().then((suosikit) => {

        let haut = [];

        suosikit.forEach((suosikki) => {

            haut.push(tvdb.haeSarjanTiedot(suosikki));

        });

        Promise.all(haut).then((data) => {

            res.render("index", { "suosikit" : data });

        });       

    }).catch((err) => {

        res.render("index", { "suosikit" : null });

    });

});


app.listen(portti, () => {

    console.log("Palvelin käynnistyi porttiin 3012");

});
const express = require("express");

const app = express();
const portti = 3008;

const bodyParser = require("body-parser");

const kayttajat = require("./models/kayttajat");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.post("/haku", (req, res) => {

    kayttajat.hae(req.body, (err, data) => {

        let virhe;

        if (err) {

            virhe = "Tietokantapalvelimeen ei saada yhteyttä";
        }

        if (data.length == 0) {

            virhe = "Haulla ei löytynyt yhtään käyttäjää";
            data = null;

        }

        if (req.body.hakusana.length == 0) {

            virhe = "Hakusana puuttuu. Anna hakusana."
            data = null;

        }

        res.render("index", {"kayttajat" : data, "virhe" : virhe, "lomaketiedot" : req.body});

    });
    

});


app.get("/", (req, res) => {

    let lomakeoletukset = {
                            hakusana : "",
                            sukupuoli: "Molemmat"
                          }

    res.render("index", {"kayttajat" : null, "virhe" : null, "lomaketiedot" : lomakeoletukset});

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin : ${portti}`);

});
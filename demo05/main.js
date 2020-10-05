const express = require("express");
const app = express();
const portti = 3005;

const bodyParser = require("body-parser");

const matkat = require("./models/ajopaivakirja");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ entended : true }));

app.use(express.static("./public"));

app.post("/tallenna", (req, res) => {

    let aikaleima = new Date().getTime();

    let uusiMatka = {
                     "reitti" : req.body.reitti,
                     "kilometrit" : Number(req.body.kilometrit),
                     "kirjaaja" : req.body.kirjaaja,
                     "kirjaamispvm" : aikaleima
                    }

    matkat.lisaaUusi(uusiMatka, () => {

        res.redirect("/");

    });
  

});

app.get("/", (req, res) => {

    matkat.haeKaikki((data) => {

        let matkat = data;

        res.render("index", { "matkat" : matkat });

    });
      

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});
const express = require("express");
const app = express();
const portti = 3006;

const crypto = require("crypto");

const bodyParser = require("body-parser");

const session = require("express-session");

const matkat = require("./models/ajopaivakirja");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(session({ "secret" : "SuuriSalaisuus!", "resave" : false, "saveUninitialized" : false }));

app.use(express.static("./public"));

app.use((req, res, next) => {

    if (!req.session.kayttajatiedot && req.path != "/login") {

        res.redirect("/login");

    } else {

       next(); 

    }
 

});

app.post("/login", (req, res) => {

    matkat.haeKayttaja(req.body.tunnus, (kayttaja) => {

        if (kayttaja) {

            let hash = crypto.createHash("SHA256").update(req.body.salasana).digest("hex");

            if (kayttaja.salasana == hash) {

                req.session.kayttajatiedot = kayttaja;

                res.redirect("/");

            } else {

                req.session.kayttajatiedot = null;

                res.render("login", { "virhe" : "Virheelinen käyttäjätunnus tai salasana"}); 

            }


        } else {

            req.session.kayttajatiedot = null;

            res.render("login", { "virhe" : "Virheelinen käyttäjätunnus tai salasana"});            

        }

    });

});

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

app.get("/logout", (req, res) => {

    req.session.kayttajatiedot = null;

    res.redirect("/");

});

app.get("/login", (req, res) => {

    res.render("login", { "virhe" : null });


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
const http = require("http"); //http -moduulin määritys
const url = require("url"); //url -moduulin määritys

const portti = 3001; //portin määritys

//server -objektin luonti
const serveri = http.createServer((req, res) => {
    
    //jos pyydetty urli ei ole favicon.ico, pästään eroon turhasta rivistä komentokehotteessa
    if (req.url != "/favicon.ico") {

        let tiedot = url.parse(req.url, true).query; //query metodi, jolla saadaan käyttäjän syöttö selaimesta
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //jos nimeä ei määritellä niin se on "tuntematon"
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //suomalaiset kirjaimet
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //vastaus käyttäjälle
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //vastaus käyttäjälle
        res.end(); //vastauksen lopetus

    }

});

//käskee palvelinta kuuntelemaan määritelyä porttia
serveri.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

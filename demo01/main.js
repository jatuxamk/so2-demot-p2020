const http = require("http"); //tehdään olio joka käyttää http:n protokollaa
const url = require("url"); //muuttuja joka lukee selaimen url

const portti = 3001; //määrittelee mitä porttia käytetään

const serveri = http.createServer((req, res) => { //luodaan serveri/palvelin nimeltään serveri

    if (req.url != "/favicon.ico") { //testaa hakeeko pyyntö faviconia

        let tiedot = url.parse(req.url, true).query; //tehdään json urlista
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //asetetaan tiedolle perusarvo tuntematon
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //kerrotaan selaimelle että kaikki ok ja lisätään ääkköset ja öökköset ja kerrotaan että käytetään html
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //Otsikko selaimelle
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //asetetaan muuttujan nimi tilalle/otetaan muutuja url kentästä
        res.end(); //Loppu

    }

});

serveri.listen(portti, () => { //palvelin kuuntele ennalta määrättyä porttia
    console.log(`Palvelin käynnistyi porttiin ${portti}`); //tulostaa consoleen
});

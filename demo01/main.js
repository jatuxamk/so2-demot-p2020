const http = require("http"); //Importtaa nodesta http olion
const url = require("url"); //Importtaa nodesta url olion

const portti = 3001; // Luo vakion, joka sisältää portin

const serveri = http.createServer((req, res) => { // Luo itse serverin, joka käynnistetään lopussa

    if (req.url != "/favicon.ico") { // Testaa hakeeko pyyntö faviconia

        let tiedot = url.parse(req.url, true).query; // Parsii pyynnössä tulevaa tietoa
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; // Ternary operaatio, joka palauttaa nimen tai tuntematon tekstin riippuen onko nimi pyynnön mukana.
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); // Kirjoittaa vastaukseen headerin
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); // Kirjoittaa vastaukseen sisältöä
        res.write(`<h2>Heippa, ${nimi}!</h2>`); // Kirjoittaa vastaukseen sisältöä
        res.end(); // Päättää vastauksen

    }

});

serveri.listen(portti, () => { // Käynnistää palvelimen ja tulostaa viestin logeihin
    console.log(`Palvelin käynnistyi porttiin ${portti}`);    
});

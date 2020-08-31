const http = require("http"); //http-moduuli
const url = require("url"); //url-moduuli

const portti = 3001; //määritellään portti

const serveri = http.createServer((req, res) => { //tehdään palvelin

    if (req.url != "/favicon.ico") {

        let tiedot = url.parse(req.url, true).query; // ottaa url-stringin ja palauttaa objektin
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //nimi on tuntematon
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //statuskoodi, millaista sisältöä sivulla
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //hello world teksti
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //ottaa nimi-tiedot ylhäältä
        res.end(); //loppuu

    }

});

serveri.listen(portti, () => { //käynnistää palvelimen yllä määriteltyyn porttiin 
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

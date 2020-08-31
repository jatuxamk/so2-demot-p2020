const http = require("http"); //vakion nimeäminen, http ominaisuudet käyttöön ohjelmaan 
const url = require("url"); //osoiterivin tiedot

const portti = 3001; //portin määritys

const serveri = http.createServer((req, res) => { //serverin luonti, req = request,  res = respond

    if (req.url != "/favicon.ico") {

        let tiedot = url.parse(req.url, true).query; // poimitaan tiedot osoiteriviltä
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //jost tiedot.nimi ei ole määritelty niin tulee "tuntematon"
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //head osa, html
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`);
        res.write(`<h2>Heippa, ${nimi}!</h2>`);
        res.end(); //lopetus 

    }

});

serveri.listen(portti, () => { //serverin käynnistys
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //teksti avautuu komentoriville kun serveri käynnistetään, portin numeroksi tulee aiemmin määritelty 3001
});

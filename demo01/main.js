//vakiolla haetaan http ja url moduulin ominaisuudet käyttöön
const http = require("http");
const url = require("url");

//portti
const portti = 3001;

//serveri määritys
const serveri = http.createServer((req, res) => {

    if (req.url != "/favicon.ico") {
        
        //poimitaan urlista nimi
        let tiedot = url.parse(req.url, true).query;
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon";
    
        //statuskoodi ja html lisäys
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });
        
        //res olioa hyödyntäen lisätään serveriä kutsuttaessa tekstiä
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`);
        res.write(`<h2>Heippa, ${nimi}!</h2>`);
        
        //responsen lopetus
        res.end();

    }

});
//serverin käynnistys tiettyyn porttiin
serveri.listen(portti, () => {
    //palvelin käynnistys viesti
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

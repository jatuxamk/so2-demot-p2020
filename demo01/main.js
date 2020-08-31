 const http = require("http");  // muuttuja  (http moduuli)
const url = require("url");    // muuttuja (url moduuli) 

const portti = 3001; // muuttuja 

const serveri = http.createServer((req, res) => { //serverin käynnitäminen

    if (req.url != "/favicon.ico") { // if lause 

        let tiedot = url.parse(req.url, true).query; // tiedot muuttuja josta parsitaan jtn
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; // querystring muuttuja joka on aina tuntematon
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); // luetaan html ja utf-8
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`);//ensimmäinen rivi tekstiä
        res.write(`<h2>Heippa, ${nimi}!</h2>`);//toinen rivi
        res.end(); //lopetus

    }

});

serveri.listen(portti, () => { //serverin käynnistäminen
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

const http = require("http"); // tehdään olio joka käyttää http-protokollaa
const url = require("url"); // muuttuja joka lukee selaimen urlin

const portti = 3001; // muuttuja nimeltä portti jonka arvo on 3001

const serveri = http.createServer((req, res) => { // luodaan palvelin nimeltään serveri joka käyttää http

    if (req.url != "/favicon.ico") { //jaa a

        let tiedot = url.parse(req.url, true).query; // url:sta tehdään json-lista
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; // tiedolle nimi asetetaan perusarvo tuntematon
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); // kerrotaan selaimelle kaikki ok ja lisätään ääkköset
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); // otsikko
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //otetaan muuttujan nimi urlista
        res.end(); // loppu

    }

});

serveri.listen(portti, () => { // palvelin kuuntelee porttia
    console.log(`Palvelin käynnistyi porttiin ${portti}`);    //tulostaa lauseen konsoliin sekä portin arvon
});

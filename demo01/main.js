const http = require("http"); // tehdään olio joka käyttää http protokollaa
const url = require("url"); // tämä lukee selaimen url palkin?

const portti = 3001; // käytetään porttia 3001

const serveri = http.createServer((req, res) => { // tässä luodaan palvelin nimeltään serveri 

    if (req.url != "/favicon.ico") { // tarkistetaan käytetäänkö fav iconia 

        let tiedot = url.parse(req.url, true).query; // tehdään json urlista
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; // tiedolle nimi asetetaan perusarvo tuntematon
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); // selaimelle kerrrotaan kaikki ok ja lisätään ääkköset 
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); // kirjoitetaan sivulle otsikko
        res.write(`<h2>Heippa, ${nimi}!</h2>`); // otetaan url kentästä ja tulostetaan
        res.end(); //loppu

    }

});

serveri.listen(portti, () => { // palvelin kuuntelee ennalta määrättyä porttia
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   // console log tulostaa sen mitä tapahtuu
});

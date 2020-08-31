const http = require("http");   //Tehdään olio, joka käyttää http protokollaa
const url = require("url");     //Muuttuja, joka lukee selaimen urlin

const portti = 3001;    //luodaan portti

const serveri = http.createServer((req, res) => {   //Luodaan palvelin nimeltä serveri 

    if (req.url != "/favicon.ico") {    //Tarkistaa käytetäänkö faviconia

        let tiedot = url.parse(req.url, true).query;    //Tehdään urlista json
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon";  //Mikäli nimi tyhjä, tulostuu tuntematon(perusarvo)
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //Selaimelle kerrotaan, että kaikki ok sekä html ja ääkköset
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //Perus tekstiä
        res.write(`<h2>Heippa, ${nimi}!</h2>`);     //Teksti ja otetaan muuttuja urlkentästä
        res.end(); //Loppu

    }

});

//Palvelin kuuntelee ennalta määrättyä porttia
serveri.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

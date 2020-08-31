const http = require("http"); //Tehdään olio joka käyttää http-protokollaa
const url = require("url"); //Tämän lukee url:län selaimesta

const portti = 3001; //Käytetään porttia 3001

const serveri = http.createServer((req, res) => { //http-protokollalle luodaan palvelin, jonka nimi on "serveri"

    if (req.url != "/favicon.ico") { //testaa hakeeko pyyntö faviconia

        let tiedot = url.parse(req.url, true).query; //Tehdään Json urlista
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //tiedot.nimi asetetaan Default arvo "tuntematon"
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //selaimelle ilmoitetaan että käytetään html:ää sekä lisätään ääkköset
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //Kirjoitetaan h1 otsikko
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //Tulostetaan otsikko mihin haetaan muuttuja "nimi" url-kentästä
        res.end();

    }

});

serveri.listen(portti, () => { //Palvelin kuuntelee ennalta määrättyä porttia
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //tulostaa consoleen
});

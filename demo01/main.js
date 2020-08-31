const http = require("http"); //luodaan olio, joka käyttää http-protokollaa
const url = require("url"); //muuttuja, joka lukee selaimen urlin

const portti = 3001; //asetetaan portin arvo

const serveri = http.createServer((req, res) => { //luodan palvelin 'serveri', joka käyttää http-protokollaa (http olio)

    if (req.url != "/favicon.ico") { //testaa, hakeeko pyyntö faviconia

        let tiedot = url.parse(req.url, true).query; //luodaan JSON url-kentästä
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //asetetaan muuttujan arvoksi url-JSONin nimi-tieto
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //kerrotaan selaimelle: kaikki ok, käytetään html:ää, merkkikoodaus sisältää ääkköset
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //kirjoitetaan sivulle otsikko
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //otetaan urlista tehty muuttuja, joka tulostetaan tervehdyksen mukana
        res.end(); //loppu

    }

});

serveri.listen(portti, () => { //palvelin kuuntelee määritettyä porttia
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //tulostetaan konsoliin ilmoitus palvelimen käynnistymisestä
});

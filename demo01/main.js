const http = require("http"); //tehdään olio, joka käyttää http-protokollaa
const url = require("url"); //muuttuja, joka lukee selaimen urlin

const portti = 3001; //määrittää käytettävän portin

const serveri = http.createServer((req, res) => { //luodaan palvelin muuttujalle "serveri"

    if (req.url != "/favicon.ico") { //mysteeri

        let tiedot = url.parse(req.url, true).query; //tehdään JSON urlista ja asetetaan se "tiedot" muuttujaan
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //asetetaan perusarvo "tuntematon"
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //asetetaan ääkköset ja käytetään html. 200-koodi jos kaikki ok
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //kirjoitetaan
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //otetaan muuttuja "nimi" ja kirjoitetaan se
        res.end(); //loppu

    }

});

serveri.listen(portti, () => { //kuunnellaan porttia
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //tulostaa portin numeron
});

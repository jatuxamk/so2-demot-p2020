const http = require("http"); // Luodaan HTTP (vaaditaan)
const url = require("url"); //Pyydetään URL (eli vaaditaan selaimeen url osoite)

const portti = 3001; //portti mistä haetaan localhostista selaimesta

const serveri = http.createServer((req, res) => { //serverin olemassa olo pyyntö ja vastaus (request ja Response)

    if (req.url != "/favicon.ico") { //kysyy urlista kaiken mitä alhaalla on annettu komentoja.

        let tiedot = url.parse(req.url, true).query; //kysyy urlista tiedot
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //defaulttina let nimi tulostaa tuntematon mutta jos kirjoitat urliin nimen vaikka Risto se tulostaa tuntemattoman sijasta Riston. (ja määrittää sen)
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //head jolla saadaan enemmän "laadukasta" contenttia serverille
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //kirjoittaa otsikon
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //kirjoittaa Heippa plus nimi H2 tyyliin.
        res.end(); //lopettaa responsen

    }

});

serveri.listen(portti, () => { //serveri "kuuntelee" pyyntöä
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //tulostaa consoleen jos se toimi oikein.
});

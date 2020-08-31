const http = require("http"); // pitää  olla, jotta voi käyttää http
const url = require("url"); // pitää olla, jotta voi käyttää url

const portti = 3001; // määritellään portti mihin aukeaa

const serveri = http.createServer((req, res) => { // luodaan serveri

    if (req.url != "/favicon.ico") { // jos url ei ole favicon niin tekee seuraavan:

        let tiedot = url.parse(req.url, true).query; // ottaa tiedon querysta
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; // jos nimeä ei ole, tulostaa tuntematon
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //200 eli kaikki ok ja määritellään tyyli tms että voi käyttää html-tageja 
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); // kirjotetaan mitä halutaan tulostaa
        res.write(`<h2>Heippa, ${nimi}!</h2>`); // tulostetaan nimi, mikä on kirjotettu queryyn
        res.end(); // lopetetaan

    }

});

serveri.listen(portti, () => { // kuunnellaan porttia
    console.log(`Palvelin käynnistyi porttiin ${portti}`);  // kertoo konsoliin mihin porttiin käynnistyi
});

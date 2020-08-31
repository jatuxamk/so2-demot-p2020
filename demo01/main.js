const http = require("http"); //Olio, joka käyttää http protokollaa
const url = require("url"); //Muuttuja, joka lukee selaimen url 

const portti = 3001; //Luodaan portti jota käytetään, suositaan yli 1000 ettei mene tietokoneen omien porttien kanssa sekaisin

const serveri = http.createServer((req, res) => { //Luodaan http protokollalla palvelin nimeltä Serveri, joka luodaan aiemmin määritetyllä oliolla 

    if (req.url != "/favicon.ico") { //Url katsoo, käytetäänkö faviconia.

        let tiedot = url.parse(req.url, true).query; //Luodaan json urlista. 
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //asetetaan tiedolle nimi -perusarvo "tuntematon"
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //selaimelle kerrotaan että kaikki ok, ja annetaan selaimelle ä ja ö toimimaan, ja annetaan selaimelle tieto käyttää html:ää
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //write kirjoittaa sivulle otsikon
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //write kirjoittaa sivulle otsikon, jossa lukee nimi muuttujan tiedon url kentästä
        res.end(); //lopettaa kirjoittamisen

    }

});

serveri.listen(portti, () => { //Palvelin kuuntelee annettua porttia
    console.log(`Palvelin käynnistyi porttiin ${portti}`); //tulostaa cmd portin ja viestin.
});

const http = require("http"); // Haetaan node.js "lisäosa" muuttujalle
const url = require("url"); //Haetaan node.js "lisäosa" muuttujalle

const portti = 3001; // Portin numero "muuttujalle"

const serveri = http.createServer((req, res) => { // luodaan palvelin "serveri" muuttujalle

    if (req.url != "/favicon.ico") { // jos selaimen titlen ikoni on jotain muuta kun favicon.ico --> tapahtuu aaltosulkeiden välinen osa?

        let tiedot = url.parse(req.url, true).query; // luodaan JSON urlista?
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; // jos tiedot.nimi = tyhjä niin tulostetaan "tuntematon". Muuten annettu nimi URL:ista
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); // päästään kirjoittamaan HTML:ää + ääkköset
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); // H1 otsikko
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //H2 otsikko (+nimi muuttujan tulostus)
        res.end(); // responsen lopetus

    }

});

serveri.listen(portti, () => { // serverin käynnistys?
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   // ...tulee CMD:hen console.log tulostukseen teksti + portti muuttuja
});

const http = require("http"); 
const url = require("url");

const portti = 3001; //määritellään portti mitä kuunnellaan

const serveri = http.createServer((req, res) => { //luodaan serveri jolla parametrit pyyntö ja vastaus

    if (req.url != "/favicon.ico") {

        let tiedot = url.parse(req.url, true).query;
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon";
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //html merkistömäärityksiä
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //vastauksena h1 tason otsikko
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //vastauksena h2 tason otsikko ja data muuttujasta nimi
        res.end();

    }

});

serveri.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

//helvetti kun järki lähtee :(

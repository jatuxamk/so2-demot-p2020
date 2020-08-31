const http = require("http");
const url = require("url");

const portti = 3001; //portin numero asetetaan vakioksi

const serveri = http.createServer((req, res) => { //serverin luominen

    if (req.url != "/favicon.ico") { //luettaessa tietoja urlista jättää faviconin huomiotta

        let tiedot = url.parse(req.url, true).query; //hakee tiedot urlista
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //jos urlissa ei nimi tietoa asetetaan arvoksi "tuntematon"
    
        //html muotoilu
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`);
        res.write(`<h2>Heippa, ${nimi}!</h2>`);
        res.end();

    }

});

serveri.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //tulostus konsoliin
});

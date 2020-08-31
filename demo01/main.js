const http = require("http"); //Rakennetaan  http nimiseen muuttujaan nodesta http palikka käyttöön
const url = require("url"); // Rakennetaan url nimiseen muuttujaan nodesta url palikka käyttöön

const portti = 3001; //Portti nimiseen muuttujaan annetaan portin arvo

const serveri = http.createServer((req, res) => { //Rakennetaan serveri niminen palvelin http palikan ominaisuudella createServer ja annetaan sille 2 arvoa

    if (req.url != "/favicon.ico") { //selaimen faviconin pyynnön hylkääminen

        let tiedot = url.parse(req.url, true).query;  //Haetaan selaimen urlista tiedot ja parsitaan ne
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; // Otetaan nimi muuttujaan parsituista tiedoista nimi ja jos sitä ei ole niin annetaan eri arvo
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //Selaimelle annetaan head arvoja minkä tyyppisestä sivusta on kyse ja ääkköset
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //Kirjoitetaan sivustolle tulostuva teksti
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //Kirjoitetaan toinen teksti joka tulostuu sivulle
        res.end(); //Lopetetaan palvelimen vastaus

    }

});

serveri.listen(portti, () => { //Lisätään serveri nimiseen palvelimeen kuuntelu ominaisuus tietylle portille 
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //Console.logataan palvelimen käynnistyminen
});

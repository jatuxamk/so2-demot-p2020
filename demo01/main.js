const http = require("http");   //haetaan http käyttöön ohjelmaan
const url = require("url");     //otetaan url moduuli käyttöön

const portti = 3001; //muuttuja porttille jota käytetään

const serveri = http.createServer((req, res) => {   //luodaan serveri

    if (req.url != "/favicon.ico") { //poistaa favicon pyynnön if lauseella

        let tiedot = url.parse(req.url, true).query; //poimitaan urlista nimi tulostettavaksi
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //nimi joka tulostuu
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });    //writeHead jotta voidaan käyttää html
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //tulostuu aina
        res.write(`<h2>Heippa, ${nimi}!</h2>`);     //tulostaa heippa ja halutun nimen
        res.end();  //lopettaa responsen

    }

});

serveri.listen(portti, () => {      //käynnistää serverin 3001 porttiin
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //tulostaa ilmoituksen kun serveri käynnistetään
});

const http = require("http");
const url = require("url");

const portti = 3001; //Annetaan portinnumero

const serveri = http.createServer((req, res) => {  //Tehdään serveri 

    if (req.url != "/favicon.ico") { 

        let tiedot = url.parse(req.url, true).query;  //Katsotaan nimi urlista
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon";  //tulostetaan nimi, jos ei ole niin tuntetamaton
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });  //perus koodialutukset
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //Html koodia mikä tulostuu aina 
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //tulostetaan heippa + annettu nimi
        res.end(); //lopetus

    }

});

serveri.listen(portti, () => {   //katsotaan portti mihin käynnistytään
    console.log(`Palvelin käynnistyi porttiin ${portti}`);     //consoleen ilmoitus että käynnistyi 
});

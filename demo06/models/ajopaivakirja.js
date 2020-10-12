const fs = require("fs");
const tiedostonimi = "./models/matkat.json"
const tiedostonimiKayttajat = "./models/kayttajat.json"

module.exports = {
    
    "haeKaikki" : (callback) => {

        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
            
            callback(JSON.parse(data));

        });

    },

    "lisaaUusi" : (uusiMatka, callback) => {

        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
            
            let matkat = JSON.parse(data);

            matkat.push(uusiMatka);

            fs.writeFile(tiedostonimi, JSON.stringify(matkat, null, 2), (err) => {

                if (err) throw err; 

                callback();

            });

        }); 

    },

    "haeKayttaja" : (tunnus, callback) => {

        fs.readFile(tiedostonimiKayttajat, "utf-8", (err, data) => {

            if (err) throw err;

            let kayttajat = JSON.parse(data);

            let indeksi = kayttajat.findIndex((kayttaja) => {

                return kayttaja.tunnus == tunnus;

            });

            if (indeksi >= 0) {

                callback(kayttajat[indeksi]);

            } else {

                callback(null);        

            }

        });


    }

}
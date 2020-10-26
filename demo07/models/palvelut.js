const mysql = require("mysql");

const yhteys = mysql.createConnection({
                                        "host" : "localhost",
                                        "user" : "root",
                                        "password" : "",
                                        "database" : "autokorjaamo"
                                      });

yhteys.connect((err) => {

    if (!err) {

        console.log("Yhteys tietokantapalvelimeen avattu!");

    } else {

        throw err;

    }

});


module.exports = {

    haeKaikkiPalvelut : (callback) => {

        let sql = "SELECT * FROM palveluhinnasto";

        yhteys.query(sql, (err, data) => {

            callback(err, data);

        });
       

    },

    haePalvelu : (id, callback) => {

        let sql = "SELECT * FROM palveluhinnasto WHERE id = ?";

        yhteys.query(sql, [id], (err, data) => {

            callback(err, data);

        });
       

    },

    muokkaaPalvelua : (tiedot, callback) => {

        let sql = "UPDATE palveluhinnasto SET nimi = ?, hinta = ? WHERE id = ?";

        yhteys.query(sql, [tiedot.nimi, tiedot.hinta, tiedot.id], (err) => {

            callback(err);

        });     

    }


}
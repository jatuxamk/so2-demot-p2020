const mysql = require("mysql");

const yhteys = mysql.createConnection({
                                        "host" : "localhost",
                                        "user" : "root",
                                        "password" : "",
                                        "database" : "kayttajatietokanta"
                                      });

yhteys.connect((err) => {

    if (!err) {
        console.log("Tietokantayhteys avattu!");
    } else {
        throw `Virhe yhdistettettäessä tietokantaan: ${err}`;        
    }

});

module.exports = {

    hae : (callback) => {

        let sql = "SELECT * FROM kayttajat LIMIT 50";

        yhteys.query(sql, (err, data) => {

            callback(err, data);

        });

    }

};
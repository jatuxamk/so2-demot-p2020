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

    hae : (lomaketiedot, callback) => {

        let hakusana = mysql.escape(`%${lomaketiedot.hakusana}%`);

        let sql = `SELECT * FROM kayttajat WHERE sukunimi LIKE ${hakusana} OR etunimi LIKE ${hakusana} LIMIT 50`;

        yhteys.query(sql, (err, data) => {

            callback(err, data);

        });

    }

};
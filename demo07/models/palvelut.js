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
       

    }

}
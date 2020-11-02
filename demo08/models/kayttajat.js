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

        let ehdot = [];


        if (lomaketiedot.luottokorttityyppi) {

            let luottokorttiehdot;

            if (Array.isArray(lomaketiedot.luottokorttityyppi)) {

                let tyypit = lomaketiedot.luottokorttityyppi.map((tyyppi) => {

                    return mysql.escape(tyyppi);

                });

                luottokorttiehdot = tyypit.join(" OR luottokorttityyppi = ");

            } else {

                luottokorttiehdot = mysql.escape(lomaketiedot.luottokorttityyppi);

            }

            ehdot.push(`(luottokorttityyppi = ${luottokorttiehdot})`);

        }


        if (lomaketiedot.sukupuoli == "Mies") {

            ehdot.push(`(sukupuoli = \'Mies\')`);

        }

        if (lomaketiedot.sukupuoli == "Nainen") {

            ehdot.push(`(sukupuoli = \'Nainen\')`);

        }

      
        let hakusana = mysql.escape(`%${lomaketiedot.hakusana}%`);

        let hakusanaehdot = `(sukunimi LIKE ${hakusana} OR etunimi LIKE ${hakusana})`;

        ehdot.push(hakusanaehdot);

        let sql = `SELECT * FROM kayttajat WHERE ${ehdot.join(" AND ")} LIMIT 50`;

        console.log(sql); 

        yhteys.query(sql, (err, data) => {

            callback(err, data);

        });

    }

};
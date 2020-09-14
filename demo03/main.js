const express = require("express");
const app = express(); 

const multer = require("multer");
const upload = multer({ dest : "./public/uploads" });

const fs = require("fs");

const portti = 3003;

const tiedostonimi = "./kuvagalleria.json";

app.use(express.static("./public/"));

app.post("/lisaakuva", upload.single("tiedosto"), (req, res) => {

    fs.readFile(tiedostonimi, (err, data) => {

        if (!err) {

            let kuvat = JSON.parse(data);
            
            let uusikuva = {
                "otsikko" : req.body.otsikko,
                "tiedosto" : req.file.filename
             };

             kuvat.push(uusikuva);

            fs.writeFileSync(tiedostonimi, JSON.stringify(kuvat, null, 2));             

        }


    });

    res.redirect("/");

});

app.get("/", (req, res) => {

    fs.readFile(tiedostonimi, (err, data) => {

        if (!err) {

            let kuvat = JSON.parse(data);

            let kuvagalleriaHTML = "";

            kuvat.forEach((kuva) => {

                kuvagalleriaHTML += `
                                    <h3>${kuva.otsikko}</h3>
                                    
                                    <img src="uploads/${kuva.tiedosto}" width="400">
                                    `;

            });

            

            let sivu = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
                            <title>Demo 3: Tiedostojen upload</title>
                        </head>
                        <body>
                            
                            <div class="container">
                        
                                <h1>Demo 3: Tiedostojen upload</h1>
                        
                                <h2>Kissakuvagalleria</h2>
                        
                                <a class="btn btn-primary" href="/lisaa.html">Lisää kuva galleriaan</a>
        
                                ${kuvagalleriaHTML}
        
                            </div>
                        
                        </body>
                        </html>
                    `;
        
            res.send(sivu);

        }

    });
  

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`)

});
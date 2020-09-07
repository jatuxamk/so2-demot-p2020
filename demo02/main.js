const express = require("express");
const fs = require("fs");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { "extended" : true } ));

app.use(express.static("./public"));

app.post("/tallenna", (req, res) => {

    let vanhatViestit = fs.readFileSync("./viestit.txt");

    let pvm = new Date().toLocaleString();

    let viesti = req.body.viesti;

    let viestit = `
                    ${vanhatViestit}
                    <i>${pvm}</i>
                    <p>${viesti}</p>
                  `;

    fs.writeFileSync("./viestit.txt", viestit);

    res.redirect("/kiitos.html");

});

app.get("/lue.html", (req, res) => {

    let viestit = fs.readFileSync("./viestit.txt");

    let sivu = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
                    <title>Demo 2: Node.js ja Express</title>
                </head>
                <body>

                    <div class="container">

                    <h1>Demo 2: Node.js ja Express</h1>

                    <h2>Lue vieraskirjaa</h2>

                    ${viestit}

                    <a href="/" class="btn btn-primary">Palaa etusivulle</a>

                    </div>

                </body>
                </html>
               `;

    res.send(sivu);

});

app.listen(3002, () => {

    console.log(`Palvelin käynnityi porttiin 3002`);

});
const express = require("express");

const app = express();

const portti = 3004;

app.use(express.static("./public"));

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});
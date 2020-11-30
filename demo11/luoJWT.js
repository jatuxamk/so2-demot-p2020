const jwt = require("jsonwebtoken");

let token = jwt.sign({}, "SuuriSalaisuus2020!!");

console.log(token);
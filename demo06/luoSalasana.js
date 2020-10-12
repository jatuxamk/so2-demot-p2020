const crypto = require("crypto");

let hash = crypto.createHash("SHA256").update("jokunen").digest("hex");

console.log(hash);

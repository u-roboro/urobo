const urobo = require("urobo");

const error = new urobo.RequiredError("GAAA");
console.log(error.message);
const axios = require ("axios")

module.exports = (event, context) => {
    context
    .status(200)
    .headers({"Content-Type": "text/html"})
    .succeed(`<html><body>
    <p>Ich bin ein Berliner 🍩</p>
    </body></html>`);
}

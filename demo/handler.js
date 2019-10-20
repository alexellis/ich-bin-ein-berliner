const axios = require ("axios")

module.exports = (event, context) => {
  icon = `🍩`;
  // icon = `🇩🇪`;

  context
    .status(200)
    .headers({"Content-Type": "text/html"})
    .succeed(`<html><body>
    <p>Ich bin ein Berliner `+icon+`</p>
    </body></html>`);
}

"use strict"

module.exports = (event, context) => {
  let icon = `🐶`;
  // let icon = `🐈`;

  context
    .status(200)
    .headers({"Content-Type": "text/html"})
    .succeed(`<html><head><style>body {font-family: Verdana;}</style></head>
    <body>
      <h2>Wir mag lieben `+icon+`</h2>
    </body>
    </html>`);
}

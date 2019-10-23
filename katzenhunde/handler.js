"use strict"

module.exports = (event, context) => {
  let y = "🐶";
  let x = "😸";

  context
    .status(200)
    .headers({"Content-Type": "text/html"})
    .succeed(`<html><head><style>body {font-family: Verdana;}</style></head>
    <body>
      <h2>`+x+` machen glücklicher als `+y+`</h2>
    </body>
    </html>`);
}


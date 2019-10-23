"use strict"

module.exports = (event, context) => {
  let x = "🐶";
  let y = "😸";

  let color = process.env.color || "white";
  context
    .status(200)
    .headers({"Content-Type": "text/html"})
    .succeed(`<html><head><style>body { font-family: Verdana; background-color: `+color+`;}</style></head>
    <body>
      <h2>`+x+` machen glücklicher als `+y+`</h2>
    </body>
    </html>`);
}

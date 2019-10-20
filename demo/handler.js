const axios = require ("axios")

module.exports = (event, context) => {
    axios.get("https://api.ipify.org?format=json").then(res => {
      context
      .status(200)
      .headers({"Content-Type": "application/json"})
      .succeed({"result": res.data, "status":"🇩🇪"});

    }).catch(e => {
      context
      .status(500)
      .fail(e.toString());
    });
}

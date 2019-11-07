"use strict"

const axios = require("axios");

module.exports = async (event, context) => {
  let res = await axios.get("https://api.ipify.org?format=json")
  return res.data;
}

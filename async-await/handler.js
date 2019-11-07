"use strict"

const axios = require("axios");

module.exports = async (event, context) => {
  return axios.get("https://api.ipify.org?format=json");
}

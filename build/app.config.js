"use strict";
const path = require("path");
var AppConfig = {
    port: 3000,
    staticServer: path.resolve(__dirname, '../public')
};
module.exports = AppConfig;

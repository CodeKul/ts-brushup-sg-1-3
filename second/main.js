"use strict";
exports.__esModule = true;
var connector_1 = require("./connector");
var tiger_1 = require("./tiger");
var tiger = new tiger_1.Tiger();
tiger.run();
console.log("legs are " + tiger.legs);
var con = new connector_1.Connector();
con.connect("http://codekul.com");

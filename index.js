console.info("CreadorCraft Maker Action by Creadores Program ©2024");
console.info("Loading Libraries...");
const core = require('@actions/core');
const github = require('@actions/github');
const JSzip = require("jszip");
console.info("Done!");
console.info("Creating CreatorCraft Game...");
var dirGame = core.getInput("path");

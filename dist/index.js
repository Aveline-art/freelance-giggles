"use strict";
exports.__esModule = true;
var github = require("@actions/github");
var fs = require("fs");
// Globals
var token = fs.readFileSync("test-token.txt", "utf-8");
var octokit = github.getOctokit(token);
console.log("hahaha");

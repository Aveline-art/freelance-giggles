"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const github = require("@actions/github");
const fs = require("fs");
const query_1 = require("./query");
// Globals
const token = fs.readFileSync("test-token.txt", "utf-8");
const octokit = github.getOctokit(token);
function main(org, repo, labels) {
    const result = octokit.graphql((0, query_1.default)(org, repo, labels)).then((data) => {
        formatData(data);
    });
}
function formatData(data) { }
exports.default = main;

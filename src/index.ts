"use strict";

// Imports
import * as core from "@actions/core";
import * as github from "@actions/github";
import * as fs from "fs";

// Globals
let octokit;
const token = fs.readFileSync("test-token.txt", "utf-8");

console.log("hahaha");

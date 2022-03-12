"use strict";

// Imports
import * as core from "@actions/core";
import * as github from "@actions/github";
import * as fs from "fs";

const inputs = {
  // Required
  configFile: parseConfig(core.getInput("config-file")), // a json configuration
  myToken: core.getInput("myToken"), // a string containing the token, used only to verify octokit
};

const octokit = github.getOctokit(inputs.myToken);

function parseConfig(path: string) {
  const file = fs.readFileSync(path, "utf-8");
  return JSON.parse(file);
}

export { inputs, octokit };

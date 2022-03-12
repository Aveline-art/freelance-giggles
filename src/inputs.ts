"use strict";

// Imports
import * as core from "@actions/core";
import * as github from "@actions/github";
import * as fs from "fs";

interface inputs {
  configFile: JSON;
  myToken: string;
  outFile: string;
}

const inputs = {
  configFile: parseConfig(core.getInput("configFile")),
  myToken: core.getInput("myToken"),
  outFile: core.getInput("outFile"),
};

const octokit = github.getOctokit(inputs.myToken);

function parseConfig(path: string) {
  const file = fs.readFileSync(path, "utf-8");
  return JSON.parse(file);
}

export { inputs, octokit };

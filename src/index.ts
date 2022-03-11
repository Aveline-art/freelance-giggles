"use strict";

// Imports
import * as core from "@actions/core";
import * as github from "@actions/github";
import * as fs from "fs";
import query from "./query";
import { Organization, Repository, Issue, Label } from "./organization";

// Globals
const token = fs.readFileSync("test-token.txt", "utf-8");
const octokit = github.getOctokit(token);

function main(org: string, repo: string, labels: string[]) {
  const result = octokit.graphql(query(org, repo, labels)).then((data) => {
    formatData(data);
  });
}

function formatData(data) {}

export default main;

/*
Psudo-code

- from all the repos given as part of this GHA
    - grab all the good first issues that are not assigned, not closed, and has the good: first issue label
    - if possible, also isolate the search to columns named "prioritized backlog"
- once all the issues have been gathered, format it into a new .md file
- commit the new .md with the githubbot
*/

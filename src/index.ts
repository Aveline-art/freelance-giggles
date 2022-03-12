"use strict";

// Imports
import * as fs from "fs";
import { spawn } from "child_process";
import { query } from "./query";
import { inputs, octokit } from "./inputs";
import { Organization } from "./dataStructures/organization";
import { OrgData } from "./dataStructures/organization";

// Globals

async function main() {
  const tables = [];
  for (const item of inputs.configFile) {
    const table = await createTables(
      item.organization,
      item.repositories,
      item.labels
    );
    tables.push(table);
  }
  console.log("Writing file...");
  fs.writeFileSync(inputs.outFile, tables.join("\n"));
  commitScript();
}

async function createTables(org: string, repos: string[], labels: string[]) {
  const organization = new Organization(org);
  for (const repo of repos) {
    console.log(`Making table for ${org}/${repo}`);
    await octokit
      .graphql(query(org, repo, labels))
      .then((data: OrgData) => {
        organization.addRepository(data.organization.repository);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(`Table completed!`);
  }
  const table = organization.tablify();
  return table;
}

function commitScript() {
  spawn("git", ["--version"]).stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  spawn("git", ["config", "user.name", "github-actions"]).stdout.on(
    "data",
    (data) => {
      console.log(`stdout: ${data}`);
    }
  );
  spawn("git", ["config", "user.email", "github-actions@github.com"]).stdout.on(
    "data",
    (data) => {
      console.log(`stdout: ${data}`);
    }
  );
  spawn("git", ["add", "."]).stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  spawn("git", ["commit", "-m", "Updated with new data"]).stdout.on(
    "data",
    (data) => {
      console.log(`stdout: ${data}`);
    }
  );
  spawn("git", ["push", "user.name", "github-actions"]).stdout.on(
    "data",
    (data) => {
      console.log(`stdout: ${data}`);
    }
  );
}

main();

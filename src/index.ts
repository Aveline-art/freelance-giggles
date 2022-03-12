"use strict";

// Imports
import * as fs from "fs";
import { exec } from "child_process";
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
  exec("git config user.name github-actions");
  exec("git config user.email github-actions@github.com");
  exec('git add "README.md"');
  exec('git commit -m "Updated with new data"');
  exec("git push");
}

main();

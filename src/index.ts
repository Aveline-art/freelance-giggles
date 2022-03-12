"use strict";

// Imports
import * as fs from "fs";
import { query } from "./query";
import { inputs, octokit } from "./inputs";
import { Organization } from "./dataStructures/organization";
import { OrgData } from "./dataStructures/organization";

// Globals

async function main() {
  const tables = [];
  for (const item of inputs.configFile) {
    const table = createTables(
      item.organization,
      item.repositories,
      item.labels
    );
    tables.push(table);
  }
  fs.writeFileSync(inputs.outFile, tables.join("\n"));
}

async function createTables(org: string, repos: string[], labels: string[]) {
  const organization = new Organization(org);
  for (const repo of repos) {
    await octokit
      .graphql(query(org, repo, labels))
      .then((data: OrgData) => {
        organization.addRepository(data.organization.repository);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const table = organization.tablify();
  return table;
}

main();

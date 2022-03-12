"use strict";

import { Repository } from "./repository";
import { RepoData } from "./repository";

interface Organization {
  name: string;
  repositories: Repository[];
}

interface OrgData {
  organization?: RepoData;
}

class Organization {
  constructor(name: string) {
    this.name = name;
    this.repositories = [];
  }

  addRepository({ name, url, defaultBranchRef, issues }) {
    const repo = new Repository(name, url, defaultBranchRef.name);
    repo.addIssues(issues.nodes);
    this.repositories.push(repo);
  }

  listRepositories() {
    return this.repositories;
  }

  tablify() {
    return `${this.repositories
      .map((repository) => {
        return (
          `### [${this.name}/${repository.name}](${repository.url})\n` +
          `##### [README](${repository.readme}) | [CONTRIBUTING](${repository.contributing})\n` +
          `${repository.tablify()}`
        );
      })
      .join("\n")}`;
  }
}

export { Organization };
export { OrgData };

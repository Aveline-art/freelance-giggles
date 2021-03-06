"use strict";

import { Issue } from "./issue";
import { IssueData } from "./issue";

interface Repository {
  name: string;
  url: string;
  readme: string;
  contributing: string;
  issues: Issue[];
}

interface RepoData {
  repository: {
    name: string;
    url: string;
    defaultBranchRef: {
      name: string;
    };
    issues: {
      nodes: IssueData[];
    };
  };
}

class Repository {
  constructor(name: string, url: string, defaultBranch: string) {
    this.name = name;
    this.url = url;
    this.readme = `${url}#readme`;
    this.contributing = `${url}/blob/${defaultBranch}/CONTRIBUTING.md`;
    this.issues = [];
  }

  addIssues(issues: IssueData[]) {
    for (const issue of issues) {
      const issueObj = new Issue(issue.title, issue.url);
      issueObj.addLabels(issue.labels.nodes);
      this.issues.push(issueObj);
    }
  }

  listIssues() {
    return this.issues;
  }

  tablify() {
    return `|Issue|Roles|\n|-|-|\n${this.issues
      .map((issue) => issue.tablify())
      .filter(Boolean)
      .join("\n")}`;
  }
}

export { Repository };
export { RepoData };

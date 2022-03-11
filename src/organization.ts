interface Organization {
  name: string;
  repositories: Repository[];
}

interface Repository {
  name: string;
  url: string;
  readme: string;
  contributing: string;
  issues: Issue[];
}

interface Issue {
  title: string;
  url: string;
  labels: string[];
}

interface OrgData {
  organization?: RepoData;
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

interface IssueData {
  title: string;
  url: string;
  labels: {
    nodes: [{ name: string }];
  };
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
      issueObj.addLabels(issue.labels);
      this.issues.push(issueObj);
    }
  }

  listIssues() {
    return this.issues;
  }
}

class Issue {
  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
    this.labels = [];
  }

  addLabels(labels: IssueData["labels"]) {
    for (const label of labels.nodes) {
      this.labels.push(label.name);
    }
  }

  listLabels() {
    return this.labels;
  }

  hasDependency() {
    return this.labels.includes("dependency");
  }
}

export { Organization, Repository, Issue };
export { OrgData, RepoData, IssueData };

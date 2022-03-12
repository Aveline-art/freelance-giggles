"use strict";

interface Issue {
  title: string;
  url: string;
  labels: string[];
  roleRegex: RegExp;
}

interface IssueData {
  title: string;
  url: string;
  labels: {
    nodes: [{ name: string }];
  };
}

class Issue {
  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
    this.labels = [];
    this.roleRegex = /role:\s?(.+)/;
  }

  addLabels(labels: IssueData["labels"]["nodes"]) {
    for (const label of labels) {
      this.labels.push(label.name);
    }
  }

  listLabels() {
    return this.labels;
  }

  hasDependency() {
    const loweredLabels = this.labels.map((label) => {
      return label.toLowerCase();
    });
    return loweredLabels.includes("dependency");
  }

  get roles() {
    const allRoles = [];
    const loweredLabels = this.labels.map((label) => {
      return label.toLowerCase();
    });
    loweredLabels.forEach((label) => {
      const result = label.match(this.roleRegex);
      if (result) {
        allRoles.push(result[1]);
      }
    });
    return allRoles;
  }

  tablify() {
    if (this.hasDependency()) {
      return ``;
    } else {
      return `|[${this.title}](${this.url})|${this.roles.join(", ")}|`;
    }
  }
}

export { Issue };
export { IssueData };

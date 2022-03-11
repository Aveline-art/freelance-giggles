"use strict";

interface Issue {
  title: string;
  url: string;
  labels: string[];
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

export { Issue };
export { IssueData };

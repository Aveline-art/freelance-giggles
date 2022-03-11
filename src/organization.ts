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
  body: string;
  url: string;
  labels: Label[];
}

interface Label {
  name: string;
}

class Organization {
  constructor(name: string) {
    this.name = name;
    this.repositories = [];
  }
}

class Repository {
  constructor(name: string) {
    this.name = name;
    this.url = undefined;
    this.readme = undefined;
    this.contributing = undefined;
    this.issues = [];
  }
}

class Issue {
  constructor(title: string, body: string, url: string) {
    this.title = title;
    this.body = body;
    this.url = url;
    this.labels = [];
  }
}

class Label {
  constructor(name: string) {
    this.name = name;
  }
}

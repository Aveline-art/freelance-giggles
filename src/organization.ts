interface Organization {
  name: string;
  repositories: Repository[];
}

interface Repository {
  name: string;
  link: string;
  readme: string;
  contributing: string;
  issues: Issue[];
}

interface Issue {
  title: string;
  text: string;
  link: string;
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
    this.link = undefined;
    this.readme = undefined;
    this.contributing = undefined;
    this.issues = [];
  }
}

class Issue {
  constructor(title: string, text: string, link: string) {
    this.title = title;
    this.text = text;
    this.link = link;
  }
}

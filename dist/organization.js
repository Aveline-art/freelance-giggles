"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Issue = exports.Repository = exports.Organization = void 0;
class Organization {
    constructor(name) {
        this.name = name;
        this.repositories = [];
    }
}
exports.Organization = Organization;
class Repository {
    constructor(name) {
        this.name = name;
        this.url = undefined;
        this.readme = undefined;
        this.contributing = undefined;
        this.issues = [];
    }
}
exports.Repository = Repository;
class Issue {
    constructor(title, body, url) {
        this.title = title;
        this.body = body;
        this.url = url;
        this.labels = [];
    }
}
exports.Issue = Issue;
class Label {
    constructor(name) {
        this.name = name;
    }
}
exports.Label = Label;

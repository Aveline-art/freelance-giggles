var Organization = /** @class */ (function () {
    function Organization(name) {
        this.name = name;
        this.repositories = [];
    }
    return Organization;
}());
var Repository = /** @class */ (function () {
    function Repository(name) {
        this.name = name;
        this.link = undefined;
        this.readme = undefined;
        this.contributing = undefined;
        this.issues = [];
    }
    return Repository;
}());
var Issue = /** @class */ (function () {
    function Issue(title, text, link) {
        this.title = title;
        this.text = text;
        this.link = link;
    }
    return Issue;
}());

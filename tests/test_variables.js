const main = require("../dist-ts/index");

const org = "hackforla";
const repos = ["website", "VRMS"];
const labels = ["good first issue"];

main.default(org, repos, labels);

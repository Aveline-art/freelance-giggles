const { Issue } = require("../../dist-ts/dataStructures/issue");
const { data } = require("./data.test");

test("assert Issue Object", () => {
  const issue = new Issue("test-title", "test-url");
  expect(issue.title).toBe("test-title");
  expect(issue.url).toBe("test-url");
});

test("assert Issue Labels Empty", () => {
  const issue = new Issue("test-title", "test-url");
  expect(issue.listLabels().length).toBe(0);
  expect(issue.listLabels()).toStrictEqual([]);
});

test("assert Issue Labels With Obj", () => {
  const issue = new Issue("test-title", "test-url");
  issue.addLabels(data.organization.repository.issues.nodes[0].labels.nodes);
  expect(issue.labels.length).toBe(2);
  expect(issue.hasDependency()).toBe(false);
});

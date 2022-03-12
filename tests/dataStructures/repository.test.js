const { Repository } = require("../../dist-ts/dataStructures/repository");
const { data } = require("./data.test");

test("assert Repo Object", () => {
  const repository = new Repository("test-name", "test-url", "test-branch");
  expect(repository.name).toBe("test-name");
  expect(repository.url).toBe("test-url");
  expect(repository.readme).toBe("test-url#readme");
  expect(repository.contributing).toBe(
    "test-url/blob/test-branch/CONTRIBUTING.md"
  );
});

test("assert Repo Issues Empty", () => {
  const repository = new Repository("test-name", "test-url", "test-branch");
  expect(repository.listIssues().length).toBe(0);
  expect(repository.listIssues()).toStrictEqual([]);
});

test("assert Repo Issues With Obj", () => {
  const repository = new Repository("test-name", "test-url", "test-branch");
  repository.addIssues(data.organization.repository.issues.nodes);
  expect(repository.issues.length).toBe(2);
  expect(repository.listIssues()[0].title).toBe("test-issue-title");
});

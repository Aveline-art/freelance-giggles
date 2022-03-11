const { query } = require("../dist-ts/query");

test("assert Query", () => {
  const queryObj = query(
    (org = "test-org"),
    (repo = "test-repo"),
    (labels = ["1", "2"])
  );
  expect(queryObj.org).toBe("test-org");
  expect(queryObj.repo).toBe("test-repo");
  expect(queryObj.labels.length).toBe(2);
  expect(queryObj.query.includes("$org")).toBe(true);
  expect(queryObj.query.includes("$repo")).toBe(true);
  expect(queryObj.query.includes("$labels")).toBe(true);
});

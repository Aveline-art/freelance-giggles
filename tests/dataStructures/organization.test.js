const { Organization } = require("../../dist-ts/dataStructures/organization");
const { data } = require("./data.test");

test("assert Org Object", () => {
  const organization = new Organization("test-org");
  expect(organization.name).toBe("test-org");
});

test("assert Org Repos Empty", () => {
  const organization = new Organization("test-org");
  expect(organization.listRepositories().length).toBe(0);
  expect(organization.listRepositories()).toStrictEqual([]);
});

test("assert Org Repos With Obj", () => {
  const organization = new Organization("test-org");
  organization.addRepository(data.organization.repository);
  expect(organization.repositories.length).toBe(1);
  expect(organization.listRepositories()[0].name).toBe("test-repo-name");
});

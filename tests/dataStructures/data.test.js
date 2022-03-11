const data = {
  organization: {
    repository: {
      name: "test-repo-name",
      url: "test-repo-url",
      defaultBranchRef: {
        name: "test-repo-default-branch-name",
      },
      issues: {
        nodes: [
          {
            title: "test-issue-title",
            url: "test-issue-url",
            labels: {
              nodes: [
                {
                  name: "test-label-name",
                },
                {
                  name: "dependencys",
                },
                {
                  name: "role: front end",
                },
              ],
            },
          },
        ],
      },
    },
  },
};

test("assert defaultBranchRefName", () => {
  expect(data.organization.repository.defaultBranchRef.name).toBe(
    "test-repo-default-branch-name"
  );
});

module.exports = { data };

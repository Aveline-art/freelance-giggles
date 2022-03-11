"use strict";

const query = (org: string, repo: string, labels: string[]) => {
  return {
    query: `query OrganizationFreelanceIssues(
        $org: String!,
        $repo: String!,
        $labels: [String!],
      ) {
        organization(login: $org) {
          ...repo
        }
      }
      
      fragment repo on Organization {
        repository(name: $repo) {
          name
          url
          defaultBranchRef {
            name
          }
          issues(
            states: OPEN,
            first: 10,
            filterBy: {
              assignee: null, 
                labels: $labels
            }
          ) {
            nodes {
              title
              url
              labels(first: 10) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }`,
    org: org,
    repo: repo,
    labels: labels,
  };
};

export { query };

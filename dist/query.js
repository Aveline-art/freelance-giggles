"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = (org, repo, labels) => {
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
exports.default = query;

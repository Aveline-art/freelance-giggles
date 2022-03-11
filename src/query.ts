const query = {
  query: `query OrganizationFreelanceIssues(
        $org: String!,
        $repo: String!,
        $label: String!,
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
                labels: [$label]
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
  org: "hackforla",
  repo: "website",
  label: "good first issue",
};

/*
////////////////query///////////////

query OrganizationFreelanceIssues(
  $org: String!,
  $repo: String!,
  $label: String!,
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
      	labels: [$label]
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
}

////////////////variables///////////////

{
  "org": "hackforla",
  "repo": "website",
  "label": "good first issue"
}



*/

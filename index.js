function gql() {}

const fragment = gql(`
  fragment UserFragment on User {
    name
  }
`)

const query = gql(`
  query {
    user {
        ...UserFragment
    }
  }
`)

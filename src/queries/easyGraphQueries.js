import { gql } from '@apollo/client'

const easyGraphQueries = {
  GET_QUERIES: gql`
    query GetQueriesQuery {
      __schema {
        queryType {
          fields {
            name
            type {
              name
            }
          }
        }
      }
    }
  `,
  GET_TYPE: gql`
    query GetTypeQuery($name: String!) {
      __type(name: $name) {
        name
        ofType {
          name
          kind
        }
        fields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  `
}

export default easyGraphQueries

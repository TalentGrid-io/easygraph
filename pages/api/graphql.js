import { ApolloServer, gql } from 'apollo-server-micro';

const user = {
    id: 1,
    name: 'Aaron',
    surname: 'Swartz',
    fullName: "Aaron Swartz",
    email: 'aaronswartz@gmail.com',
};

const position = {
    id: 1,
    name: 'Good position',
    status: true,
};

const match = {
    id: 1,
    user: user,
    position: position,
    score: 100
};

const typeDefs = gql`
  type Query {
    match: Match!
  }

  type User {
    id: ID,
    name: String,
    surname: String,
    fullName: String
    email: String,
  }

  type Position {
    id: ID,
    name: String,
    status: Boolean,
  }

  type Match {
    id: ID,
    user: User,
    position: Position,
    score: Int,
  }
`

const resolvers = {
  Query: {
    match() {
      return match
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

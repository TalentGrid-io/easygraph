import { GraphQLCodeBlock } from 'react-graphql-syntax-highlighter'

const QuerySection = ({ queryCode }) => {
  return (
    <section style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {queryCode && <GraphQLCodeBlock src={queryCode}/>}
    </section>
  )
}

export default QuerySection

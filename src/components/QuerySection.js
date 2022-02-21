import { GraphQLCodeBlock } from 'react-graphql-syntax-highlighter'

const QuerySection = ({ queryCode }) => {
  return (
    <section
      className="box ml-5 is-flex is-justify-content-center is-align-items-center"
      style={{ flex: 1, overflow: 'auto', height: '100%' }}
    >
      {queryCode && <GraphQLCodeBlock src={queryCode} />}
    </section>
  )
}

export default QuerySection

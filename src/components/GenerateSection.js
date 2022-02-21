import { jsonToGraphQLQuery } from 'json-to-graphql-query'
import { getCheckedFieldsDeeplyHelper } from '../helper'

const GenerateSection = ({ selectedTypeData, queriesData, setQueryCode }) => {
  const handleGenerateClick = () => {
    const code = jsonToGraphQLQuery(
      {
        [`query ` + selectedTypeData.name]: {
          [queriesData.__schema.queryType.fields.find(field => field.type.name === selectedTypeData.name).name]:
            getCheckedFieldsDeeplyHelper(selectedTypeData.fields)
        }
      },
      { pretty: true }
    )
    setQueryCode(code)
    console.log(code)
  }

  return (
    <section style={{ display: 'flex' }}>
      <button onClick={handleGenerateClick} style={{ alignSelf: 'end' }}>
        Generate
      </button>
    </section>
  )
}

export default GenerateSection

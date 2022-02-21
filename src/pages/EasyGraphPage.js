import { useState } from 'react'
import { GenerateSection, HeaderConnect, QuerySection, TypeSection } from '../components'

const EasyGraphPage = () => {
  const [queriesData, setQueriesData] = useState()
  const [selectedTypeData, setSelectedTypeData] = useState()
  const [queryCode, setQueryCode] = useState('')

  const states = {
    queriesData,
    setQueriesData,
    selectedTypeData,
    setSelectedTypeData,
    queryCode,
    setQueryCode
  }

  return (
    <div>
      <HeaderConnect {...states} />
      {selectedTypeData && (
        <section style={{ display: 'flex', padding: 20, flexWrap: 'wrap' }}>
          <TypeSection {...states} />
          <GenerateSection {...states} />
          <QuerySection {...states} />
        </section>
      )}
    </div>
  )
}

export default EasyGraphPage

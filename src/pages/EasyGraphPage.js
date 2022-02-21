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
        <>
          <section style={{ height: 'calc(100vh - 300px)' }} className="is-flex p-5 is-flex-wrap-wrap is-4">
            <TypeSection {...states} />
            <QuerySection {...states} />
          </section>
          <GenerateSection {...states} />
        </>
      )}
    </div>
  )
}

export default EasyGraphPage

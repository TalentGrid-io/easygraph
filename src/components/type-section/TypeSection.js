import { TypeCheckboxList } from './internal'

const TypeSection = ({ selectedTypeData, setSelectedTypeData }) => {
  return (
    <section style={{ flex: 1 }}>
      <h4 style={{ textAlign: 'center' }}>{selectedTypeData.name} Type</h4>
      <TypeCheckboxList selectedTypeData={selectedTypeData} setSelectedTypeData={setSelectedTypeData} />
    </section>
  )
}

export default TypeSection

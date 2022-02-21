import { TypeCheckboxList } from './internal'

const TypeSection = ({ selectedTypeData, setSelectedTypeData }) => {
  return (
    <section className="box mr-5 mb-0" style={{ flex: 1, overflow: 'auto', height: '100%' }}>
      <h5 className="title is-5 has-text-centered">{selectedTypeData.name} Type</h5>
      <TypeCheckboxList selectedTypeData={selectedTypeData} setSelectedTypeData={setSelectedTypeData} />
    </section>
  )
}

export default TypeSection

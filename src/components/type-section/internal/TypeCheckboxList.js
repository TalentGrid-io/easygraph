import set from 'lodash.set'
import { checkboxNameToPathHelper } from '../../../helper'

const TypeCheckboxList = ({
  setSelectedTypeData,
  selectedTypeData,
  fields = selectedTypeData?.fields,
  depth = 0,
  parentIndex = ''
}) => {
  if (!selectedTypeData || !fields || !fields.length) return null

  const handleTypeCheckboxChange = e => {
    const { name, checked } = e.target
    let newSelectedTypeData = { ...selectedTypeData }
    set(newSelectedTypeData, checkboxNameToPathHelper(name) + '.status', checked)
    setSelectedTypeData(newSelectedTypeData)
  }

  return (
    <div>
      {fields.map(({ name, type, fields, status }, index) => (
        <div style={{ marginLeft: depth * 48, marginTop: 2 }} key={`${parentIndex}-${index}`}>
          <input
            checked={status}
            value={status}
            name={`${parentIndex}${index}`}
            type="checkbox"
            onChange={handleTypeCheckboxChange}
          />
          <span>{name}: </span>
          <span>{type?.name ? type.name : type?.ofType?.name}</span>
          <TypeCheckboxList
            setSelectedTypeData={setSelectedTypeData}
            selectedTypeData={selectedTypeData}
            fields={fields}
            depth={depth + 1}
            parentIndex={`${parentIndex}-${index}-`}
          />
        </div>
      ))}
    </div>
  )
}

export default TypeCheckboxList

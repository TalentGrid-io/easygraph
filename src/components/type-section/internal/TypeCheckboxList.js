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
        <div style={{ marginLeft: depth * 48 }} key={`${parentIndex}-${index}`}>
          <label className="checkbox">
            <input
              className="mr-2"
              checked={status}
              value={status}
              name={`${parentIndex}${index}`}
              type="checkbox"
              onChange={handleTypeCheckboxChange}
            />
            <span style={{ color: '#1F61A0' }}>{name}: </span>
            <span style={{ color: '#b4a617' }}>{type?.name ? type.name : type?.ofType?.name}</span>
          </label>

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

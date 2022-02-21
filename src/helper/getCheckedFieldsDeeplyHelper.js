const getCheckedFieldsDeeplyHelper = fields =>
  fields.reduce((acc, field) => {
    if (field.status === true) {
      acc[field.name] = true
    }
    if (field.fields.length) {
      acc[field.name] = getCheckedFieldsDeeplyHelper(field.fields)
      Object.keys(acc[field.name]).length === 0 && delete acc[field.name]
    }
    return acc
  }, {})

export default getCheckedFieldsDeeplyHelper

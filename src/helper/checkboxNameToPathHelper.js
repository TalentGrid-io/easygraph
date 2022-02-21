const checkboxNameToPathHelper = name =>
  name
    .split('-')
    .filter(item => item !== '')
    .map(item => `fields[${item}]`)
    .join('.')

export default checkboxNameToPathHelper

const fetchTypeDeeplyHelper = refetchType => {
  const fetchTypeDeeply = async name => {
    const { data } = await refetchType({ name })
    return Promise.all(
      data.__type.fields?.map(async field => {
        let fields = []
        if (field.type.kind === 'OBJECT' || field.type.ofType?.kind === 'OBJECT') {
          const innerName = field.type.name ? field.type.name : field.type.ofType?.name
          if (innerName) {
            fields = await fetchTypeDeeply(innerName)
          }
        }
        return {
          ...field,
          status: false,
          fields
        }
      })
    )
  }
  return fetchTypeDeeply
}

export default fetchTypeDeeplyHelper

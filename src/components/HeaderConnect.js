import { HttpLink, useApolloClient, useQuery } from '@apollo/client'
import { easyGraphQueries } from '../queries'
import { useState } from 'react'
import { fetchTypeDeeplyHelper } from '../helper'

const HeaderConnect = ({ queriesData, setQueriesData, setSelectedTypeData }) => {
  const client = useApolloClient()

  const { refetch: refetchQueries } = useQuery(easyGraphQueries.GET_QUERIES, {
    skip: true
  })
  const { refetch: refetchType } = useQuery(easyGraphQueries.GET_TYPE, {
    skip: true
  })
  const [form, setForm] = useState({
    serverInput: ''
  })

  const handleConnectClick = async e => {
    client.setLink(new HttpLink({ uri: form.serverInput }))
    const { data } = await refetchQueries()
    setQueriesData(data)
  }

  const handleQuerySelectChange = async e => {
    const { value } = e.target
    const { data } = await refetchType({ name: value })
    const fields = await fetchTypeDeeplyHelper(refetchType)(value)
    setSelectedTypeData({ ...data.__type, fields })
  }

  const handleServerInputChange = e =>
    setForm({
      [e.target.name]: e.target.value
    })

  return (
    <header className="has-text-centered mt-4">
      <h1 className="title is-1">EasyGraph</h1>
      <h3 className="title is-3">Generate easy graphql queries</h3>
      <div className="mb-2">
        <div>
          <input
            className="input mr-2"
            name="serverInput"
            type="text"
            placeholder="Enter your graphQL server here"
            value={form.serverInput}
            onChange={handleServerInputChange}
            style={{ width: 300 }}
          />
          <button className="button is-info" onClick={handleConnectClick}>
            connect
          </button>
        </div>
      </div>
      {queriesData && (
        <div className="select">
          <select defaultValue="" onChange={handleQuerySelectChange}>
            {queriesData.__schema.queryType.fields.map(field => (
              <option key={field.name} value={field.type.name}>
                {field.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </header>
  )
}

export default HeaderConnect

import useSWR from 'swr';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import Checkbox from '../components/forms/Checkbox';
import graphCreator from '../util/graphCreator';
import { fetcher } from '../util/fetcher';

export default function Index() {
  const initialValues = {
    'matchId': false,
    'user': false,
    'userId':false,
    'fullName': false,
    'email': false,
    'position': false,
    'positionId': false,
    'name': false,
    'status': false,
    'score': false
  }
  const { data, error } = useSWR("{match {id score user {id fullName email }position {id name status }}}", fetcher)
  const [query, setQuery] = useState(null)

  const handle = (data) => {
    const {total} = graphCreator(data)
    const parseQuery = JSON.parse(total)
    setQuery(JSON.stringify(parseQuery, null , 2).replaceAll('"', '').replaceAll(',', '').replaceAll(':', '').replaceAll('doutdes', ''))
  }

  return (
    <div className='p-10'>
      <h1 className='text-4xl text-center'>Easy Graph</h1>
      <h3 className='text-2xl text-center mt-10'>Generate easy graphql queries</h3>
      <div className='py-2'>
        <label htmlFor="server"></label>
        <input className='p-2 w-72 border-2' type="text" id="server" name="server" value={'http://localhost:3000/api/graphql'} disabled />
        <a href='http://localhost:3000/api/graphql' target="_blank" rel="noreferrer" className='ml-5 px-6 py-2 rounded-lg text-white bg-blue-400'>Connect</a>
      </div>
      <Formik
          initialValues={initialValues}
          onSubmit={(data) => {
            handle(data);
          }}
        >
          {({ handleChange, setFieldValue,values, ...rest }) => (
            <Form className='' autoComplete="off">
              <div className='grid grid-cols-3 gap-3 items-end justify-items-center'>
                <div className="grid gap-2 grid-cols-1 w-full border-2 px-5">
                  <div className='text-xl py-4 font-bold'>
                    Match Type
                  </div>
                  <Field placeholder="id" name="matchId" type="checkbox" as={Checkbox} />
                  <Field placeholder="user" name="user" type="checkbox" as={Checkbox} value={values.user} />
                  <Field addOnClasses={"pl-10"} placeholder="id" name="userId" type="checkbox" as={Checkbox}
                    onChange={(event) => {
                      const bool = event.target.value === 'true' ? false : true
                      setFieldValue('userId', bool)
                      if(bool) setFieldValue('user', bool)
                    }}
                  />
                  <Field addOnClasses={"pl-10"} placeholder="fullName" name="fullName" type="checkbox" as={Checkbox}  
                    onChange={(event) => {
                      const bool = event.target.value === 'true' ? false : true
                      setFieldValue('fullName', bool)
                      if(bool) setFieldValue('user', bool)
                    }}
                  />
                  <Field addOnClasses={"pl-10"} placeholder="email" name="email" type="checkbox" as={Checkbox} 
                    onChange={(event) => {
                      const bool = event.target.value === 'true' ? false : true
                      setFieldValue('email', bool)
                      if(bool) setFieldValue('user', bool)
                    }}
                  />
                  <Field placeholder="position" name="position" type="checkbox" as={Checkbox} value={values.position} />
                  <Field addOnClasses={"pl-10"} placeholder="id" name="positionId" type="checkbox" as={Checkbox}  
                    onChange={(event) => {
                      const bool = event.target.value === 'true' ? false : true
                      setFieldValue('positionId', bool)
                      if(bool) setFieldValue('position', bool)
                    }}
                  />
                  <Field addOnClasses={"pl-10"} placeholder="name" name="name" type="checkbox" as={Checkbox} 
                    onChange={(event) => {
                      const bool = event.target.value === 'true' ? false : true
                      setFieldValue('name', bool)
                      if(bool) setFieldValue('position', bool)
                    }}
                  />
                  <Field addOnClasses={"pl-10"} placeholder="status" name="status" type="checkbox" as={Checkbox}  
                    onChange={(event) => {
                      const bool = event.target.value === 'true' ? false : true
                      setFieldValue('status', bool)
                      if(bool) setFieldValue('position', bool)
                    }}
                  />
                  <Field placeholder="score" name="score" type="checkbox" as={Checkbox} />
                </div>
                <div className="mt-4">
                    <button type="submit" className="px-6 py-3  rounded-lg bg-blue-400 text-white">
                      Generate
                    </button>
                </div>
                <div className='w-full h-full border-2 px-5'>
                  {query && <pre>query Match {query}</pre>}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
  )
}

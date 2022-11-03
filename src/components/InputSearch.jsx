import React from 'react'
import axios from 'axios'
import { Formik } from 'formik'

const InputSearch = ({ setRecipes }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      validate={values => {
        const errors = {}

        if (values.query.trim() === '') {
          errors.query = 'Required'
        } else if (values.query.length <= 2) {
          errors.query = 'At least 2 chars'
        }

        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios.get('https://api.spoonacular.com/recipes/complexSearch', {
          params: {
            query: values.query,
            apiKey: import.meta.env.VITE_API_KEY
          }
        }).then(response => {
          setRecipes(response.data.results)
          setSubmitting(false)
        })
      }}
     >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) =>
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            value={values.query}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.query && touched.query && errors.query}
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </form>

    }
     </Formik>
  )
}

export default InputSearch

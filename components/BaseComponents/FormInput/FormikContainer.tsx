import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

interface Props {}

function FormikContainer(props: Props) {
  const initialValues = {
    name: '',
    email: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
  })

  const onSubmit = (values: any) => console.log('Form data', values)

  const {} = props

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="w-96 ">
            <FormikControl
              control="input"
              type="text"
              label="name"
              placeholder="name"
              name="name"
              className={
                formik.errors.name
                  ? ' w-[400px]  border-red-600  '
                  : ' w-[400px] '
              }
            />

            <FormikControl
              control="input"
              type="email"
              label="Email address"
              placeholder="example@mail.com"
              name="email"
              className={
                formik.errors.email
                  ? ' w-[400px]  border-red-600  '
                  : ' w-[400px] '
              }
            />

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default FormikContainer

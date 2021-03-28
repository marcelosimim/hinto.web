import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { LoginFormValidator } from './validators/LoginFormValidator'

export default function LoginFormCP(): JSX.Element {
  function onSubmitForm(values, actions): void {
    console.log('onSubmit', values)
  }

  return (
    <Formik
      validateOnMount
      onSubmit={onSubmitForm}
      validationSchema={LoginFormValidator}
      initialValues={{
        email: '',
        password: ''
      }}
    >
      {({ values, handleSubmit, errors, isValid }) => (
        <Form>
          <Field name={'email'} type={'email'} />
          <ErrorMessage name={'email'} />
          <Field name={'password'} type={'password'} />
          <ErrorMessage name={'password'} />
          <button type={'submit'} disabled={!isValid}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  )
}

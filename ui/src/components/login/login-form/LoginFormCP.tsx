import { Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import DatepickerCP from '../../../common/components/fields/datepicker/DatepickerCP'
import SubmitButtonCP from '../../../common/components/fields/submit-button/SubmitButtonCP'
import TextInputCP from '../../../common/components/fields/text-input/TextInputCP'
import { LoginFormValidator } from './validators/LoginFormValidator'

const INITIAL_VALUES = { email: '', password: '', birthDate: '' }

export default function LoginFormCP(): JSX.Element {
  function onSubmitForm(values): void {
    console.log('onSubmit', values)
  }

  return (
    <Formik
      validateOnMount
      onSubmit={onSubmitForm}
      validationSchema={LoginFormValidator}
      initialValues={INITIAL_VALUES}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <ContentWrapperLoginFormSCP>
            <TextInputCP
              name={'email'}
              type={'email'}
              label={'E-mail'}
              isRequired={true}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextInputCP
              name={'password'}
              type={'password'}
              label={'Password'}
              isRequired={true}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <DatepickerCP
              name={'birthDate'}
              label={'Data de nascimento'}
              isRequired={true}
            />
            <SubmitButtonCP textButton={'Entrar'} />
          </ContentWrapperLoginFormSCP>
        </Form>
      )}
    </Formik>
  )
}

const ContentWrapperLoginFormSCP = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

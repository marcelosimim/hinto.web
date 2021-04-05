import { Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import DatepickerCP from '../../../common/components/fields/datepicker/DatepickerCP'
import GenderpickerCP from '../../../common/components/fields/genderpicker/GenderpickerCP'
import SubmitButtonCP from '../../../common/components/fields/submit-button/SubmitButtonCP'
import TextInputCP from '../../../common/components/fields/text-input/TextInputCP'
import { RegisterFormValidator } from './validators/RegisterFormValidator'

const INITIAL_VALUES = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
  birthDate: '',
  gender: ''
}

export default function RegisterFormCP(): JSX.Element {
  function onSubmitForm(values): void {
    console.log('onSubmit', values)
  }

  return (
    <Formik
      validateOnMount
      onSubmit={onSubmitForm}
      validationSchema={RegisterFormValidator}
      initialValues={INITIAL_VALUES}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <ContentWrapperRegisterFormSCP>
            <TextInputCP
              name={'userName'}
              type={'userName'}
              label={'Nome de Usuário'}
              isRequired={true}
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextInputCP
              name={'email'}
              type={'email'}
              label={'E-mail'}
              isRequired={true}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <DatepickerCP
              name={'birthDate'}
              label={'Data de nascimento'}
              isRequired={true}
            />
            <GenderpickerCP
              name={'gender'}
              label={'Gênero'}
              isRequired={false}
            ></GenderpickerCP>
            <TextInputCP
              name={'password'}
              type={'password'}
              label={'Senha'}
              isRequired={true}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextInputCP
              name={'confirmPassword'}
              type={'password'}
              label={'Confirmação da senha'}
              isRequired={true}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <SubmitButtonCP textButton={'Cadastrar'} />
          </ContentWrapperRegisterFormSCP>
        </Form>
      )}
    </Formik>
  )
}

const ContentWrapperRegisterFormSCP = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

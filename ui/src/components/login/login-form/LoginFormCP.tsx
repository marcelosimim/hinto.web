import { Form, Formik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import styled from 'styled-components'
import SubmitButtonCP from '../../../common/components/fields/submit-button/SubmitButtonCP'
import TextInputCP from '../../../common/components/fields/text-input/TextInputCP'
import { LoginFormValidator } from './validators/LoginFormValidator'

const INITIAL_VALUES = { email: '', password: '', birthDate: '' }

/**
 * Constrói a tela de login do sistema e, por hora, valida o login.
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LoginFormCP(): JSX.Element {
  const router = useRouter()

  function onSubmitForm(values): void {
    console.log('onSubmit', values)
    /** Fazer aqui todo o processo de validação antes de dar o replace */
    router.replace('/home')
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

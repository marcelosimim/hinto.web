import axios from 'axios'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import styled from 'styled-components'
import SubmitButtonCP from '../../../common/components/fields/submit-button/SubmitButtonCP'
import TextInputCP from '../../../common/components/fields/text-input/TextInputCP'
import { IAuthRequestDTO } from '../../../interfaces/dtos/request/IAuthRequestDTO'
import { LoginFormValidator } from './validators/LoginFormValidator'

const INITIAL_VALUES: IAuthRequestDTO = { email: '', senha: '' }

/**
 * Constrói a tela de login do sistema e, por hora, valida o login.
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LoginFormCP(): JSX.Element {
  const router = useRouter()

  async function onSubmitForm(values: IAuthRequestDTO): Promise<void> {
    const response = await axios.post('/usuario/autenticar', values)
    console.log('data', response)

    router.replace('/home')
  }

  return (
    <Formik
      validateOnMount
      onSubmit={values => onSubmitForm(values)}
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
              name={'senha'}
              type={'password'}
              label={'Password'}
              isRequired={true}
              value={values.senha}
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

import axios from 'axios'
import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import styled from 'styled-components'
import SubmitButtonCP from '../../../common/components/fields/submit-button/SubmitButtonCP'
import TextInputCP from '../../../common/components/fields/text-input/TextInputCP'
import createNotification from '../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../common/components/notification/enums/NotificationTypeEnum'
import { GlobalContext } from '../../../common/context/GlobalContext'
import { IAuthRequestDTO } from '../../../interfaces/dtos/request/IAuthRequestDTO'
import { LoginFormValidator } from './validators/LoginFormValidator'

const INITIAL_VALUES: IAuthRequestDTO = { email: '', senha: '' }

/**
 * Constrói a tela de login do sistema e, por hora, valida o login.
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LoginFormCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)

  async function onSubmitForm(values: IAuthRequestDTO): Promise<void> {
    axios
      .post('/usuario/autenticar', values)
      .then(request => {
        if (request.status === 200) {
          globalContext.login(request.data)
          return createNotification({
            type: NotificationTypeEnum.success,
            title: `Ooi ${request.data.nome} como tem sido as coisas?`,
            description: 'Já sabe o que vai assistir hoje?'
          })
        }
      })
      .catch(error => {
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Tivemos algum erro para identificar o seu usuário'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
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

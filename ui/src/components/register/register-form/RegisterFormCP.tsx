import axios from 'axios'
import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import styled from 'styled-components'
import DatepickerCP from '../../../common/components/fields/datepicker/DatepickerCP'
import GenderpickerCP from '../../../common/components/fields/genderpicker/GenderpickerCP'
import SubmitButtonCP from '../../../common/components/fields/submit-button/SubmitButtonCP'
import TextInputCP from '../../../common/components/fields/text-input/TextInputCP'
import createNotification from '../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../common/components/notification/enums/NotificationTypeEnum'
import { GlobalContext } from '../../../common/context/GlobalContext'
import { ICreateUserRequestDTO } from '../../../interfaces/dtos/request/ICreateUserRequestDTO'
import { IRegisterForm } from '../../../interfaces/IRegisterForm'
import { RegisterFormValidator } from './validators/RegisterFormValidator'

const INITIAL_VALUES: IRegisterForm = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
  birthDate: null,
  gender: null
}

/**
 * Constrói e controle o formulário para criação de um usuário
 * @author rafaelvictor01
 * @returns JSX.Element
 */

export default function RegisterFormCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)

  async function onSubmitForm(values: IRegisterForm): Promise<void> {
    const DTO: ICreateUserRequestDTO = {
      nome: values.userName,
      email: values.email,
      senha: values.password,
      dataNascimento: values.birthDate.toLocaleString('pt-BR'),
      sexo: values.gender
    }

    axios
      .post('/usuario', DTO)
      .then(request => {
        if (request.status === 200) {
          createNotification({
            type: NotificationTypeEnum.success,
            title: 'Usuário criado com sucesso!',
            description:
              'Agora é só aproveitar tudo que a gente tem pra te oferecer'
          })
          return globalContext.login(request.data)
        }
      })
      .catch(error => {
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Houve algum erro para criar o seu usuário'
        })
        console.log(`>>> ERRO: ${error}`)
      })
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
            <DisplayGridWrapperFullRowSCP>
              <TextInputCP
                name={'userName'}
                type={'userName'}
                label={'Nome de Usuário'}
                placeholder={'Nome de Usuário'}
                isRequired={true}
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </DisplayGridWrapperFullRowSCP>
            <DisplayGridWrapperFullRowSCP>
              <TextInputCP
                name={'email'}
                type={'email'}
                label={'E-mail'}
                placeholder={'E-mail'}
                isRequired={true}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </DisplayGridWrapperFullRowSCP>
            <DisplayGridWrapperSCP>
              <DisplayGridWrapperSCP>
                <DatepickerCP
                  name={'birthDate'}
                  label={'Data de nascimento'}
                  placeholder={'Data de nascimento'}
                  isRequired={true}
                />
              </DisplayGridWrapperSCP>
              <DisplayGridWrapperSCP>
                <TextInputCP
                  name={'password'}
                  type={'password'}
                  label={'Senha'}
                  placeholder={'Escolha sua senha'}
                  isRequired={true}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </DisplayGridWrapperSCP>
            </DisplayGridWrapperSCP>
            <DisplayGridWrapperSCP>
              <DisplayGridWrapperSCP>
                <GenderpickerCP
                  name={'gender'}
                  label={'Gênero'}
                  placeholder={'Escolha seu gênero'}
                  isRequired={true}
                />
              </DisplayGridWrapperSCP>
              <DisplayGridWrapperSCP>
                <TextInputCP
                  name={'confirmPassword'}
                  type={'password'}
                  label={'Confirmação da senha'}
                  placeholder={'Confirme sua senha'}
                  isRequired={true}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </DisplayGridWrapperSCP>
            </DisplayGridWrapperSCP>
            <DisplayGridWrapperFullRowSCP>
              <SubmitButtonCP textButton={'Cadastrar'} />
            </DisplayGridWrapperFullRowSCP>
          </ContentWrapperRegisterFormSCP>
        </Form>
      )}
    </Formik>
  )
}

const ContentWrapperRegisterFormSCP = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`
const DisplayGridWrapperSCP = styled.div`
  display: grid;
  grid-column: span 1;
`
const DisplayGridWrapperFullRowSCP = styled.div`
  display: grid;
  grid-column: span 2;
`

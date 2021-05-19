import axios from 'axios'
import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import styled from 'styled-components'
import DatepickerCP from '../../../../common/components/fields/datepicker/DatepickerCP'
import GenderpickerCP from '../../../../common/components/fields/genderpicker/GenderpickerCP'
import SubmitButtonCP from '../../../../common/components/fields/submit-button/SubmitButtonCP'
import TextInputCP from '../../../../common/components/fields/text-input/TextInputCP'
import createNotification from '../../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../../common/components/notification/enums/NotificationTypeEnum'
import { GlobalContext } from '../../../../common/context/GlobalContext'
import { IUpdateUserRequestDTO } from '../../../../interfaces/dtos/request/IUpdateUserRequestDTO'
import { IHomePageForm } from '../../../../interfaces/IHomePageForm'
import { DrawerFormValidator } from './validators/HomeProfileDrawerFormValidator'

const INITIAL_VALUES: IHomePageForm = {
  newPassword: '',
  confirmNewPassword: '',
  birthDate: null,
  gender: null
}

/**
 * Cria dentro do drawer o formulário para o usuário poder alterar alguns dados da sua conta
 * @author rafaelvictor01
 * @author marcelosimim
 * @returns JSX.Element
 */
export default function HomeProfileDrawerFormCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)

  async function onSubmitForm(values: IHomePageForm): Promise<void> {
    const DTO: IUpdateUserRequestDTO = {
      senha: values.newPassword,
      dataNascimento: values.birthDate.toLocaleString('pt-BR'),
      sexo: values.gender
    }
    axios
      .put(`/usuario/${globalContext.authUser.id}`, DTO)
      .then(request => {
        console.log(request)
        if (request.status === 200) {
          return createNotification({
            type: NotificationTypeEnum.success,
            title: `${request.data.nome}, dados atualizados!`
          })
        }
      })
      .catch(error => {
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Tivemos algum erro para alterar os dados.'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
  }

  return (
    <Formik
      // validateOnMount
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmitForm}
      validationSchema={DrawerFormValidator}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <DrawerFormWrapperSCP>
            <NewPasswordGridWrapperSCP>
              <TextInputCP
                name={'newPassword'}
                type={'password'}
                label={'Nova senha'}
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </NewPasswordGridWrapperSCP>
            <ConfirmNewPasswordGridWrapperSCP>
              <TextInputCP
                name={'confirmNewPassword'}
                type={'password'}
                label={'Confirme a nova senha'}
                value={values.confirmNewPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ConfirmNewPasswordGridWrapperSCP>
            <BirthDateGridWrapperSCP>
              <DatepickerCP
                name={'birthDate'}
                label={'Data de nascimento'}
                // onChange={handleChange}
              />
            </BirthDateGridWrapperSCP>
            <GenderGridWrapperSCP>
              <GenderpickerCP
                name={'gender'}
                label={'Gênero'}
                isRequired={false}
              />
            </GenderGridWrapperSCP>
            <SubmitButtonGridWrapperSCP>
              <SubmitButtonCP textButton={'Salvar'} />
            </SubmitButtonGridWrapperSCP>
          </DrawerFormWrapperSCP>
        </Form>
      )}
    </Formik>
  )
}

const DrawerFormWrapperSCP = styled.div`
  display: grid;
  grid-area: drawerForm;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'newPassword newPassword'
    'confirmNewPassword confirmNewPassword'
    'birthDate gender'
    'saveButton saveButton';
`
const NewPasswordGridWrapperSCP = styled.div`
  display: grid;
  grid-area: newPassword;
`
const ConfirmNewPasswordGridWrapperSCP = styled.div`
  display: grid;
  grid-area: confirmNewPassword;
`
const BirthDateGridWrapperSCP = styled.div`
  display: grid;
  grid-area: birthDate;
`
const GenderGridWrapperSCP = styled.div`
  display: grid;
  grid-area: gender;
`
const SubmitButtonGridWrapperSCP = styled.div`
  display: grid;
  margin-top: 80px;
  grid-area: saveButton;
`

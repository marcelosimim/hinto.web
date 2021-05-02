import { Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import DatepickerCP from '../../../../common/components/fields/datepicker/DatepickerCP'
import GenderpickerCP from '../../../../common/components/fields/genderpicker/GenderpickerCP'
import SubmitButtonCP from '../../../../common/components/fields/submit-button/SubmitButtonCP'
import TextInputCP from '../../../../common/components/fields/text-input/TextInputCP'
import { DrawerFormValidator } from './validators/HomeProfileDrawerFormValidator'

const INITIAL_VALUES = {
  newPassword: '',
  confirmNewPassword: '',
  birthDate: '',
  gender: ''
}

/**
 * Cria dentro do drawer o formulário para o usuário poder alterar alguns dados da sua conta
 * @author rafaelvictor01
 * @returns JSX.Element
 * @todo descobrir como fazer o SubmitButtonCP funcionar mesmo estando dentro de uma styled div (importante!). vai ser usado na tela de cadastro tbm
 */
export default function HomeProfileDrawerFormCP(): JSX.Element {
  function onSubmitForm(values): void {
    console.log('onSubmit', values)
  }
  return (
    <Formik
      validateOnMount
      onSubmit={onSubmitForm}
      validationSchema={DrawerFormValidator}
      initialValues={INITIAL_VALUES}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <DrawerFormWrapperSCP>
            <NewPasswordGridWrapperSCP>
              <TextInputCP
                name={'newPassword'}
                type={'password'}
                label={'Nova senha'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </NewPasswordGridWrapperSCP>
            <ConfirmNewPasswordGridWrapperSCP>
              <TextInputCP
                name={'confirmNewPassword'}
                type={'password'}
                label={'Confirme a nova senha'}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ConfirmNewPasswordGridWrapperSCP>
            <BirthDateGridWrapperSCP>
              <DatepickerCP
                name={'birthDate'}
                label={'Data de nascimento'}
                onChange={handleChange}
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

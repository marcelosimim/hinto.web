import * as Yup from 'yup'

/**
 * Define o schema de validação para o formulário de cadastro.
 * @see https://github.com/jquense/yup
 * @author rafaelvictor01
 */
export const DrawerFormValidator = Yup.object().shape({
  newPassword: Yup.string(),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required(),
  birthDate: Yup.date().required(),
  gender: Yup.string()
  /*
    Videos de validação da confirmação da senha:
    https://youtu.be/yTQcsmagl1I?t=213
    https://youtu.be/dUZdvXrxj-U?t=1023
    */
})

import * as Yup from 'yup'

/**
 * Define o schema de validação para o formulário de cadastro.
 * @see https://github.com/jquense/yup
 * @author rafaelvictor01
 */
export const RegisterFormValidator = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  birthDate: Yup.date().required(),
  gender: Yup.string(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required()
  /*
    Videos de validação da confirmacao da senha:
    https://youtu.be/yTQcsmagl1I?t=213
    https://youtu.be/dUZdvXrxj-U?t=1023
    */
})

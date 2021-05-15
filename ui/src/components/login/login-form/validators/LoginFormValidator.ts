import * as Yup from 'yup'

/**
 * Define o schema de validação para o formulário de login.
 * @see https://github.com/jquense/yup
 * @author rafaelvictor01
 */
export const LoginFormValidator = Yup.object().shape({
  email: Yup.string().email().required(),
  senha: Yup.string().required()
})

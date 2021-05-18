import * as Yup from 'yup'
import { GenderEnum } from '../../../../common/enums/GenderEnum'

/**
 * Define o schema de validação para o formulário de cadastro.
 * @todo as mensagens de erro personalizadas não estão sendo exibidas corretamente.
 * @see https://github.com/jquense/yup
 * @author rafaelvictor01
 */
export const RegisterFormValidator = Yup.object().shape({
  userName: Yup.string().required('Insira um nome de usuário').max(75),
  email: Yup.string().email('Insira um email válido').required().max(125),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
  birthDate: Yup.date().required('Insira uma data'),
  gender: Yup.mixed<GenderEnum>()
    .oneOf(Object.values(GenderEnum))
    .required('Escolha uma opção')
})

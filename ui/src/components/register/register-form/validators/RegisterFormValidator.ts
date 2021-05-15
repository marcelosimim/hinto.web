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
  email: Yup.string().email().required('Insira um email válido').max(125),
  password: Yup.string().required('Insira uma senha').max(75),
  birthDate: Yup.date().required('Insira uma data'),
  gender: Yup.mixed<GenderEnum>()
    .oneOf(Object.values(GenderEnum))
    .required('Escolha uma opção'),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      'A confirmação não corresponde a senha inserida'
    )
    .required('Confirme a senha inserida')
})

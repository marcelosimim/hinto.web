import * as Yup from 'yup'

/**
 * Define o schema de validação para o formulário de cadastro.
 * @see https://github.com/jquense/yup
 * @author rafaelvictor01
 */
export const DrawerFormValidator = Yup.object().shape({
  newPassword: Yup.string().required('Insira uma senha').max(75),
  confirmNewPassword: Yup.string()
    .oneOf(
      [Yup.ref('newPassword'), null],
      'A confirmação não corresponde a senha inserida'
    )
    .required('Confirme a senha inserida')
  // birthDate: Yup.date().required(),
  // gender: Yup.mixed<GenderEnum>().oneOf(Object.values(GenderEnum)).required()
})

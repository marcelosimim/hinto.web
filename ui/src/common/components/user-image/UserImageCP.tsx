import React from 'react'
import Image from 'next/image'
import LoginImageSRC from '../../../assets/LoginImage.svg'

/**
 * Abstrai a construção da imagem padrão de usuário para ser usada em vários lugares do sistema
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function UserImageCP(): JSX.Element {
  return (
    <Image
      src={LoginImageSRC}
      alt={'login-image'}
      width={150}
      height={150}
      className={'login-image'}
    />
  )
}

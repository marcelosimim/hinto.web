import { Result } from 'antd'
import React from 'react'

/**
 * Página que será exibida caso o usuário acesse uma rota inexistente
 *
 * @returns JSX.Element
 * @author rafaelvictor01
 * @todo isolar o antd
 */
export default function PageNotFoundScreenCP(): JSX.Element {
  return (
    <Result
      status={'404'}
      title={'404'}
      subTitle={
        'Adoramos desafios, quem sabe um dia criamos essa pagina só pra você'
      }
    />
  )
}

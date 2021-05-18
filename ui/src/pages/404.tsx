import React from 'react'
import ResultCP from '../common/components/result/ResultCP'

/**
 * Página que será exibida caso o usuário acesse uma rota inexistente
 *
 * @returns JSX.Element
 * @author rafaelvictor01
 * @todo isolar o antd
 */
export default function PageNotFoundScreenCP(): JSX.Element {
  return (
    <ResultCP
      status={'404'}
      description={
        'Adoramos desafios, quem sabe um dia criamos essa pagina só pra você'
      }
    />
  )
}

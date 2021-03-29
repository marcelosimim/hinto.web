import React from 'react'
import styled from 'styled-components'

interface ISubmitButtonCPProps {
  textButton: string
}

export default function SubmitButtonCP(
  props: ISubmitButtonCPProps
): JSX.Element {
  return (
    <MainWrapperSubmitButtonSCP>
      <button type={'submit'} className={'btn-submit'}>
        {props.textButton}
      </button>
    </MainWrapperSubmitButtonSCP>
  )
}

const MainWrapperSubmitButtonSCP = styled.div`
  justify-self: center;

  .btn-submit {
    width: 120px;
    height: 50px;
    color: ${props => props.theme.colors.mainTextColor};
    border: 2px solid ${props => props.theme.colors.primary};
    background-color: transparent;
    border-radius: ${props => props.theme.other.defaultBorderRadius};
  }
`

import { Field, Form, Formik } from 'formik'
import React from 'react'
import CardCP from '../../../common/components/card/CardCP'
import LoginFormCP from '../login-form/LoginFormCP'

interface ILoginScreenContentCPProps {
  content: string
}

export default function LoginScreenContentCP(
  props: ILoginScreenContentCPProps
): JSX.Element {
  return (
    <CardCP style={{ width: '500px' }}>
      <LoginFormCP />
    </CardCP>
  )
}

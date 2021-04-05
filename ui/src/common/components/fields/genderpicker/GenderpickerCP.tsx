import { Select } from 'antd'
import React from 'react'
import styled from 'styled-components'
import TextInputLabelICP from '../text-input/inner/TextInputLabelICP'

const { Option } = Select

interface IGenderpickerCPProps {
  name: string
  label: string
  placeholder?: string
  disabled?: boolean
  autoFocus?: boolean
  isRequired?: boolean
  // onChange?: (date: moment.Moment, dateString: string) => void
}

export default function GenderpickerCP(
  props: IGenderpickerCPProps
): JSX.Element {
  return (
    <MainWrapperGenderpickerSCP>
      <TextInputLabelICP label={props.label} isRequired={props.isRequired} />
      <Select className="ant-select-selection" style={{ width: 120 }}>
        <Option value="male" style={{ width: 120 }}>
          Masculino
        </Option>
        <Option value="female" style={{ width: 120 }}>
          Feminino
        </Option>
        <Option value="another" style={{ width: 120 }}>
          Outro
        </Option>
      </Select>
    </MainWrapperGenderpickerSCP>
  )
}

const MainWrapperGenderpickerSCP = styled.div`
  display: grid;
  margin-bottom: 10px;

  .ant-select {
    color: ${props => props.theme.colors.mainTextColor};
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: ${props => props.theme.colors.mainBackground};
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
  }
`

// height: ${props => props.theme.defaultSize.inputFieldHeight};

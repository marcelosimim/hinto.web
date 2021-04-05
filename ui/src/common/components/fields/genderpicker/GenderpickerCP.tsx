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
    <MainWrapperGenderPickerSCP>
      <TextInputLabelICP label={props.label} isRequired={props.isRequired} />
      <Select>
        <Option value="male">Masculino</Option>
        <Option value="female">Feminino</Option>
        <Option value="another">Outro</Option>
      </Select>
    </MainWrapperGenderPickerSCP>
  )
}

const MainWrapperGenderPickerSCP = styled.div`
  display: grid;
  margin-bottom: 10px;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    margin-top: 10px;
    border: none;
    background-color: ${props => props.theme.colors.mainBackground};
    height: ${props => props.theme.defaultSize.inputFieldHeight};
  }
`

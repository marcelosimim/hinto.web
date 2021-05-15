import { Select } from 'antd'
import { Field, FieldProps } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { GenderEnum } from '../../../enums/GenderEnum'
import TextInputLabelICP from '../text-input/inner/TextInputLabelICP'

const { Option } = Select

interface IGenderpickerCPProps {
  name: string
  label: string
  placeholder?: string
  disabled?: boolean
  autoFocus?: boolean
  isRequired?: boolean
  onChange?: (gender: GenderEnum) => void
}

/**
 * Componente de select de gênero sexual criado, sobretudo, para funcionar em formulários criados
 * pelo Formik. Contudo, Usa as props do select do antd.
 *
 * @author rafaelvictor01
 * @author marcelosimim
 * @param props IGenderpickerCPProps
 * @returns JSX.Element
 */
export default function GenderpickerCP(
  props: IGenderpickerCPProps
): JSX.Element {
  return (
    <MainWrapperGenderPickerSCP>
      <TextInputLabelICP label={props.label} isRequired={props.isRequired} />
      <Field name={props.name}>
        {({
          field: { value },
          form: { setFieldValue, setFieldTouched }
        }: FieldProps) => (
          <Select
            className={props.name}
            allowClear={false}
            placeholder={props.placeholder}
            value={value || null}
            onChange={(gender: GenderEnum) => {
              setFieldValue(props.name, gender)
              setFieldTouched(props.name, true, false)
              props.onChange && props.onChange(gender)
            }}
          >
            <Option value={GenderEnum.male}>Masculino</Option>
            <Option value={GenderEnum.female}>Feminino</Option>
            <Option value={GenderEnum.another}>Outro</Option>
          </Select>
        )}
      </Field>
    </MainWrapperGenderPickerSCP>
  )
}

const MainWrapperGenderPickerSCP = styled.div`
  display: grid;
  margin-bottom: 10px;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    margin-top: 10px;
    border: none;
    align-items: center;
    background-color: ${props => props.theme.colors.mainBackground};
    height: ${props => props.theme.defaultSize.inputFieldHeight};
  }
  .ant-select-selection-item {
    align-self: center;
  }
`

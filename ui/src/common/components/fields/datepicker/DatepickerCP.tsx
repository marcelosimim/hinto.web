import { DatePicker } from 'antd'
import { Field, FieldProps } from 'formik'
import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import TextInputLabelICP from '../text-input/inner/TextInputLabelICP'

interface IDatepickerCPProps {
  name: string
  label: string
  placeholder?: string
  disabled?: boolean
  showToday?: boolean
  autoFocus?: boolean
  isRequired?: boolean
  allowClear?: boolean
  size?: 'large' | 'middle' | 'small'
  format?: string
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year'
  onChange?: (date: moment.Moment, dateString: string) => void
}

/**
 * Componente de Datepicker criado, sobretudo, para funcionar em formulários criados
 * pelo Formik mas usa as props do antd.
 *
 * @param props IDatepickerCPProps
 * @returns JSX.Element
 * @see https://ant.design/components/date-picker/
 * @author rafaelvictor01
 */
export default function DatepickerCP(props: IDatepickerCPProps): JSX.Element {
  return (
    <MainWrapperDatepickerSCP>
      <TextInputLabelICP label={props.label} isRequired={props.isRequired} />
      <Field name={props.name}>
        {({
          field: { value },
          form: { setFieldValue, setFieldTouched }
        }: FieldProps) => (
          <DatePicker
            value={value ? moment(value) : undefined}
            allowClear={props.allowClear}
            autoFocus={props.autoFocus}
            disabled={props.disabled}
            placeholder={props.placeholder}
            size={props.size}
            format={props.format || 'DD/MM/YYYY'}
            picker={props.picker}
            showToday={props.showToday}
            onChange={(date: moment.Moment, dateString: string) => {
              setFieldValue(props.name, date.toDate())
              setFieldTouched(props.name, true, false)
              props.onChange && props.onChange(date, dateString)
            }}
          />
        )}
      </Field>
    </MainWrapperDatepickerSCP>
  )
}

const MainWrapperDatepickerSCP = styled.div`
  display: grid;
  .ant-picker {
    background-color: ${props => props.theme.colors.mainBackground};
    height: ${props => props.theme.defaultSize.inputFieldHeight};
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
  }
`

import React, {ChangeEvent, FC, ReactNode} from 'react'

type TModalFormSelectProps = {
  name: string
  onChange?: (e: ChangeEvent) => void
  value?: string
  placeholder?: string
  options: { value: string, label: string }[]
  children: ReactNode
}

const ModalFormSelect: FC<TModalFormSelectProps> = ({name, onChange, value, options, placeholder, children}: TModalFormSelectProps) => {

  const optionElements = options.map((opt, key) => (
    <option key={key} value={opt.value} label={opt.label}/>));

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <select
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value='' label={placeholder ?? 'Выберите опцию'}/>
        {optionElements}
      </select>
    </>
  )
};

ModalFormSelect.displayName = 'ModalFormSelect';

export default ModalFormSelect

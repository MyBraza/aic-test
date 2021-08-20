import React, {ChangeEvent, FC, ReactNode} from 'react'

type TModalFormInputProps = {
  name: string
  onChange?: (e: ChangeEvent) => void
  value?: string
  type?: string
  children: ReactNode
}

const ModalFormInput: FC<TModalFormInputProps> = ({name, onChange, value, type, children}: TModalFormInputProps) => {

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        name={name}
        type={type || 'text'}
        onChange={onChange}
        value={value}
      />
    </>
  )
};

ModalFormInput.displayName = 'ModalFormInput';

export default ModalFormInput

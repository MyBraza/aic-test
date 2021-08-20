import React, {FC} from 'react'
import {ModalBackdrop} from "@blocks/ModalBackdrop";
import {Button} from "@blocks/Button";
import './ModalConfirmation.scss'

type TModalConfirmationProps = {
  hidden?: boolean
  text?: string
  onAccept: () => void
  onCancel: () => void
}

const ModalConfirmation: FC<TModalConfirmationProps> = ({onAccept, onCancel, hidden, text}: TModalConfirmationProps) => {
  return (
    <ModalBackdrop hidden={hidden}>
      <div className='modal-confirmation'>
        <h1>{text}</h1>
        <div className='modal-confirmation__button-row'>
          <Button onClick={onAccept}>Подтвердить</Button>
          <Button onClick={onCancel}>Отменить</Button>
        </div>
      </div>
    </ModalBackdrop>)
};

ModalConfirmation.displayName = 'ModalConfirmation';

export default ModalConfirmation

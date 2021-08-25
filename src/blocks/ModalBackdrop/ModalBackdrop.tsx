import React, {FC, ReactNode} from 'react'
import './ModalBackdrop.scss'

type TModalBackdropProps = {
  hidden?: boolean
  children: ReactNode,
}

const ModalBackdrop: FC<TModalBackdropProps> = ({hidden, children}: TModalBackdropProps) => (
  <div className='modal-backdrop' style={hidden ? {display: 'none'} : {}}>
    <div className='modal-backdrop__container'>{children}</div>
  </div>
);

ModalBackdrop.displayName = 'ModalBackdrop';

export default ModalBackdrop

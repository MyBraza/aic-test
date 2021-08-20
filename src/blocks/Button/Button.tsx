import React, {FC} from 'react'
import classNames from 'classnames';
import './Button.scss'

type TButtonProps = {
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
  children: string
}

const Button: FC<TButtonProps> = ({onClick, className, type, children}: TButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={classNames('button', className)}>
      {children}
    </button>
  )
};

Button.displayName = 'Button';

export default Button

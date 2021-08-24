import React, {FC} from 'react'
import './IconButton.scss'
import classNames from "classnames";

type TIconButtonProps = {
  onClick: () => void,
  icon: FC<IconProps>
  className?: string
}

interface IconProps {
  style?: { [key: string]: string }
  className?: string
}

const IconButton: FC<TIconButtonProps> = ({onClick, icon, className}: TIconButtonProps) => {
  const Icon = icon;
  return (<div
    onClick={onClick}
    className={classNames("icon-button", className)}
  >
    <Icon className="icon-button__icon"/>
  </div>)
};

IconButton.displayName = 'IconButton';

export default IconButton

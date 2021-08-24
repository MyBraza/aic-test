import React, {FC} from 'react'
import './Header.scss'
import {Button} from "@blocks/Button";
import {Plus} from '@icons';

type THeaderProps = {
  onAddUser: () => void
}

const Header: FC<THeaderProps> = ({onAddUser}: THeaderProps) => {

  return (
    <header className='header'>
      <h1 className='header__heading'>Пользователи</h1>
      <Button className='header__button' onClick={onAddUser}>
        <div>Добавить нового пользователя</div>
        <Plus/>
      </Button>
    </header>
  )
};

Header.displayName = 'Header';

export default Header

import React, {FC, ReactNode, useCallback, useState} from 'react'
import {IUserViewModel} from "../../../interfaces";
import {IconButton} from "@blocks/IconButton";
import {ChevronDown, ChevronUp, PenIcon, TrashCan} from "@icons";

type TTableProps = {
  id?: number
  user?: IUserViewModel
  className: string
  children?: ReactNode
  onEdit?: (idArr: number) => void
  onDelete?: (idArr: number) => void
}

const TableRow: FC<TTableProps> =
  ({
     className,
     user,
     id,
     onEdit,
     onDelete,
     children
   }: TTableProps) => {

    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleActive = useCallback(() => setIsActive(!isActive), [isActive]);

    const onClickEdit = user && id !== undefined ? () => {
      onEdit?.(id)
    } : undefined;

    const onClickDelete = user && id !== undefined ? () => {
      onDelete?.(id)
    } : undefined;


    const row =
      user && id !== undefined ? (<>
            <div className='table__cell'>
              <div className='table__cell__label'>
                № ФИО пользователя
              </div>
              {`${id + 1} ${user.surname} ${user.name[0]}.${user.middleName[0]}.`}
            </div>
            <div className='table__cell'>
              <div
                className='table__cell__label'>
                Роль
              </div>
              {user.role?.title}
            </div>
            <div
              className='table__cell'>
              <div
                className='table__cell__label'>
                Дата
                рождения
              </div>
              {user.birthday?.toString().slice(0, 10).split(/-/g).reverse().join('.')}
            </div>
            <div className='table__cell'>
              < div
                className='table__cell__label'>
                Место
                рождения
              </ div>
              {user.birthPlace}
            </div>
            <div className='table__cell'>
              < div
                className='table__cell__label'>
                Почта
              </ div>
              {user.email}
            </div>
            <div className='table__cell'>
              < div
                className='table__cell__label'>
                Номер
                телефона
              </ div>
              {user.phoneNumber}
            </div>
            <div
              className='table__cell'>
              < div
                className='table__cell__label'>
                Регистрация
              </ div>
              {user.registerDate.toString().slice(0, 10).split(/-/g).reverse().join('.')}
            </div>
            <div
              className='table__cell'>
              <div
                className='table__cell__label'>
                Изменение
              </div>
              {user.lastUpdate.toString().slice(0, 10).split(/-/g).reverse().join('.')}
            </div>
            <IconButton className='table__row__chevron' onClick={toggleActive}
                        icon={isActive ? ChevronUp : ChevronDown}/>
            <div className='table__cell_actions'>
              <IconButton
                onClick={onClickEdit ?? (() => null)}
                icon={PenIcon}/>
            </div>
            <div className='table__cell_actions'>
              <IconButton
                onClick={onClickDelete ?? (() => null)}
                icon={TrashCan}/>
            </div>
          </>
        )
        : undefined;

    return (
      <div className={className + (isActive ? ' active' : '')}
           onClick={!isActive ? toggleActive : () => null}>
        {row ?? children}
      </div>
    )
  };

TableRow.displayName = 'TableRow';

export default TableRow

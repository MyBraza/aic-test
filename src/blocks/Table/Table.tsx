import React, {FC, ReactNode, useEffect, useState} from 'react'
import './Table.scss'
import {getUsersSelector} from "@store/selectors";
import {useSelector} from "react-redux";
import TableRow from "./TableRow/TableRow";
import {ArrowDown, ArrowUp} from "@icons";
import {IUserViewModel} from "../../interfaces";

type TTableProps = {
  onEdit: (user: IUserViewModel) => void
  onDelete: (user: IUserViewModel) => void
}

const Table: FC<TTableProps> = ({onEdit, onDelete}: TTableProps) => {
  const users = useSelector(getUsersSelector);

  const [tableRows, setTableRows] = useState<ReactNode>(
    [<TableRow className='table__row' key={0}/>]
  );

  const [isSortedDown, setIsSortedDown] = useState<number>(1);

  useEffect(() => {
    const sortedUsers = users?.sort((a, b) => a.surname > b.surname ? isSortedDown : -isSortedDown);

    const onEditHandle = (id: number) => {
      if (sortedUsers) onEdit(sortedUsers[id])
    };

    const onDeleteHandle = (id: number) => {
      if (sortedUsers) onDelete(sortedUsers[id])
    };

    setTableRows(sortedUsers?.map((user, id) => (
      <TableRow className='table__row' user={user} key={id} id={id} onEdit={onEditHandle}
                onDelete={onDeleteHandle}>
      </TableRow>)));
  }, [users, isSortedDown]);

  return (
    <>
      <div className='table__info-row'>
        <div className='table__sort-icon'
             onClick={() => setIsSortedDown(-isSortedDown)}>Сортировать от А до
          Я {isSortedDown > 0 ?
            <ArrowDown/> : <ArrowUp/>}</div>
        <div className='table__total-users'> Всего пользователей: {users.length}</div>
      </div>
      <div className='table'>
        <TableRow className='table__row_heading'>
          <div className='table__cell_bold'>
            № ФИО пользователя
          </div>
          <div className='table__cell_bold'>
            Роль
          </div>
          <div className='table__cell_bold'>
            Дата рождения
          </div>
          <div className='table__cell_bold'>
            Место рождения
          </div>
          <div className='table__cell_bold'>
            Почта
          </div>
          <div className='table__cell_bold'>
            Номер телефона
          </div>
          <div
            className='table__cell_bold'>
            Регистрация
          </div>
          <div
            className='table__cell_bold'>
            Изменение
          </div>
          <div
            className='table__cell_bold'>
            ред.
          </div>
          <div
            className='table__cell_bold'>
            удалить
          </div>
        </TableRow>

        {tableRows}

      </div>
    </>
  )
};

Table.displayName = 'Table';

export default Table

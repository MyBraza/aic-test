import React, {FC, ReactNode, useEffect, useState} from 'react'
import './Table.scss'
import {getUsersSelector} from "@store/selectors";
import {useSelector} from "react-redux";
import TableRow from "./TableRow/TableRow";

type TTableProps = {}

const Table: FC<TTableProps> = ({}: TTableProps) => {
  let users = useSelector(getUsersSelector);
  const [tableRows, setTableRows] = useState<ReactNode>(
    [<TableRow className='table__row' key={0}/>]
  );
  useEffect(() => {
    setTableRows(users?.map((user, id) => (<TableRow className='table__row' key={id}>
      <div className='table__cell'>
        {`${user.name} ${user.middleName[0]}.${user.surname[0]}.`}
      </div>
      <div className='table__cell'>
        {user.role.title}
      </div>
      <div
        className='table__cell'>
        {user.birthday.toString().slice(0, 10).split(/-/g).reverse().join('.')}
      </div>
      <div className='table__cell'>
        {user.birthPlace}
      </div>
      <div className='table__cell'>
        {user.email}
      </div>
      <div className='table__cell'>
        {user.phoneNumber}
      </div>
      <div
        className='table__cell'>
        {user.registerDate.toString().slice(0, 10).split(/-/g).reverse().join('.')}
      </div>
      <div
        className='table__cell'>
        {user.lastUpdate.toString().slice(0, 10).split(/-/g).reverse().join('.')}
      </div>
    </TableRow>)));
    console.log(users)
  }, [users]);

  return (
    <div className='table'>
      <TableRow className='table__row'>
        <div className='table__cell_bold'>
          Фамилия И.О.
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
          Дата регистрации
        </div>
        <div
          className='table__cell_bold'>
          Последнее изменение
        </div>
      </TableRow>

      {tableRows}

    </div>
  )
};

Table.displayName = 'Table';

export default Table

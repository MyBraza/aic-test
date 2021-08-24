import React, {FC, ReactNode} from 'react'
import {IUserViewModel} from "../../../interfaces";
import {IconButton} from "@blocks/IconButton";
import {PenIcon, TrashCan} from "@icons";

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

    const onClickEdit = user && id !== undefined ? () => {
      onEdit?.(id)
    } : undefined;

    const onClickDelete = user && id !== undefined ? () => {
      onDelete?.(id)
    } : undefined;

    const row =
      user && id !== undefined ? (<>
          <div className='table__cell'>
            {`${id + 1} ${user.surname} ${user.name[0]}.${user.middleName[0]}.`}
          </div>
          <div className='table__cell'>
            {user.role?.title}
          </div>
          <div
            className='table__cell'>
            {user.birthday?.toString().slice(0, 10).split(/-/g).reverse().join('.')}
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
        </>)
        : undefined;

    return <div className={className}>{row ?? children}</div>
  };

TableRow.displayName = 'TableRow';

export default TableRow

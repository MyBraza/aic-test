import React, {FC, ReactNode} from 'react'

type TTableProps = {
  className: string
  children?: ReactNode
}

const TableRow: FC<TTableProps> = ({className, children}: TTableProps) => (
  <div className={className}>
    {children}
  </div>
);

TableRow.displayName = 'TableRow';

export default TableRow

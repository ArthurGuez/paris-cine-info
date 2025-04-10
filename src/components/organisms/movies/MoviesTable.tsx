import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import React from 'react';

import Movie from './Movie';
import type { Movie as MovieType } from '../../../services/types';
import Pagination from '../../molecules/pagination/Pagination';

interface Props {
  table: Table<MovieType>;
}

export default function MoviesTable({ table }: Props) {
  if (table.options.data.length === 0) {
    return <p className="text-center text-body">Pas de résultat</p>;
  }

  return (
    <main className="flex flex-grow flex-col overflow-hidden">
      <div className="flex-grow overflow-auto px-1.5 [-ms-overflow-style:none] [scrollbar-width:none] lg:px-3 [&::-webkit-scrollbar]:hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className="sticky top-0 bg-gradient-to-b from-background via-background to-background/90 text-body uppercase"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <th
                    className={`${header.column.columnDef.meta?.className ?? ''} pb-3 text-start`}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="text-body">
            {table.getRowModel().rows.map((row) => (
              <React.Fragment key={row.id}>
                <tr
                  className="border-b border-accent last:border-b-0 hover:bg-body/5"
                  onClick={row.getToggleExpandedHandler()}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className={`${cell.column.columnDef.meta?.className ?? ''} py-2.5`}
                      key={cell.id}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
                {row.getIsExpanded() && (
                  <tr>
                    <td colSpan={row.getAllCells().length}>
                      <Movie id={row.original.id} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.footer, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        {table.getPageCount() ? (
          <div className="py-1 shadow-[0_-2px_3px_rgba(255,255,255,0.05)]">
            <Pagination table={table} />
          </div>
        ) : null}
      </div>
    </main>
  );
}

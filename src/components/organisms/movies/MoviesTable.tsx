import { flexRender, Table } from '@tanstack/react-table';
import React from 'react';

import Movie from './Movie';
import OptionsBar from '../../molecules/options-bar/OptionsBar';
import { Movie as MovieType } from '../../../services/types';

interface Props {
  table: Table<MovieType>;
}

export default function MoviesTable({ table }: Props) {
  return (
    <main className="flex flex-grow flex-col overflow-hidden">
      <div className="flex-grow overflow-auto px-1.5 lg:px-3">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className="sticky top-0 bg-gradient-to-b from-background via-background to-background/90 text-body uppercase"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <th className="pb-3 text-start" key={header.id}>
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
                  className="border-b border-accent last:border-b-0"
                  onClick={row.getToggleExpandedHandler()}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td className="py-3" key={cell.id}>
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
      </div>
      <div className="sticky bottom-0 bg-background md:hidden">
        <OptionsBar />
      </div>
    </main>
  );
}

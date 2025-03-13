import type { SortingState } from '@tanstack/react-table';

import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useState } from 'react';

import { MOVIES_COLUMNS } from '../../../constants/columns';
import { getRouteApi } from '@tanstack/react-router';
import Movie from './Movie';

export default function MoviesTable() {
  const routeApi = getRouteApi('/');
  const loaderData = routeApi.useLoaderData();
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    columns: MOVIES_COLUMNS,
    data: loaderData.data,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    // By default, the row.getCanExpand() row instance API will return false unless it finds subRows on a row
    getRowCanExpand: (row) => true,
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <main>
      <table className="w-full border-spacing-x-3">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="border-b border-accent text-body uppercase" key={headerGroup.id}>
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
    </main>
  );
}

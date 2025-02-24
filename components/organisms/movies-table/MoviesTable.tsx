'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import type { Movie } from '../../../app/api/types';

const columnHelper = createColumnHelper<Movie>();

const columns = [
  columnHelper.accessor('title', {
    header: () => 'Titre',
  }),
  columnHelper.accessor('dir', {
    header: () => 'Réalisateur',
  }),
  columnHelper.accessor('imdbr', {
    header: () => 'IMDB',
  }),
  columnHelper.accessor('sc_rating', {
    header: 'Sens Critique',
  }),
  columnHelper.accessor('allo_prating', {
    header: () => 'Allo Presse',
  }),
  columnHelper.accessor('allo_srating', {
    header: () => 'Allo Spec.',
  }),
  columnHelper.accessor((row) => row.year, {
    id: 'year',
    header: () => <span>Année</span>,
  }),
  columnHelper.accessor('copies', {
    header: () => <span>Copies</span>,
  }),
];

interface Props {
  movies: Movie[];
}

export default function MoviesTable({ movies }: Props) {
  const [data] = useState<Movie[]>(movies);

  const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() });

  return (
    <main>
      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
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
    </main>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/organisms/header/Header';
import { getAllMovies } from '../services/movies';
import MoviesTable from '../components/organisms/movies/MoviesTable';
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { MOVIES_COLUMNS } from '../constants/columns';
import { useCallback } from 'react';
import { z } from 'zod';
import { SCREENING_TIMES } from '../constants/filters';

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: z.object({ time: z.enum(SCREENING_TIMES).exclude(['all']).optional() }),
  loaderDeps: ({ search: { time } }) => ({ time }),
  loader: ({ deps: { time } }) => getAllMovies({ time: time ?? 'all' }),
});

function Home() {
  const loaderData = Route.useLoaderData();

  const table = useReactTable({
    columns: MOVIES_COLUMNS,
    data: loaderData.data,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowCanExpand: () => true,
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: 'includesString',
    initialState: { pagination: { pageIndex: 0, pageSize: 100 } },
  });

  const handleSearch = useCallback(
    (searchTerm: string) => {
      table.setGlobalFilter(searchTerm);
    },
    [table],
  );

  return (
    <div className="flex h-dvh flex-col text-sm lg:mx-5 lg:text-base">
      <Header onSearch={handleSearch} />
      <MoviesTable table={table} />
    </div>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/organisms/header/Header';
import { getAllMovies } from '../services/movies';
import MoviesTable from '../components/organisms/movies/MoviesTable';
import type { Row } from '@tanstack/react-table';
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
import { DAYS, FORMATS, SCREENING_TIMES } from '../constants/filters';
import { useAtomValue } from 'jotai';
import { bookmarksAtom } from '../atoms/bookmarks';
import type { Movie } from '../services/types';

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: z.object({
    day: z.enum(DAYS).exclude(['week']).optional(),
    format: z.enum(FORMATS).exclude(['all']).optional(),
    time: z.enum(SCREENING_TIMES).exclude(['all']).optional(),
  }),
  loaderDeps: ({ search: { day, format, time } }) => ({ day, format, time }),
  loader: ({ deps: { day, time, format } }) =>
    getAllMovies({ day: day ?? 'week', time: time ?? 'all', format: format ?? 'all' }),
});

function Home() {
  const loaderData = Route.useLoaderData();
  const bookmarks = useAtomValue(bookmarksAtom);

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
    sortingFns: {
      sortingBookmarks: (rowA: Row<Movie>, rowB: Row<Movie>): number => {
        const movieA = bookmarks.includes(rowA.original.id) ? 1 : 0;
        const movieB = bookmarks.includes(rowB.original.id) ? 1 : 0;

        return movieB - movieA;
      },
    },
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

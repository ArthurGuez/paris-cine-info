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

import { MOVIES_COLUMNS } from '../columns';
import { useCallback } from 'react';
import { z } from 'zod';
import {
  CARDS,
  DAYS,
  DEFAULT_CARD_VALUE,
  DEFAULT_DAY_VALUE,
  DEFAULT_FORMAT_VALUE,
  DEFAULT_SCREENING_TIME_VALUE,
  FORMATS,
  SCREENING_TIMES,
} from '../constants';
import { useAtomValue } from 'jotai';
import { bookmarksAtom } from '../atoms/bookmarks';
import type { Movie } from '../services/types';

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: z.object({
    card: z.enum(CARDS).exclude([DEFAULT_CARD_VALUE]).optional(),
    day: z.enum(DAYS).exclude([DEFAULT_DAY_VALUE]).optional(),
    format: z.enum(FORMATS).exclude([DEFAULT_FORMAT_VALUE]).optional(),
    time: z.enum(SCREENING_TIMES).exclude([DEFAULT_SCREENING_TIME_VALUE]).optional(),
  }),
  loaderDeps: ({ search: { card, day, format, time } }) => ({ card, day, format, time }),
  loader: ({ deps: { card, day, time, format } }) =>
    getAllMovies({
      card: card ?? DEFAULT_CARD_VALUE,
      day: day ?? DEFAULT_DAY_VALUE,
      format: format ?? DEFAULT_FORMAT_VALUE,
      time: time ?? DEFAULT_SCREENING_TIME_VALUE,
    }),
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

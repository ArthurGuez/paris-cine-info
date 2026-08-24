import { createFileRoute } from '@tanstack/react-router';
import type { Row } from '@tanstack/react-table';
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useAtomValue } from 'jotai';
import { useCallback } from 'react';

import { bookmarksAtom } from '../atoms/bookmarks';
import { MOVIES_COLUMNS } from '../columns';
import Header from '../components/organisms/header/Header';
import MoviesTable from '../components/organisms/movies/MoviesTable';
import { getAllMovies } from '../services/movies';
import { validationSearchSchema } from '../services/schemas';
import type { Movie } from '../services/types';

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: validationSearchSchema,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => getAllMovies(deps),
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

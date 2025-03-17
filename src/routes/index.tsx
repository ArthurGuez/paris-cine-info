import type { SortingState } from '@tanstack/react-table';
import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/organisms/header/Header';
import { getAllMovies } from '../services/movies';
import MoviesTable from '../components/organisms/movies/MoviesTable';
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { MOVIES_COLUMNS } from '../constants/columns';
import { getRouteApi } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: () => getAllMovies(),
});

function HomeComponent() {
  const routeApi = getRouteApi('/');
  const loaderData = routeApi.useLoaderData();
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    columns: MOVIES_COLUMNS,
    data: loaderData.data,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: 'includesString',
    // By default, the row.getCanExpand() row instance API will return false unless it finds subRows on a row
    getRowCanExpand: (row) => true,
    state: { sorting },
    onSortingChange: setSorting,
  });

  function handleSearch(searchTerm: string) {
    table.setGlobalFilter(searchTerm);
  }

  return (
    <div className="flex h-dvh flex-col text-sm lg:mx-10 lg:text-base">
      <Header onSearch={handleSearch} />
      <MoviesTable table={table} />
    </div>
  );
}

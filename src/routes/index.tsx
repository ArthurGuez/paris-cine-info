import { createFileRoute } from '@tanstack/react-router';
import {
  tableFeatures,
  rowSortingFeature,
  rowExpandingFeature,
  columnFilteringFeature,
  createSortedRowModel,
  createExpandedRowModel,
  globalFilteringFeature,
  useTable,
  createFilteredRowModel,
  createPaginatedRowModel,
  columnVisibilityFeature,
  rowPaginationFeature,
  filterFn_includesString,
  metaHelper,
} from '@tanstack/react-table';
import { useAtomValue } from 'jotai';
import { useCallback } from 'react';

import { bookmarksAtom } from '../atoms/bookmarks';
import { MOVIES_COLUMNS } from '../columns';
import Header from '../components/organisms/header/Header';
import MoviesTable from '../components/organisms/movies/MoviesTable';
import { getAllMovies } from '../services/movies';
import { validationSearchSchema } from '../services/schemas';

const features = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  globalFilteringFeature,
  rowSortingFeature,
  rowExpandingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  expandedRowModel: createExpandedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  filterFns: { includesString: filterFn_includesString },
  tableMeta: metaHelper<{ bookmarks: string[] }>(),
});

export type MyFeatures = typeof features;

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: validationSearchSchema,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => getAllMovies(deps),
});

function Home() {
  const loaderData = Route.useLoaderData();
  const bookmarks = useAtomValue(bookmarksAtom);

  const table = useTable({
    features,
    columns: MOVIES_COLUMNS,
    data: loaderData.data,
    getRowCanExpand: () => true,
    globalFilterFn: 'includesString',
    initialState: { pagination: { pageIndex: 0, pageSize: 100 } },
    meta: { bookmarks },
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

import { createColumnHelper } from '@tanstack/react-table';

import type { Movie } from '../services/types';
import SortingArrows from '../components/molecules/sorting-arrows/SortingArrows';
import imdbLogo from '../icons/imdb-logo.svg';
import allocineLogo from '../icons/allocine-logo.svg';
import { Component as Newspaper } from '../icons/newspaper.svg?svgUse';
import { Component as People } from '../icons/people.svg?svgUse';
import sensCritiqueLogo from '../icons/sens-critique-logo.svg';
import { Component as FilmRoll } from '../icons/film-roll.svg?svgUse';
import MovieRating from '../components/atoms/cells/MovieRating';
import MovieTitle from '../components/atoms/cells/MovieTitle';

const columnHelper = createColumnHelper<Movie>();

const TITLE_COLUMN = columnHelper.accessor(
  (row) => ({ frenchTitle: row.ti, originalTitle: row.o_ti, isNew: row.ne === '1' }),
  {
    id: 'title',
    header: ({ column }) => (
      <div
        onClick={column.getToggleSortingHandler()}
        className="flex cursor-pointer items-center gap-1"
      >
        Titre <SortingArrows isSorted={column.getIsSorted()} />
      </div>
    ),
    cell: (info) => <MovieTitle {...info.getValue()} />,
    sortingFn: (rowA, rowB) => rowA.original.ti.localeCompare(rowB.original.ti),
    sortDescFirst: false,
    meta: { className: 'pr-1.5 max-w-36' },
  },
);

const DIRECTOR_COLUMN = columnHelper.accessor('di', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="flex cursor-pointer items-center gap-1 pr-2"
    >
      Réalisateur <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) =>
    info
      .getValue()
      .split(',')
      .map((director) => (
        <p className="text-2xs" key={director}>
          {director}
        </p>
      )),
  meta: { className: 'pr-1 max-w-30' },
});

const IMDB_RATING_COLUMN = columnHelper.accessor('im_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="flex cursor-pointer items-center justify-center gap-1"
    >
      <img alt="IMDB" src={imdbLogo} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => (
    <div className="flex justify-center">
      <MovieRating value={info.getValue()} />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
});

const SENS_CRITIQUE_RATING_COLUMN = columnHelper.accessor('sc_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <img alt="Sens Critique" src={sensCritiqueLogo} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating value={info.getValue()} />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
  meta: { className: 'hidden lg:table-cell' },
});

const ALLOCINE_PRESS_RATING_COLUMN = columnHelper.accessor('ap_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <div className="flex gap-0.5">
        <img alt="Allociné" width="20px" src={allocineLogo} />
        <Newspaper color="var(--body)" width="20px" />
      </div>
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating value={info.getValue()} />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
  meta: { className: 'hidden lg:table-cell' },
});

const ALLOCINE_VIEWER_RATING_COLUMN = columnHelper.accessor('as_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <div className="flex gap-0.5">
        <img alt="Allociné" width="20px" src={allocineLogo} />
        <People color="var(--body)" width="20px" />
      </div>
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating value={info.getValue()} />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
  meta: { className: 'hidden lg:table-cell' },
});

const YEAR_COLUMN = columnHelper.accessor((row) => row.ye, {
  id: 'ye',
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      Année
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => <p className="lg:block lg:text-center">{info.getValue()}</p>,
  sortDescFirst: true,
  meta: { className: 'hidden lg:table-cell' },
});

const PRINTS_NUMBER_COLUMN = columnHelper.accessor('co', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="lg:flex lg:cursor-pointer lg:items-center lg:justify-center lg:gap-1"
    >
      <FilmRoll color="var(--body)" height="20px" />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => <p className="lg:text-center">{info.getValue()}</p>,
  enableGlobalFilter: false,
  sortDescFirst: true,
  meta: { className: 'hidden lg:table-cell' },
});

export const MOVIES_COLUMNS = [
  TITLE_COLUMN,
  DIRECTOR_COLUMN,
  IMDB_RATING_COLUMN,
  SENS_CRITIQUE_RATING_COLUMN,
  ALLOCINE_PRESS_RATING_COLUMN,
  ALLOCINE_VIEWER_RATING_COLUMN,
  YEAR_COLUMN,
  PRINTS_NUMBER_COLUMN,
];

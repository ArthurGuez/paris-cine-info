import { createColumnHelper } from '@tanstack/react-table';

import type { Movie } from '../services/types';
import SortingArrows from '../components/molecules/sorting-arrows/SortingArrows';
import imdbLogo from '../icons/imdb-logo.svg';
import allocinePressIcon from '../icons/allocine-press.svg';
import allocinePublicIcon from '../icons/allocine-public.svg';
import sensCritiqueLogo from '../icons/sens-critique-logo.svg';
import MovieRating from '../components/atoms/cells/MovieRating';
import MovieTitle from '../components/atoms/cells/MovieTitle';

const columnHelper = createColumnHelper<Movie>();

const TITLE_COLUMN = columnHelper.accessor(
  (row) => ({ frenchTitle: row.ti, originalTitle: row.o_ti }),
  {
    id: 'title',
    header: ({ column }) => (
      <div
        onClick={column.getToggleSortingHandler()}
        className="flex min-w-40 cursor-pointer items-center gap-1"
      >
        Titre <SortingArrows isSorted={column.getIsSorted()} />
      </div>
    ),
    cell: (info) => <MovieTitle {...info.getValue()} />,
    sortingFn: (rowA, rowB) => {
      return rowA.original.ti.localeCompare(rowB.original.ti);
    },
    sortDescFirst: false,
  },
);

const DIRECTOR_COLUMN = columnHelper.accessor('di', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="flex min-w-35 cursor-pointer items-center gap-1"
    >
      Réalisateur <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) =>
    info
      .getValue()
      .split(',')
      .map((director) => <p key={director}>{director}</p>),
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
      className="hidden cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <img alt="Sens Critique" src={sensCritiqueLogo} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => (
    <div className="hidden lg:flex lg:justify-center">
      <MovieRating value={info.getValue()} />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
});

const ALLOCINE_PRESS_RATING_COLUMN = columnHelper.accessor('ap_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="hidden cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <img alt="Allociné Presse" src={allocinePressIcon} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => (
    <div className="hidden lg:flex lg:justify-center">
      <MovieRating value={info.getValue()} />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
});

const ALLOCINE_VIEWER_RATING_COLUMN = columnHelper.accessor('as_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="hidden cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <img alt="Allociné Spectateurs" src={allocinePublicIcon} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => (
    <div className="hidden lg:flex lg:justify-center">
      <MovieRating value={info.getValue()} />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
});

const YEAR_COLUMN = columnHelper.accessor((row) => row.ye, {
  id: 'ye',
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="hidden cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      Année
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => <p className="hidden lg:block lg:text-center">{info.getValue()}</p>,
  sortDescFirst: true,
});

const SCREENINGS_COLUMN = columnHelper.accessor('co', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="hidden cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      Séances
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => <p className="hidden lg:block lg:text-center">{info.getValue()}</p>,
  enableGlobalFilter: false,
  sortDescFirst: true,
});

export const MOVIES_COLUMNS = [
  TITLE_COLUMN,
  DIRECTOR_COLUMN,
  IMDB_RATING_COLUMN,
  SENS_CRITIQUE_RATING_COLUMN,
  ALLOCINE_PRESS_RATING_COLUMN,
  ALLOCINE_VIEWER_RATING_COLUMN,
  YEAR_COLUMN,
  SCREENINGS_COLUMN,
];

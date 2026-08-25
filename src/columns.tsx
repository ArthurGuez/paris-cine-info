import { createColumnHelper } from '@tanstack/react-table';

import MovieBookmark from './components/cells/MovieBookmark';
import MovieRating from './components/cells/MovieRating';
import MovieTitle from './components/cells/MovieTitle';
import SortingArrows from './components/SortingArrows';
import allocineLogo from './icons/allocine-logo.svg';
import { Component as Bookmark } from './icons/bookmark.svg?svgUse';
import { Component as FilmRoll } from './icons/film-roll.svg?svgUse';
import imdbLogo from './icons/imdb-logo.svg';
import letterboxdLogo from './icons/letterboxd-logo.svg';
import metacriticLogo from './icons/metacritic-logo.svg';
import { Component as Newspaper } from './icons/newspaper.svg?svgUse';
import { Component as People } from './icons/people.svg?svgUse';
import rottenTomatoesLogo from './icons/rotten-tomatoes-logo.svg';
import sensCritiqueLogo from './icons/sens-critique-logo.svg';
import type { MyFeatures } from './routes';
import type { Movie } from './services/types';

const columnHelper = createColumnHelper<MyFeatures, Movie>();

const BOOKMARK_COLUMN = columnHelper.accessor('id', {
  header: ({ column }) => (
    <div
      className="flex cursor-pointer items-center justify-center pr-1"
      onClick={column.getToggleSortingHandler()}
    >
      <Bookmark color="var(--body)" width="25px" />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: (info) => <MovieBookmark movieId={info.getValue()} />,
  sortFn: (rowA, rowB) => {
    const movieA = rowA.table.options.meta?.bookmarks.includes(rowA.original.id) ? 1 : 0;
    const movieB = rowB.table.options.meta?.bookmarks.includes(rowB.original.id) ? 1 : 0;

    return movieB - movieA;
  },
});

const TITLE_COLUMN = columnHelper.accessor('ti', {
  id: 'title',
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="flex cursor-pointer items-center gap-1"
    >
      Titre <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: ({ row, getValue }) => (
    <MovieTitle
      frenchTitle={getValue()}
      originalTitle={row.original.o_ti}
      isNew={row.original.ne === '1'}
      isPremiere={row.original.ne === '2'}
    />
  ),
  sortFn: (rowA, rowB) => rowA.original.ti.localeCompare(rowB.original.ti),
  sortDescFirst: false,
  meta: { className: 'pr-1.5 max-w-36 lg:max-w-46' },
});

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
  meta: { className: 'pr-1 max-w-30 lg:max-w-32' },
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
  cell: ({ getValue, row }) => (
    <div className="flex justify-center">
      <MovieRating
        rating={getValue()}
        sourceLink={`https://www.imdb.com/title/tt00${row.original.i_id}`}
      />
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
      <img alt="Sens Critique" width="30px" src={sensCritiqueLogo} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: ({ getValue, row }) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating
        rating={getValue()}
        sourceLink={`https://www.senscritique.com/film/${row.original.sc_u}`}
      />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
  meta: { className: 'hidden lg:table-cell' },
});

const LETTERBOXD_RATING_COLUMN = columnHelper.accessor('lb_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <img alt="Letterboxd" width="30px" src={letterboxdLogo} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: ({ getValue, row }) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating
        rating={getValue()}
        sourceLink={`https://letterboxd.com/film/${row.original.lb_u}/`}
      />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
  meta: { className: 'hidden lg:table-cell' },
});

const ROTTEN_TOMATOES_RATING_COLUMN = columnHelper.accessor('rt_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <img alt="Rotten Tomatoes" width="30px" src={rottenTomatoesLogo} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: ({ getValue, row }) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating
        rating={getValue()}
        sourceLink={`https://www.rottentomatoes.com${row.original.rt_u}`}
      />
    </div>
  ),
  enableGlobalFilter: false,
  sortDescFirst: true,
  meta: { className: 'hidden lg:table-cell' },
});

const METACRITIC_RATING_COLUMN = columnHelper.accessor('mc_r', {
  header: ({ column }) => (
    <div
      onClick={column.getToggleSortingHandler()}
      className="cursor-pointer lg:flex lg:items-center lg:justify-center lg:gap-1"
    >
      <img alt="Metacritic" width="30px" src={metacriticLogo} />
      <SortingArrows isSorted={column.getIsSorted()} />
    </div>
  ),
  cell: ({ getValue, row }) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating
        rating={getValue()}
        sourceLink={`https://www.metacritic.com${row.original.mc_u}/`}
      />
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
  cell: ({ getValue, row }) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating
        rating={getValue()}
        sourceLink={`https://www.allocine.fr/film/fichefilm_gen_cfilm=${row.original.id}.html`}
      />
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
  cell: ({ getValue, row }) => (
    <div className="lg:flex lg:justify-center">
      <MovieRating
        rating={getValue()}
        sourceLink={`https://www.allocine.fr/film/fichefilm_gen_cfilm=${row.original.id}.html`}
      />
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

export const MOVIES_COLUMNS = columnHelper.columns([
  BOOKMARK_COLUMN,
  TITLE_COLUMN,
  DIRECTOR_COLUMN,
  IMDB_RATING_COLUMN,
  SENS_CRITIQUE_RATING_COLUMN,
  LETTERBOXD_RATING_COLUMN,
  ROTTEN_TOMATOES_RATING_COLUMN,
  METACRITIC_RATING_COLUMN,
  ALLOCINE_PRESS_RATING_COLUMN,
  ALLOCINE_VIEWER_RATING_COLUMN,
  YEAR_COLUMN,
  PRINTS_NUMBER_COLUMN,
]);

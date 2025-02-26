import { createColumnHelper } from '@tanstack/react-table';

import type { Movie } from '../app/api/types';

import { css } from '../styled-system/css';

const columnHelper = createColumnHelper<Movie>();

const TITLE_COLUMN = columnHelper.accessor('title', {
  header: () => 'Titre',
  enableSorting: true,
});

const DIRECTOR_COLUMN = columnHelper.accessor('dir', {
  header: () => 'Réalisateur',
});

const IMDB_RATING_COLUMN = columnHelper.accessor('imdbr', {
  header: () => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      IMDB
    </span>
  ),
  cell: (info) => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      {info.getValue()}
    </span>
  ),
});

const SENS_CRITIQUE_RATING_COLUMN = columnHelper.accessor('sc_rating', {
  header: () => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      Sens Critique
    </span>
  ),
  cell: (info) => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      {info.getValue()}
    </span>
  ),
});

const ALLOCINE_PRESS_RATING_COLUMN = columnHelper.accessor('allo_prating', {
  header: () => <span>Allo Presse</span>,
});

const ALLOCINE_VIEWER_RATING_COLUMN = columnHelper.accessor('allo_srating', {
  header: () => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      Allo Spec.
    </span>
  ),
  cell: (info) => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      {info.getValue()}
    </span>
  ),
});

const YEAR_COLUMN = columnHelper.accessor((row) => row.year, {
  id: 'year',
  header: () => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      Année
    </span>
  ),
  cell: (info) => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      {info.getValue()}
    </span>
  ),
});

const COPIES_COLUMN = columnHelper.accessor('copies', {
  header: () => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      Copies
    </span>
  ),
  cell: (info) => (
    <span
      className={css({
        hideBelow: 'md',
      })}
    >
      {info.getValue()}
    </span>
  ),
});

export const MOVIES_COLUMNS = [
  TITLE_COLUMN,
  DIRECTOR_COLUMN,
  IMDB_RATING_COLUMN,
  SENS_CRITIQUE_RATING_COLUMN,
  ALLOCINE_PRESS_RATING_COLUMN,
  ALLOCINE_VIEWER_RATING_COLUMN,
  YEAR_COLUMN,
  COPIES_COLUMN,
];

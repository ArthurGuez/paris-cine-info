import { createColumnHelper } from '@tanstack/react-table';

import type { Movie } from '../services/types';

const columnHelper = createColumnHelper<Movie>();

const TITLE_COLUMN = columnHelper.accessor('ti', {
  header: () => 'Titre',
  enableSorting: true,
});

const DIRECTOR_COLUMN = columnHelper.accessor('di', {
  header: () => 'Réalisateur',
});

const IMDB_RATING_COLUMN = columnHelper.accessor('im_r', {
  header: () => <span className="hidden md:inline">IMDB</span>,
  cell: (info) => <span className="hidden md:inline">{info.getValue()}</span>,
});

const SENS_CRITIQUE_RATING_COLUMN = columnHelper.accessor('sc_r', {
  header: () => <span className="hidden md:inline">Sens Critique</span>,
  cell: (info) => <span className="hidden md:inline">{info.getValue()}</span>,
});

const ALLOCINE_PRESS_RATING_COLUMN = columnHelper.accessor('ap_r', {
  header: () => <span>Allo Presse</span>,
});

const ALLOCINE_VIEWER_RATING_COLUMN = columnHelper.accessor('as_r', {
  header: () => <span className="hidden md:inline">Allo Spec.</span>,
  cell: (info) => <span className="hidden md:inline">{info.getValue()}</span>,
});

const YEAR_COLUMN = columnHelper.accessor((row) => row.ye, {
  id: 'ye',
  header: () => <span className="hidden md:inline">Année</span>,
  cell: (info) => <span className="hidden md:inline">{info.getValue()}</span>,
});

const COPIES_COLUMN = columnHelper.accessor('co', {
  header: () => <span className="hidden md:inline">Copies</span>,
  cell: (info) => <span className="hidden md:inline">{info.getValue()}</span>,
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

import { createColumnHelper } from '@tanstack/react-table';

import type { Movie } from '../services/types';
import SortingArrows from '../components/molecules/sorting-arrows/SortingArrows';
import imdbLogo from '../icons/imdb-logo.svg';
import allocineCriticsIcon from '../icons/allocine-critics.svg';
import allocinePublicIcon from '../icons/allocine-public.svg';
import sensCritiqueLogo from '../icons/sens-critique-logo.svg';

const columnHelper = createColumnHelper<Movie>();

const TITLE_COLUMN = columnHelper.accessor('ti', {
  header: () => (
    <div className="flex items-center gap-1">
      Titre <SortingArrows />
    </div>
  ),
  enableSorting: true,
});

const DIRECTOR_COLUMN = columnHelper.accessor('di', {
  header: () => (
    <div className="flex items-center gap-1">
      Réalisateur <SortingArrows />
    </div>
  ),
});

const IMDB_RATING_COLUMN = columnHelper.accessor('im_r', {
  header: () => (
    <div className="flex items-center gap-1">
      <img alt="IMDB" src={imdbLogo} />
      <SortingArrows />
    </div>
  ),
  cell: (info) => <span className="hidden lg:inline">{info.getValue()}</span>,
});

const SENS_CRITIQUE_RATING_COLUMN = columnHelper.accessor('sc_r', {
  header: () => (
    <div className="flex items-center gap-1">
      <img alt="Sens Critique" src={sensCritiqueLogo} />
      <SortingArrows />
    </div>
  ),
  cell: (info) => <span className="hidden lg:inline">{info.getValue()}</span>,
});

const ALLOCINE_PRESS_RATING_COLUMN = columnHelper.accessor('ap_r', {
  header: () => (
    <div className="flex items-center gap-1">
      <img alt="Allociné Presse" src={allocineCriticsIcon} />
      <SortingArrows />
    </div>
  ),
});

const ALLOCINE_VIEWER_RATING_COLUMN = columnHelper.accessor('as_r', {
  header: () => (
    <div className="flex items-center gap-1">
      <img alt="Allociné Spectateurs" src={allocinePublicIcon} />
      <SortingArrows />
    </div>
  ),
  cell: (info) => <span className="hidden md:inline">{info.getValue()}</span>,
});

const YEAR_COLUMN = columnHelper.accessor((row) => row.ye, {
  id: 'ye',
  header: () => (
    <div className="flex items-center gap-1">
      Année
      <SortingArrows />
    </div>
  ),
  cell: (info) => <span className="hidden md:inline">{info.getValue()}</span>,
});

const SCREENINGS_COLUMN = columnHelper.accessor('co', {
  header: () => (
    <div className="flex items-center gap-1">
      Séances
      <SortingArrows />
    </div>
  ),
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
  SCREENINGS_COLUMN,
];

import { createColumnHelper } from '@tanstack/react-table';

import type { Movie } from '../services/types';
import SortingArrows from '../components/molecules/sorting-arrows/SortingArrows';
import imdbLogo from '../icons/imdb-logo.svg';
import allocinePressIcon from '../icons/allocine-press.svg';
import allocinePublicIcon from '../icons/allocine-public.svg';
import sensCritiqueLogo from '../icons/sens-critique-logo.svg';
import Rating from '../components/atoms/cells/Rating';

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
    <div className="flex min-w-35 items-center gap-1">
      Réalisateur <SortingArrows />
    </div>
  ),
  cell: (info) =>
    info
      .getValue()
      .split(',')
      .map((director) => <p>{director}</p>),
});

const IMDB_RATING_COLUMN = columnHelper.accessor('im_r', {
  header: () => (
    <div className="flex items-center justify-center gap-1">
      <img alt="IMDB" src={imdbLogo} />
      <SortingArrows />
    </div>
  ),
  cell: (info) => (
    <div className="flex justify-center">
      <Rating value={info.getValue()} />
    </div>
  ),
});

const SENS_CRITIQUE_RATING_COLUMN = columnHelper.accessor('sc_r', {
  header: () => (
    <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-1">
      <img alt="Sens Critique" src={sensCritiqueLogo} />
      <SortingArrows />
    </div>
  ),
  cell: (info) => (
    <div className="hidden lg:flex lg:justify-center">
      <Rating value={info.getValue()} />
    </div>
  ),
});

const ALLOCINE_PRESS_RATING_COLUMN = columnHelper.accessor('ap_r', {
  header: () => (
    <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-1">
      <img alt="Allociné Presse" src={allocinePressIcon} />
      <SortingArrows />
    </div>
  ),
  cell: (info) => (
    <div className="hidden lg:flex lg:justify-center">
      <Rating value={info.getValue()} />
    </div>
  ),
});

const ALLOCINE_VIEWER_RATING_COLUMN = columnHelper.accessor('as_r', {
  header: () => (
    <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-1">
      <img alt="Allociné Spectateurs" src={allocinePublicIcon} />
      <SortingArrows />
    </div>
  ),
  cell: (info) => (
    <div className="hidden lg:flex lg:justify-center">
      <Rating value={info.getValue()} />
    </div>
  ),
});

const YEAR_COLUMN = columnHelper.accessor((row) => row.ye, {
  id: 'ye',
  header: () => (
    <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-1">
      Année
      <SortingArrows />
    </div>
  ),
  cell: (info) => <p className="hidden lg:block lg:text-center">{info.getValue()}</p>,
});

const SCREENINGS_COLUMN = columnHelper.accessor('co', {
  header: () => (
    <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-1">
      Séances
      <SortingArrows />
    </div>
  ),
  cell: (info) => <p className="hidden lg:block lg:text-center">{info.getValue()}</p>,
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

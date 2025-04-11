/* Settings */

export const RATINGS = [
  { value: 'imdb', label: 'IMDB' },
  { value: 'allocine_press', label: 'Allociné presse' },
  { value: 'allocine_public', label: 'Allociné spectateurs' },
  { value: 'senscritique', label: 'Senscritique' },
];

/* End of Settings */

/* Filters */

export const DEFAULT_CARD_VALUE = 'all';

export const CARDS = [
  DEFAULT_CARD_VALUE,
  'ugc',
  'pass',
  'librepass',
  'cip',
  'cinecarte',
  'multicine',
  'mk2',
  'dulac',
  'lacarte',
  'ugc!',
  'pass!',
  'librepass!',
  'librepass|ugc',
  'librepass|pass',
  'ugc|pass',
  'ugc,pass',
  'cinecheques',
] as const;

export const CATEGORIES = ['nouveautés', 'ressorties', 'retrospectives', 'évènements'];

export const DEFAULT_DAY_VALUE = 'week';

export const DAYS = [
  'all',
  DEFAULT_DAY_VALUE,
  'today',
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi',
  'samedi',
  'dimanche',
] as const;

export const DEFAULT_FORMAT_VALUE = 'all';

export const FORMATS = [
  DEFAULT_FORMAT_VALUE,
  '35mm',
  '3D',
  'imax',
  'imax3d',
  'dci',
  'dat',
  'ice',
  'scx',
  'onx',
  '4dx',
  '4de',
] as const;

export const DEFAULT_SCREENING_TIME_VALUE = 'all';

export const SCREENING_TIMES = [
  DEFAULT_SCREENING_TIME_VALUE,
  'matin',
  'après-midi',
  'soir',
] as const;

/* End of Filters */

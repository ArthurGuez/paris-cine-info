/* Settings */

export const RATINGS = [
  { value: 'imdb', label: 'IMDB' },
  { value: 'allocine_press', label: 'Allociné presse' },
  { value: 'allocine_public', label: 'Allociné spectateurs' },
  { value: 'senscritique', label: 'Senscritique' },
];

/* End of Settings */

/* Filters */

export const CARDS = [
  'all',
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

export const DAYS = [
  'all',
  'week',
  'today',
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi',
  'samedi',
  'dimanche',
] as const;

export const FORMATS = [
  'all',
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

export const SCREENING_TIMES = ['all', 'matin', 'après-midi', 'soir'] as const;

/* End of Filters */

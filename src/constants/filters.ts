export const CARDS = {
  ugc: 'UGC illimité',
  pass: 'Gaumont Le Pass',
  cip: 'Ciné Carte CIP',
  cinecheques: 'Cinéchèques',
  ug_5p: 'La carte UGC',
  mk2: 'Carte 5 MK2',
};
export const CATEGORIES = ['nouveautés', 'ressorties', 'retrospectives', 'évènements'];
export const DAYS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
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

import { atom } from 'jotai';
import type { SCREENING_TIMES } from '../constants/filters';

export type ScreeningTime = (typeof SCREENING_TIMES)[number];

export const screeningTimeAtom = atom<ScreeningTime>('all');

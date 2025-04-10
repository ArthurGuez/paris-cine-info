import type { DAYS, FORMATS, SCREENING_TIMES } from './constants/filters';

export interface Option<T> {
  label: string;
  value: T;
}

export interface OptionGroup<T> {
  name: string;
  items: Option<T>[];
}

export type ScreeningTime = (typeof SCREENING_TIMES)[number];

export type Format = (typeof FORMATS)[number];

export type Day = (typeof DAYS)[number];

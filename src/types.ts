import type { CARDS, DAYS, FORMATS, SCREENING_TIMES } from './constants/filters';

export interface Option<T> {
  label: string;
  value: T;
}

export interface OptionGroup<T> {
  name: string;
  label?: string;
  options: Option<T>[];
}

export interface NestedOptionGroup<T> {
  name: string;
  defaultOption: Option<T>;
  nestedOptionGroup: OptionGroup<T>[];
}

export type ScreeningTime = (typeof SCREENING_TIMES)[number];

export type Format = (typeof FORMATS)[number];

export type Day = (typeof DAYS)[number];

export type Card = (typeof CARDS)[number];

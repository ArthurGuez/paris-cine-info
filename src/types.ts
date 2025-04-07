import type { FORMATS } from './constants/filters';

export interface Option<T> {
  label: string;
  value: T;
}

export interface OptionGroup<T> {
  name: string;
  items: Option<T>[];
}

export type Format = (typeof FORMATS)[number];

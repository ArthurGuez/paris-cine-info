import '@tanstack/react-table';
import type { SortingFn } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta {
    className?: string;
  }
  interface SortingFns {
    sortingBookmarks: SortingFn<unknown>;
  }
}

import { Component as BackArrow } from '../../../icons/back-arrow.svg?svgUse';
import { Component as NextArrow } from '../../../icons/next-arrow.svg?svgUse';
import type { Table } from '@tanstack/react-table';
import type { Movie } from '../../../services/types';

interface Props {
  table: Table<Movie>;
}

export default function Pagination({ table }: Props) {
  const isPrevPageDisabled = !table.getCanPreviousPage();
  const isNextPageDisabled = !table.getCanNextPage();

  return (
    <div className="flex h-8 items-center justify-between gap-1.5 text-xl text-body tabular-nums">
      <div>
        <button
          className={`flex ${isPrevPageDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => {
            table.previousPage();
          }}
          disabled={isPrevPageDisabled}
        >
          <BackArrow
            color={isPrevPageDisabled ? 'grey' : 'var(--accent)'}
            height="35px"
            width="35px"
          />
        </button>
      </div>
      {table.getState().pagination.pageIndex + 1}/{table.getPageCount()}
      <div>
        <button
          className={`flex ${isNextPageDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => {
            table.nextPage();
          }}
          disabled={isNextPageDisabled}
        >
          <NextArrow
            color={isNextPageDisabled ? 'grey' : 'var(--accent)'}
            height="35px"
            width="35px"
          />
        </button>
      </div>
    </div>
  );
}

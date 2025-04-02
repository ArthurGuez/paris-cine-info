import type { SortDirection } from '@tanstack/react-table';
import { Component as Triangle } from '../../../icons/triangle.svg?svgUse';
import { Component as FilledTriangle } from '../../../icons/filled-triangle.svg?svgUse';

interface Props {
  isSorted?: false | SortDirection;
}

export default function SortingArrows({ isSorted }: Props) {
  return (
    <div className="flex flex-col">
      <div>
        {isSorted === 'asc' ? (
          <FilledTriangle color="var(--accent)" height="12px" width="12px" />
        ) : (
          <Triangle color="var(--accent)" height="12px" width="12px" />
        )}
      </div>
      <div className="rotate-180">
        {isSorted === 'desc' ? (
          <FilledTriangle color="var(--accent)" height="12px" width="12px" />
        ) : (
          <Triangle color="var(--accent)" height="12px" width="12px" />
        )}
      </div>
    </div>
  );
}

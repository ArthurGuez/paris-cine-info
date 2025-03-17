import { SortDirection } from '@tanstack/react-table';
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
          <FilledTriangle color="var(--accent)" height="15px" width="18px" />
        ) : (
          <Triangle color="var(--accent)" height="15px" width="18px" />
        )}
      </div>
      <div className="rotate-180">
        {isSorted === 'desc' ? (
          <FilledTriangle color="var(--accent)" height="15px" width="18px" />
        ) : (
          <Triangle color="var(--accent)" height="15px" width="18px" />
        )}
      </div>
    </div>
  );
}

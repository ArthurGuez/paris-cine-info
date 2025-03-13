import { Component as Triangle } from '../../../icons/triangle.svg?svgUse';

export default function SortingArrows() {
  return (
    <div className="flex flex-col gap-0">
      <Triangle color="var(--accent)" height="21px" width="21px" />
      <Triangle className="rotate-180" color="var(--accent)" height="21px" width="21px" />
    </div>
  );
}

import { Component as Triangle } from '../../../icons/triangle.svg?svgUse';

export default function SortingArrows() {
  return (
    <div className="flex flex-col">
      <div>
        <Triangle color="var(--accent)" height="20px" width="20px" />
      </div>
      <div className="rotate-180">
        <Triangle color="var(--accent)" height="20px" width="20px" />
      </div>
    </div>
  );
}

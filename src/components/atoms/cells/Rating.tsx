import { Component as Star } from '../../../icons/star.svg?svgUse';

interface Props {
  value: string;
}

export default function Rating({ value }: Props) {
  return (
    <div className="flex w-15 justify-center gap-1 rounded-md border border-accent px-2 py-1">
      {value === '0' ? (
        '-'
      ) : (
        <>
          {value}
          <Star color="var(--accent)" />
        </>
      )}
    </div>
  );
}

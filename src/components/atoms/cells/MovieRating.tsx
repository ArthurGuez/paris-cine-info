interface Props {
  value: string;
}

export default function MovieRating({ value }: Props) {
  return (
    <div className="flex w-10 items-center justify-center gap-1 rounded-md border border-accent p-1">
      {value === '0' ? '-' : value}
    </div>
  );
}

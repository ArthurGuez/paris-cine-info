interface Props {
  value: string;
}

export default function MovieRating({ value }: Props) {
  return (
    <div className="w-9 rounded-md border border-accent p-1 text-center">
      {value === '0' ? '-' : value}
    </div>
  );
}

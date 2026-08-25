interface Props {
  sourceLink: string;
  rating: string;
}

export default function MovieRating({ rating, sourceLink }: Props) {
  const isRated = rating !== '0';

  return isRated ? (
    <a
      onClick={(event) => {
        event.stopPropagation();
      }}
      className="w-9 cursor-pointer rounded-md border border-accent p-1 text-center hover:bg-body/5"
      href={sourceLink}
      target="_blank"
      rel="noreferrer"
    >
      {rating}
    </a>
  ) : (
    <div className="w-9 rounded-md border border-accent p-1 text-center">-</div>
  );
}

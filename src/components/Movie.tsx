import { useSuspenseQuery } from '@tanstack/react-query';

import { getPoster } from '../services/movies';

interface Props {
  id: string;
}

export default function Movie({ id }: Props) {
  const { data: poster } = useSuspenseQuery({
    queryKey: ['poster', id],
    queryFn: () => getPoster(id),
  });

  return (
    <div>
      <img src={poster} alt="" />
    </div>
  );
}

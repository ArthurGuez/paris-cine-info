import { useEffect, useState } from 'react';
import { getPoster } from '../../../services/movies';

interface Props {
  id: string;
}

export default function Movie({ id }: Props) {
  const [poster, setPoster] = useState<string>();

  useEffect(() => {
    async function fetchPoster() {
      const posterResponse = await getPoster(id);
      setPoster(posterResponse);
    }

    fetchPoster();
  }, []);

  return (
    <div>
      <img src={poster} alt="" />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getPoster } from '../../../services/movies';

interface Props {
  id: string;
}

export default function Movie({ id }: Props) {
  const [poster, setPoster] = useState<string>();

  useEffect(() => {
    async function fetchPoster() {
      try {
        const posterResponse = await getPoster(id);
        setPoster(posterResponse);
      } catch (error) {
        console.error('Error fetching poster:', error);
      }
    }

    fetchPoster().catch((error: unknown) => {
      console.error('Unhandled error in fetchPoster:', error);
    });
  }, [id]);

  return (
    <div>
      <img src={poster} alt="" />
    </div>
  );
}

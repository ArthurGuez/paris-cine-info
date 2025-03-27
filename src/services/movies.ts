import { getAllMoviesResponseSchema } from './schemas';
import type { GetAllMoviesResponse } from './types';

export async function getAllMovies(): Promise<GetAllMoviesResponse> {
  const res = await fetch(
    'https://paris-cine.info/get_pcimovies_nocors.php?selday=week&selcard=ugc&seladdr=Paris',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return getAllMoviesResponseSchema.parse(await res.json());
}

export async function getPoster(id: string): Promise<string> {
  const res = await fetch(`https://paris-cine.info/get_poster_nocors.php?id=${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const posterBlob = await res.blob();

  return URL.createObjectURL(posterBlob);
}

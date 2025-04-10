import type { Day, Format, ScreeningTime } from '../types';
import { getAllMoviesResponseSchema } from './schemas';
import type { GetAllMoviesResponse } from './types';

interface GetAllMoviesOptions {
  day: Day;
  format: Format;
  time: ScreeningTime;
}

export async function getAllMovies({
  day,
  format,
  time,
}: GetAllMoviesOptions): Promise<GetAllMoviesResponse> {
  const res = await fetch(
    `https://paris-cine.info/get_pcimovies_nocors.php?selday=${day}&selcard=ugc&seladdr=Paris&seltime=${time}&selformat=${format}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = getAllMoviesResponseSchema.safeParse(await res.json());

  if (!result.success) {
    console.error('Validation error:', result.error.format());
    throw new Error('Invalid API response format');
  }

  return result.data;
}

export async function getPoster(id: string): Promise<string> {
  const res = await fetch(`https://paris-cine.info/get_poster_nocors.php?id=${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const posterBlob = await res.blob();

  return URL.createObjectURL(posterBlob);
}

import { z } from 'zod';

import {
  DEFAULT_DAY_VALUE,
  DEFAULT_FORMAT_VALUE,
  DEFAULT_LANGUAGE_VALUE,
  DEFAULT_SCREENING_TIME_VALUE,
} from '../constants';
import type { Card, Day, Format, Language, ScreeningTime } from '../types';
import { getInitialCard } from '../utils';
import { getAllMoviesResponseSchema } from './schemas';
import type { GetAllMoviesResponse } from './types';

interface GetAllMoviesOptions {
  card?: Card;
  day?: Day;
  format?: Format;
  time?: ScreeningTime;
  language?: Language;
}

export async function getAllMovies({
  card = getInitialCard(),
  day = DEFAULT_DAY_VALUE,
  format = DEFAULT_FORMAT_VALUE,
  time = DEFAULT_SCREENING_TIME_VALUE,
  language = DEFAULT_LANGUAGE_VALUE,
}: GetAllMoviesOptions): Promise<GetAllMoviesResponse> {
  const res = await fetch(
    `https://paris-cine.info/get_pcimovies_nocors.php?selday=${day}&selcard=${card}&seladdr=Paris&seltime=${time}&selformat=${format}&sellang=${language}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = getAllMoviesResponseSchema.safeParse(await res.json());

  if (!result.success) {
    console.error('Validation error:', z.treeifyError(result.error));
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

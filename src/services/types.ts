import { z } from 'zod';
import { getAllMoviesResponseSchema, movieSchema } from './schemas';

export type Movie = z.infer<typeof movieSchema>;
export type GetAllMoviesResponse = z.infer<typeof getAllMoviesResponseSchema>;

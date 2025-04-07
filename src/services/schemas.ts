import { z } from 'zod';

export const movieSchema = z.object({
  ac: z.string(),
  ap_r: z.string(),
  as_r: z.string(),
  co: z.string(),
  di: z.string(),
  du: z.string(),
  ge: z.string(),
  i_id: z.string(),
  id: z.string(),
  im_r: z.string(),
  lb_r: z.string(),
  lb_u: z.string(),
  mc_r: z.string(),
  mc_u: z.string(),
  ne: z.enum(['0', '1', '2']),
  o_ti: z.string(),
  rel: z.string(),
  ret: z.string(),
  rt_r: z.string(),
  rt_u: z.string(),
  sc_r: z.string(),
  sc_u: z.string(),
  ti: z.string(),
  ye: z.string(),
});

export const getAllMoviesResponseSchema = z.object({
  data: z.array(movieSchema),
  favs: z.boolean(),
  follow_movs: z.array(z.string()),
});

export interface Movie {
  ac: string;
  ap_r: string;
  as_r: string;
  co: string;
  di: string;
  du: string;
  ge: string;
  id: string;
  i_id: string;
  im_r: string;
  newstatus: string;
  o_ti: string;
  rel: string;
  ret: string;
  sc_r: string;
  sc_u: string;
  ti: string;
  ye: string;
}

export interface SearchAllResponse {
  data: Movie[];
  favs: boolean;
  follow_movs: string[];
}

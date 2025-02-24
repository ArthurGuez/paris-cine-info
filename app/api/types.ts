export interface Movie {
  actors: string;
  allo_prating: string;
  allo_srating: string;
  copies: string;
  dir: string;
  duration: string;
  genre: string;
  id: string;
  imdbid: string;
  imdbr: string;
  newstatus: string;
  orig_title: string;
  poster_url: string;
  released: string;
  retr: string;
  sc_rating: string;
  sc_url: string;
  title: string;
  year: string;
}

export interface SearchAllResponse {
  data: Movie[];
  favs: boolean;
  follow_movs: string[];
}

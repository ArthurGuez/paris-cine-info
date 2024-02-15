import Header from '../components/organisms/header/Header';
import MoviesTable from '../components/organisms/movies-table/MoviesTable';
import { searchAll } from './api/movies';

export default async function Home() {
  const { data } = await searchAll();

  return (
    <div>
      <Header />
      <MoviesTable movies={data} />
    </div>
  );
}

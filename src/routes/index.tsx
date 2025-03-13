import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/organisms/header/Header';
import { getAllMovies } from '../services/movies';
import MoviesTable from '../components/organisms/movies/MoviesTable';

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: () => getAllMovies(),
});

function HomeComponent() {
  return (
    <div className="mx-10 my-3 flex flex-col gap-8">
      <Header />
      <MoviesTable />
    </div>
  );
}

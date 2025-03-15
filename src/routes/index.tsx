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
    <div className="mb-3 flex flex-col text-sm lg:mx-10 lg:text-base">
      <Header />
      <MoviesTable />
    </div>
  );
}

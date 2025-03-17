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
    <div className="flex h-dvh flex-col text-sm lg:mx-10 lg:mb-3 lg:text-base">
      <Header />
      <MoviesTable />
    </div>
  );
}

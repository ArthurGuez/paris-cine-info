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
    <div className="mx-4 mb-3 flex flex-col lg:mx-10">
      <Header />
      <MoviesTable />
    </div>
  );
}

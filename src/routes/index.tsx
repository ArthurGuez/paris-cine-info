import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/organisms/header/Header';
import { searchAll } from '../services/movies';
import MoviesTable from '../components/organisms/movies-table/MoviesTable';

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: () => searchAll(),
});

function HomeComponent() {
  return (
    <>
      <Header />
      <MoviesTable />
    </>
  );
}

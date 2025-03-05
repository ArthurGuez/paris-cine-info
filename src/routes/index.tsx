import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/organisms/header/Header';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Header />
      {/* <MoviesTable movies={data} /> */}
    </>
  );
}

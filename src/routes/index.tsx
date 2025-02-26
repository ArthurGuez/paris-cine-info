import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      Home
      {/* <Header />
      <MoviesTable movies={data} /> */}
    </div>
  );
}

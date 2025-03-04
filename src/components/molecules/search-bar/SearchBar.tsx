import { search } from './actions';

const SEARCH_BAR_PLACEHOLDER = 'Rechercher un film, un réalisateur, une salle...';

export default function SearchBar() {
  return (
    <form action={search} className="flex flex-1 items-center">
      <input
        className="h-10 w-full rounded-full border border-accent bg-transparent px-5 text-body outline-none"
        name="query"
        placeholder={SEARCH_BAR_PLACEHOLDER}
      />
      <input className="hidden cursor-pointer" type="submit" />
    </form>
  );
}

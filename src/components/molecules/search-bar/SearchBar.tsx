import { useState } from 'react';

const SEARCH_BAR_PLACEHOLDER = 'Rechercher un film, un réalisateur, une salle...';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className="flex flex-1 items-center">
      <input
        className="h-10 w-full rounded-full border border-accent bg-transparent px-5 text-body outline-none"
        name="query"
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder={SEARCH_BAR_PLACEHOLDER}
        value={searchTerm}
      />
      <input className="hidden cursor-pointer" type="submit" />
    </form>
  );
}

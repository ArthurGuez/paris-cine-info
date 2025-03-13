import { useState } from 'react';
import { Component as MagnifyingGlass } from '../../../icons/magnifying-glass.svg?svgUse';

const SEARCH_BAR_PLACEHOLDER = 'Rechercher un film, un réalisateur, une salle...';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className="flex flex-1 items-center">
      <div className="relative w-full">
        <input
          className="h-10 w-full rounded-full border border-accent bg-transparent px-5 text-body outline-none"
          name="query"
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder={SEARCH_BAR_PLACEHOLDER}
          value={searchTerm}
        />
        <MagnifyingGlass
          height="25px"
          width="25px"
          color="var(--accent)"
          className="absolute top-1/2 right-5 -translate-y-1/2"
        />
      </div>
    </form>
  );
}

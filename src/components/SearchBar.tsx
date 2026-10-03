import { Component as MagnifyingGlass } from '../icons/magnifying-glass.svg?svgUse';

const SEARCH_BAR_PLACEHOLDER = 'Rechercher un film, un réalisateur, une salle...';

interface Props {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

export default function SearchBar({ onSearch, searchTerm }: Props) {
  return (
    <form className="flex flex-1 items-center">
      <div className="relative w-full">
        <input
          className="h-8.5 w-full truncate rounded-full border border-accent bg-transparent pr-11 pl-5 text-base text-body outline-none lg:h-10"
          name="query"
          onChange={(event) => {
            onSearch(event.target.value);
          }}
          placeholder={SEARCH_BAR_PLACEHOLDER}
          value={searchTerm}
        />
        <MagnifyingGlass
          height="25px"
          width="25px"
          color="var(--accent)"
          className="absolute top-1/2 right-4 -translate-y-1/2"
        />
      </div>
    </form>
  );
}

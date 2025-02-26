import { searchBarFormClass, searchBarInputClass, searchBarSubmitClass } from './SearchBar.style';
import { search } from './actions';

const SEARCH_BAR_PLACEHOLDER = 'Rechercher un film, un réalisateur, une salle...';

export default function SearchBar() {
  return (
    <form action={search} className={searchBarFormClass}>
      <input className={searchBarInputClass} name="query" placeholder={SEARCH_BAR_PLACEHOLDER} />
      <input className={searchBarSubmitClass} type="submit" />
    </form>
  );
}

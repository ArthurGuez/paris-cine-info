import Filters from '../../molecules/filters/Filters';
import SearchBar from '../../molecules/search-bar/SearchBar';
import Settings from '../../molecules/settings/Settings';

interface Props {
  onSearch: (searchTerm: string) => void;
}

export default function Header({ onSearch }: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-between gap-2 bg-background px-1.5 py-2 lg:gap-5 lg:p-3">
      <div className="block w-8 lg:hidden">
        <img alt="Logo Paris Ciné Info" src="/images/small-pci-logo.png" />
      </div>
      <div className="hidden w-52 lg:block">
        <img alt="Logo Paris Ciné Info" src="/images/pci-logo.png" />
      </div>
      <SearchBar onSearch={onSearch} />
      <div className="flex gap-4">
        <Filters />
        <Settings />
      </div>
    </header>
  );
}

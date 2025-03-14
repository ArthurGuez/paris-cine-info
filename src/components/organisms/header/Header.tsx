import OptionsBar from '../../molecules/options-bar/OptionsBar';
import SearchBar from '../../molecules/search-bar/SearchBar';

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between gap-5 bg-background py-3">
      <div className="block w-10 lg:hidden">
        <img alt="Logo Paris Ciné Info" src="/images/small-pci-logo.png" />
      </div>
      <div className="hidden w-52 lg:block">
        <img alt="Logo Paris Ciné Info" src="/images/pci-logo.png" />
      </div>
      <SearchBar />
      <div className="hidden md:block">
        <OptionsBar />
      </div>
    </header>
  );
}

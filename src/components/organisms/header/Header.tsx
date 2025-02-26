import OptionsBar from '../../molecules/options-bar/OptionsBar';
import SearchBar from '../../molecules/search-bar/SearchBar';
import {
  headerClass,
  headerDesktopLogoClass,
  headerLogoClass,
  headerOptionsClass,
} from './Header.style';

export default function Header() {
  return (
    <header className={headerClass}>
      <div className={headerLogoClass}>
        <img alt="Logo Paris Ciné Info" src="/images/small-pci-logo.png" />
      </div>
      <div className={headerDesktopLogoClass}>
        <img alt="Logo Paris Ciné Info" src="/images/pci-logo.png" />
      </div>
      <SearchBar />
      <div className={headerOptionsClass}>
        <OptionsBar />
      </div>
    </header>
  );
}

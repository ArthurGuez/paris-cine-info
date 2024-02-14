import Image from 'next/image';

import regularLogo from '../../../public/images/pci-logo.png';
import smallLogo from '../../../public/images/small-pci-logo.png';
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
        <Image alt="Logo Paris Ciné Info" src={smallLogo} />
      </div>
      <div className={headerDesktopLogoClass}>
        <Image alt="Logo Paris Ciné Info" src={regularLogo} />
      </div>
      <SearchBar />
      <div className={headerOptionsClass}>
        <OptionsBar />
      </div>
    </header>
  );
}

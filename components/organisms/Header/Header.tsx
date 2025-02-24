import Image from 'next/image';

import OptionsBar from '../../molecules/options-bar/OptionsBar';
import Searchbar from '../../molecules/searchbar/Searchbar';
import regularLogo from '../../../public/images/pci-logo.png';
import smallLogo from '../../../public/images/small-pci-logo.png';
import styles from './Header.module.css';
import { css } from '../../../styled-system/css';

const headerClassName = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '3',
  gridGap: '8',
});

export default function Header() {
  return (
    <header className={headerClassName}>
      <div className={styles.header__logo}>
        <Image alt="Logo Paris Ciné Info" src={smallLogo} />
      </div>
      <div className={styles['header__desktop-logo']}>
        <Image alt="Logo Paris Ciné Info" src={regularLogo} />
      </div>
      <Searchbar />
      <div className={styles.header__options}>
        <OptionsBar />
      </div>
    </header>
  );
}

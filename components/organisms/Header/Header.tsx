import Image from 'next/image';

import Optionsbar from '../../molecules/Optionsbar/Optionsbar';
import Searchbar from '../../molecules/Searchbar/Searchbar';
import regularLogo from '../../../public/images/pci-logo.png';
import smallLogo from '../../../public/images/small-pci-logo.png';
import styles from './Header.module.css';
import { css } from '../../../styled-system/css';

const headerClassName = css({
  marginTop: '0.625rem',
  display: 'flex',
  height: '3.438rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0 20px',
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
        <Optionsbar />
      </div>
    </header>
  );
}

import Filters from '../../../icons/filters.svg';
import Gear from '../../../icons/gear.svg';

import styles from './Optionsbar.module.sass';

export default function Optionsbar() {
  return (
    <div className={styles.optionsbar}>
      <div className={styles.optionsbar__option}>
        <Filters fill='var(--primary-color)' height='30px' width='30px' />
        <span className={styles['optionsbar__option-label']}>Filtres</span>
      </div>
      <div className={styles.optionsbar__option}>
        <Gear fill='var(--primary-color)' height='25px' width='25px' />
        <span className={styles['optionsbar__option-label']}>Réglages</span>
      </div>
    </div>
  );
}

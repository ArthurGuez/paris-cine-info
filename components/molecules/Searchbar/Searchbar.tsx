import MagnifyingGlass from '../../../icons/magnifying-glass.svg';
import styles from './Searchbar.module.sass';

export default function Searchbar() {
  return (
    <form className={styles.searchbar}>
      <input className={styles.searchbar__input} type='text' />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor='submit'>
        <input type='submit' id='submit' style={{ display: 'none' }} />
        <MagnifyingGlass
          className={styles.searchbar__submit}
          fill='var(--primary-color)'
          height='20px'
          width='20px'
        />
      </label>
    </form>
  );
}

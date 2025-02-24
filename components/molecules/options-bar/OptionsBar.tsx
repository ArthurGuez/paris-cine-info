import Filters from '../../../icons/filters.svg';
import Gear from '../../../icons/gear.svg';
import { css } from '../../../styled-system/css';
import { token } from '../../../styled-system/tokens';
import OptionsBarItem from '../../atoms/OptionsBarItem';

const optionsBarClass = css({
  alignItems: 'center',
  display: 'flex',

  textTransform: 'uppercase',
});

export default function OptionsBar() {
  return (
    <div className={optionsBarClass}>
      <OptionsBarItem label="Filtres">
        <Filters fill={token('colors.primary')} height="30px" width="30px" />
      </OptionsBarItem>
      <OptionsBarItem label="Réglages">
        <Gear fill={token('colors.primary')} height="25px" width="25px" />
      </OptionsBarItem>
    </div>
  );
}

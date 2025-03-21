import { Component as Filters } from '../../../icons/filters.svg?svgUse';
import { Component as Gear } from '../../../icons/gear.svg?svgUse';
import OptionsBarItem from '../../atoms/OptionsBarItem';
import Settings from '../settings/Settings';

export default function OptionsBar() {
  return (
    <div className="flex items-center uppercase">
      <OptionsBarItem label="Filtres">
        <Filters color="var(--accent)" height="30px" width="30px" />
      </OptionsBarItem>
      <Settings>
        <Gear color="var(--accent)" height="25px" width="25px" />
      </Settings>
    </div>
  );
}

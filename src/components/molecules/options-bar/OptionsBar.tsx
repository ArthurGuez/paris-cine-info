import { Component as Filters } from '../../../icons/filters.svg?svgUse';
import { Component as Gear } from '../../../icons/gear.svg?svgUse';
import OptionsBarItem from '../../atoms/OptionsBarItem';

export default function OptionsBar() {
  return (
    <div className="flex items-center uppercase">
      <OptionsBarItem label="Filtres">
        <Filters color="var(--accent)" height="30px" width="30px" />
      </OptionsBarItem>
      <OptionsBarItem label="Réglages">
        <Gear color="var(--accent)" height="25px" width="25px" />
      </OptionsBarItem>
    </div>
  );
}

import { Component as Gear } from '../../icons/gear.svg?svgUse';
import DrawerWrapper from '../DrawerWrapper';
import ThemeSetting from './ThemeSetting';
import TitleDisplaySetting from './TitleDisplaySetting';

const TITLE = 'Réglages';

export default function Settings() {
  return (
    <DrawerWrapper
      title={TITLE}
      triggerIcon={<Gear color="var(--accent)" height="25px" width="25px" />}
    >
      <ThemeSetting />
      <TitleDisplaySetting />
    </DrawerWrapper>
  );
}

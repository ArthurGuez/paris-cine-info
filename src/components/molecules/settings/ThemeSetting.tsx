import type { Theme} from '../../../contexts/theme';
import { useTheme } from '../../../contexts/theme';
import type { Setting as SettingType } from '../../../types';
import Setting from './Setting';

const THEME_SETTING_TITLE = 'Thème';

const THEME_SETTING: SettingType<Theme> = {
  name: 'theme',
  items: [
    { label: 'Sombre', value: 'dark' },
    { label: 'Clair', value: 'light' },
    { label: 'Auto', value: 'auto' },
  ],
};

export default function ThemeSetting() {
  const { theme, handleThemeChange } = useTheme();

  return (
    <Setting
      handleChange={handleThemeChange}
      selectedValue={theme}
      setting={THEME_SETTING}
      title={THEME_SETTING_TITLE}
    />
  );
}

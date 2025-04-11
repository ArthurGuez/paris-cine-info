import type { Theme } from '../../../contexts/theme';
import { useTheme } from '../../../contexts/theme';
import type { OptionGroup } from '../../../types';
import RadioGroup from '../fields/RadioGroup';

const THEME_SETTING_TITLE = 'Thème';

const THEME_SETTING: OptionGroup<Theme> = {
  name: 'theme',
  options: [
    { label: 'Sombre', value: 'dark' },
    { label: 'Clair', value: 'light' },
    { label: 'Auto', value: 'auto' },
  ],
};

export default function ThemeSetting() {
  const { theme, handleThemeChange } = useTheme();

  return (
    <RadioGroup
      handleChange={handleThemeChange}
      selectedValue={theme}
      optionGroup={THEME_SETTING}
      title={THEME_SETTING_TITLE}
    />
  );
}

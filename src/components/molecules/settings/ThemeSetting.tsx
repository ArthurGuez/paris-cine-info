import { Theme, useTheme } from '../../../contexts/theme';
import { Option } from '../../../types';
import Radio from '../../atoms/input/Radio';

interface ThemeSetting {
  name: string;
  items: Option<Theme>[];
}

const THEME_SETTING: ThemeSetting = {
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
    <div className="flex flex-col gap-3">
      <h3 className="text-body uppercase">Thème</h3>
      <div className="flex">
        {THEME_SETTING.items.map((option) => (
          <Radio
            key={option.value}
            name={THEME_SETTING.name}
            value={option.value}
            isSelected={option.value === theme}
            label={option.label}
            onChange={handleThemeChange}
          />
        ))}
      </div>
    </div>
  );
}

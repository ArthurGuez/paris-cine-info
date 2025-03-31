import { useAtom } from 'jotai';
import type { TitleDisplay} from '../../../atoms/settings';
import { titleDisplayAtom } from '../../../atoms/settings';
import type { Setting as SettingType } from '../../../types';
import Setting from './Setting';

const TITLE_DISPLAY_SETTING_TITLE = 'Affichage des titres';

const TITLE_DISPLAY_SETTING: SettingType<TitleDisplay> = {
  name: 'title',
  items: [
    { value: 'french', label: 'Français' },
    { value: 'original', label: 'Originaux' },
    { value: 'both', label: 'Les deux' },
  ],
};

export default function TitleDisplaySetting() {
  const [titleDisplay, setTitleDisplay] = useAtom(titleDisplayAtom);

  return (
    <Setting
      handleChange={setTitleDisplay}
      selectedValue={titleDisplay}
      setting={TITLE_DISPLAY_SETTING}
      title={TITLE_DISPLAY_SETTING_TITLE}
    />
  );
}

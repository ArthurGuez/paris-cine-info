import { useAtom } from 'jotai';
import type { TitleDisplay } from '../../../atoms/settings';
import { titleDisplayAtom } from '../../../atoms/settings';
import type { OptionGroup } from '../../../types';
import RadioGroup from '../fields/RadioGroup';

const TITLE_DISPLAY_SETTING_TITLE = 'Affichage des titres';

const TITLE_DISPLAY_SETTING: OptionGroup<TitleDisplay> = {
  name: 'title',
  options: [
    { value: 'french', label: 'Français' },
    { value: 'original', label: 'Originaux' },
    { value: 'both', label: 'Les deux' },
  ],
};

export default function TitleDisplaySetting() {
  const [titleDisplay, setTitleDisplay] = useAtom(titleDisplayAtom);

  return (
    <RadioGroup
      handleChange={setTitleDisplay}
      selectedValue={titleDisplay}
      optionGroup={TITLE_DISPLAY_SETTING}
      title={TITLE_DISPLAY_SETTING_TITLE}
    />
  );
}

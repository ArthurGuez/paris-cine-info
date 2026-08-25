import { useLocation, useNavigate } from '@tanstack/react-router';

import { DEFAULT_LANGUAGE_VALUE } from '../../../constants';
import type { Language, OptionGroup } from '../../../types';
import Select from '../../atoms/inputs/Select';

const LANGUAGE_FILTER_TITLE = 'Langue';

const LANGUAGE_FILTER: OptionGroup<Language> = {
  name: 'language',
  options: [
    { label: 'Toutes', value: 'all' },
    { label: 'VO uniquement', value: 'VO' },
    { label: 'VF uniquement', value: 'VF' },
    { label: 'VF sous-titrée français', value: 'VFSTF' },
    { label: 'Sous-titré français', value: 'STF' },
    { label: 'Sous-titré anglais', value: 'STA' },
    { label: 'Anglais', value: 'English' },
    { label: 'Français', value: 'French' },
    { label: 'Espagnol', value: 'Spanish' },
    { label: 'Japonais', value: 'Japanese' },
    { label: 'Italien', value: 'Italian' },
    { label: 'Portugais', value: 'Portuguese' },
    { label: 'Mandarin', value: 'Mandarin' },
    { label: 'Allemand', value: 'German' },
    { label: 'Arabe', value: 'Arabic' },
    { label: 'Bengali', value: 'Bengali' },
    { label: 'Cantonais', value: 'Cantonese' },
    { label: 'Catalan', value: 'Catalan' },
    { label: 'Coréen', value: 'Korean' },
    { label: 'Farsi', value: 'Farsi' },
    { label: 'Filipino', value: 'Filipino' },
    { label: 'Grec', value: 'Greek' },
    { label: 'Néerlandais', value: 'Dutch' },
    { label: 'Hongrois', value: 'Hungarian' },
    { label: 'Muet', value: 'Silent' },
    { label: 'Norvégien', value: 'Norwegian' },
    { label: 'Polonais', value: 'Polish' },
    { label: 'Somali', value: 'Somali' },
    { label: 'Suédois', value: 'Swedish' },
    { label: 'Tchèque', value: 'Czech' },
    { label: 'Thaï', value: 'Thai' },
    { label: 'Turc', value: 'Turkish' },
    { label: 'Zhuang', value: 'Zhuang' },
  ],
};

export default function LanguageFilter() {
  const language =
    useLocation({ select: ({ search }) => search.language }) ?? DEFAULT_LANGUAGE_VALUE;
  const navigate = useNavigate({ from: '/' });

  function handleLanguageFilterChange(newLanguage: Language) {
    void navigate({
      to: '/',
      search: (prevSearch) => ({
        ...prevSearch,
        language: newLanguage === DEFAULT_LANGUAGE_VALUE ? undefined : newLanguage,
      }),
    });
  }

  return (
    <div className="flex flex-col gap-y-2.5">
      <h3 className="text-body uppercase">{LANGUAGE_FILTER_TITLE}</h3>
      <Select
        onChange={handleLanguageFilterChange}
        title={LANGUAGE_FILTER_TITLE}
        optionGroup={LANGUAGE_FILTER}
        value={language}
      />
    </div>
  );
}

import { useLocation, useNavigate } from '@tanstack/react-router';

import { DEFAULT_SCREENING_TIME_VALUE } from '../../constants';
import type { OptionGroup, ScreeningTime } from '../../types';
import RadioGroup from '../inputs/RadioGroup';

const SCREENING_TIME_FILTER_TITLE = 'Période';

const SCREENING_TIME_FILTER: OptionGroup<ScreeningTime> = {
  name: 'screeningTime',
  options: [
    { label: 'Toutes', value: DEFAULT_SCREENING_TIME_VALUE },
    { label: 'Matin', value: 'matin' },
    { label: 'Après-midi', value: 'après-midi' },
    { label: 'Soir', value: 'soir' },
  ],
};

export default function ScreeningTimeFilter() {
  const screeningTime =
    useLocation({ select: ({ search }) => search.time }) ?? DEFAULT_SCREENING_TIME_VALUE;
  const navigate = useNavigate({ from: '/' });

  function handleScreeningTimeFilterChange(newScreeningTime: ScreeningTime) {
    void navigate({
      to: '/',
      search: (prevSearch) => ({
        ...prevSearch,
        time: newScreeningTime === DEFAULT_SCREENING_TIME_VALUE ? undefined : newScreeningTime,
      }),
    });
  }

  return (
    <RadioGroup
      handleChange={handleScreeningTimeFilterChange}
      selectedValue={screeningTime}
      optionGroup={SCREENING_TIME_FILTER}
      title={SCREENING_TIME_FILTER_TITLE}
    />
  );
}

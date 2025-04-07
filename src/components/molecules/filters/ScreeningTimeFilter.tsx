import { useAtom } from 'jotai';
import type { OptionGroup } from '../../../types';
import RadioGroup from '../fields/RadioGroup';
import type { ScreeningTime } from '../../../atoms/filters';
import { screeningTimeAtom } from '../../../atoms/filters';
import { useNavigate } from '@tanstack/react-router';

const SCREENING_TIME_FILTER_TITLE = 'Période';

const SCREENING_TIME_FILTER: OptionGroup<ScreeningTime> = {
  name: 'screeningTime',
  items: [
    { label: 'Toutes', value: 'all' },
    { label: 'Matin', value: 'matin' },
    { label: 'Après-midi', value: 'après-midi' },
    { label: 'Soir', value: 'soir' },
  ],
};

export default function ScreeningTimeFilter() {
  const [screeningTime, setScreeningTime] = useAtom(screeningTimeAtom);
  const navigate = useNavigate({ from: '/' });

  function handleScreeningTimeFilterChange(newScreeningTime: ScreeningTime) {
    void navigate({
      to: '/',
      search: newScreeningTime === 'all' ? undefined : { time: newScreeningTime },
    });
    setScreeningTime(newScreeningTime);
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

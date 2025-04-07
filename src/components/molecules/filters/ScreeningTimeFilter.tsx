import type { OptionGroup, ScreeningTime } from '../../../types';
import RadioGroup from '../fields/RadioGroup';
import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

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

const routeApi = getRouteApi('/');

export default function ScreeningTimeFilter() {
  const { time: timeSearchParam = 'all' } = routeApi.useSearch();
  const [screeningTime, setScreeningTime] = useState<ScreeningTime>(timeSearchParam);
  const navigate = useNavigate({ from: '/' });

  function handleScreeningTimeFilterChange(newScreeningTime: ScreeningTime) {
    void navigate({
      to: '/',
      search: (prevSearch) => ({
        ...prevSearch,
        time: newScreeningTime === 'all' ? undefined : newScreeningTime,
      }),
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

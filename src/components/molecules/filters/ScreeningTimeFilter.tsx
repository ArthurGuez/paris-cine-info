import { DEFAULT_SCREENING_TIME_VALUE } from '../../../constants';
import type { OptionGroup, ScreeningTime } from '../../../types';
import RadioGroup from '../fields/RadioGroup';
import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

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

const routeApi = getRouteApi('/');

export default function ScreeningTimeFilter() {
  const { time: timeSearchParam = DEFAULT_SCREENING_TIME_VALUE } = routeApi.useSearch();
  const [screeningTime, setScreeningTime] = useState<ScreeningTime>(timeSearchParam);
  const navigate = useNavigate({ from: '/' });

  function handleScreeningTimeFilterChange(newScreeningTime: ScreeningTime) {
    void navigate({
      to: '/',
      search: (prevSearch) => ({
        ...prevSearch,
        time: newScreeningTime === DEFAULT_SCREENING_TIME_VALUE ? undefined : newScreeningTime,
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

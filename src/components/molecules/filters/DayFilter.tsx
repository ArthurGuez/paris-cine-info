import type { OptionGroup, Day, Option } from '../../../types';
import Select from '../../atoms/inputs/Select';
import { getRouteApi, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

const CURRENT_DAY_INDEX = new Date().getDay();

const DAY_FILTER_TITLE = 'Jour';

const DAYS_OF_WEEK: Option<Partial<Day>>[] = [
  { label: 'Lundi', value: 'lundi' },
  { label: 'Mardi', value: 'mardi' },
  { label: 'Mercredi', value: 'mercredi' },
  { label: 'Jeudi', value: 'jeudi' },
  { label: 'Vendredi', value: 'vendredi' },
  { label: 'Samedi', value: 'samedi' },
  { label: 'Dimanche', value: 'dimanche' },
];

const DAY_FILTER: OptionGroup<Day> = {
  name: 'day',
  items: [
    { label: 'Cette semaine', value: 'week' },
    { label: "Aujourd'hui", value: 'today' },
    ...DAYS_OF_WEEK.slice(CURRENT_DAY_INDEX),
    ...DAYS_OF_WEEK.slice(0, CURRENT_DAY_INDEX),
    { label: 'Tous', value: 'all' },
  ],
};

const routeApi = getRouteApi('/');

export default function DayFilter() {
  const { day: daySearchParam = 'week' } = routeApi.useSearch();
  const [day, setDay] = useState<Day>(daySearchParam);
  const navigate = useNavigate({ from: '/' });

  function handleDayFilterChange(newDay: Day) {
    void navigate({
      to: '/',
      search: (prevSearch) => ({ ...prevSearch, day: newDay === 'week' ? undefined : newDay }),
    });
    setDay(newDay);
  }

  return (
    <div className="flex flex-col gap-y-2.5">
      <h3 className="text-body uppercase">{DAY_FILTER_TITLE}</h3>
      <Select
        onChange={handleDayFilterChange}
        title={DAY_FILTER_TITLE}
        optionGroup={DAY_FILTER}
        value={day}
      />
    </div>
  );
}

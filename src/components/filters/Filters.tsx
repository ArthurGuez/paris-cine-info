import { Component as Filter } from '../../icons/filters.svg?svgUse';
import DrawerWrapper from '../DrawerWrapper';
import CardFilter from './CardFilter';
import DayFilter from './DayFilter';
import FormatFilter from './FormatFilter';
import LanguageFilter from './LanguageFilter';
import ScreeningTimeFilter from './ScreeningTimeFilter';

const TITLE = 'Filtres';

export default function Filters() {
  return (
    <DrawerWrapper
      title={TITLE}
      triggerIcon={<Filter color="var(--accent)" height="30px" width="30px" />}
    >
      <CardFilter />
      <ScreeningTimeFilter />
      <DayFilter />
      <FormatFilter />
      <LanguageFilter />
    </DrawerWrapper>
  );
}

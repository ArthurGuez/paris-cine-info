import { Component as Filter } from '../../../icons/filters.svg?svgUse';
import ScreeningTimeFilter from './ScreeningTimeFilter';
import DrawerWrapper from '../drawer/DrawerWrapper';

const TITLE = 'Filtres';

export default function Filters() {
  return (
    <DrawerWrapper
      title={TITLE}
      triggerIcon={<Filter color="var(--accent)" height="30px" width="30px" />}
    >
      <ScreeningTimeFilter />
    </DrawerWrapper>
  );
}

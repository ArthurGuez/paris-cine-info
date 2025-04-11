import { useState } from 'react';
import Select from '../../atoms/inputs/Select';
import { getRouteApi, useNavigate } from '@tanstack/react-router';
import type { Format, OptionGroup } from '../../../types';

const FORMAT_FILTER_TITLE = 'Format';

const FORMAT_FILTER: OptionGroup<Format> = {
  name: 'format',
  options: [
    { label: 'Tous', value: 'all' },
    { label: '35mm', value: '35mm' },
    { label: '3D', value: '3D' },
    { label: 'IMAX', value: 'imax' },
    { label: 'IMAX 3D', value: 'imax3d' },
    { label: 'Dolby Cinema', value: 'dci' },
    { label: 'Dolby Atmos', value: 'dat' },
    { label: 'ICE', value: 'ice' },
    { label: 'ScreenX', value: 'scx' },
    { label: 'Onyx Led', value: 'onx' },
    { label: '4DX', value: '4dx' },
    { label: '4D E-Motion', value: '4de' },
  ],
};

const routeApi = getRouteApi('/');

export default function FormatFilter() {
  const { format: formatSearchParam = 'all' } = routeApi.useSearch();
  const [format, setFormat] = useState<Format>(formatSearchParam);
  const navigate = useNavigate({ from: '/' });

  function handleFormatFilterChange(newFormat: Format) {
    void navigate({
      to: '/',
      search: (prevSearch) => ({
        ...prevSearch,
        format: newFormat === 'all' ? undefined : newFormat,
      }),
    });
    setFormat(newFormat);
  }

  return (
    <div className="flex flex-col gap-y-2.5">
      <h3 className="text-body uppercase">{FORMAT_FILTER_TITLE}</h3>
      <Select
        onChange={handleFormatFilterChange}
        title={FORMAT_FILTER_TITLE}
        optionGroup={FORMAT_FILTER}
        value={format}
      />
    </div>
  );
}

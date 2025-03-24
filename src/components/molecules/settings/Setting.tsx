import { Setting } from '../../../types';
import Radio from '../../atoms/input/Radio';

interface Props<T> {
  handleChange: ((newValue: T) => void) | undefined;
  selectedValue: T;
  setting: Setting<T>;
  title: string;
}

export default function Setting<T extends string>({
  handleChange,
  selectedValue,
  setting,
  title,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <h3 className="text-body uppercase">{title}</h3>
      <div className="flex flex-wrap">
        {setting.items.map((option) => (
          <Radio
            isSelected={option.value === selectedValue}
            key={option.value}
            label={option.label}
            name={setting.name}
            onChange={handleChange}
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
}

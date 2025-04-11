import type { OptionGroup } from '../../../types';
import Radio from '../../atoms/inputs/Radio';

interface Props<T> {
  handleChange: ((newValue: T) => void) | undefined;
  selectedValue: T;
  optionGroup: OptionGroup<T>;
  title: string;
}

export default function RadioGroup<T extends string>({
  handleChange,
  selectedValue,
  optionGroup,
  title,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <h3 className="text-body uppercase">{title}</h3>
      <div className="flex flex-wrap">
        {optionGroup.options.map((option) => (
          <Radio
            isSelected={option.value === selectedValue}
            key={option.value}
            label={option.label}
            name={optionGroup.name}
            onChange={handleChange}
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
}

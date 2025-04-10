import type { OptionGroup } from '../../../types';

interface Props<T> {
  onChange: (newValue: T) => void;
  optionGroup: OptionGroup<T>;
  title: string;
  value: T;
}

export default function Select<T extends string>({
  onChange,
  optionGroup,
  title,
  value,
}: Props<T>) {
  return (
    <>
      <label htmlFor={optionGroup.name} className="sr-only">
        {title}
      </label>
      <select
        className="border border-accent p-1 text-body"
        id={optionGroup.name}
        name={optionGroup.name}
        onChange={(e) => {
          onChange(e.target.value as T);
        }}
        value={value}
      >
        {optionGroup.items.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

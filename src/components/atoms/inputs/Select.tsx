import type { NestedOptionGroup, Option, OptionGroup } from '../../../types';
import { Component as FilledTriangle } from '../../../icons/filled-triangle.svg?svgUse';

function renderOptions<T extends string>(options: Option<T>[]) {
  return options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
}

interface Props<T> {
  onChange: (newValue: T) => void;
  optionGroup: OptionGroup<T> | NestedOptionGroup<T>;
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
      <div className="relative w-full">
        <select
          className="w-full appearance-none border border-accent p-1 pr-6 text-body"
          id={optionGroup.name}
          name={optionGroup.name}
          onChange={(e) => {
            onChange(e.target.value as T);
          }}
          value={value}
        >
          {'nestedOptionGroup' in optionGroup ? (
            <>
              <option key={optionGroup.defaultOption.value} value={optionGroup.defaultOption.value}>
                {optionGroup.defaultOption.label}
              </option>
              {optionGroup.nestedOptionGroup.map((nestedOption) => (
                <optgroup key={nestedOption.name} label={nestedOption.label}>
                  {renderOptions(nestedOption.options)}
                </optgroup>
              ))}
            </>
          ) : (
            renderOptions(optionGroup.options)
          )}
        </select>
        <FilledTriangle
          className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rotate-180"
          color="var(--accent)"
          height="12px"
          width="12px"
        />
      </div>
    </>
  );
}

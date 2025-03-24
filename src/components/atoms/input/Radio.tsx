interface Props<T> {
  name: string;
  value: T;
  isSelected: boolean;
  onChange?: (newValue: T) => void;
  label: string;
}

export default function Radio<T extends string>({
  name,
  value,
  isSelected,
  onChange,
  label,
}: Props<T>) {
  return (
    <label
      className={`min-w-[111px] flex-1 cursor-pointer border border-accent px-4 py-2 text-center text-sm text-body first:rounded-l-md first:border-r-0 last:rounded-r-md last:border-l-0 hover:bg-accent ${
        isSelected ? 'bg-accent' : 'bg-background'
      }`}
    >
      <input
        checked={isSelected}
        className="sr-only"
        name={name}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value as T);
          }
        }}
        type="radio"
        value={value}
      />
      {label}
    </label>
  );
}

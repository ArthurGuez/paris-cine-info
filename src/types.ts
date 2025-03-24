export interface Option<T> {
  label: string;
  value: T;
}

export interface Setting<T> {
  name: string;
  items: Option<T>[];
}

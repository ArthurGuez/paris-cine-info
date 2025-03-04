import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  label: string;
}

export default function OptionsBarItem({ children, label }: Props) {
  return (
    <div className="flex h-10 w-40 cursor-pointer items-center justify-evenly border border-accent">
      {children}
      <span className="text-xl font-bold text-body">{label}</span>
    </div>
  );
}

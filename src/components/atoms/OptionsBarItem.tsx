import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  label: string;
}

export default function OptionsBarItem({ children, label }: Props) {
  return (
    <div className="flex h-10 w-40 cursor-pointer items-center justify-center gap-1.5 border border-accent">
      {children}
      <span className="text-lg font-bold text-body">{label}</span>
    </div>
  );
}

import type { ReactNode } from 'react';

import { optionsBarItemLabelClass, optionsBarItemWrapperClass } from './OptionsBarItem.style';

interface Props {
  children: ReactNode;
  label: string;
}

export default function OptionsBarItem({ children, label }: Props) {
  return (
    <div className={optionsBarItemWrapperClass}>
      {children}
      <span className={optionsBarItemLabelClass}>{label}</span>
    </div>
  );
}

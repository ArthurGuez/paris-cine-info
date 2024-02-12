import type { ReactNode } from 'react';
import { sva } from '../../styled-system/css';

const optionsBarItemClassName = sva({
  slots: ['root', 'label'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',

      height: '10',
      width: '40',
      borderColor: 'primary',
      borderStyle: 'solid',
    },
    label: { color: 'text', fontSize: 'xl', fontWeight: 'bold' },
  },
});

interface Props {
  children: ReactNode;
  label: string;
}

export default function OptionsBarItem({ children, label }: Props) {
  const classes = optionsBarItemClassName();

  return (
    <div className={classes.root}>
      {children}
      <span className={classes.label}>{label}</span>
    </div>
  );
}

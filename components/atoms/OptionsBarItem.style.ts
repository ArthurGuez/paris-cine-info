import { css } from '../../styled-system/css';

export const optionsBarItemWrapperClass = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',

  height: '10',
  width: '40',

  border: 'subtle',
  cursor: 'pointer',
});

export const optionsBarItemLabelClass = css({
  color: 'text',
  fontSize: 'xl',
  fontWeight: 'bold',
});

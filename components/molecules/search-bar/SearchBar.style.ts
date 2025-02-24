import { css } from '../../../styled-system/css';

export const searchBarFormClass = css({
  display: 'flex',
  alignItems: 'center',
  flex: '1',
});

export const searchBarInputClass = css({
  width: 'full',
  height: '10',
  paddingLeft: '5',
  paddingRight: '5',

  background: 'transparent',
  border: 'subtle',
  borderRadius: 'full',
  color: 'text',
  outline: 'none',
});

export const searchBarSubmitClass = css({
  display: 'none',

  cursor: 'pointer',
});

import { css } from '../../../styled-system/css';

export const headerClass = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '3',
  gridGap: '5',
});

export const headerLogoClass = css({
  display: 'block',
  width: '10',
  height: '10',
  hideFrom: 'lg',
});

export const headerDesktopLogoClass = css({
  display: 'block',
  width: '52',
  height: '10',
  hideBelow: 'lg',
});

export const headerOptionsClass = css({
  display: { base: 'none', md: 'block' },
});

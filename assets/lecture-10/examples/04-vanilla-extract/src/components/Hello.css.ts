import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'hotpink',
    accent: 'whitesmoke',
  },
  font: {
    body: 'Roboto, sans-serif',
  },
  button: {
    depth: '5px',
    depress: '3px',
  },
});

const base = style({ padding: 5 });

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '.5em',
});

export const button = style([
  base,
  {
    color: vars.color.accent,
    backgroundColor: vars.color.brand,
    fontFamily: vars.font.body,

    cursor: 'pointer',

    padding: '0.5em 1em',
    outline: 'none',
    border: 'none',
    borderRadius: '0.5em',
    boxShadow: `0 ${vars.button.depth} #666`,

    ':hover': {
      color: vars.color.brand,
      backgroundColor: vars.color.accent,
    },

    ':active': {
      color: vars.color.brand,
      backgroundColor: vars.color.accent,
      boxShadow: `0 calc(${vars.button.depth} - ${vars.button.depress}) #666`,
      transform: `translateY(${vars.button.depress})`,
    },
  },
]);

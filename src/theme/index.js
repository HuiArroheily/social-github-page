import { createMuiTheme } from '@material-ui/core/styles';

const brandAction = '#c77940';
const brandActionBg = '#dbaf81';
const brandBorder = '#af5f2c';
const GreyColor = '#988875';
const orangeBg = '#f9f2e8';
const orange = '#d19c63';
const white = '#ffffff';
const white03 = '#ffffff4d';

const dimGray = '#5F6268';
const rocketMetallic = '#877D78';
const timberWolf = '#E7DFD7';
const tan = '#D7B08E';
const rust = '#A54C1C';

const flex = {
  fill: {
    display: 'flex',
    fill: 1,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainStart: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
};

const theme = createMuiTheme({
  colors: {
    brandAction,
    brandActionBg,
    brandBorder,
    GreyColor,
    orangeBg,
    orange,
    white,
    white03,

    dimGray,
    rocketMetallic,
    timberWolf,
    tan,
    rust,
  },

  borderRadius: {
    normal: '8px',
  },

  shadow: {
    main: '0 2px 16px 0 rgba(51, 53, 50, 0.08)',
    modal: '0 4px 16px 0 rgba(51, 53, 50, 0.24)',
    componentDark: '0 2px 8px 0 rgba(51, 53, 50, 0.16)',
    componentShallow: '0 2px 8px 0 rgba(51, 53, 50, 0.08)',
    brandActionShallow: '0 0 4px 0 rgba(69, 87, 161, 0.64)',
  },

  flex,
});

export default theme;

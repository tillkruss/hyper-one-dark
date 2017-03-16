'use strict';

const foregroundColor = '#abb2bf';
const red = '#e06c75';
const green = '#98c379';
const yellow = '#e5c07b';
const blue = '#61afef';
const magenta = '#c678dd';
const cyan = '#56b6c2';
const white = '#d7dae0';
const lightBlack = '#5c6370';

exports.decorateConfig = config => {
  const backgroundColor = config.enableVibrancy ? 'transparent' : '#282c34';

  const decoratedConfig = Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: 'transparent',
    cursorColor: '#528bff',
    colors: {
      black: foregroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: backgroundColor
    },
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .splitpane_divider {
        background-color: rgba(0, 0, 0, .12) !important;
      }
      .tabs_list {
        margin-left: 0 !important;
        padding-left: 76px;
      }
      .tabs_list::before {
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        bottom: 0;
        width: 76px;
        background-color: rgba(50, 50, 50, .09) !important;
        border-bottom: 1px solid rgba(0, 0, 0, .12);
      }
      .tab_tab {
        color: rgba(157, 165, 180, 0.6) !important;
        background-color: #21252b !important;
        border-color: rgba(0, 0, 0, .12) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: transparent !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: transparent;
      }
      .tab_tab::after {
        content: "";
        position: absolute;
        pointer-events: none;
        z-index: 2;
        top: 0px;
        left: -1px;
        bottom: 0;
        width: 2px;
        border-radius: 0;
        background-color: #475fd7;
        opacity: 0;
        transition: opacity .16s;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #d7dae0 !important;
      }
      .tab_tab.tab_hasActivity {
        color: ${blue} !important;
      }
    `,
    termCSS: `
      ${config.termCSS || ''}
      x-row a {
        color: ${magenta};
      }
      .cursor-node {
        mix-blend-mode: multiply;
      }
      .cursor-node[focus="false"] {
        opacity: 0 !important;
      }
    `
  });

  exports.onWindow = browserWindow => {
    if (config.enableVibrancy === true) {
      browserWindow.setVibrancy('dark');
    }
  };

  return decoratedConfig;
};

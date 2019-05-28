const Color = require('color')

/* Utilities */
const pxToRem = (px, base = 16) => `${px / base}rem`
const getScaleValues = (step = 4, limit = 64) => {
  let scale = {}

  Array(limit / step).fill()
    .map((value, key) => pxToRem(key + 1))
    .forEach((value, key) => {
      scale[(key + 1) * step] = value
    })

  return scale
}

/* Config */
// const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',

  theme: {
    colors: {
      'transparent': 'transparent',

      'black': '#22292f',
      'grey-darkest': '#3d4852',
      'grey-darker': '#606f7b',
      'grey-dark': '#8795a1',
      'grey': '#b8c2cc',
      'grey-light': '#dae1e7',
      'grey-lighter': '#f1f5f8',
      'grey-lightest': '#f8fafc',
      'white': '#ffffff',

      'red-darkest': '#3b0d0c',
      'red-darker': '#621b18',
      'red-dark': '#cc1f1a',
      'red': '#e3342f',
      'red-light': '#ef5753',
      'red-lighter': '#f9acaa',
      'red-lightest': '#fcebea',

      'orange-darkest': '#462a16',
      'orange-darker': '#613b1f',
      'orange-dark': '#de751f',
      'orange': '#f6993f',
      'orange-light': '#faad63',
      'orange-lighter': '#fcd9b6',
      'orange-lightest': '#fff5eb',

      'yellow-darkest': '#453411',
      'yellow-darker': '#684f1d',
      'yellow-dark': '#f2d024',
      'yellow': '#ffed4a',
      'yellow-light': '#fff382',
      'yellow-lighter': '#fff9c2',
      'yellow-lightest': '#fcfbeb',

      'green-darkest': '#0f2f21',
      'green-darker': '#1a4731',
      'green-dark': '#1f9d55',
      'green': '#38c172',
      'green-light': '#51d88a',
      'green-lighter': '#a2f5bf',
      'green-lightest': '#e3fcec',

      'teal-darkest': '#0d3331',
      'teal-darker': '#20504f',
      'teal-dark': '#38a89d',
      'teal': '#4dc0b5',
      'teal-light': '#64d5ca',
      'teal-lighter': '#a0f0ed',
      'teal-lightest': '#e8fffe',

      'blue-darkest': '#12283a',
      'blue-darker': '#1c3d5a',
      'blue-dark': '#2779bd',
      'blue': '#3490dc',
      'blue-light': '#6cb2eb',
      'blue-lighter': '#bcdefa',
      'blue-lightest': '#eff8ff',

      'indigo-darkest': '#191e38',
      'indigo-darker': '#2f365f',
      'indigo-dark': '#5661b3',
      'indigo': '#6574cd',
      'indigo-light': '#7886d7',
      'indigo-lighter': '#b2b7ff',
      'indigo-lightest': '#e6e8ff',

      'purple-darkest': '#21183c',
      'purple-darker': '#382b5f',
      'purple-dark': '#794acf',
      'purple': '#9561e2',
      'purple-light': '#a779e9',
      'purple-lighter': '#d6bbfc',
      'purple-lightest': '#f3ebff',

      'pink-darkest': '#451225',
      'pink-darker': '#6f213f',
      'pink-dark': '#eb5286',
      'pink': '#f66d9b',
      'pink-light': '#fa7ea8',
      'pink-lighter': '#ffbbca',
      'pink-lightest': '#ffebef',
    },

    spacing: {
      px: '1px',
      '0': '0',
      '1': pxToRem(4),
      '2': pxToRem(8),
      '3': pxToRem(12),
      '4': pxToRem(16),
      '5': pxToRem(20),
      '6': pxToRem(24),
      '8': pxToRem(32),
      '10': pxToRem(40),
      '12': pxToRem(48),
      '16': pxToRem(64),
      '20': pxToRem(80),
      '24': pxToRem(96),
      '32': pxToRem(128),
    },

    negativeSpacing: {
      '-px': '-1px',
      '-1': pxToRem(-4),
      '-2': pxToRem(-8),
      '-3': pxToRem(-12),
      '-4': pxToRem(-16),
      '-5': pxToRem(-20),
      '-6': pxToRem(-24),
      '-8': pxToRem(-32),
      '-10': pxToRem(-40),
      '-12': pxToRem(-48),
      '-16': pxToRem(-64),
      '-20': pxToRem(-80),
      '-24': pxToRem(-96),
      '-32': pxToRem(-128),
    },

    sizing: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '48': pxToRem(192),
      '64': pxToRem(256),
    }),

    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },

    fontFamily: {
      'sans': [
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      'serif': [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      'mono': [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },

    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },

    fontWeight: {
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },

    lineHeight: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2,
    },

    letterSpacing: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.05em',
    },

    textColor: theme => theme('colors'),

    backgroundColor: theme => theme('colors'),

    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },

    borderColor: theme => ({
      default: 'currentColor',
      ...theme('colors'),
    }),

    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      default: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },

    width: theme => ({
      ...theme('sizing'),
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw',
    }),

    height: theme => ({
      ...theme('sizing'),
      'full': '100%',
      'screen': '100vh',
    }),

    minWidth: {
      '0': '0',
      'full': '100%',
    },

    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh',
    },

    maxWidth: {
      'xs': '20rem',
      'sm': '30rem',
      'md': '40rem',
      'lg': '50rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      'full': '100%',
    },

    maxHeight: {
      'full': '100%',
      'screen': '100vh',
    },

    padding: theme => ({
      ...theme('spacing'),
    }),

    margin: theme => ({
      'auto': 'auto',
      ...theme('spacing'),
      ...theme('negativeSpacing'),
    }),

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'none': 'none',
    },

    zIndex: {
      'auto': 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    },

    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1',
    },

    fill: {
      'current': 'currentColor',
    },

    stroke: {
      'current': 'currentColor',
    },
  },

  variants: {
    appearance: [],
    backgroundAttachment: [],
    backgroundColor: ['hover', 'focus'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: [],
    borderColor: ['hover', 'focus'],
    borderRadius: [],
    borderStyle: [],
    borderWidth: [],
    cursor: [],
    display: [],
    flexDirection: [],
    flexWrap: [],
    alignItems: [],
    alignSelf: [],
    justifyContent: [],
    alignContent: [],
    flex: [],
    flexGrow: [],
    flexShrink: [],
    float: [],
    fontFamily: [],
    fontSize: [],
    fontWeight: ['hover', 'focus'],
    height: [],
    lineHeight: [],
    listStylePosition: [],
    listStyleType: [],
    margin: [],
    maxHeight: [],
    maxWidth: [],
    minHeight: [],
    minWidth: [],
    negativeMargin: [],
    objectFit: [],
    objectPosition: [],
    opacity: [],
    outline: ['focus'],
    overflow: [],
    padding: [],
    pointerEvents: [],
    position: [],
    inset: [],
    resize: [],
    boxShadow: ['hover', 'focus', 'active'],
    fill: [],
    stroke: [],
    tableLayout: [],
    textAlign: [],
    textColor: ['hover', 'focus'],
    fontStyle: ['hover', 'focus'],
    fontSmoothing: ['hover', 'focus'],
    textDecoration: ['hover', 'focus'],
    textTransform: ['hover', 'focus'],
    letterSpacing: [],
    userSelect: [],
    verticalAlign: [],
    visibility: [],
    whitespace: [],
    wordBreak: [],
    width: [],
    zIndex: [],
  },

  corePlugins: {
    container: false,
  },

  plugins: [
    // require('tailwindcss-alpha')(),
    require('tailwindcss-flexbox-order')(),
    require('tailwindcss-multi-column')({
      variants: ['responsive'],
      counts: ['auto', 1, 2],
      gaps: { '0': '0', '4': pxToRem(16) },
    }),
  ],
}

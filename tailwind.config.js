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
    inset: theme => theme('spacing'),

    columnCount: [ 'auto', 1, 2 ],
    columnGap: { '0': '0', '4': pxToRem(16) },

    extend: {
      colors: {
        current: 'currentColor',

        dark: {
          100: '#f6f6f7',
          200: '#dcddde',
          300: '#b9bbbe',
          400: '#72767d',
          500: '#4f545c',
          600: '#36393f',
          700: '#202225',
          800: '#18191c',
          900: '#040405',
        },

        light: {
          100: '#f8f9f9',
          200: '#e3e5e8',
          300: '#c7ccd1',
          400: '#9099a4',
          500: '#747f8d',
          600: '#4f5660',
          700: '#2e3338',
          800: '#222629',
          900: '#060607',
        },
      },
      minWidth: {
        max: 'max-content',
        min: 'min-content',
      }
    },
  },

  variants: {
    backgroundColor: ['hover', 'focus'],
    borderColor: ['hover', 'focus', 'hocus'],
    outline: ['focus'],
    boxShadow: ['hover', 'focus', 'active'],
    textColor: ['hover', 'focus'],
    fontSmoothing: ['hover', 'focus'],
    fontStyle: ['hover', 'focus'],
    fontWeight: ['hover', 'focus'],
    textDecoration: ['hover', 'focus'],
    textTransform: ['hover', 'focus'],
  },

  corePlugins: {
    container: false,
  },

  plugins: [
    require('tailwindcss-interaction-variants')(),
    require('@tailwindcss/custom-forms'),

    require('tailwindcss-alpha')(),
    require('tailwindcss-flexbox-order')(),
    require('tailwindcss-multi-column')(),
  ],
}

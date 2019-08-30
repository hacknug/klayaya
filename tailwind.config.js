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
      },
      minWidth: {
        max: 'max-content',
        min: 'min-content',
      }
    },
  },

  variants: {
    // appearance: [],
    // backgroundAttachment: [],
    backgroundColor: ['hover', 'focus'],
    // backgroundPosition: [],
    // backgroundRepeat: [],
    // backgroundSize: [],
    // borderCollapse: [],
    borderColor: ['hover', 'focus', 'hocus'],
    // borderRadius: [],
    // borderStyle: [],
    // borderWidth: [],
    // cursor: [],
    // display: [],
    // flexDirection: [],
    // flexWrap: [],
    // alignItems: [],
    // alignSelf: [],
    // justifyContent: [],
    // alignContent: [],
    // flex: [],
    // flexGrow: [],
    // flexShrink: [],
    // float: [],
    // fontFamily: [],
    // fontSize: [],
    fontWeight: ['hover', 'focus'],
    // height: [],
    // lineHeight: [],
    // listStylePosition: [],
    // listStyleType: [],
    // margin: [],
    // maxHeight: [],
    // maxWidth: [],
    // minHeight: [],
    // minWidth: [],
    // negativeMargin: [],
    // objectFit: [],
    // objectPosition: [],
    // opacity: [],
    outline: ['focus'],
    // overflow: [],
    // padding: [],
    // pointerEvents: [],
    // position: [],
    // inset: [],
    // resize: [],
    boxShadow: ['hover', 'focus', 'active'],
    // fill: [],
    // stroke: [],
    // tableLayout: [],
    // textAlign: [],
    textColor: ['hover', 'focus'],
    fontStyle: ['hover', 'focus'],
    fontSmoothing: ['hover', 'focus'],
    textDecoration: ['hover', 'focus'],
    textTransform: ['hover', 'focus'],
    // letterSpacing: [],
    // userSelect: [],
    // verticalAlign: [],
    // visibility: [],
    // whitespace: [],
    // wordBreak: [],
    // width: [],
    // zIndex: [],
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

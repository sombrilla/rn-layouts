import {hexWithAlphaComponent} from '../utils/colorUtils';

/**
 *  Stores the default colors
 *  Do not use color names or rgba, only hex
 */
const hexTransparent = '#00000000';
const hexWhite = '#FFFFFF';
const hexBlack = '#000000';
const hexDarkBlue = '#003EA5';
const hexLightBlue = '#0066FF';
const hexDarkGrey = '#9B9B9B';
const hexMidGrey = '#C4C4C4';
const hexLightGrey = '#D8D8D8';
const hexRed = '#A94442';
const hexBlueGrey = '#666F80';

export default {
  transparent: hexTransparent,
  white: hexWhite,
  black: hexBlack,
  darkBlue: hexDarkBlue,
  lightBlue: hexLightBlue,
  darkGrey: hexDarkGrey,
  midGrey: hexMidGrey,
  lightGrey: hexLightGrey,
  blueGrey: hexBlueGrey,
  red: hexRed,
  // Mainly used for dividers and background accents
  greyBackground: hexWithAlphaComponent(hexMidGrey, 0.15),
  greyBorder: hexWithAlphaComponent(hexMidGrey, 0.3),
  whiteBorder: hexWithAlphaComponent(hexWhite, 0.2),
  // Mainly used for (gradient)overlays and shadows
  whiteOverlay: hexWithAlphaComponent(hexWhite, 0.3),
  blackHalf: hexWithAlphaComponent(hexBlack, 0.5),
  blackOverlay: hexWithAlphaComponent(hexBlack, 0.3),
  blackDetail: hexWithAlphaComponent(hexBlack, 0.1),
};

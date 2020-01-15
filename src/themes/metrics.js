/**
 *  Stores the default metrics
 */
import {Dimensions, StatusBar} from 'react-native';
import {isiOS, isiPhoneX} from '../utils/platformUtils';

const screen = Dimensions.get('window');
const swatch = 30;
const swatchList = 63;
const HORIZONTAL_PAGE_PADDING_PERCENTAGE = 6;
const HORIZONTAL_SIZE_PERCENTAGE = 13;
const HORIZONTAL_PADDING_PERCENTAGE = 2;
const getHorizontalValue = percentage => Math.round(screen.width * (percentage / 100));
const horizontal = {
  /*
    HORIZONTAL SPACINGS
    ========
    [x|     | |     | |     | |     | |     |x]
    PagePadding: Content on a page start, if it's not full width, with a horizontal page padding
    [ |  x  | |  x  | |  x  | |  x  | |  x  | ]
    Size: The width of small elements, like icons, are related to this size
    [ |     |x|     |x|     |x|     |x|     | ]
    Padding: The space between elements, like a label next to an icon
    [ |  x  |x|     | |     | |     | |     | ]
    Spacing: Size and padding together, for positioning like Vertical spacing
  */
  pagePadding: getHorizontalValue(HORIZONTAL_PAGE_PADDING_PERCENTAGE),
  size: getHorizontalValue(HORIZONTAL_SIZE_PERCENTAGE),
  padding: getHorizontalValue(HORIZONTAL_PADDING_PERCENTAGE),
  spacing: getHorizontalValue(HORIZONTAL_SIZE_PERCENTAGE + HORIZONTAL_PADDING_PERCENTAGE),
};

const VERTICAL_STEP = 12;
const getVerticalValue = number => number * VERTICAL_STEP;
const getStatusBarHeight = () => {
  if (isiOS) {
    return isiPhoneX ? 44 : 20;
  }
  return StatusBar.currentHeight;
};

const getTabBarHeight = () => (isiPhoneX ? 98 + 24 : 98);

const vertical = {
  navigationBar: 70,
  statusBar: getStatusBarHeight(),
  tabBar: getTabBarHeight(),
  /*
    VERTICAL SPACINGS
    ========
    multiples of 12 from S onwards, smaller than S is divided by two
    xxs:  3
    xs:   6
    s:   12
    m:   24
    l:   36
    xl:  48
    xxl: 60
  */
  spacing: {
    xxs: getVerticalValue(0.25),
    xs: getVerticalValue(0.5),
    s: getVerticalValue(1),
    m: getVerticalValue(2),
    l: getVerticalValue(3),
    xl: getVerticalValue(4),
    xxl: getVerticalValue(5),
  },
};

const border = {
  thin: 1,
  thick: 2,
  extraThick: 4,
};

const icon = {
  xxs: 12,
  xs: 16,
  s: 18,
  m: 20,
  l: 22,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export default {
  screen,
  vertical,
  horizontal,
  border,
  icon,
  swatch,
  swatchList,
};

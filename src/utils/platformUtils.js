/* eslint-disable import/prefer-default-export */
import {Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const majorVersionIOS = parseInt(Platform.Version, 10);

/**
 * Used to check if the dimension are the same as iphone X.
 */
const iPhoneXMeasurements = {
  iPhoneX: {
    width: 375,
    height: 812,
  },
  iPhoneXSMax: {
    width: 414,
    height: 896,
  },
};
const iPhoneXMeasurementCheck = () => {
  const matchingMeasurement = Object.values(iPhoneXMeasurements).find(
    measurement => measurement.width === width && measurement.height === height,
  );
  return matchingMeasurement !== undefined;
};

export const isiOS = Platform.OS === 'ios';
export const isiPhoneX = isiOS && !Platform.isPad && iPhoneXMeasurementCheck();
export const scrollViewContentInsets =
  majorVersionIOS < 11
    ? {top: -20, left: 0, bottom: 0, right: 0}
    : {top: 0, left: 0, bottom: 0, right: 0};

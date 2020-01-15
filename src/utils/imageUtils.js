import {Image} from 'react-native';

/* eslint-disable import/prefer-default-export */
export const loadImageSize = source =>
  new Promise((resolve, reject) => {
    // number indicates import X or require(X) was used (i.e. local file)
    if (typeof source === 'number') {
      const {width, height} = Image.resolveAssetSource(source);
      resolve({width, height});
    } else {
      // else it's a string with the location of the image (i.e. file uri)
      Image.getSize(
        source,
        (width, height) => {
          resolve({width, height});
        },
        reject,
      );
    }
  });

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const IconSet = MaterialCommunityIcons;

/* eslint-disable import/prefer-default-export */
export const generateImages = icons => {
  const actions = [];

  icons.map(icon => actions.push(IconSet.getImageSource(icon.name, icon.size, icon.color)));

  return new Promise((resolve, reject) => {
    Promise.all(actions)
      .then(results => {
        const generatedImages = {};
        results.forEach((result, index) => {
          generatedImages[icons[index].name] = result;
        });

        resolve(generatedImages);
      })
      .catch(error => {
        reject(error);
      });
  });
};

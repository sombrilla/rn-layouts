import {StyleSheet} from 'react-native';
import {colors, shadows} from '../../themes';

export default StyleSheet.create({
  container: {},
  title: {
    fontSize: 30,
    color: colors.white,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    paddingTop: 4,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: colors.white,
    ...shadows.globalShadow,
    zIndex: 999,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

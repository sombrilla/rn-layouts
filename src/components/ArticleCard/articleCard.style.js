import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingVertical: 20,
  },
  title: {
    color: colors.white,
    fontSize: 25,
    marginBottom: 5,
  },
  description: {
    color: colors.white,
  },
});

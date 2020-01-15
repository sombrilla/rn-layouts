import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: metrics.horizontal.pagePadding / 2,
    paddingVertical: 15,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: colors.white,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
